"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[13557],{813557:function(yn,W,e){e.r(W),e.d(W,{scopes:function(){return U}});var v=e(667294),i=e(605071),E=e(664095),r=e(883458),K=e(773036),U={"components-anchor-demo-basic":{React:v,Anchor:i.Z,Row:E.Z,Col:r.Z},"components-anchor-demo-horizontal":{React:v,Anchor:i.Z},"components-anchor-demo-static":{React:v,Anchor:i.Z},"components-anchor-demo-onclick":{React:v,Anchor:i.Z},"components-anchor-demo-customizehighlight":{React:v,Anchor:i.Z},"components-anchor-demo-targetoffset":{React:v,useEffect:v.useEffect,useState:v.useState,Anchor:i.Z,Row:E.Z,Col:r.Z},"components-anchor-demo-onchange":{React:v,Anchor:i.Z},"components-anchor-demo-replace":{React:v,Anchor:i.Z,Col:r.Z,Row:E.Z},"components-anchor-demo-legacy-anchor":{React:v,Anchor:i.Z},"components-anchor-demo-component-token":{React:v,Anchor:i.Z,Col:r.Z,ConfigProvider:K.ZP,Row:E.Z}}},605071:function(yn,W,e){e.d(W,{Z:function(){return Wn}});var v=e(242122),i=e.n(v),E=e(238416),r=e.n(E),K=e(600861),U=e.n(K),kn=e(627424),F=e.n(kn),l=e(667294),An=e(294184),T=e.n(An),G=e(656790),Ln=e(517423),Rn=e(982673),Pn=e(658192),En=e(252901),J=e(73287),Tn=l.createContext(void 0),an=Tn,y=e(785893),Bn=function(n){var t=n.href,a=n.title,c=n.prefixCls,f=n.children,C=n.className,p=n.target,h=n.replace,k=l.useContext(an),g=k||{},B=g.registerLink,Z=g.unregisterLink,N=g.scrollTo,D=g.onClick,j=g.activeLink,A=g.direction;l.useEffect(function(){return B==null||B(t),function(){Z==null||Z(t)}},[t]);var V=function(z){h&&(z.preventDefault(),window.location.replace(t)),D==null||D(z,{title:a,href:t}),N==null||N(t)};if(!1)var P;var X=l.useContext(J.E_),O=X.getPrefixCls,L=O("anchor",c),x=j===t,Y=T()("".concat(L,"-link"),C,r()({},"".concat(L,"-link-active"),x)),un=T()("".concat(L,"-link-title"),r()({},"".concat(L,"-link-title-active"),x));return(0,y.jsxs)("div",{className:Y,children:[(0,y.jsx)("a",{className:un,href:t,title:typeof a=="string"?a:"",target:p,onClick:V,children:a}),A!=="horizontal"?f:null]})},cn=Bn,ln=e(548073),In=e(141035),Zn=e(986943),Nn=function(n){var t,a,c=n.componentCls,f=n.holderOffsetBlock,C=n.motionDurationSlow,p=n.lineWidthBold,h=n.colorPrimary,k=n.lineType,g=n.colorSplit;return r()({},"".concat(c,"-wrapper"),(a={marginBlockStart:-f,paddingBlockStart:f},r()(a,c,i()(i()({},(0,ln.Wf)(n)),{},r()({position:"relative",paddingInlineStart:p},"".concat(c,"-link"),(t={paddingBlock:n.linkPaddingBlock,paddingInline:"".concat(n.linkPaddingInlineStart,"px 0"),"&-title":i()(i()({},ln.vS),{},{position:"relative",display:"block",marginBlockEnd:n.anchorTitleBlock,color:n.colorText,transition:"all ".concat(n.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},r()(t,"&-active > ".concat(c,"-link-title"),{color:n.colorPrimary}),r()(t,"".concat(c,"-link"),{paddingBlock:n.anchorPaddingBlockSecondary}),t)))),r()(a,"&:not(".concat(c,"-wrapper-horizontal)"),r()({},c,r()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat(p,"px ").concat(k," ").concat(g),content:'" "'}},"".concat(c,"-ink"),r()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(C," ease-in-out"),width:p,backgroundColor:h},"&".concat(c,"-ink-visible"),{display:"inline-block"})))),r()(a,"".concat(c,"-fixed ").concat(c,"-ink ").concat(c,"-ink"),{display:"none"}),a))},Dn=function(n){var t,a=n.componentCls,c=n.motionDurationSlow,f=n.lineWidthBold,C=n.colorPrimary;return r()({},"".concat(a,"-wrapper-horizontal"),r()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"1px ".concat(n.lineType," ").concat(n.colorSplit),content:'" "'}},a,(t={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},r()(t,"".concat(a,"-link:first-of-type"),{paddingInline:0}),r()(t,"".concat(a,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(c," ease-in-out, width ").concat(c," ease-in-out"),height:f,backgroundColor:C}),t)))},On=(0,In.Z)("Anchor",function(u){var n=u.fontSize,t=u.fontSizeLG,a=u.paddingXXS,c=(0,Zn.TS)(u,{holderOffsetBlock:a,anchorPaddingBlockSecondary:a/2,anchorTitleBlock:n/14*3,anchorBallSize:t/2});return[Nn(c),Dn(c)]},function(u){return{linkPaddingBlock:u.paddingXXS,linkPaddingInlineStart:u.padding}});function zn(){return window}function sn(u,n){if(!u.getClientRects().length)return 0;var t=u.getBoundingClientRect();return t.width||t.height?n===window?(n=u.ownerDocument.documentElement,t.top-n.clientTop):t.top-n.getBoundingClientRect().top:t.top}var dn=/#([\S ]+)$/,wn=function(n){var t,a,c=n.rootClassName,f=n.anchorPrefixCls,C=n.className,p=n.style,h=n.offsetTop,k=n.affix,g=k===void 0?!0:k,B=n.showInkInFixed,Z=B===void 0?!1:B,N=n.children,D=n.items,j=n.direction,A=j===void 0?"vertical":j,V=n.bounds,P=n.targetOffset,X=n.onClick,O=n.onChange,L=n.getContainer,x=n.getCurrentAnchor,Y=n.replace;if(!1)var un;var vn=l.useState([]),z=F()(vn,2),b=z[0],hn=z[1],jn=l.useState(null),gn=F()(jn,2),w=gn[0],Xn=gn[1],Q=l.useRef(w),mn=l.useRef(null),q=l.useRef(null),_=l.useRef(!1),nn=l.useContext(J.E_),bn=nn.direction,Hn=nn.getTargetContainer,I=nn.anchor,M=(t=L!=null?L:Hn)!==null&&t!==void 0?t:zn,tn=JSON.stringify(b),Kn=(0,G.zX)(function(o){b.includes(o)||hn(function(s){return[].concat(U()(s),[o])})}),Un=(0,G.zX)(function(o){b.includes(o)&&hn(function(s){return s.filter(function(d){return d!==o})})}),Fn=function(){var s,d=(s=mn.current)===null||s===void 0?void 0:s.querySelector(".".concat(f,"-link-title-active"));if(d&&q.current){var S=q.current.style,m=A==="horizontal";S.top=m?"":"".concat(d.offsetTop+d.clientHeight/2,"px"),S.height=m?"":"".concat(d.clientHeight,"px"),S.left=m?"".concat(d.offsetLeft,"px"):"",S.width=m?"".concat(d.clientWidth,"px"):"",m&&(0,Ln.Z)(d,{scrollMode:"if-needed",block:"nearest"})}},Gn=function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,m=[],rn=M();if(s.forEach(function(R){var $=dn.exec(R==null?void 0:R.toString());if($){var xn=document.getElementById($[1]);if(xn){var Sn=sn(xn,rn);Sn<d+S&&m.push({link:R,top:Sn})}}}),m.length){var H=m.reduce(function(R,$){return $.top>R.top?$:R});return H.link}return""},en=(0,G.zX)(function(o){if(Q.current!==o){var s=typeof x=="function"?x(o):o;Xn(s),Q.current=s,O==null||O(o)}}),on=l.useCallback(function(){if(!_.current){var o=Gn(b,P!==void 0?P:h||0,V);en(o)}},[tn,P,h]),Cn=l.useCallback(function(o){en(o);var s=dn.exec(o);if(s){var d=document.getElementById(s[1]);if(d){var S=M(),m=(0,Rn.Z)(S,!0),rn=sn(d,S),H=m+rn;H-=P!==void 0?P:h||0,_.current=!0,(0,Pn.Z)(H,{getContainer:M,callback:function(){_.current=!1}})}}},[P,h]),Jn=T()(c,"".concat(f,"-wrapper"),(a={},r()(a,"".concat(f,"-wrapper-horizontal"),A==="horizontal"),r()(a,"".concat(f,"-rtl"),bn==="rtl"),a),C,I==null?void 0:I.className),Vn=T()(f,r()({},"".concat(f,"-fixed"),!g&&!Z)),Yn=T()("".concat(f,"-ink"),r()({},"".concat(f,"-ink-visible"),w)),Qn=i()(i()({maxHeight:h?"calc(100vh - ".concat(h,"px)"):"100vh"},I==null?void 0:I.style),p),qn=function o(s){return Array.isArray(s)?s.map(function(d){return(0,l.createElement)(cn,i()(i()({replace:Y},d),{},{key:d.key}),A==="vertical"&&o(d.children))}):null},pn=(0,y.jsx)("div",{ref:mn,className:Jn,style:Qn,children:(0,y.jsxs)("div",{className:Vn,children:[(0,y.jsx)("span",{className:Yn,ref:q}),"items"in n?qn(D):N]})});l.useEffect(function(){var o=M();return on(),o==null||o.addEventListener("scroll",on),function(){o==null||o.removeEventListener("scroll",on)}},[tn]),l.useEffect(function(){typeof x=="function"&&en(x(Q.current||""))},[x]),l.useEffect(function(){Fn()},[A,x,tn,w]);var _n=l.useMemo(function(){return{registerLink:Kn,unregisterLink:Un,scrollTo:Cn,activeLink:w,onClick:X,direction:A}},[w,X,Cn,A]);return(0,y.jsx)(an.Provider,{value:_n,children:g?(0,y.jsx)(En.Z,{offsetTop:h,target:M,children:pn}):pn})},Mn=function(n){var t=n.prefixCls,a=n.rootClassName,c=l.useContext(J.E_),f=c.getPrefixCls,C=f("anchor",t),p=On(C),h=F()(p,2),k=h[0],g=h[1];return k((0,y.jsx)(wn,i()(i()({},n),{},{rootClassName:T()(g,a),anchorPrefixCls:C})))},$n=Mn,fn=$n;fn.Link=cn;var Wn=fn}}]);