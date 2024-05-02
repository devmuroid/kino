import{e as ie,g as oe,h as ue}from"./chunk-2HCNYJTW.js";var $=ie(oe(),1);var fe=ue("div")({name:"NumberOverlayEditorStyle",class:"gdg-n15fjm3e",propsAsIs:!1});var w=ie(oe());function me(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t}var H;(function(e){e.event="event",e.props="prop"})(H||(H={}));function M(){}function X(e){return!!(e||"").match(/\d/)}function Z(e){return e==null}function ge(e){return typeof e=="number"&&isNaN(e)}function he(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Re(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Ae(e,r,t){var n=Re(t),a=e.search(/[1-9]/);return a=a===-1?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+r)}function Be(e){var r=(0,w.useRef)(e);r.current=e;var t=(0,w.useRef)(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return r.current.apply(r,n)});return t.current}function ae(e,r){r===void 0&&(r=!0);var t=e[0]==="-",n=t&&r;e=e.replace("-","");var a=e.split("."),i=a[0],l=a[1]||"";return{beforeDecimal:i,afterDecimal:l,hasNegation:t,addNegation:n}}function Oe(e){if(!e)return e;var r=e[0]==="-";r&&(e=e.substring(1,e.length));var t=e.split("."),n=t[0].replace(/^0+/,"")||"0",a=t[1]||"";return(r?"-":"")+n+(a?"."+a:"")}function ye(e,r,t){for(var n="",a=t?"0":"",i=0;i<=r-1;i++)n+=e[i]||a;return n}function le(e,r){return Array(r+1).join(e)}function Se(e){var r=e+"",t=r[0]==="-"?"-":"";t&&(r=r.substring(1));var n=r.split(/[eE]/g),a=n[0],i=n[1];if(i=Number(i),!i)return t+a;a=a.replace(".","");var l=1+i,m=a.length;return l<0?a="0."+le("0",Math.abs(l))+a:l>=m?a=a+le("0",l-m):a=(a.substring(0,l)||"0")+"."+a.substring(l),t+a}function ve(e,r,t){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||t)&&r,a=ae(e),i=a.beforeDecimal,l=a.afterDecimal,m=a.hasNegation,y=parseFloat("0."+(l||"0")),S=l.length<=r?"0."+l:y.toFixed(r),g=S.split("."),d=i.split("").reverse().reduce(function(s,C,I){return s.length>I?(Number(s[0])+Number(C)).toString()+s.substring(1,s.length):C+s},g[0]),v=ye(g[1]||"",r,t),f=m?"-":"",p=n?".":"";return""+f+d+p+v}function U(e,r){if(e.value=e.value,e!==null){if(e.createTextRange){var t=e.createTextRange();return t.move("character",r),t.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(r,r),!0):(e.focus(),!1)}}function Te(e,r){for(var t=0,n=0,a=e.length,i=r.length;e[t]===r[t]&&t<a;)t++;for(;e[a-1-n]===r[i-1-n]&&i-n>t&&a-n>t;)n++;return{from:{start:t,end:a-n},to:{start:t,end:i-n}}}function ke(e,r,t){return Math.min(Math.max(e,r),t)}function ce(e){return Math.max(e.selectionStart,e.selectionEnd)}function _e(){return typeof navigator!="undefined"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Pe(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function Me(e,r,t,n,a,i){var l=a.findIndex(function(R){return R}),m=e.slice(0,l);!r&&!t.startsWith(m)&&(t=m+t,n=n+m.length);for(var y=t.length,S=e.length,g={},d=new Array(y),v=0;v<y;v++){d[v]=-1;for(var f=0,p=S;f<p;f++)if(t[v]===e[f]&&g[f]!==!0){d[v]=f,g[f]=!0;break}}for(var s=n;s<y&&(d[s]===-1||!i(t[s]));)s++;var C=s===y||d[s]===-1?S:d[s];for(s=n-1;s>0&&d[s]===-1;)s--;var I=s===-1||d[s]===-1?0:d[s]+1;return I>C?C:n-I<C-n?I:C}function se(e,r,t,n){var a=e.length;if(r=ke(r,0,a),n==="left"){for(;r>=0&&!t[r];)r--;r===-1&&(r=t.indexOf(!0))}else{for(;r<=a&&!t[r];)r++;r>a&&(r=t.lastIndexOf(!0))}return r===-1&&(r=a),r}function je(e){for(var r=Array.from({length:e.length+1}).map(function(){return!0}),t=0,n=r.length;t<n;t++)r[t]=!!(X(e[t])||X(e[t-1]));return r}function pe(e,r,t,n,a,i){i===void 0&&(i=M);var l=(0,w.useRef)(),m=Be(function(v){var f,p;return Z(v)||ge(v)?(p="",f=""):typeof v=="number"||t?(p=typeof v=="number"?Se(v):v,f=n(p)):(p=a(v,void 0),f=v),{formattedValue:f,numAsString:p}}),y=(0,w.useState)(function(){return m(r)}),S=y[0],g=y[1],d=function(v,f){g({formattedValue:v.formattedValue,numAsString:v.value}),i(v,f)};return(0,w.useMemo)(function(){Z(e)?l.current=void 0:(l.current=m(e),g(l.current))},[e,m]),[S,d]}function Le(e){return e.replace(/[^0-9]/g,"")}function Ke(e){return e}function $e(e){var r=e.type;r===void 0&&(r="text");var t=e.displayType;t===void 0&&(t="input");var n=e.customInput,a=e.renderText,i=e.getInputRef,l=e.format;l===void 0&&(l=Ke);var m=e.removeFormatting;m===void 0&&(m=Le);var y=e.defaultValue,S=e.valueIsNumericString,g=e.onValueChange,d=e.isAllowed,v=e.onChange;v===void 0&&(v=M);var f=e.onKeyDown;f===void 0&&(f=M);var p=e.onMouseUp;p===void 0&&(p=M);var s=e.onFocus;s===void 0&&(s=M);var C=e.onBlur;C===void 0&&(C=M);var I=e.value,R=e.getCaretBoundary;R===void 0&&(R=je);var O=e.isValidInputCharacter;O===void 0&&(O=X);var T=me(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),_=pe(I,y,!!S,l,m,g),j=_[0],E=j.formattedValue,L=j.numAsString,q=_[1],P=(0,w.useRef)(),ee=function(o,u){P.current=o.formattedValue,q(o,u)};(0,w.useEffect)(function(){var o=l(L);if(P.current===void 0||o!==P.current){var u=b.current;W({formattedValue:o,numAsString:L,input:u,setCaretPosition:!0,source:H.props,event:void 0})}});var z=(0,w.useState)(!1),re=z[0],h=z[1],b=(0,w.useRef)(null),A=(0,w.useRef)({setCaretTimeout:null,focusTimeout:null});(0,w.useEffect)(function(){return h(!0),function(){clearTimeout(A.current.setCaretTimeout),clearTimeout(A.current.focusTimeout)}},[]);var k=l,J=function(o,u){var c=parseFloat(u);return{formattedValue:o,value:u,floatValue:isNaN(c)?void 0:c}},B=function(o,u,c){U(o,u),A.current.setCaretTimeout=setTimeout(function(){o.value===c&&U(o,u)},0)},K=function(o,u,c){return se(o,u,R(o),c)},Q=function(o,u,c){var D=R(u),N=Me(u,E,o,c,D,O);return N=se(u,N,D),N},W=function(o){var u=o.formattedValue;u===void 0&&(u="");var c=o.input,D=o.setCaretPosition;D===void 0&&(D=!0);var N=o.source,x=o.event,F=o.numAsString,V=o.caretPos;if(c){if(V===void 0&&D){var G=o.inputValue||c.value,te=ce(c);c.value=u,V=Q(G,u,te)}c.value=u,D&&V!==void 0&&B(c,V,u)}u!==E&&ee(J(u,F),{event:x,source:N})},we=function(o,u,c){var D=Te(E,o),N=Object.assign(Object.assign({},D),{lastValue:E}),x=m(o,N),F=k(x);if(d&&!d(J(F,x))){var V=u.target,G=ce(V),te=Q(o,E,G);return B(V,te,E),!1}return W({formattedValue:F,numAsString:x,inputValue:o,event:u,source:c,setCaretPosition:!0,input:u.target}),!0},De=function(o){var u=o.target,c=u.value,D=we(c,o,H.event);D&&v(o)},Ne=function(o){var u=o.target,c=o.key,D=u.selectionStart,N=u.selectionEnd,x=u.value;x===void 0&&(x="");var F;if(c==="ArrowLeft"||c==="Backspace"?F=Math.max(D-1,0):c==="ArrowRight"?F=Math.min(D+1,x.length):c==="Delete"&&(F=D),F===void 0||D!==N){f(o);return}var V=F;if(c==="ArrowLeft"||c==="ArrowRight"){var G=c==="ArrowLeft"?"left":"right";V=K(x,F,G)}else c==="Delete"&&!O(x[F])?V=K(x,F,"right"):c==="Backspace"&&!O(x[F])&&(V=K(x,F,"left"));V!==F&&B(u,V,x),o.isUnitTestRun&&B(u,V,x),f(o)},Ce=function(o){var u=o.target,c=u.selectionStart,D=u.selectionEnd,N=u.value;if(N===void 0&&(N=""),c===D){var x=K(N,c);x!==c&&B(u,x,N)}p(o)},Fe=function(o){o.persist();var u=o.target;b.current=u,A.current.focusTimeout=setTimeout(function(){var c=u.selectionStart,D=u.selectionEnd,N=u.value;N===void 0&&(N="");var x=K(N,c);x!==c&&!(c===0&&D===N.length)&&B(u,x,N),s(o)},0)},Ie=function(o){b.current=null,clearTimeout(A.current.focusTimeout),clearTimeout(A.current.setCaretTimeout),C(o)},Ee=re&&_e()?"numeric":void 0,ne=Object.assign({inputMode:Ee},T,{type:r,value:E,onChange:De,onKeyDown:Ne,onMouseUp:Ce,onFocus:Fe,onBlur:Ie});if(t==="text")return a?w.default.createElement(w.default.Fragment,null,a(E,T)||null):w.default.createElement("span",Object.assign({},T,{ref:i}),E);if(n){var Ve=n;return w.default.createElement(Ve,Object.assign({},ne,{ref:i}))}return w.default.createElement("input",Object.assign({},ne,{ref:i}))}function de(e,r){var t=r.decimalScale,n=r.fixedDecimalScale,a=r.prefix;a===void 0&&(a="");var i=r.suffix;i===void 0&&(i="");var l=r.allowNegative;l===void 0&&(l=!0);var m=r.thousandsGroupStyle;if(m===void 0&&(m="thousand"),e===""||e==="-")return e;var y=Y(r),S=y.thousandSeparator,g=y.decimalSeparator,d=t!==0&&e.indexOf(".")!==-1||t&&n,v=ae(e,l),f=v.beforeDecimal,p=v.afterDecimal,s=v.addNegation;return t!==void 0&&(p=ye(p,t,!!n)),S&&(f=Ae(f,S,m)),a&&(f=a+f),i&&(p=p+i),s&&(f="-"+f),e=f+(d&&g||"")+p,e}function Y(e){var r=e.decimalSeparator;r===void 0&&(r=".");var t=e.thousandSeparator,n=e.allowedDecimalSeparators;return t===!0&&(t=","),n||(n=[r,"."]),{decimalSeparator:r,thousandSeparator:t,allowedDecimalSeparators:n}}function Ue(e,r){e===void 0&&(e="");var t=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=t.test(e),i=n.test(e);return e=e.replace(/-/g,""),a&&!i&&r&&(e="-"+e),e}function We(e,r){return new RegExp("(^-)|[0-9]|"+he(e),r?"g":void 0)}function Ge(e,r,t){r===void 0&&(r=Pe(e));var n=t.allowNegative;n===void 0&&(n=!0);var a=t.prefix;a===void 0&&(a="");var i=t.suffix;i===void 0&&(i="");var l=t.decimalScale,m=r.from,y=r.to,S=y.start,g=y.end,d=Y(t),v=d.allowedDecimalSeparators,f=d.decimalSeparator,p=e[g]===f;if(g-S===1&&v.indexOf(e[S])!==-1){var s=l===0?"":f;e=e.substring(0,S)+s+e.substring(S+1,e.length)}var C=!1;a.startsWith("-")?C=e.startsWith("--"):i.startsWith("-")&&e.length===i.length?C=!1:e[0]==="-"&&(C=!0),C&&(e=e.substring(1),S-=1,g-=1);var I=0;e.startsWith(a)?I+=a.length:S<a.length&&(I=S),e=e.substring(I),g-=I;var R=e.length,O=e.length-i.length;e.endsWith(i)?R=O:g>e.length-i.length&&(R=g),e=e.substring(0,R),e=Ue(C?"-"+e:e,n),e=(e.match(We(f,!0))||[]).join("");var T=e.indexOf(f);e=e.replace(new RegExp(he(f),"g"),function(q,P){return P===T?".":""});var _=ae(e,n),j=_.beforeDecimal,E=_.afterDecimal,L=_.addNegation;return y.end-y.start<m.end-m.start&&j===""&&p&&!parseFloat(E)&&(e=L?"-":""),e}function Ze(e,r){var t=r.prefix;t===void 0&&(t="");var n=r.suffix;n===void 0&&(n="");var a=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";a.fill(!1,0,t.length+(i?1:0));var l=e.length;return a.fill(!1,l-n.length+1,l+1),a}function He(e){var r=Y(e),t=r.thousandSeparator,n=r.decimalSeparator;if(t===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+t+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `)}function qe(e){var r=e.decimalSeparator;r===void 0&&(r=".");var t=e.allowedDecimalSeparators,n=e.thousandsGroupStyle,a=e.suffix,i=e.allowNegative,l=e.allowLeadingZeros,m=e.onKeyDown;m===void 0&&(m=M);var y=e.onBlur;y===void 0&&(y=M);var S=e.thousandSeparator,g=e.decimalScale,d=e.fixedDecimalScale,v=e.prefix;v===void 0&&(v="");var f=e.defaultValue,p=e.value,s=e.valueIsNumericString,C=e.onValueChange,I=me(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]);He(e);var R=function(h){return de(h,e)},O=function(h,b){return Ge(h,b,e)},T=s;Z(p)?Z(f)||(T=s!=null?s:typeof f=="number"):T=s!=null?s:typeof p=="number";var _=function(h){return Z(h)||ge(h)?h:(typeof h=="number"&&(h=Se(h)),T&&typeof g=="number"?ve(h,g,!!d):h)},j=pe(_(p),_(f),!!T,R,O,C),E=j[0],L=E.numAsString,q=E.formattedValue,P=j[1],ee=function(h){var b=h.target,A=h.key,k=b.selectionStart,J=b.selectionEnd,B=b.value;if(B===void 0&&(B=""),k!==J){m(h);return}A==="Backspace"&&B[0]==="-"&&k===v.length+1&&U(b,1);var K=Y(e),Q=K.decimalSeparator;A==="Backspace"&&B[k-1]===Q&&g&&d&&(U(b,k-1),h.preventDefault());var W=S===!0?",":S;A==="Backspace"&&B[k-1]===W&&U(b,k-1),A==="Delete"&&B[k]===W&&U(b,k+1),m(h)},z=function(h){var b=L;if(b.match(/\d/g)||(b=""),l||(b=Oe(b)),d&&g&&(b=ve(b,g,d)),b!==L){var A=de(b,e);P({formattedValue:A,value:b,floatValue:parseFloat(b)},{event:h,source:H.event})}y(h)},re=function(h){return h===r?!0:X(h)};return Object.assign(Object.assign({},I),{value:q,valueIsNumericString:!1,isValidInputCharacter:re,onValueChange:P,format:R,removeFormatting:O,getCaretBoundary:function(h){return Ze(h,e)},onKeyDown:ee,onBlur:z})}function be(e){var r=qe(e);return w.default.createElement($e,Object.assign({},r))}function xe(){var t,n,a;let r=(a=(n=(t=Intl.NumberFormat())==null?void 0:t.formatToParts(1.1))==null?void 0:n.find(i=>i.type==="decimal"))==null?void 0:a.value;return r!=null?r:"."}function ze(){return xe()==="."?",":"."}var Je=e=>{let{value:r,onChange:t,disabled:n,highlight:a,validatedSelection:i,fixedDecimals:l,allowNegative:m,thousandSeparator:y,decimalSeparator:S}=e,g=$.useRef();return $.useLayoutEffect(()=>{var d;if(i!==void 0){let v=typeof i=="number"?[i,null]:i;(d=g.current)==null||d.setSelectionRange(v[0],v[1])}},[i]),$.createElement(fe,null,$.createElement(be,{autoFocus:!0,getInputRef:g,className:"gdg-input",onFocus:d=>d.target.setSelectionRange(a?0:d.target.value.length,d.target.value.length),disabled:n===!0,decimalScale:l,allowNegative:m,thousandSeparator:y!=null?y:ze(),decimalSeparator:S!=null?S:xe(),value:Object.is(r,-0)?"-":r!=null?r:"",onValueChange:t}))},tr=Je;export{tr as default};