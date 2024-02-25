import{r as e,c as n,s as r,j as t}from"./index-1986924d.js";var i={},a={};Object.defineProperty(a,"t",{value:!0}),a.cssValue=a.parseLengthAndUnit=void 0;var o={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function u(e){if("number"==typeof e)return{value:e,unit:"px"};var n,r=(e.match(/^[0-9.]*/)||"").toString();n=r.includes(".")?parseFloat(r):parseInt(r,10);var t=(e.match(/[^0-9]*$/)||"").toString();return o[t]?{value:n,unit:t}:{value:n,unit:"px"}}a.parseLengthAndUnit=u,a.cssValue=function(e){var n=u(e);return"".concat(n.value).concat(n.unit)};var c={};Object.defineProperty(c,"t",{value:!0}),c.createAnimation=void 0;c.createAnimation=function(e,n,r){var t="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return t;var i=document.createElement("style");document.head.appendChild(i);var a=i.sheet,o="\n    @keyframes ".concat(t," {\n      ").concat(n,"\n    }\n  ");return a&&a.insertRule(o,0),t};var l=n&&n.i||function(){return l=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},l.apply(this,arguments)},s=n&&n.o||(Object.create?function(e,n,r,t){void 0===t&&(t=r);var i=Object.getOwnPropertyDescriptor(n,r);i&&!("get"in i?!n.t:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return n[r]}}),Object.defineProperty(e,t,i)}:function(e,n,r,t){void 0===t&&(t=r),e[t]=n[r]}),v=n&&n.u||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),f=n&&n.l||function(e){if(e&&e.t)return e;var n={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&s(n,e,r);return v(n,e),n},d=n&&n.v||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]])}return r};Object.defineProperty(i,"t",{value:!0});var p=f(e),m=a,b=(0,c.createAnimation)("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");var j=i.default=function(e){var n=e.loading,r=void 0===n||n,t=e.color,i=void 0===t?"#000000":t,a=e.speedMultiplier,o=void 0===a?1:a,u=e.cssOverride,c=void 0===u?{}:u,s=e.size,v=void 0===s?15:s,f=e.margin,j=void 0===f?2:f,y=d(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),O=l({display:"inherit"},c),h=function(e){return{backgroundColor:i,width:(0,m.cssValue)(v),height:(0,m.cssValue)(v),margin:(0,m.cssValue)(j),borderRadius:"100%",display:"inline-block",animation:"".concat(b," ").concat(.75/o,"s ").concat(.12*e/o,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return r?p.createElement("span",l({style:O},y),p.createElement("span",{style:h(1)}),p.createElement("span",{style:h(2)}),p.createElement("span",{style:h(3)})):null};const y=r.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`,O=r.div`
    display: flex; 
    flex-direction: column; 
    gap: 1rem; 
`,h=()=>t.jsx(y,{children:t.jsx(O,{children:t.jsx(j,{color:"#0f766e",margin:18,size:15,speedMultiplier:1})})});export{h as default};
