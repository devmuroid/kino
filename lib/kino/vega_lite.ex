defmodule Kino.VegaLite do
  @moduledoc """
  A widget wrapping [VegaLite](https://hexdocs.pm/vega_lite) graphic.

  This widget allow for rendering regular VegaLite graphic
  and then streaming new data points to update the graphic.

  ## Examples

      vl_widget =
        Vl.new(width: 400, height: 400)
        |> Vl.mark(:line)
        |> Vl.encode_field(:x, "x", type: :quantitative)
        |> Vl.encode_field(:y, "y", type: :quantitative)
        |> Kino.VegaLite.start()
        |> Kino.render()

      for i <- 1..300 do
        point = %{x: i / 10, y: :math.sin(i / 10)}
        Kino.VegaLite.push(vl_widget, point)
        Process.sleep(25)
      end
  """

  use GenServer, restart: :temporary

  defstruct [:pid]

  @type t :: %__MODULE__{pid: pid()}

  @typedoc false
  @type state :: %{
          vl: VegaLite.t(),
          window: non_neg_integer(),
          datasets: %{binary() => list()},
          pids: list(pid())
        }

  @doc """
  Starts a widget process with the given VegaLite definition.
  """
  @spec start(VegaLite.t()) :: Kino.VegaLite.t()
  def start(vl) when is_struct(vl, VegaLite) do
    opts = [vl: vl]

    {:ok, pid} = DynamicSupervisor.start_child(Kino.WidgetSupervisor, {__MODULE__, opts})

    %__MODULE__{pid: pid}
  end

  @doc false
  def start_link(opts) do
    GenServer.start_link(__MODULE__, opts)
  end

  @doc """
  Appends a single data point to the graphic dataset.

  ## Options

    * `:window` - the maximum number of data points to keep.
      This option is useful when you are appending new
      data points to the plot over a long period of time.

    * `dataset` - name of the targetted dataset from
      the VegaLite specification. Defaults to the default
      anonymous dataset.
  """
  @spec push(Kino.Widget.t(), map(), keyword()) :: :ok
  def push(widget, data_point, opts \\ []) do
    dataset = opts[:dataset]
    window = opts[:window]
    GenServer.cast(widget.pid, {:push, dataset, [data_point], window})
  end

  @doc """
  Appends a number of data points to the graphic dataset.

  See `push/3` for more details.
  """
  @spec push_many(Kino.Widget.t(), list(map()), keyword()) :: :ok
  def push_many(widget, data, opts \\ []) do
    dataset = opts[:dataset]
    window = opts[:window]
    GenServer.cast(widget.pid, {:push, dataset, data, window})
  end

  @doc """
  Removes all data points from the graphic dataset.

  ## Options

    * `dataset` - name of the targetted dataset from
      the VegaLite specification. Defaults to the default
      anonymous dataset.
  """
  @spec clear(Kino.Widget.t(), keyword()) :: :ok
  def clear(widget, opts \\ []) do
    dataset = opts[:dataset]
    GenServer.cast(widget.pid, {:clear, dataset})
  end

  @impl true
  def init(opts) do
    vl = Keyword.fetch!(opts, :vl)

    {:ok, %{vl: vl, datasets: %{}, pids: []}}
  end

  @impl true
  def handle_cast({:push, dataset, data, window}, state) do
    for pid <- state.pids do
      send(pid, {:push, %{data: data, dataset: dataset, window: window}})
    end

    state =
      update_in(state.datasets[dataset], fn current_data ->
        current_data = current_data || []

        if window do
          Enum.take(current_data ++ data, -window)
        else
          current_data ++ data
        end
      end)

    {:noreply, state}
  end

  def handle_cast({:clear, dataset}, state) do
    for pid <- state.pids do
      send(pid, {:push, %{data: [], dataset: dataset, window: 0}})
    end

    {_, state} = pop_in(state.datasets[dataset])

    {:noreply, state}
  end

  @compile {:no_warn_undefined, {VegaLite, :to_spec, 1}}

  @impl true
  def handle_info({:connect, pid}, state) do
    Process.monitor(pid)

    send(pid, {:connect_reply, %{spec: VegaLite.to_spec(state.vl)}})

    for {dataset, data} <- state.datasets do
      send(pid, {:push, %{data: data, dataset: dataset, window: nil}})
    end

    {:noreply, %{state | pids: [pid | state.pids]}}
  end

  def handle_info({:DOWN, _, :process, pid, _}, state) do
    {:noreply, %{state | pids: List.delete(state.pids, pid)}}
  end
end