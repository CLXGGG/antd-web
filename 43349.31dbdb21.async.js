"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[43349],{643349:function(X,R,t){t.r(R),t.d(R,{scopes:function(){return p}});var i=t(667294),S=t(312328),P=t(979331),a=t(988872),x=t(945016),Z=t(324246),O=t(844183),H=t(965516),z=t(72218),L=t(75529),A=t(291966),w=t.n(A),p={"transfer-demo-basic":{React:i,useState:i.useState,Transfer:S.Z},"transfer-demo-oneway":{React:i,useState:i.useState,Switch:P.Z,Transfer:S.Z},"transfer-demo-search":{React:i,useEffect:i.useEffect,useState:i.useState,Transfer:S.Z},"transfer-demo-advanced":{React:i,useEffect:i.useEffect,useState:i.useState,Button:a.ZP,Transfer:S.Z},"transfer-demo-custom-item":{React:i,useEffect:i.useEffect,useState:i.useState,Transfer:S.Z},"transfer-demo-large-data":{React:i,useEffect:i.useEffect,useState:i.useState,Switch:P.Z,Transfer:S.Z},"transfer-demo-table-transfer":{React:i,useState:i.useState,Space:x.Z,Switch:P.Z,Table:Z.Z,Tag:O.Z,Transfer:S.Z,difference:w()},"transfer-demo-tree-transfer":{React:i,useState:i.useState,theme:H.Z,Transfer:S.Z,Tree:z.Z},"transfer-demo-status":{React:i,Space:x.Z,Transfer:S.Z},"transfer-demo-custom-select-all-labels":{React:i,useState:i.useState,Transfer:S.Z},"transfer-demo-component-token":{React:i,useState:i.useState,ConfigProvider:L.ZP,Space:x.Z,Switch:P.Z,Table:Z.Z,Tag:O.Z,Transfer:S.Z,difference:w()}}},979331:function(X,R,t){t.d(R,{Z:function(){return dn}});var i=t(242122),S=t.n(i),P=t(238416),a=t.n(P),x=t(627424),Z=t.n(x),O=t(670215),H=t.n(O),z=t(667294),L=t(100628),A=t.n(L),w=t(294184),p=t.n(w),V=t(33413),Q=t(189265),F=t(73287),G=t(147315),J=t(947170),I=t(615624),Y=t(510274),N=t(548073),q=t(286665),k=t(986943),_=function(n){var e,c,d,o,s,h=n.componentCls,r=n.trackHeightSM,f=n.trackPadding,v=n.trackMinWidthSM,T=n.innerMinMarginSM,m=n.innerMaxMarginSM,g=n.handleSizeSM,u=n.calc,M="".concat(h,"-inner"),y=(0,I.bf)(u(g).add(u(f).mul(2)).equal()),C=(0,I.bf)(u(m).mul(2).equal());return a()({},h,a()({},"&".concat(h,"-small"),(s={minWidth:v,height:r,lineHeight:(0,I.bf)(r)},a()(s,"".concat(h,"-inner"),(e={paddingInlineStart:m,paddingInlineEnd:T},a()(e,"".concat(M,"-checked"),{marginInlineStart:"calc(-100% + ".concat(y," - ").concat(C,")"),marginInlineEnd:"calc(100% - ".concat(y," + ").concat(C,")")}),a()(e,"".concat(M,"-unchecked"),{marginTop:u(r).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}),e)),a()(s,"".concat(h,"-handle"),{width:g,height:g}),a()(s,"".concat(h,"-loading-icon"),{top:u(u(g).sub(n.switchLoadingIconSize)).div(2).equal(),fontSize:n.switchLoadingIconSize}),a()(s,"&".concat(h,"-checked"),(d={},a()(d,"".concat(h,"-inner"),(c={paddingInlineStart:T,paddingInlineEnd:m},a()(c,"".concat(M,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(c,"".concat(M,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(y," + ").concat(C,")"),marginInlineEnd:"calc(-100% + ".concat(y," - ").concat(C,")")}),c)),a()(d,"".concat(h,"-handle"),{insetInlineStart:"calc(100% - ".concat((0,I.bf)(u(g).add(f).equal()),")")}),d)),a()(s,"&:not(".concat(h,"-disabled):active"),(o={},a()(o,"&:not(".concat(h,"-checked) ").concat(M),a()({},"".concat(M,"-unchecked"),{marginInlineStart:u(n.marginXXS).div(2).equal(),marginInlineEnd:u(n.marginXXS).mul(-1).div(2).equal()})),a()(o,"&".concat(h,"-checked ").concat(M),a()({},"".concat(M,"-checked"),{marginInlineStart:u(n.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:u(n.marginXXS).div(2).equal()})),o)),s)))},nn=function(n){var e,c=n.componentCls,d=n.handleSize,o=n.calc;return a()({},c,(e={},a()(e,"".concat(c,"-loading-icon").concat(n.iconCls),{position:"relative",top:o(o(d).sub(n.fontSize)).div(2).equal(),color:n.switchLoadingIconColor,verticalAlign:"top"}),a()(e,"&".concat(c,"-checked ").concat(c,"-loading-icon"),{color:n.switchColor}),e))},an=function(n){var e,c,d=n.componentCls,o=n.trackPadding,s=n.handleBg,h=n.handleShadow,r=n.handleSize,f=n.calc,v="".concat(d,"-handle");return a()({},d,(c={},a()(c,v,{position:"absolute",top:o,insetInlineStart:o,width:r,height:r,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:s,borderRadius:f(r).div(2).equal(),boxShadow:h,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),a()(c,"&".concat(d,"-checked ").concat(v),{insetInlineStart:"calc(100% - ".concat((0,I.bf)(f(r).add(o).equal()),")")}),a()(c,"&:not(".concat(d,"-disabled):active"),(e={},a()(e,"".concat(v,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),a()(e,"&".concat(d,"-checked ").concat(v,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),e)),c))},tn=function(n){var e,c,d,o,s=n.componentCls,h=n.trackHeight,r=n.trackPadding,f=n.innerMinMargin,v=n.innerMaxMargin,T=n.handleSize,m=n.calc,g="".concat(s,"-inner"),u=(0,I.bf)(m(T).add(m(r).mul(2)).equal()),M=(0,I.bf)(m(v).mul(2).equal());return a()({},s,(o={},a()(o,g,(e={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:v,paddingInlineEnd:f,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},a()(e,"".concat(g,"-checked, ").concat(g,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),a()(e,"".concat(g,"-checked"),{marginInlineStart:"calc(-100% + ".concat(u," - ").concat(M,")"),marginInlineEnd:"calc(100% - ".concat(u," + ").concat(M,")")}),a()(e,"".concat(g,"-unchecked"),{marginTop:m(h).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}),e)),a()(o,"&".concat(s,"-checked ").concat(g),(c={paddingInlineStart:f,paddingInlineEnd:v},a()(c,"".concat(g,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(c,"".concat(g,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(u," + ").concat(M,")"),marginInlineEnd:"calc(-100% + ".concat(u," - ").concat(M,")")}),c)),a()(o,"&:not(".concat(s,"-disabled):active"),(d={},a()(d,"&:not(".concat(s,"-checked) ").concat(g),a()({},"".concat(g,"-unchecked"),{marginInlineStart:m(r).mul(2).equal(),marginInlineEnd:m(r).mul(-1).mul(2).equal()})),a()(d,"&".concat(s,"-checked ").concat(g),a()({},"".concat(g,"-checked"),{marginInlineStart:m(r).mul(-1).mul(2).equal(),marginInlineEnd:m(r).mul(2).equal()})),d)),o))},en=function(n){var e,c=n.componentCls,d=n.trackHeight,o=n.trackMinWidth;return a()({},c,S()(S()(S()({},(0,N.Wf)(n)),{},a()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:o,height:d,lineHeight:"".concat((0,I.bf)(d)),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(c,"-disabled)"),{background:n.colorTextTertiary}),(0,N.Qy)(n)),{},(e={},a()(e,"&".concat(c,"-checked"),a()({background:n.switchColor},"&:hover:not(".concat(c,"-disabled)"),{background:n.colorPrimaryHover})),a()(e,"&".concat(c,"-loading, &").concat(c,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),a()(e,"&".concat(c,"-rtl"),{direction:"rtl"}),e)))},cn=function(n){var e=n.fontSize,c=n.lineHeight,d=n.controlHeight,o=n.colorWhite,s=e*c,h=d/2,r=2,f=s-r*2,v=h-r*2;return{trackHeight:s,trackHeightSM:h,trackMinWidth:f*2+r*4,trackMinWidthSM:v*2+r*2,trackPadding:r,handleBg:o,handleSize:f,handleSizeSM:v,handleShadow:"0 2px 4px 0 ".concat(new Y.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:f/2,innerMaxMargin:f+r+r*2,innerMinMarginSM:v/2,innerMaxMarginSM:v+r+r*2}},ln=(0,q.I$)("Switch",function(l){var n=(0,k.TS)(l,{switchDuration:l.motionDurationMid,switchColor:l.colorPrimary,switchDisabledOpacity:l.opacityLoading,switchLoadingIconSize:l.calc(l.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:"rgba(0, 0, 0, ".concat(l.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[en(n),tn(n),an(n),nn(n),_(n)]},cn),rn=t(260869),W=t(785893),on=["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"],U=z.forwardRef(function(l,n){var e,c=l.prefixCls,d=l.size,o=l.disabled,s=l.loading,h=l.className,r=l.rootClassName,f=l.style,v=l.checked,T=l.value,m=l.defaultChecked,g=l.defaultValue,u=l.onChange,M=H()(l,on),y=(0,rn.default)(!1,{value:v!=null?v:T,defaultValue:m!=null?m:g}),C=Z()(y,2),sn=C[0],hn=C[1],B=z.useContext(F.E_),gn=B.getPrefixCls,un=B.direction,D=B.switch,Sn=z.useContext(G.Z),vn=(o!=null?o:Sn)||s,E=gn("switch",c),mn=(0,W.jsx)("div",{className:"".concat(E,"-handle"),children:s&&(0,W.jsx)(A(),{className:"".concat(E,"-loading-icon")})}),fn=ln(E),j=Z()(fn,2),Mn=j[0],In=j[1],Cn=(0,J.Z)(d),En=p()(D==null?void 0:D.className,(e={},a()(e,"".concat(E,"-small"),Cn==="small"),a()(e,"".concat(E,"-loading"),s),a()(e,"".concat(E,"-rtl"),un==="rtl"),e),h,r,In),Pn=S()(S()({},D==null?void 0:D.style),f),Tn=function(){for(var $=arguments.length,K=new Array($),b=0;b<$;b++)K[b]=arguments[b];hn(K[0]),u==null||u.apply(void 0,K)};return Mn((0,W.jsx)(Q.Z,{component:"Switch",children:(0,W.jsx)(V.Z,S()(S()({},M),{},{checked:sn,onChange:Tn,prefixCls:E,className:En,style:Pn,disabled:vn,ref:n,loadingIcon:mn}))}))});U.__ANT_SWITCH=!0;var dn=U}}]);
