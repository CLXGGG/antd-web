"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[15431],{415431:function(Rt,J,d){d.d(J,{Z:function(){return Nt}});var K=d(238416),a=d.n(K),Q=d(627424),T=d.n(Q),Y=d(242122),c=d.n(Y),q=d(670215),E=d.n(q),p=d(667294),k=d(294184),P=d.n(k),G=d(325669),_=d(73287),tt=d(947170),et=d(156951),nt={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},ot=nt,at=p.createContext({}),X=at,lt=d(45598),ct=["span"],rt=function(t){return(0,lt.default)(t).map(function(e){return c()(c()({},e==null?void 0:e.props),{},{key:e.key})})};function it(s,t,e){var o=p.useMemo(function(){return t||rt(e)},[t,e]),n=p.useMemo(function(){return o.map(function(r){var l=r.span,m=E()(r,ct);return c()(c()({},m),{},{span:typeof l=="number"?l:(0,G.m9)(s,l)})})},[o,s]);return n}function Z(s,t,e){var o=s,n=!1;return(e===void 0||e>t)&&(o=c()(c()({},s),{},{span:t}),n=e!==void 0),[o,n]}function st(s,t){var e=[],o=[],n=t,r=!1;return s.filter(function(l){return l}).forEach(function(l,m){var b=l==null?void 0:l.span,x=b||1;if(m===s.length-1){var y=Z(l,n,b),u=T()(y,2),v=u[0],S=u[1];r=r||S,o.push(v),e.push(o);return}if(x<n)n-=x,o.push(l);else{var g=Z(l,n,x),N=T()(g,2),M=N[0],j=N[1];r=r||j,o.push(M),e.push(o),n=t,o=[]}}),[e,r]}var dt=function(t,e){var o=(0,p.useMemo)(function(){return st(e,t)},[e,t]),n=T()(o,2),r=n[0],l=n[1];if(!1)var m;return r},mt=dt,vt=function(t){var e=t.children;return e},ut=vt,i=d(785893);function R(s){return s!=null}var ft=function(t){var e=t.itemPrefixCls,o=t.component,n=t.span,r=t.className,l=t.style,m=t.labelStyle,b=t.contentStyle,x=t.bordered,y=t.label,u=t.content,v=t.colon,S=o;if(x){var g;return(0,i.jsxs)(S,{className:P()((g={},a()(g,"".concat(e,"-item-label"),R(y)),a()(g,"".concat(e,"-item-content"),R(u)),g),r),style:l,colSpan:n,children:[R(y)&&(0,i.jsx)("span",{style:m,children:y}),R(u)&&(0,i.jsx)("span",{style:b,children:u})]})}return(0,i.jsx)(S,{className:P()("".concat(e,"-item"),r),style:l,colSpan:n,children:(0,i.jsxs)("div",{className:"".concat(e,"-item-container"),children:[(y||y===0)&&(0,i.jsx)("span",{className:P()("".concat(e,"-item-label"),a()({},"".concat(e,"-item-no-colon"),!v)),style:m,children:y}),(u||u===0)&&(0,i.jsx)("span",{className:P()("".concat(e,"-item-content")),style:b,children:u})]})})},W=ft;function A(s,t,e){var o=t.colon,n=t.prefixCls,r=t.bordered,l=e.component,m=e.type,b=e.showLabel,x=e.showContent,y=e.labelStyle,u=e.contentStyle;return s.map(function(v,S){var g=v.label,N=v.children,M=v.prefixCls,j=M===void 0?n:M,w=v.className,L=v.style,B=v.labelStyle,I=v.contentStyle,D=v.span,C=D===void 0?1:D,f=v.key;return typeof l=="string"?(0,i.jsx)(W,{className:w,style:L,labelStyle:c()(c()({},y),B),contentStyle:c()(c()({},u),I),span:C,colon:o,component:l,itemPrefixCls:j,bordered:r,label:b?g:null,content:x?N:null},"".concat(m,"-").concat(f||S)):[(0,i.jsx)(W,{className:w,style:c()(c()(c()({},y),L),B),span:1,colon:o,component:l[0],itemPrefixCls:j,bordered:r,label:g},"label-".concat(f||S)),(0,i.jsx)(W,{className:w,style:c()(c()(c()({},u),L),I),span:C*2-1,component:l[1],itemPrefixCls:j,bordered:r,content:N},"content-".concat(f||S))]})}var yt=function(t){var e=p.useContext(X),o=t.prefixCls,n=t.vertical,r=t.row,l=t.index,m=t.bordered;return n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("tr",{className:"".concat(o,"-row"),children:A(r,t,c()({component:"th",type:"label",showLabel:!0},e))},"label-".concat(l)),(0,i.jsx)("tr",{className:"".concat(o,"-row"),children:A(r,t,c()({component:"td",type:"content",showContent:!0},e))},"content-".concat(l))]}):(0,i.jsx)("tr",{className:"".concat(o,"-row"),children:A(r,t,c()({component:m?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},e))},l)},xt=yt,h=d(615624),F=d(548073),ht=d(286665),bt=d(986943),gt=function(t){var e,o,n=t.componentCls,r=t.labelBg;return a()({},"&".concat(n,"-bordered"),(o={},a()(o,"> ".concat(n,"-view"),a()({border:"".concat((0,h.bf)(t.lineWidth)," ").concat(t.lineType," ").concat(t.colorSplit),"> table":{tableLayout:"auto",borderCollapse:"collapse"}},"".concat(n,"-row"),(e={borderBottom:"".concat((0,h.bf)(t.lineWidth)," ").concat(t.lineType," ").concat(t.colorSplit),"&:last-child":{borderBottom:"none"}},a()(e,"> ".concat(n,"-item-label, > ").concat(n,"-item-content"),{padding:"".concat((0,h.bf)(t.padding)," ").concat((0,h.bf)(t.paddingLG)),borderInlineEnd:"".concat((0,h.bf)(t.lineWidth)," ").concat(t.lineType," ").concat(t.colorSplit),"&:last-child":{borderInlineEnd:"none"}}),a()(e,"> ".concat(n,"-item-label"),{color:t.colorTextSecondary,backgroundColor:r,"&::after":{display:"none"}}),e))),a()(o,"&".concat(n,"-middle"),a()({},"".concat(n,"-row"),a()({},"> ".concat(n,"-item-label, > ").concat(n,"-item-content"),{padding:"".concat((0,h.bf)(t.paddingSM)," ").concat((0,h.bf)(t.paddingLG))}))),a()(o,"&".concat(n,"-small"),a()({},"".concat(n,"-row"),a()({},"> ".concat(n,"-item-label, > ").concat(n,"-item-content"),{padding:"".concat((0,h.bf)(t.paddingXS)," ").concat((0,h.bf)(t.padding))}))),o))},St=function(t){var e,o,n=t.componentCls,r=t.extraColor,l=t.itemPaddingBottom,m=t.colonMarginRight,b=t.colonMarginLeft,x=t.titleMarginBottom;return a()({},n,c()(c()(c()({},(0,F.Wf)(t)),gt(t)),{},(o={},a()(o,"&-rtl",{direction:"rtl"}),a()(o,"".concat(n,"-header"),{display:"flex",alignItems:"center",marginBottom:x}),a()(o,"".concat(n,"-title"),c()(c()({},F.vS),{},{flex:"auto",color:t.titleColor,fontWeight:t.fontWeightStrong,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG})),a()(o,"".concat(n,"-extra"),{marginInlineStart:"auto",color:r,fontSize:t.fontSize}),a()(o,"".concat(n,"-view"),{width:"100%",borderRadius:t.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),a()(o,"".concat(n,"-row"),{"> th, > td":{paddingBottom:l},"&:last-child":{borderBottom:"none"}}),a()(o,"".concat(n,"-item-label"),a()({color:t.colorTextTertiary,fontWeight:"normal",fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:"".concat((0,h.bf)(b)," ").concat((0,h.bf)(m))}},"&".concat(n,"-item-no-colon::after"),{content:'""'})),a()(o,"".concat(n,"-item-no-label"),{"&::after":{margin:0,content:'""'}}),a()(o,"".concat(n,"-item-content"),{display:"table-cell",flex:1,color:t.contentColor,fontSize:t.fontSize,lineHeight:t.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),a()(o,"".concat(n,"-item"),{paddingBottom:0,verticalAlign:"top","&-container":(e={display:"flex"},a()(e,"".concat(n,"-item-label"),{display:"inline-flex",alignItems:"baseline"}),a()(e,"".concat(n,"-item-content"),{display:"inline-flex",alignItems:"baseline"}),e)}),a()(o,"&-middle",a()({},"".concat(n,"-row"),{"> th, > td":{paddingBottom:t.paddingSM}})),a()(o,"&-small",a()({},"".concat(n,"-row"),{"> th, > td":{paddingBottom:t.paddingXS}})),o)))},Ct=function(t){return{labelBg:t.colorFillAlter,titleColor:t.colorText,titleMarginBottom:t.fontSizeSM*t.lineHeightSM,itemPaddingBottom:t.padding,colonMarginRight:t.marginXS,colonMarginLeft:t.marginXXS/2,contentColor:t.colorText,extraColor:t.colorText}},pt=(0,ht.I$)("Descriptions",function(s){var t=(0,bt.TS)(s,{});return St(t)},Ct),jt=["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"],O=function(t){var e,o=t.prefixCls,n=t.title,r=t.extra,l=t.column,m=t.colon,b=m===void 0?!0:m,x=t.bordered,y=t.layout,u=t.children,v=t.className,S=t.rootClassName,g=t.style,N=t.size,M=t.labelStyle,j=t.contentStyle,w=t.items,L=E()(t,jt),B=p.useContext(_.E_),I=B.getPrefixCls,D=B.direction,C=B.descriptions,f=I("descriptions",o),H=(0,et.Z)(),Mt=p.useMemo(function(){var z;return typeof l=="number"?l:(z=(0,G.m9)(H,c()(c()({},ot),l)))!==null&&z!==void 0?z:3},[H,l]),Bt=it(H,w,u),$=(0,tt.Z)(N),Pt=mt(Mt,Bt),wt=pt(f),U=T()(wt,2),Lt=U[0],zt=U[1],Tt=p.useMemo(function(){return{labelStyle:M,contentStyle:j}},[M,j]);return Lt((0,i.jsx)(X.Provider,{value:Tt,children:(0,i.jsxs)("div",c()(c()({className:P()(f,C==null?void 0:C.className,(e={},a()(e,"".concat(f,"-").concat($),$&&$!=="default"),a()(e,"".concat(f,"-bordered"),!!x),a()(e,"".concat(f,"-rtl"),D==="rtl"),e),v,S,zt),style:c()(c()({},C==null?void 0:C.style),g)},L),{},{children:[(n||r)&&(0,i.jsxs)("div",{className:"".concat(f,"-header"),children:[n&&(0,i.jsx)("div",{className:"".concat(f,"-title"),children:n}),r&&(0,i.jsx)("div",{className:"".concat(f,"-extra"),children:r})]}),(0,i.jsx)("div",{className:"".concat(f,"-view"),children:(0,i.jsx)("table",{children:(0,i.jsx)("tbody",{children:Pt.map(function(z,V){return(0,i.jsx)(xt,{index:V,colon:b,prefixCls:f,vertical:y==="vertical",bordered:x,row:z},V)})})})})]}))}))};O.Item=ut;var Nt=O}}]);
