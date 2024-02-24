import{l as c,k as g,m as v,i as l,n as I,_ as O,j as R,p as y}from"./createSvgIcon-677a302a.js";import{r as n,j as a}from"./index-d3624f09.js";import{c as C,T as m}from"./convertTimelinePositionToClass-653fa493.js";import{t as M}from"./timelineContentClasses-e9deea93.js";import{b as j}from"./constants-00fcb92c.js";const A=c("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),$=A;function P(e){return g("MuiTimelineItem",e)}const E=c("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]),V=E,U=["position","className"],_=e=>{const{position:t,classes:i,hasOppositeContent:o}=e,r={root:["root",C(t),!o&&"missingOppositeContent"]};return y(r,P,i)},b=v("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[C(i.position)]]}})(({ownerState:e})=>l({listStyle:"none",display:"flex",position:"relative",minHeight:70},e.position==="left"&&{flexDirection:"row-reverse"},(e.position==="alternate"||e.position==="alternate-reverse")&&{[`&:nth-of-type(${e.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${M.root}`]:{textAlign:"right"},[`& .${$.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})),L=n.forwardRef(function(t,i){const o=I({props:t,name:"MuiTimelineItem"}),{position:r,className:f}=o,u=O(o,U),{position:x}=n.useContext(m);let p=!1;n.Children.forEach(o.children,T=>{j(T,["TimelineOppositeContent"])&&(p=!0)});const s=l({},o,{position:r||x||"right",hasOppositeContent:p}),d=_(s),h=n.useMemo(()=>({position:s.position}),[s.position]);return a.jsx(m.Provider,{value:h,children:a.jsx(b,l({className:R(d.root,f),ownerState:s,ref:i},u))})}),W=L;export{W as default,P as getTimelineItemUtilityClass,V as timelineItemClasses};