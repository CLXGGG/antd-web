(self.webpackChunkantd=self.webpackChunkantd||[]).push([[36591,58863],{49313:function(P,y,t){"use strict";t.d(y,{Z:function(){return m},f:function(){return o}});var v=t(667294),o=v.createContext(!1);function m(){return v.useContext(o)}},10167:function(P,y,t){"use strict";t.r(y);var v=t(365695);y.default=v.default},902316:function(P,y,t){"use strict";t.d(y,{X:function(){return D}});var v=t(242122),o=t.n(v),m=t(667294),r=t(185209),d=t(309819),u=t(438199),x=t(785893),D=function(g){var z=g.children,V=g.style,G=g.disabled,K=g.onMouseMove,h=g.onMouseEnter,p=g.onMouseLeave,j=G?{}:{position:"relative",zIndex:1};return(0,x.jsx)("div",{className:"site-mask",style:o()(o()({position:"relative"},V),j),onMouseMove:K,onMouseEnter:h,onMouseLeave:p,children:z})},O=function(g){var z=g.id,V=g.title,G=g.titleColor,K=g.description,h=g.children,p=g.decoration,j=g.background,n=g.collapse,l=(0,d.Fg)(),f=(0,m.useContext)(u.Z),L=f.isMobile,F=n?{}:{maxWidth:1208,marginInline:"auto",boxSizing:"border-box",paddingInline:L?l.margin:l.marginXXL},i=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{style:{textAlign:"center"},children:[(0,x.jsx)(r.Z.Title,{id:z,level:1,style:{fontWeight:900,color:G,fontFamily:"AliPuHui, ".concat(l.fontFamily),fontSize:L?l.fontSizeHeading2:l.fontSizeHeading1},children:V}),(0,x.jsx)(r.Z.Paragraph,{style:{color:G,marginBottom:L?l.marginXXL:l.marginFarXS},children:K})]}),(0,x.jsx)("div",{style:F,children:h?(0,x.jsx)("div",{children:h}):(0,x.jsx)("div",{style:{borderRadius:l.borderRadiusLG,minHeight:300,background:"#e9e9e9"}})})]});return(0,x.jsxs)("div",{style:{position:"relative",background:j,transition:"all ".concat(l.motionDurationSlow)},children:[(0,x.jsx)("div",{style:{position:"absolute",inset:0},children:p}),(0,x.jsx)(D,{disabled:!!j,style:{paddingBlock:l.marginFarSM},children:i})]})};y.Z=O},365695:function(P,y,t){"use strict";t.r(y),t.d(y,{default:function(){return ct}});var v=t(627424),o=t.n(v),m=t(459400),r=t.n(m),d=t(667294),u=t(965516),x=t(75529),D=t(309819),O=t(49313),X=t(302559),g=t(575054),z=t(185209),V=t(707898),G=t(181632),K=t(294184),h=t.n(K),p=t(438199),j=t(833494),n=t(785893),l,f,L,F,i,C=(0,D.kc)(function(W){var s=W.token,c=W.css,S=W.cx,M=(0,j.EI)(),b=M.carousel,T=c(l||(l=r()([`
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    align-items: stretch;
    text-decoration: none;
    background: `,`;
    border: `,"px solid ",`;
    border-radius: `,`px;
    transition: all `,`;
    padding-block: `,`px;
    padding-inline: `,`px;
    box-sizing: border-box;
  `])),s.colorBgContainer,s.lineWidth,s.colorBorderSecondary,s.borderRadiusLG,s.motionDurationSlow,s.paddingMD,s.paddingLG);return{itemBase:T,ribbon:c(f||(f=r()([`
      & > .`,` {
        height: 100%;
      }
    `])),S(T)),cardItem:c(L||(L=r()([`
      &:hover {
        box-shadow: `,`;
      }
    `])),s.boxShadowCard),sliderItem:c(F||(F=r()([`
      margin: 0 `,`px;
      text-align: start;
    `])),s.margin),container:c(i||(i=r()([`
      display: flex;
      max-width: 1208px;
      margin-inline: auto;
      box-sizing: border-box;
      padding-inline: `,`px;
      column-gap: `,`px;
      align-items: stretch;
      text-align: start;
      > * {
        width: calc((100% - `,`px) / 3);
      }
    `])),s.marginXXL,s.paddingMD*2,s.marginXXL*2),carousel:b}}),B=function(s){var c=s.extra,S=s.index,M=s.icons,b=s.className,T=(0,D.Fg)(),E=C(),H=E.styles;if(!c)return(0,n.jsx)(g.Z,{},S);var I=M.find(function(w){return w.name===c.source}),$=(0,n.jsxs)("a",{href:c.href,target:"_blank",className:h()(H.itemBase,b),rel:"noreferrer",children:[(0,n.jsx)(z.Z.Title,{level:5,children:c==null?void 0:c.title}),(0,n.jsx)(z.Z.Paragraph,{type:"secondary",style:{flex:"auto"},children:c.description}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(z.Z.Text,{children:c.date}),I&&(0,n.jsx)("img",{src:I.href,style:{height:T.fontSize},alt:"banner"})]})]},c==null?void 0:c.title);return S===0?(0,n.jsx)(V.Z.Ribbon,{text:"HOT",color:"red",rootClassName:H.ribbon,children:$}):$},a=function(){var s=(0,d.useContext)(p.Z),c=s.isMobile,S=C(),M=S.styles,b=Array(3).fill(1);return c?(0,n.jsx)(G.Z,{className:M.carousel,children:b.map(function(T,E){return(0,n.jsx)("div",{className:M.itemBase,children:(0,n.jsx)(g.Z,{active:!0,style:{padding:"0 24px"}})},E)})}):(0,n.jsx)("div",{className:M.container,children:b.map(function(T,E){return(0,n.jsx)("div",{className:M.itemBase,children:(0,n.jsx)(g.Z,{active:!0})},E)})})},e=function(){var s,c=C(),S=c.styles,M=(0,X.Z)(),b=o()(M,2),T=b[1],E=d.useContext(p.Z),H=E.isMobile,I=(0,j.WF)(),$=I==null||(s=I.extras)===null||s===void 0?void 0:s[T],w=(I==null?void 0:I.icons)||[],et=!$||$.length===0?Array(3).fill(null):$.slice(0,3);return I?(0,n.jsx)("div",{children:H?(0,n.jsx)(G.Z,{className:S.carousel,children:et.map(function(q,_){return(0,n.jsx)("div",{children:(0,n.jsx)(B,{extra:q,index:_,icons:w,className:S.sliderItem})},_)})}):(0,n.jsx)("div",{className:S.container,children:et.map(function(q,_){return(0,n.jsx)(B,{extra:q,index:_,icons:w,className:S.cardItem},_)})})}):(0,n.jsx)(a,{})},A=e,Z=t(945016),R=t(988872),N=t(733851),k=t(373638),J=t(902316),tt,Y,rt,it,nt,at=d.lazy(function(){return Promise.all([t.e(15560),t.e(81260),t.e(29573),t.e(27211),t.e(59372),t.e(41050)]).then(t.bind(t,941050))}),st={cn:{slogan:"\u52A9\u529B\u8BBE\u8BA1\u5F00\u53D1\u8005\u300C\u66F4\u7075\u6D3B\u300D\u5730\u642D\u5EFA\u51FA\u300C\u66F4\u7F8E\u300D\u7684\u4EA7\u54C1\uFF0C\u8BA9\u7528\u6237\u300C\u5FEB\u4E50\u5DE5\u4F5C\u300D\uFF5E",start:"\u5F00\u59CB\u4F7F\u7528",designLanguage:"\u8BBE\u8BA1\u8BED\u8A00"},en:{slogan:"Help designers/developers building beautiful products more flexible and working with happiness",start:"Getting Started",designLanguage:"Design Language"}},dt=function(){var s=d.useContext(x.ZP.ConfigContext),c=s.direction,S=c==="rtl";return(0,D.kc)(function(M){var b=M.token,T=M.css,E=M.cx,H="0 0 3px ".concat(b.colorBgContainer),I=E(T(tt||(tt=r()([`
      position: absolute;
      inset: 0;
      backdrop-filter: blur(4px);
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.2);
      transition: all 1s ease;
      pointer-events: none;
    `]))));return{holder:T(Y||(Y=r()([`
        height: 640px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        perspective: 800px;
        /* fix safari bug by removing blur style */
        transform: translateZ(1000px);
        row-gap: `,`px;

        &:hover .`,` {
          opacity: 0;
        }
      `])),b.marginXL,I),mask:I,typography:T(rt||(rt=r()([`
        text-align: center;
        position: relative;
        z-index: 1;
        padding-inline: `,`px;
        text-shadow: `,`;

        h1 {
          font-family: AliPuHui, `,` !important;
          font-weight: 900 !important;
          font-size: `,`px !important;
          line-height: `,` !important;
        }

        p {
          font-size: `,`px !important;
          font-weight: normal !important;
          margin-bottom: 0;
        }
      `])),b.paddingXL,new Array(5).fill(null).map(function(){return H}).join(", "),b.fontFamily,b.fontSizeHeading2*2,b.lineHeightHeading2,b.fontSizeLG),block:T(it||(it=r()([`
        position: absolute;
        inset-inline-end: 0;
        top: -38px;
        transform: `,`;
      `])),S?"rotate3d(24, 83, -45, 57deg)":"rotate3d(24, -83, 45, 57deg)"),child:T(nt||(nt=r()([`
        position: relative;
        width: 100%;
        z-index: 1;
      `])))}})()},ut=function(s){var c=s.children,S=(0,X.Z)(st),M=o()(S,1),b=M[0],T=dt(),E=T.styles,H=d.useContext(p.Z),I=H.isMobile,$=(0,D.Fg)(),w=(0,N.TH)(),et=w.pathname,q=w.search,_=k.KE(et);return(0,n.jsxs)(J.X,{children:[(0,n.jsx)("img",{style:{position:"absolute",left:I?-120:0,top:0,width:240},src:"https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg",alt:"bg"}),(0,n.jsx)("img",{style:{position:"absolute",right:I?0:"40%",bottom:120,width:240},src:"https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg",alt:"bg"}),(0,n.jsxs)("div",{className:E.holder,children:[(0,n.jsx)(d.Suspense,{fallback:null,children:I?null:(0,n.jsx)("div",{className:E.block,children:(0,n.jsx)(at,{})})}),(0,n.jsx)("div",{className:E.mask}),(0,n.jsxs)(z.Z,{className:E.typography,children:[(0,n.jsx)("h1",{children:"Ant Design 5.0"}),(0,n.jsx)("p",{children:b.slogan})]}),(0,n.jsxs)(Z.Z,{size:"middle",style:{marginBottom:$.marginXL},children:[(0,n.jsx)(N.rU,{to:k.J1("/components/overview/",_,q),children:(0,n.jsx)(R.ZP,{size:"large",type:"primary",children:b.start})}),(0,n.jsx)(N.rU,{to:k.J1("/docs/spec/introduce/",_,q),children:(0,n.jsx)(R.ZP,{size:"large",children:b.designLanguage})})]}),(0,n.jsx)("div",{className:E.child,children:c})]})]})},vt=ut,lt,gt=d.lazy(function(){return Promise.all([t.e(13178),t.e(64747),t.e(62085),t.e(98313),t.e(50060),t.e(27211),t.e(39838),t.e(14137),t.e(35793)]).then(t.bind(t,235793))}),ot=d.lazy(function(){return t.e(20332).then(t.bind(t,820332))}),ft=d.lazy(function(){return Promise.all([t.e(15560),t.e(34318),t.e(6380),t.e(29573),t.e(69032)]).then(t.bind(t,169032))}),ht=(0,D.kc)(function(){return{image:(0,D.iv)(lt||(lt=r()([`
    position: absolute;
    left: 0;
    top: -50px;
    height: 160px;
  `])))}}),Q={cn:{assetsTitle:"\u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982",assetsDesc:"\u5927\u91CF\u5B9E\u7528\u7EC4\u4EF6\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u7075\u6D3B\u5B9A\u5236\u4E0E\u62D3\u5C55",designTitle:"\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B6",designDesc:"\u914D\u5957\u751F\u6001\uFF0C\u8BA9\u4F60\u5FEB\u901F\u642D\u5EFA\u7F51\u7AD9\u5E94\u7528"},en:{assetsTitle:"Rich components",assetsDesc:"Practical components to meet your needs, flexible customization and expansion",designTitle:"Design and framework",designDesc:"Supporting ecology, allowing you to quickly build website applications"}},U=function(){var s=(0,X.Z)(Q),c=o()(s,1),S=c[0],M=ht(),b=M.styles,T=u.Z.useToken(),E=T.token,H=(0,O.Z)();return(0,n.jsxs)("section",{children:[(0,n.jsx)(vt,{children:(0,n.jsx)(A,{})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(x.ZP,{theme:{algorithm:u.Z.defaultAlgorithm},children:(0,n.jsx)(d.Suspense,{fallback:null,children:(0,n.jsx)(ft,{})})}),(0,n.jsx)(J.Z,{background:E.colorBgElevated,collapse:!0,title:S.assetsTitle,description:S.assetsDesc,id:"design",children:(0,n.jsx)(d.Suspense,{fallback:null,children:(0,n.jsx)(gt,{})})}),(0,n.jsx)(J.Z,{title:S.designTitle,description:S.designDesc,background:H?"rgb(57, 63, 74)":"#F5F8FF",decoration:(0,n.jsx)("img",{className:b.image,src:"https://gw.alipayobjects.com/zos/bmw-prod/ba37a413-28e6-4be4-b1c5-01be1a0ebb1c.svg",alt:""}),children:(0,n.jsx)(d.Suspense,{fallback:null,children:(0,n.jsx)(ot,{})})})]})]})},ct=U},373638:function(P,y,t){"use strict";t.d(y,{J1:function(){return X},Is:function(){return K},Fy:function(){return z},KE:function(){return O},qE:function(){return g}});var v=t(451589),o=t(627424),m=t(242122),r=t(385564),d=t(842348),u=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),x={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":u?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function D(h,p,j,n){var l=h.map(function(i){return i.meta}).filter(function(i){return!i.skip}),f=[],L=function(C,B){return(C.order||0)-(B.order||0)};l.sort(L).forEach(function(i){if(i.category&&(i.category=i.category[p]||i.category),i.type&&(i.type=i.type[p]||i.type),i!=null&&i.title&&(i.title=i.title[p]||i.title),!i.category){f.push(i);return}if(i.category==="Components"&&i.type){var C=f.find(function(e){return(e==null?void 0:e.title)===i.type});C||(C={type:"type",title:i.type,children:[],order:n[i.type]},f.push(C)),C.children=C.children||[],C.children.push(i);return}var B=f.find(function(e){return(e==null?void 0:e.title)===i.category});if(B||(B={type:"category",title:i.category,children:[],order:j[i.category]},f.push(B)),B.children=B.children||[],i.type){var a=B.children.filter(function(e){return(e==null?void 0:e.title)===i.type})[0];a||(a={type:"type",title:i.type,children:[],order:n[i.type]},B.children.push(a)),a.children=a.children||[],a.children.push(i)}else B.children.push(i)});function F(i){return i.sort(L).map(function(C){return C.children?_objectSpread(_objectSpread({},C),{},{children:F(C.children)}):C})}return F(f)}function O(h){return/-cn\/?$/.test(h)}function X(h,p,j,n){var l=h.startsWith("/")?h:"/".concat(h),f;if(p?l==="/"?f="/index-cn":l.endsWith("/")?f=l.replace(/\/$/,"-cn/"):(f="".concat(l,"-cn"),f=f.replace(/(-cn)+/,"-cn")):f=/\/?index-cn/.test(l)?"/":l.replace("-cn",""),n){var L=n[p?"zhCN":"enUS"];f+="#".concat(L)}return{pathname:f,search:j}}function g(h){var p="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",j=new Image,n,l=function(L){n||(n=!0,j.src="",h(L))};return j.onload=function(){return l("responded")},j.onerror=function(){return l("error")},j.src=p,setTimeout(function(){return l("timeout")},1500)}function z(){var h="test",p=window.localStorage;try{return p.setItem(h,"1"),p.removeItem(h),!0}catch(j){return!1}}function V(h){return new Promise(function(p,j){var n=document.createElement("script");n.type="text/javascript",n.src=h,n.onload=p,n.onerror=j,document.head.appendChild(n)})}function G(h){var p=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(h))return"";var j=flattenDeep(h.filter(function(n){if(Array.isArray(n)){var l=_slicedToArray(n,1),f=l[0];return f==="p"}return!1}).map(function(n){var l=flatten(n),f=_toArray(l),L=f[0],F=f.slice(1),i=F.filter(function(C){return typeof C=="string"&&!p.includes(C)}).join("");return[L,i]})).find(function(n){return n&&typeof n=="string"&&!p.includes(n)});return j}var K=function(){return x}},181632:function(P,y,t){"use strict";t.d(y,{Z:function(){return B}});var v=t(238416),o=t.n(v),m=t(627424),r=t.n(m),d=t(242122),u=t.n(d),x=t(670215),D=t.n(x),O=t(667294),X=t(777602),g=t(294184),z=t.n(g),V=t(73287),G=t(615624),K=t(548073),h=t(286665),p=t(986943),j=function(e){var A,Z=e.componentCls,R=e.antCls,N=e.carouselArrowSize,k=e.carouselDotOffset,J=e.marginXXS,tt=e.calc(N).mul(-1.25).equal(),Y=J;return o()({},Z,u()(u()({},(0,K.Wf)(e)),{},{".slick-slider":{position:"relative",display:"block",boxSizing:"border-box",touchAction:"pan-y",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",".slick-track, .slick-list":{transform:"translate3d(0, 0, 0)",touchAction:"pan-y"}},".slick-list":{position:"relative",display:"block",margin:0,padding:0,overflow:"hidden","&:focus":{outline:"none"},"&.dragging":{cursor:"pointer"},".slick-slide":(A={pointerEvents:"none"},o()(A,"input".concat(R,"-radio-input, input").concat(R,"-checkbox-input"),{visibility:"hidden"}),o()(A,"&.slick-active",o()({pointerEvents:"auto"},"input".concat(R,"-radio-input, input").concat(R,"-checkbox-input"),{visibility:"visible"})),o()(A,"> div > div",{verticalAlign:"bottom"}),A)},".slick-track":{position:"relative",top:0,insetInlineStart:0,display:"block","&::before, &::after":{display:"table",content:'""'},"&::after":{clear:"both"}},".slick-slide":{display:"none",float:"left",height:"100%",minHeight:1,img:{display:"block"},"&.dragging img":{pointerEvents:"none"}},".slick-initialized .slick-slide":{display:"block"},".slick-vertical .slick-slide":{display:"block",height:"auto"},".slick-arrow.slick-hidden":{display:"none"},".slick-prev, .slick-next":{position:"absolute",top:"50%",display:"block",width:N,height:N,marginTop:e.calc(N).mul(-1).div(2).equal(),padding:0,color:"transparent",fontSize:0,lineHeight:0,background:"transparent",border:0,outline:"none",cursor:"pointer","&:hover, &:focus":{color:"transparent",background:"transparent",outline:"none","&::before":{opacity:1}},"&.slick-disabled::before":{opacity:.25}},".slick-prev":{insetInlineStart:tt,"&::before":{content:'"\u2190"'}},".slick-next":{insetInlineEnd:tt,"&::before":{content:'"\u2192"'}},".slick-dots":{position:"absolute",insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:15,display:"flex !important",justifyContent:"center",paddingInlineStart:0,margin:0,listStyle:"none","&-bottom":{bottom:k},"&-top":{top:k,bottom:"auto"},li:{position:"relative",display:"inline-block",flex:"0 1 auto",boxSizing:"content-box",width:e.dotWidth,height:e.dotHeight,marginInline:Y,padding:0,textAlign:"center",textIndent:-999,verticalAlign:"top",transition:"all ".concat(e.motionDurationSlow),button:{position:"relative",display:"block",width:"100%",height:e.dotHeight,padding:0,color:"transparent",fontSize:0,background:e.colorBgContainer,border:0,borderRadius:e.dotHeight,outline:"none",cursor:"pointer",opacity:.3,transition:"all ".concat(e.motionDurationSlow),"&: hover, &:focus":{opacity:.75},"&::after":{position:"absolute",inset:e.calc(Y).mul(-1).equal(),content:'""'}},"&.slick-active":{width:e.dotActiveWidth,"& button":{background:e.colorBgContainer,opacity:1},"&: hover, &:focus":{opacity:1}}}}}))},n=function(e){var A=e.componentCls,Z=e.carouselDotOffset,R=e.marginXXS,N={width:e.dotHeight,height:e.dotWidth};return o()({},"".concat(A,"-vertical"),{".slick-dots":{top:"50%",bottom:"auto",flexDirection:"column",width:e.dotHeight,height:"auto",margin:0,transform:"translateY(-50%)","&-left":{insetInlineEnd:"auto",insetInlineStart:Z},"&-right":{insetInlineEnd:Z,insetInlineStart:"auto"},li:u()(u()({},N),{},{margin:"".concat((0,G.bf)(R)," 0"),verticalAlign:"baseline",button:N,"&.slick-active":u()(u()({},N),{},{button:N})})}})},l=function(e){var A=e.componentCls;return[o()({},"".concat(A,"-rtl"),{direction:"rtl",".slick-dots":o()({},"".concat(A,"-rtl&"),{flexDirection:"row-reverse"})}),o()({},"".concat(A,"-vertical"),{".slick-dots":o()({},"".concat(A,"-rtl&"),{flexDirection:"column"})})]},f=function(){var e=24;return{dotWidth:16,dotHeight:3,dotWidthActive:e,dotActiveWidth:e}},L=(0,h.I$)("Carousel",function(a){var e=a.controlHeightLG,A=a.controlHeightSM,Z=(0,p.TS)(a,{carouselArrowSize:a.calc(e).div(2).equal(),carouselDotOffset:a.calc(A).div(2).equal()});return[j(Z),n(Z),l(Z)]},f,{deprecatedTokens:[["dotWidthActive","dotActiveWidth"]]}),F=t(785893),i=["dots","arrows","draggable","waitForAnimate","dotPosition","vertical","rootClassName","className","style","id"],C=O.forwardRef(function(a,e){var A,Z=a.dots,R=Z===void 0?!0:Z,N=a.arrows,k=N===void 0?!1:N,J=a.draggable,tt=J===void 0?!1:J,Y=a.waitForAnimate,rt=Y===void 0?!1:Y,it=a.dotPosition,nt=it===void 0?"bottom":it,at=a.vertical,st=at===void 0?nt==="left"||nt==="right":at,dt=a.rootClassName,ut=a.className,vt=a.style,lt=a.id,gt=D()(a,i),ot=O.useContext(V.E_),ft=ot.getPrefixCls,ht=ot.direction,Q=ot.carousel,U=O.useRef(),ct=function(et){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;U.current.slickGoTo(et,q)};O.useImperativeHandle(e,function(){return{goTo:ct,autoPlay:U.current.innerSlider.autoPlay,innerSlider:U.current.innerSlider,prev:U.current.slickPrev,next:U.current.slickNext}},[U.current]);var W=O.useRef(O.Children.count(a.children));O.useEffect(function(){W.current!==O.Children.count(a.children)&&(ct(a.initialSlide||0,!1),W.current=O.Children.count(a.children))},[a.children]);var s=u()({vertical:st,className:z()(ut,Q==null?void 0:Q.className),style:u()(u()({},Q==null?void 0:Q.style),vt)},gt);s.effect==="fade"&&(s.fade=!0);var c=ft("carousel",s.prefixCls),S="slick-dots",M=!!R,b=z()(S,"".concat(S,"-").concat(nt),typeof R=="boolean"?!1:R==null?void 0:R.className),T=L(c),E=r()(T,2),H=E[0],I=E[1],$=z()(c,(A={},o()(A,"".concat(c,"-rtl"),ht==="rtl"),o()(A,"".concat(c,"-vertical"),s.vertical),A),I,dt);return H((0,F.jsx)("div",{className:$,id:lt,children:(0,F.jsx)(X.Z,u()(u()({ref:U},s),{},{dots:M,dotsClass:b,arrows:k,draggable:tt,verticalSwiping:st,waitForAnimate:rt}))}))}),B=C},862488:function(P){function y(t,v){for(var o=-1,m=v.length,r=t.length;++o<m;)t[r+o]=v[o];return t}P.exports=y},121078:function(P,y,t){var v=t(862488),o=t(137285);function m(r,d,u,x,D){var O=-1,X=r.length;for(u||(u=o),D||(D=[]);++O<X;){var g=r[O];d>0&&u(g)?d>1?m(g,d-1,u,x,D):v(D,g):x||(D[D.length]=g)}return D}P.exports=m},909454:function(P,y,t){var v=t(644239),o=t(637005),m="[object Arguments]";function r(d){return o(d)&&v(d)==m}P.exports=r},137285:function(P,y,t){var v=t(562705),o=t(135694),m=t(701469),r=v?v.isConcatSpreadable:void 0;function d(u){return m(u)||o(u)||!!(r&&u&&u[r])}P.exports=d},385564:function(P,y,t){var v=t(121078);function o(m){var r=m==null?0:m.length;return r?v(m,1):[]}P.exports=o},842348:function(P,y,t){var v=t(121078),o=1/0;function m(r){var d=r==null?0:r.length;return d?v(r,o):[]}P.exports=m},135694:function(P,y,t){var v=t(909454),o=t(637005),m=Object.prototype,r=m.hasOwnProperty,d=m.propertyIsEnumerable,u=v(function(){return arguments}())?v:function(x){return o(x)&&r.call(x,"callee")&&!d.call(x,"callee")};P.exports=u},701469:function(P){var y=Array.isArray;P.exports=y}}]);
