"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[83811],{682582:function(T,i,n){n.d(i,{Z:function(){return Q}});var M=n(242122),o=n.n(M),l=n(627424),a=n.n(l),t=n(667294),c=n(294184),x=n.n(c),s=n(73287),f=n(215570),m=n(578898),d=n(890887),r=t.createContext({}),v=t.createContext({message:{},notification:{},modal:{}}),u=v,g=n(238416),z=n.n(g),F=n(286665),$=function(e){var A=e.componentCls,y=e.colorText,E=e.fontSize,O=e.lineHeight,p=e.fontFamily;return z()({},A,{color:y,fontSize:E,lineHeight:O,fontFamily:p})},V=function(){return{}},G=(0,F.I$)("App",$,V),P=n(785893),J=function(){return t.useContext(u)},N=function(e){var A=e.prefixCls,y=e.children,E=e.className,O=e.rootClassName,p=e.message,Z=e.notification,X=e.style,L=e.component,D=L===void 0?"div":L,Y=(0,t.useContext)(s.E_),w=Y.getPrefixCls,S=w("app",A),k=G(S),B=a()(k,2),b=B[0],q=B[1],_=x()(q,S,E,O),C=(0,t.useContext)(r),j=t.useMemo(function(){return{message:o()(o()({},C.message),p),notification:o()(o()({},C.notification),Z)}},[p,Z,C.message,C.notification]),nn=(0,f.Z)(j.message),I=a()(nn,2),K=I[0],tn=I[1],en=(0,d.Z)(j.notification),R=a()(en,2),U=R[0],on=R[1],an=(0,m.Z)(),W=a()(an,2),H=W[0],sn=W[1],rn=t.useMemo(function(){return{message:K,notification:U,modal:H}},[K,U,H]),ln=D===!1?t.Fragment:D,cn={className:_,style:X};return b((0,P.jsx)(u.Provider,{value:rn,children:(0,P.jsx)(r.Provider,{value:j,children:(0,P.jsxs)(ln,o()(o()({},D===!1?void 0:cn),{},{children:[sn,tn,on,y]}))})}))};N.useApp=J;var Q=N},407271:function(T,i,n){n.r(i);var M=n(667294),o=n(682582),l=n(945016),a=n(988872),t=n(785893),c=function(){var s=o.Z.useApp(),f=s.message,m=s.modal,d=s.notification,r=function(){f.success("Success!")},v=function(){m.warning({title:"This is a warning message",content:"some messages...some messages..."})},u=function(){d.info({message:"Notification topLeft",description:"Hello, Ant Design!!",placement:"topLeft"})};return(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(a.ZP,{type:"primary",onClick:r,children:"Open message"}),(0,t.jsx)(a.ZP,{type:"primary",onClick:v,children:"Open modal"}),(0,t.jsx)(a.ZP,{type:"primary",onClick:u,children:"Open notification"})]})};i.default=function(){return(0,t.jsx)(o.Z,{children:(0,t.jsx)(c,{})})}},826367:function(T,i,n){n.r(i);var M=n(667294),o=n(682582),l=n(945016),a=n(988872),t=n(785893),c=function(){var s=o.Z.useApp(),f=s.message,m=s.notification,d=function(){f.success("Success!")},r=function(){m.info({message:"Notification",description:"Hello, Ant Design!!"})};return(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(a.ZP,{type:"primary",onClick:d,children:"Message for only one"}),(0,t.jsx)(a.ZP,{type:"primary",onClick:r,children:"Notification for bottomLeft"})]})};i.default=function(){return(0,t.jsx)(o.Z,{message:{maxCount:1},notification:{placement:"bottomLeft"},children:(0,t.jsx)(c,{})})}}}]);