"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[68582],{461229:function(T,t,e){e.r(t);var h=e(600861),d=e.n(h),s=e(627424),r=e.n(s),n=e(667294),l=e(724969),a=e(752376),_=e(965516),E=e(844183),c=e(432210),o=e(785893),P=function(){var C=_.Z.useToken(),D=C.token,B=(0,n.useState)(["Tag 1","Tag 2","Tag 3"]),I=r()(B,2),u=I[0],v=I[1],j=(0,n.useState)(!1),g=r()(j,2),f=g[0],A=g[1],W=(0,n.useState)(""),U=r()(W,2),Z=U[0],R=U[1],K=(0,n.useRef)(null);(0,n.useEffect)(function(){if(f){var O;(O=K.current)===null||O===void 0||O.focus()}},[f]);var Y=function(M){var L=u.filter(function(F){return F!==M});console.log(L),v(L)},b=function(){A(!0)},V=function(M){R(M.target.value)},p=function(){Z&&u.indexOf(Z)===-1&&v([].concat(d()(u),[Z])),A(!1),R("")},G=function(M){var L=(0,o.jsx)(E.Z,{closable:!0,onClose:function(H){H.preventDefault(),Y(M)},children:M});return(0,o.jsx)("span",{style:{display:"inline-block"},children:L},M)},z=u.map(G),S={background:D.colorBgContainer,borderStyle:"dashed"};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:{marginBottom:16},children:(0,o.jsx)(a.Z,{enter:{scale:.8,opacity:0,type:"from",duration:100},onEnd:function(M){(M.type==="appear"||M.type==="enter")&&(M.target.style="display: inline-block")},leave:{opacity:0,width:0,scale:0,duration:200},appear:!1,children:z})}),f?(0,o.jsx)(c.Z,{ref:K,type:"text",size:"small",style:{width:78},value:Z,onChange:V,onBlur:p,onPressEnter:p}):(0,o.jsxs)(E.Z,{onClick:b,style:S,children:[(0,o.jsx)(l.Z,{})," New Tag"]})]})};t.default=P},967806:function(T,t,e){e.r(t);var h=e(418429),d=e(667294),s=e(945016),r=e(844183),n=e(785893),l=function(c){console.log(c)},a=function(c){c.preventDefault(),console.log("Clicked! But prevent default.")},_=function(){return(0,n.jsxs)(s.Z,{size:[0,8],wrap:!0,children:[(0,n.jsx)(r.Z,{children:"Tag 1"}),(0,n.jsx)(r.Z,{children:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Link"})}),(0,n.jsx)(r.Z,{closeIcon:!0,onClose:a,children:"Prevent Default"}),(0,n.jsx)(r.Z,{closeIcon:(0,n.jsx)(h.Z,{}),onClose:l,children:"Tag 2"})]})};t.default=_},927713:function(T,t,e){e.r(t);var h=e(667294),d=e(945016),s=e(844183),r=e(315816),n=e(785893),l=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.Z,{size:[0,"small"],wrap:!0,children:[(0,n.jsx)(s.Z,{bordered:!1,children:"Tag 1"}),(0,n.jsx)(s.Z,{bordered:!1,children:"Tag 2"}),(0,n.jsx)(s.Z,{bordered:!1,closable:!0,children:"Tag 3"}),(0,n.jsx)(s.Z,{bordered:!1,closable:!0,children:"Tag 4"})]}),(0,n.jsx)(r.Z,{}),(0,n.jsxs)(d.Z,{size:[0,"small"],wrap:!0,children:[(0,n.jsx)(s.Z,{bordered:!1,color:"processing",children:"processing"}),(0,n.jsx)(s.Z,{bordered:!1,color:"success",children:"success"}),(0,n.jsx)(s.Z,{bordered:!1,color:"error",children:"error"}),(0,n.jsx)(s.Z,{bordered:!1,color:"warning",children:"warning"}),(0,n.jsx)(s.Z,{bordered:!1,color:"magenta",children:"magenta"}),(0,n.jsx)(s.Z,{bordered:!1,color:"red",children:"red"}),(0,n.jsx)(s.Z,{bordered:!1,color:"volcano",children:"volcano"}),(0,n.jsx)(s.Z,{bordered:!1,color:"orange",children:"orange"}),(0,n.jsx)(s.Z,{bordered:!1,color:"gold",children:"gold"}),(0,n.jsx)(s.Z,{bordered:!1,color:"lime",children:"lime"}),(0,n.jsx)(s.Z,{bordered:!1,color:"green",children:"green"}),(0,n.jsx)(s.Z,{bordered:!1,color:"cyan",children:"cyan"}),(0,n.jsx)(s.Z,{bordered:!1,color:"blue",children:"blue"}),(0,n.jsx)(s.Z,{bordered:!1,color:"geekblue",children:"geekblue"}),(0,n.jsx)(s.Z,{bordered:!1,color:"purple",children:"purple"})]})]})};t.default=l},864400:function(T,t,e){e.r(t);var h=e(667294),d=e(965516),s=e(945016),r=e(844183),n=e(315816),l=e(785893),a=function(){var E=d.Z.useToken(),c=E.token;return(0,l.jsxs)("div",{style:{backgroundColor:c.colorBgLayout,padding:16},children:[(0,l.jsxs)(s.Z,{size:[0,"small"],wrap:!0,children:[(0,l.jsx)(r.Z,{bordered:!1,children:"Tag 1"}),(0,l.jsx)(r.Z,{bordered:!1,children:"Tag 2"}),(0,l.jsx)(r.Z,{bordered:!1,closable:!0,children:"Tag 3"}),(0,l.jsx)(r.Z,{bordered:!1,closable:!0,children:"Tag 4"})]}),(0,l.jsx)(n.Z,{}),(0,l.jsxs)(s.Z,{size:[0,"small"],wrap:!0,children:[(0,l.jsx)(r.Z,{bordered:!1,color:"magenta",children:"magenta"}),(0,l.jsx)(r.Z,{bordered:!1,color:"red",children:"red"}),(0,l.jsx)(r.Z,{bordered:!1,color:"volcano",children:"volcano"}),(0,l.jsx)(r.Z,{bordered:!1,color:"orange",children:"orange"}),(0,l.jsx)(r.Z,{bordered:!1,color:"gold",children:"gold"}),(0,l.jsx)(r.Z,{bordered:!1,color:"lime",children:"lime"}),(0,l.jsx)(r.Z,{bordered:!1,color:"green",children:"green"}),(0,l.jsx)(r.Z,{bordered:!1,color:"cyan",children:"cyan"}),(0,l.jsx)(r.Z,{bordered:!1,color:"blue",children:"blue"}),(0,l.jsx)(r.Z,{bordered:!1,color:"geekblue",children:"geekblue"}),(0,l.jsx)(r.Z,{bordered:!1,color:"purple",children:"purple"})]})]})};t.default=a},972389:function(T,t,e){e.r(t);var h=e(600861),d=e.n(h),s=e(627424),r=e.n(s),n=e(667294),l=e(844183),a=e(945016),_=e(785893),E=l.Z.CheckableTag,c=["Movies","Books","Music","Sports"],o=function(){var m=(0,n.useState)(["Books"]),C=r()(m,2),D=C[0],B=C[1],I=function(v,j){var g=j?[].concat(d()(D),[v]):D.filter(function(f){return f!==v});console.log("You are interested in: ",g),B(g)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{style:{marginRight:8},children:"Categories:"}),(0,_.jsx)(a.Z,{size:[0,8],wrap:!0,children:c.map(function(u){return(0,_.jsx)(E,{checked:D.includes(u),onChange:function(j){return I(u,j)},children:u},u)})})]})};t.default=o},332289:function(T,t,e){e.r(t);var h=e(667294),d=e(945016),s=e(844183),r=e(785893),n=function(){return(0,r.jsxs)(d.Z,{size:[0,8],wrap:!0,children:[(0,r.jsx)(s.Z,{color:"magenta-inverse",children:"magenta"}),(0,r.jsx)(s.Z,{color:"red-inverse",children:"red"}),(0,r.jsx)(s.Z,{color:"volcano-inverse",children:"volcano"}),(0,r.jsx)(s.Z,{color:"orange-inverse",children:"orange"}),(0,r.jsx)(s.Z,{color:"gold-inverse",children:"gold"}),(0,r.jsx)(s.Z,{color:"lime-inverse",children:"lime"}),(0,r.jsx)(s.Z,{color:"green-inverse",children:"green"}),(0,r.jsx)(s.Z,{color:"cyan-inverse",children:"cyan"}),(0,r.jsx)(s.Z,{color:"blue-inverse",children:"blue"}),(0,r.jsx)(s.Z,{color:"geekblue-inverse",children:"geekblue"}),(0,r.jsx)(s.Z,{color:"purple-inverse",children:"purple"})]})};t.default=n},381176:function(T,t,e){e.r(t);var h=e(667294),d=e(315816),s=e(945016),r=e(844183),n=e(785893),l=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Z,{orientation:"left",children:"Presets"}),(0,n.jsxs)(s.Z,{size:[0,8],wrap:!0,children:[(0,n.jsx)(r.Z,{color:"magenta",children:"magenta"}),(0,n.jsx)(r.Z,{color:"red",children:"red"}),(0,n.jsx)(r.Z,{color:"volcano",children:"volcano"}),(0,n.jsx)(r.Z,{color:"orange",children:"orange"}),(0,n.jsx)(r.Z,{color:"gold",children:"gold"}),(0,n.jsx)(r.Z,{color:"lime",children:"lime"}),(0,n.jsx)(r.Z,{color:"green",children:"green"}),(0,n.jsx)(r.Z,{color:"cyan",children:"cyan"}),(0,n.jsx)(r.Z,{color:"blue",children:"blue"}),(0,n.jsx)(r.Z,{color:"geekblue",children:"geekblue"}),(0,n.jsx)(r.Z,{color:"purple",children:"purple"})]}),(0,n.jsx)(d.Z,{orientation:"left",children:"Custom"}),(0,n.jsxs)(s.Z,{size:[0,8],wrap:!0,children:[(0,n.jsx)(r.Z,{color:"#f50",children:"#f50"}),(0,n.jsx)(r.Z,{color:"#2db7f5",children:"#2db7f5"}),(0,n.jsx)(r.Z,{color:"#87d068",children:"#87d068"}),(0,n.jsx)(r.Z,{color:"#108ee9",children:"#108ee9"})]})]})};t.default=l},422294:function(T,t,e){e.r(t);var h=e(418429),d=e(198165),s=e(667294),r=e(773036),n=e(945016),l=e(844183),a=e(785893);t.default=function(){return(0,a.jsx)(r.ZP,{theme:{components:{Tag:{defaultBg:"#f9f0ff",defaultColor:"#4b34d3"}}},children:(0,a.jsxs)(n.Z,{size:[0,8],wrap:!0,children:[(0,a.jsx)(l.Z,{children:(0,a.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Link"})}),(0,a.jsx)(l.Z,{closable:!0,color:"magenta",children:"Tag 2"}),(0,a.jsx)(l.Z,{icon:(0,a.jsx)(h.Z,{}),color:"error",children:"error"}),(0,a.jsx)(l.Z,{color:"red-inverse",children:"red"}),(0,a.jsx)(l.Z,{bordered:!1,color:"magenta",children:"magenta"}),(0,a.jsx)(l.Z,{icon:(0,a.jsx)(d.Z,{spin:!0}),color:"processing",children:"processing"})]})})}},828857:function(T,t,e){e.r(t);var h=e(600861),d=e.n(h),s=e(627424),r=e.n(s),n=e(667294),l=e(724969),a=e(965516),_=e(945016),E=e(432210),c=e(844183),o=e(879587),P=e(785893),m=function(){var D=a.Z.useToken(),B=D.token,I=(0,n.useState)(["Unremovable","Tag 2","Tag 3"]),u=r()(I,2),v=u[0],j=u[1],g=(0,n.useState)(!1),f=r()(g,2),A=f[0],W=f[1],U=(0,n.useState)(""),Z=r()(U,2),R=Z[0],K=Z[1],Y=(0,n.useState)(-1),b=r()(Y,2),V=b[0],p=b[1],G=(0,n.useState)(""),z=r()(G,2),S=z[0],O=z[1],M=(0,n.useRef)(null),L=(0,n.useRef)(null);(0,n.useEffect)(function(){if(A){var i;(i=M.current)===null||i===void 0||i.focus()}},[A]),(0,n.useEffect)(function(){var i;(i=L.current)===null||i===void 0||i.focus()},[S]);var F=function(x){var y=v.filter(function(N){return N!==x});console.log(y),j(y)},H=function(){W(!0)},$=function(x){K(x.target.value)},J=function(){R&&!v.includes(R)&&j([].concat(d()(v),[R])),W(!1),K("")},k=function(x){O(x.target.value)},Q=function(){var x=d()(v);x[V]=S,j(x),p(-1),O("")},X={width:64,height:22,marginInlineEnd:8,verticalAlign:"top"},w={height:22,background:B.colorBgContainer,borderStyle:"dashed"};return(0,P.jsxs)(_.Z,{size:[0,8],wrap:!0,children:[v.map(function(i,x){if(V===x)return(0,P.jsx)(E.Z,{ref:L,size:"small",style:X,value:S,onChange:k,onBlur:Q,onPressEnter:Q},i);var y=i.length>20,N=(0,P.jsx)(c.Z,{closable:x!==0,style:{userSelect:"none"},onClose:function(){return F(i)},children:(0,P.jsx)("span",{onDoubleClick:function(ee){x!==0&&(p(x),O(i),ee.preventDefault())},children:y?"".concat(i.slice(0,20),"..."):i})},i);return y?(0,P.jsx)(o.Z,{title:i,children:N},i):N}),A?(0,P.jsx)(E.Z,{ref:M,type:"text",size:"small",style:X,value:R,onChange:$,onBlur:J,onPressEnter:J}):(0,P.jsx)(c.Z,{style:w,icon:(0,P.jsx)(l.Z,{}),onClick:H,children:"New Tag"})]})};t.default=m},618807:function(T,t,e){e.r(t);var h=e(667294),d=e(418429),s=e(844183),r=e(785893),n=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{closable:!0,closeIcon:"\u5173 \u95ED",children:"Tag1"}),(0,r.jsx)(s.Z,{closable:!0,closeIcon:(0,r.jsx)(d.Z,{}),children:"Tag2"})]})};t.default=n},726322:function(T,t,e){e.r(t);var h=e(627424),d=e.n(h),s=e(242122),r=e.n(s),n=e(960887),l=e(245587),a=e(667294),_=e(844183),E=e(785893),c=function(m){var C=m.tag,D=(0,l.nB)({id:C.id}),B=D.listeners,I=D.setNodeRef,u=D.transform,v=D.transition,j=D.isDragging,g={cursor:"move",transition:"unset"},f=u?r()(r()({},g),{},{transform:"translate3d(".concat(u.x,"px, ").concat(u.y,"px, 0)"),transition:j?"unset":v}):g;return(0,E.jsx)(_.Z,r()(r()({style:f,ref:I},B),{},{children:C.text}))},o=function(){var m=(0,a.useState)([{id:1,text:"Tag 1"},{id:2,text:"Tag 2"},{id:3,text:"Tag 3"}]),C=d()(m,2),D=C[0],B=C[1],I=(0,n.Dy)((0,n.VT)(n.we)),u=function(j){var g=j.active,f=j.over;f&&g.id!==f.id&&B(function(A){var W=A.findIndex(function(Z){return Z.id===g.id}),U=A.findIndex(function(Z){return Z.id===f.id});return(0,l.Rp)(A,W,U)})};return(0,E.jsx)(n.LB,{sensors:I,onDragEnd:u,collisionDetection:n.pE,children:(0,E.jsx)(l.Fo,{items:D,strategy:l.PG,children:D.map(function(v){return(0,E.jsx)(c,{tag:v},v.id)})})})};t.default=o},311882:function(T,t,e){e.r(t);var h=e(667294),d=e(985093),s=e(935326),r=e(859505),n=e(72490),l=e(945016),a=e(844183),_=e(785893),E=function(){return(0,_.jsxs)(l.Z,{size:[0,8],wrap:!0,children:[(0,_.jsx)(a.Z,{icon:(0,_.jsx)(d.Z,{}),color:"#55acee",children:"Twitter"}),(0,_.jsx)(a.Z,{icon:(0,_.jsx)(s.Z,{}),color:"#cd201f",children:"Youtube"}),(0,_.jsx)(a.Z,{icon:(0,_.jsx)(r.Z,{}),color:"#3b5999",children:"Facebook"}),(0,_.jsx)(a.Z,{icon:(0,_.jsx)(n.Z,{}),color:"#55acee",children:"LinkedIn"})]})};t.default=E},997413:function(T,t,e){e.r(t);var h=e(667294),d=e(708751),s=e(198165),r=e(418429),n=e(111475),l=e(24019),a=e(103089),_=e(315816),E=e(945016),c=e(844183),o=e(785893),P=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_.Z,{orientation:"left",children:"Without icon"}),(0,o.jsxs)(E.Z,{size:[0,8],wrap:!0,children:[(0,o.jsx)(c.Z,{color:"success",children:"success"}),(0,o.jsx)(c.Z,{color:"processing",children:"processing"}),(0,o.jsx)(c.Z,{color:"error",children:"error"}),(0,o.jsx)(c.Z,{color:"warning",children:"warning"}),(0,o.jsx)(c.Z,{color:"default",children:"default"})]}),(0,o.jsx)(_.Z,{orientation:"left",children:"With icon"}),(0,o.jsxs)(E.Z,{size:[0,8],wrap:!0,children:[(0,o.jsx)(c.Z,{icon:(0,o.jsx)(d.Z,{}),color:"success",children:"success"}),(0,o.jsx)(c.Z,{icon:(0,o.jsx)(s.Z,{spin:!0}),color:"processing",children:"processing"}),(0,o.jsx)(c.Z,{icon:(0,o.jsx)(r.Z,{}),color:"error",children:"error"}),(0,o.jsx)(c.Z,{icon:(0,o.jsx)(n.Z,{}),color:"warning",children:"warning"}),(0,o.jsx)(c.Z,{icon:(0,o.jsx)(l.Z,{}),color:"default",children:"waiting"}),(0,o.jsx)(c.Z,{icon:(0,o.jsx)(a.Z,{}),color:"default",children:"stop"})]})]})};t.default=P}}]);
