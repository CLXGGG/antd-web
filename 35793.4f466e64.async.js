"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[35793],{235793:function(ot,N,t){t.r(N),t.d(N,{default:function(){return U}});var k=t(627424),s=t.n(k),Y=t(459400),I=t.n(Y),b=t(667294),c=t(825035),K=t(342365),F=t(198165),l=t(945016),X=t(185209),$=t(844183),W=t(98651),w=t(650060),L=t(527211),G=t(739838),B=t(614137),V=t(11739),J=t(181632),y=t(309819),Q=t(294184),H=t.n(Q),q=t(727484),P=t.n(q),tt=t(49313),o=t(302559),n=t(438199),a=t(833494),e=t(785893),r,d,D,M="Ant Design 5.0 use CSS-in-JS technology to provide dynamic & mix theme ability. And which use component level CSS-in-JS solution get your application a better performance.",S="Ant Design 5.0 \u4F7F\u7528 CSS-in-JS \u6280\u672F\u4EE5\u63D0\u4F9B\u52A8\u6001\u4E0E\u6DF7\u5408\u4E3B\u9898\u7684\u80FD\u529B\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u6211\u4EEC\u4F7F\u7528\u7EC4\u4EF6\u7EA7\u522B\u7684 CSS-in-JS \u89E3\u51B3\u65B9\u6848\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\u3002",E={cn:{yesterday:"\u6628\u5929",lastWeek:"\u4E0A\u5468",lastMonth:"\u4E0A\u6708",lastYear:"\u53BB\u5E74",new:"\u65B0\u589E",update:"\u66F4\u65B0",sampleContent:S,inProgress:"\u8FDB\u884C\u4E2D",success:"\u6210\u529F",taskFailed:"\u4EFB\u52A1\u5931\u8D25",tour:"\u6F2B\u6E38\u5BFC\u89C8\u5E2E\u52A9\u7528\u6237\u5BF9\u65B0\u52A0\u7684\u529F\u80FD\u8FDB\u884C\u5FEB\u901F\u4E86\u89E3"},en:{yesterday:"Yesterday",lastWeek:"Last Week",lastMonth:"Last Month",lastYear:"Last Year",new:"New",update:"Update",sampleContent:M,inProgress:"In Progress",success:"Success",taskFailed:"Task Failed",tour:"A quick guide for new come user about how to use app."}},z=function(){var g=(0,tt.Z)();return(0,y.kc)(function(O){var f=O.token,C=(0,a.EI)(),i=C.carousel;return{card:(0,y.iv)(r||(r=I()([`
        border-radius: `,`px;
        border: 1px solid `,`;
        background: `,`;
        padding: `,`px;
        flex: none;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        > * {
          flex: none;
        }
      `])),f.borderRadius,g?f.colorBorder:"transparent",g?f.colorBgContainer:"#f5f8ff",f.paddingXL),cardCircle:(0,y.iv)(d||(d=I()([`
        position: absolute;
        width: 120px;
        height: 120px;
        background: #1677ff;
        border-radius: 50%;
        filter: blur(40px);
        opacity: 0.1;
      `]))),mobileCard:(0,y.iv)(D||(D=I()([`
        height: 395px;
      `]))),carousel:i}})()},R=function(g){var O=g.title,f=g.node,C=g.type,i=g.index,Z=C==="new"?"processing":"warning",m=(0,o.Z)(E),j=s()(m,1),h=j[0],u=C==="new"?h.new:h.update,v=z(),p=v.styles,x=(0,b.useContext)(n.Z),_=x.isMobile,T=(0,y.Fg)();return(0,e.jsxs)("div",{className:H()(p.card,_&&p.mobileCard),children:[(0,e.jsx)("div",{className:p.cardCircle,style:{right:i%2*-20-20,bottom:i%3*-40-20}}),(0,e.jsxs)(l.Z,{children:[(0,e.jsx)(X.Z.Title,{level:4,style:{fontWeight:"normal",margin:0},children:O}),(0,e.jsx)($.Z,{color:Z,children:u})]}),(0,e.jsx)("div",{style:{marginTop:T.paddingLG,flex:"auto",display:"flex",alignItems:"center",justifyContent:"center"},children:f})]})};function U(){var A=(0,y.Fg)(),g=z(),O=g.styles,f=(0,o.Z)(E),C=s()(f,1),i=C[0],Z=(0,b.useContext)(n.Z),m=Z.isMobile,j=b.useMemo(function(){return[{title:"Modal",type:"update",node:(0,e.jsx)(W.Z._InternalPanelDoNotUseOrYouWillBeFired,{title:"Ant Design 5.0",width:300,children:i.sampleContent})},{title:"DatePicker",type:"update",node:(0,e.jsx)(w.Z._InternalPanelDoNotUseOrYouWillBeFired,{showToday:!1,presets:m?[]:[{label:i.yesterday,value:P()().add(-1,"d")},{label:i.lastWeek,value:P()().add(-7,"d")},{label:i.lastMonth,value:P()().add(-1,"month")},{label:i.lastYear,value:P()().add(-1,"year")}],value:P()("2022-11-18 14:00:00")})},{title:"Progress",type:"update",node:(0,e.jsxs)(l.Z,{direction:"vertical",children:[(0,e.jsxs)(l.Z,{children:[(0,e.jsx)(L.Z,{type:"circle",trailColor:"#e6f4ff",percent:60,size:14}),i.inProgress]}),(0,e.jsxs)(l.Z,{children:[(0,e.jsx)(L.Z,{type:"circle",percent:100,size:14}),i.success]}),(0,e.jsxs)(l.Z,{children:[(0,e.jsx)(L.Z,{type:"circle",status:"exception",percent:88,size:14}),i.taskFailed]})]})},{title:"Tour",type:"new",node:(0,e.jsx)(G.Z._InternalPanelDoNotUseOrYouWillBeFired,{title:"Ant Design 5.0",description:i.tour,style:{width:m?"auto":350},current:3,total:9})},{title:"FloatButton",type:"new",node:(0,e.jsxs)(l.Z,{size:"large",children:[(0,e.jsx)(B.Z._InternalPanelDoNotUseOrYouWillBeFired,{shape:"square",items:[{icon:(0,e.jsx)(c.Z,{})},{icon:(0,e.jsx)(K.Z,{})},{icon:(0,e.jsx)(F.Z,{})}]}),(0,e.jsx)(B.Z._InternalPanelDoNotUseOrYouWillBeFired,{backTop:!0}),(0,e.jsx)(B.Z._InternalPanelDoNotUseOrYouWillBeFired,{items:[{icon:(0,e.jsx)(c.Z,{})},{icon:(0,e.jsx)(K.Z,{})},{icon:(0,e.jsx)(F.Z,{})}]})]})},{title:"Alert",type:"update",node:(0,e.jsx)(V.Z,{style:{width:400},message:"Ant Design 5.0",description:i.sampleContent,closable:!0})}]},[m]);return m?(0,e.jsx)("div",{style:{margin:"0 16px"},children:(0,e.jsx)(J.Z,{className:O.carousel,children:j.map(function(h,u){var v=h.title,p=h.node,x=h.type;return(0,e.jsx)(R,{title:v,node:p,type:x,index:u},u)})})}):(0,e.jsx)("div",{style:{width:"100%",overflow:"hidden",display:"flex",justifyContent:"center"},children:(0,e.jsx)("div",{style:{display:"flex",alignItems:"stretch",columnGap:A.paddingLG},children:j.map(function(h,u){var v=h.title,p=h.node,x=h.type;return(0,e.jsx)(R,{title:v,node:p,type:x,index:u},u)})})})}},181632:function(ot,N,t){t.d(N,{Z:function(){return tt}});var k=t(238416),s=t.n(k),Y=t(627424),I=t.n(Y),b=t(242122),c=t.n(b),K=t(670215),F=t.n(K),l=t(667294),X=t(777602),$=t(294184),W=t.n($),w=t(73287),L=t(548073),G=t(141035),B=t(986943),V=function(n){var a,e=n.componentCls,r=n.antCls,d=n.carouselArrowSize,D=n.carouselDotOffset,M=n.marginXXS,S=-d*1.25,E=M;return s()({},e,c()(c()({},(0,L.Wf)(n)),{},{".slick-slider":{position:"relative",display:"block",boxSizing:"border-box",touchAction:"pan-y",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",".slick-track, .slick-list":{transform:"translate3d(0, 0, 0)",touchAction:"pan-y"}},".slick-list":{position:"relative",display:"block",margin:0,padding:0,overflow:"hidden","&:focus":{outline:"none"},"&.dragging":{cursor:"pointer"},".slick-slide":(a={pointerEvents:"none"},s()(a,"input".concat(r,"-radio-input, input").concat(r,"-checkbox-input"),{visibility:"hidden"}),s()(a,"&.slick-active",s()({pointerEvents:"auto"},"input".concat(r,"-radio-input, input").concat(r,"-checkbox-input"),{visibility:"visible"})),s()(a,"> div > div",{verticalAlign:"bottom"}),a)},".slick-track":{position:"relative",top:0,insetInlineStart:0,display:"block","&::before, &::after":{display:"table",content:'""'},"&::after":{clear:"both"}},".slick-slide":{display:"none",float:"left",height:"100%",minHeight:1,img:{display:"block"},"&.dragging img":{pointerEvents:"none"}},".slick-initialized .slick-slide":{display:"block"},".slick-vertical .slick-slide":{display:"block",height:"auto"},".slick-arrow.slick-hidden":{display:"none"},".slick-prev, .slick-next":{position:"absolute",top:"50%",display:"block",width:d,height:d,marginTop:-d/2,padding:0,color:"transparent",fontSize:0,lineHeight:0,background:"transparent",border:0,outline:"none",cursor:"pointer","&:hover, &:focus":{color:"transparent",background:"transparent",outline:"none","&::before":{opacity:1}},"&.slick-disabled::before":{opacity:.25}},".slick-prev":{insetInlineStart:S,"&::before":{content:'"\u2190"'}},".slick-next":{insetInlineEnd:S,"&::before":{content:'"\u2192"'}},".slick-dots":{position:"absolute",insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:15,display:"flex !important",justifyContent:"center",paddingInlineStart:0,margin:0,listStyle:"none","&-bottom":{bottom:D},"&-top":{top:D,bottom:"auto"},li:{position:"relative",display:"inline-block",flex:"0 1 auto",boxSizing:"content-box",width:n.dotWidth,height:n.dotHeight,marginInline:E,padding:0,textAlign:"center",textIndent:-999,verticalAlign:"top",transition:"all ".concat(n.motionDurationSlow),button:{position:"relative",display:"block",width:"100%",height:n.dotHeight,padding:0,color:"transparent",fontSize:0,background:n.colorBgContainer,border:0,borderRadius:n.dotHeight,outline:"none",cursor:"pointer",opacity:.3,transition:"all ".concat(n.motionDurationSlow),"&: hover, &:focus":{opacity:.75},"&::after":{position:"absolute",inset:-E,content:'""'}},"&.slick-active":{width:n.dotActiveWidth,"& button":{background:n.colorBgContainer,opacity:1},"&: hover, &:focus":{opacity:1}}}}}))},J=function(n){var a=n.componentCls,e=n.carouselDotOffset,r=n.marginXXS,d={width:n.dotHeight,height:n.dotWidth};return s()({},"".concat(a,"-vertical"),{".slick-dots":{top:"50%",bottom:"auto",flexDirection:"column",width:n.dotHeight,height:"auto",margin:0,transform:"translateY(-50%)","&-left":{insetInlineEnd:"auto",insetInlineStart:e},"&-right":{insetInlineEnd:e,insetInlineStart:"auto"},li:c()(c()({},d),{},{margin:"".concat(r,"px 0"),verticalAlign:"baseline",button:d,"&.slick-active":c()(c()({},d),{},{button:d})})}})},y=function(n){var a=n.componentCls;return[s()({},"".concat(a,"-rtl"),{direction:"rtl",".slick-dots":s()({},"".concat(a,"-rtl&"),{flexDirection:"row-reverse"})}),s()({},"".concat(a,"-vertical"),{".slick-dots":s()({},"".concat(a,"-rtl&"),{flexDirection:"column"})})]},Q=(0,G.Z)("Carousel",function(o){var n=o.controlHeightLG,a=o.controlHeightSM,e=(0,B.TS)(o,{carouselArrowSize:n/2,carouselDotOffset:a/2});return[V(e),J(e),y(e)]},function(){var o=24;return{dotWidth:16,dotHeight:3,dotWidthActive:o,dotActiveWidth:o}},{deprecatedTokens:[["dotWidthActive","dotActiveWidth"]]}),H=t(785893),q=["dots","arrows","draggable","waitForAnimate","dotPosition","vertical","rootClassName","className","style","id"],P=l.forwardRef(function(o,n){var a,e=o.dots,r=e===void 0?!0:e,d=o.arrows,D=d===void 0?!1:d,M=o.draggable,S=M===void 0?!1:M,E=o.waitForAnimate,z=E===void 0?!1:E,R=o.dotPosition,U=R===void 0?"bottom":R,A=o.vertical,g=A===void 0?U==="left"||U==="right":A,O=o.rootClassName,f=o.className,C=o.style,i=o.id,Z=F()(o,q),m=l.useContext(w.E_),j=m.getPrefixCls,h=m.direction,u=m.carousel,v=l.useRef(),p=function(ct){var ut=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;v.current.slickGoTo(ct,ut)};l.useImperativeHandle(n,function(){return{goTo:p,autoPlay:v.current.innerSlider.autoPlay,innerSlider:v.current.innerSlider,prev:v.current.slickPrev,next:v.current.slickNext}},[v.current]);var x=l.useRef(l.Children.count(o.children));l.useEffect(function(){x.current!==l.Children.count(o.children)&&(p(o.initialSlide||0,!1),x.current=l.Children.count(o.children))},[o.children]);var _=c()({vertical:g,className:W()(f,u==null?void 0:u.className),style:c()(c()({},u==null?void 0:u.style),C)},Z);_.effect==="fade"&&(_.fade=!0);var T=j("carousel",_.prefixCls),et="slick-dots",at=!!r,it=W()(et,"".concat(et,"-").concat(U),typeof r=="boolean"?!1:r==null?void 0:r.className),lt=Q(T),nt=I()(lt,2),st=nt[0],rt=nt[1],dt=W()(T,(a={},s()(a,"".concat(T,"-rtl"),h==="rtl"),s()(a,"".concat(T,"-vertical"),_.vertical),a),rt,O);return st((0,H.jsx)("div",{className:dt,id:i,children:(0,H.jsx)(X.Z,c()(c()({ref:v},_),{},{dots:at,dotsClass:it,arrows:D,draggable:S,verticalSwiping:g,waitForAnimate:z}))}))}),tt=P}}]);
