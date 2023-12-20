"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[72465],{472465:function(W,y,n){n.r(y),n.d(y,{scopes:function(){return L}});var T=n(667294),v=n(988872),S=n(883458),D=n(664095),P=n(429087),h=n(294047),g=n(75529),O=n(65429),p=n(677171),N=n(601912),I=n(217857),L={"statistic-demo-basic":{React:T,Button:v.ZP,Col:S.Z,Row:D.Z,Statistic:P.Z},"statistic-demo-unit":{React:T,LikeOutlined:O.Z,Col:S.Z,Row:D.Z,Statistic:P.Z},"statistic-demo-animated":{React:T,CountUp:I.ZP,Col:S.Z,Row:D.Z,Statistic:P.Z},"statistic-demo-card":{React:T,ArrowDownOutlined:p.Z,ArrowUpOutlined:N.Z,Card:h.Z,Col:S.Z,Row:D.Z,Statistic:P.Z},"statistic-demo-countdown":{React:T,Col:S.Z,Row:D.Z,Statistic:P.Z},"statistic-demo-component-token":{React:T,Button:v.ZP,Col:S.Z,ConfigProvider:g.ZP,Row:D.Z,Statistic:P.Z}}},429087:function(W,y,n){n.d(y,{Z:function(){return et}});var T=n(242122),v=n.n(T),S=n(667294),D=n(367830),P=n(106465),h=n(238416),g=n.n(h),O=n(627424),p=n.n(O),N=n(294184),I=n.n(N),L=n(73287),K=n(575054),C=n(785893),$=function(t){var e=t.value,i=t.formatter,o=t.precision,c=t.decimalSeparator,s=t.groupSeparator,E=s===void 0?"":s,a=t.prefixCls,d;if(typeof i=="function")d=i(e);else{var u=String(e),l=u.match(/^(-?)(\d*)(\.(\d+))?$/);if(!l||u==="-")d=u;else{var x=l[1],f=l[2]||"0",r=l[4]||"";f=f.replace(/\B(?=(\d{3})+(?!\d))/g,E),typeof o=="number"&&(r=r.padEnd(o,"0").slice(0,o>0?o:0)),r&&(r="".concat(c).concat(r)),d=[(0,C.jsxs)("span",{className:"".concat(a,"-content-value-int"),children:[x,f]},"int"),r&&(0,C.jsx)("span",{className:"".concat(a,"-content-value-decimal"),children:r},"decimal")]}}return(0,C.jsx)("span",{className:"".concat(a,"-content-value"),children:d})},H=$,X=n(548073),V=n(286665),Y=n(986943),G=function(t){var e,i,o=t.componentCls,c=t.marginXXS,s=t.padding,E=t.colorTextDescription,a=t.titleFontSize,d=t.colorTextHeading,u=t.contentFontSize,l=t.fontFamily;return g()({},"".concat(o),v()(v()({},(0,X.Wf)(t)),{},(i={},g()(i,"".concat(o,"-title"),{marginBottom:c,color:E,fontSize:a}),g()(i,"".concat(o,"-skeleton"),{paddingTop:s}),g()(i,"".concat(o,"-content"),(e={color:d,fontSize:u,fontFamily:l},g()(e,"".concat(o,"-content-value"),{display:"inline-block",direction:"ltr"}),g()(e,"".concat(o,"-content-prefix, ").concat(o,"-content-suffix"),{display:"inline-block"}),g()(e,"".concat(o,"-content-prefix"),{marginInlineEnd:c}),g()(e,"".concat(o,"-content-suffix"),{marginInlineStart:c}),e)),i)))},J=function(t){var e=t.fontSizeHeading3,i=t.fontSize;return{titleFontSize:i,contentFontSize:e}},Q=(0,V.I$)("Statistic",function(m){var t=(0,Y.TS)(m,{});return[G(t)]},J),w=function(t){var e=t.prefixCls,i=t.className,o=t.rootClassName,c=t.style,s=t.valueStyle,E=t.value,a=E===void 0?0:E,d=t.title,u=t.valueRender,l=t.prefix,x=t.suffix,f=t.loading,r=f===void 0?!1:f,Z=t.onMouseEnter,ot=t.onMouseLeave,j=t.decimalSeparator,it=j===void 0?".":j,B=t.groupSeparator,rt=B===void 0?",":B,U=S.useContext(L.E_),ct=U.getPrefixCls,st=U.direction,M=U.statistic,R=ct("statistic",e),lt=Q(R),z=p()(lt,2),vt=z[0],dt=z[1],F=(0,C.jsx)(H,v()(v()({decimalSeparator:it,groupSeparator:rt,prefixCls:R},t),{},{value:a})),ut=I()(R,g()({},"".concat(R,"-rtl"),st==="rtl"),M==null?void 0:M.className,i,o,dt);return vt((0,C.jsxs)("div",{className:ut,style:v()(v()({},M==null?void 0:M.style),c),onMouseEnter:Z,onMouseLeave:ot,children:[d&&(0,C.jsx)("div",{className:"".concat(R,"-title"),children:d}),(0,C.jsx)(K.Z,{paragraph:!1,loading:r,className:"".concat(R,"-skeleton"),children:(0,C.jsxs)("div",{style:s,className:"".concat(R,"-content"),children:[l&&(0,C.jsx)("span",{className:"".concat(R,"-content-prefix"),children:l}),u?u(F):F,x&&(0,C.jsx)("span",{className:"".concat(R,"-content-suffix"),children:x})]})})]}))},A=w,b=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function k(m,t){var e=m,i=/\[[^\]]*]/g,o=(t.match(i)||[]).map(function(a){return a.slice(1,-1)}),c=t.replace(i,"[]"),s=b.reduce(function(a,d){var u=p()(d,2),l=u[0],x=u[1];if(a.includes(l)){var f=Math.floor(e/x);return e-=f*x,a.replace(new RegExp("".concat(l,"+"),"g"),function(r){var Z=r.length;return f.toString().padStart(Z,"0")})}return a},c),E=0;return s.replace(i,function(){var a=o[E];return E+=1,a})}function q(m,t){var e=t.format,i=e===void 0?"":e,o=new Date(m).getTime(),c=Date.now(),s=Math.max(o-c,0);return k(s,i)}var _=1e3/30;function tt(m){return new Date(m).getTime()}var nt=function(t){var e=t.value,i=t.format,o=i===void 0?"HH:mm:ss":i,c=t.onChange,s=t.onFinish,E=(0,D.Z)(),a=S.useRef(null),d=function(){s==null||s(),a.current&&(clearInterval(a.current),a.current=null)},u=function(){var r=tt(e);r>=Date.now()&&(a.current=setInterval(function(){E(),c==null||c(r-Date.now()),r<Date.now()&&d()},_))};S.useEffect(function(){return u(),function(){a.current&&(clearInterval(a.current),a.current=null)}},[e]);var l=function(r,Z){return q(r,v()(v()({},Z),{},{format:o}))},x=function(r){return(0,P.Tm)(r,{title:void 0})};return(0,C.jsx)(A,v()(v()({},t),{},{valueRender:x,formatter:l}))},at=S.memo(nt);A.Countdown=at;var et=A}}]);
