"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[29183],{775079:function(j,o,e){e.r(o);var T=e(627424),c=e.n(T),i=e(667294),t=e(945016),a=e(979331),n=e(464778),_=e(785893),d=function(){var l=i.useState(!0),v=c()(l,2),r=v[0],E=v[1],f=i.useState(!0),h=c()(f,2),P=h[0],D=h[1];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(t.Z,{children:[(0,_.jsx)(a.Z,{checkedChildren:"inkBar",unCheckedChildren:"inkBar",checked:r,onChange:function(){return E(!r)}}),(0,_.jsx)(a.Z,{checkedChildren:"tabPane",unCheckedChildren:"tabPane",checked:P,onChange:function(){return D(!P)}})]}),(0,_.jsx)(n.Z,{animated:{inkBar:r,tabPane:P},items:[{label:"Bamboo",key:"1",children:"Hello Bamboo!",style:{height:200,boxShadow:"0 0 3px rgba(255, 0, 0, 0.5)"}},{label:"Little",key:"2",children:"Hi Little!",style:{height:300,boxShadow:"0 0 3px rgba(0, 255, 0, 0.5)"}},{label:"Light",key:"3",children:"Welcome Light!",style:{height:100,boxShadow:"0 0 3px rgba(0, 0, 255, 0.5)"}}]})]})};o.default=d},64692:function(j,o,e){e.r(o);var T=e(667294),c=e(464778),i=e(785893),t=function(d){console.log(d)},a=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],n=function(){return(0,i.jsx)(c.Z,{defaultActiveKey:"1",items:a,onChange:t})};o.default=n},901198:function(j,o,e){e.r(o);var T=e(459400),c=e.n(T),i=e(667294),t=e(309819),a=e(464778),n=e(785893),_,d=(0,t.kc)(function(v){var r=v.token,E=v.css,f=".ant-tabs";return E(_||(_=c()([`
    `,"",`-card {
      `,`-content {
        padding: `,`px;
        background: `,`;
      }

      `,`-nav {
        margin: 0;

        `,"-nav-wrap > ","-nav-list > ",`-tab {
          background: transparent;
          border-color: transparent;

          &-active {
            border-color: `,`;
            background: `,`;
          }
        }

        &::before {
          display: none;
        }
      }
    }
  `])),f,f,f,r.padding,r.colorBgContainer,f,f,f,f,r.colorBorderBg,r.colorBgContainer)}),s=new Array(3).fill(null).map(function(v,r){var E=String(r+1);return{label:"Tab Title ".concat(E),key:E,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Content of Tab Pane ",E]}),(0,n.jsxs)("p",{children:["Content of Tab Pane ",E]}),(0,n.jsxs)("p",{children:["Content of Tab Pane ",E]})]})}}),l=function(){var r=d(),E=r.styles;return(0,n.jsx)("div",{className:E,children:(0,n.jsx)(a.Z,{type:"card",items:s})})};o.default=l},448100:function(j,o,e){e.r(o);var T=e(667294),c=e(464778),i=e(785893),t=function(_){console.log(_)},a=function(){return(0,i.jsx)(c.Z,{onChange:t,type:"card",items:new Array(3).fill(null).map(function(_,d){var s=String(d+1);return{label:"Tab ".concat(s),key:s,children:"Content of Tab Pane ".concat(s)}})})};o.default=a},417704:function(j,o,e){e.r(o);var T=e(667294),c=e(464778),i=e(785893),t=function(){return(0,i.jsx)(c.Z,{defaultActiveKey:"1",centered:!0,items:new Array(3).fill(null).map(function(n,_){var d=String(_+1);return{label:"Tab ".concat(d),key:d,children:"Content of Tab Pane ".concat(d)}})})};o.default=t},847047:function(j,o,e){e.r(o);var T=e(667294),c=e(773036),i=e(464778),t=e(988872),a=e(785893),n=function(){return(0,a.jsx)(c.ZP,{theme:{components:{Tabs:{cardBg:"#f6ffed",cardHeight:60,cardPadding:"20px",cardPaddingSM:"20px",cardPaddingLG:"20px",titleFontSize:20,titleFontSizeLG:20,titleFontSizeSM:20,inkBarColor:"#52C41A",horizontalMargin:"0 0 12px 0",horizontalItemGutter:12,horizontalItemPadding:"20px",horizontalItemPaddingSM:"20px",horizontalItemPaddingLG:"20px",verticalItemPadding:"8px",verticalItemMargin:"4px 0 0 0",itemColor:"rgba(0,0,0,0.85)",itemSelectedColor:"#389e0d",itemHoverColor:"#d9f7be",itemActiveColor:"#b7eb8f",cardGutter:12}}},children:(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{defaultActiveKey:"1",tabBarExtraContent:(0,a.jsx)(t.ZP,{children:"Extra Action"}),style:{marginBottom:32},items:new Array(3).fill(null).map(function(d,s){var l=String(s+1);return{label:"Tab ".concat(l),key:l,children:"Content of tab ".concat(l)}})}),(0,a.jsx)(i.Z,{tabPosition:"left",defaultActiveKey:"1",tabBarExtraContent:(0,a.jsx)(t.ZP,{children:"Extra Action"}),style:{marginBottom:32},items:new Array(3).fill(null).map(function(d,s){var l=String(s+1);return{label:"Tab ".concat(l),key:l,children:"Content of tab ".concat(l)}})}),(0,a.jsx)(i.Z,{size:"small",defaultActiveKey:"1",tabBarExtraContent:(0,a.jsx)(t.ZP,{children:"Extra Action"}),style:{marginBottom:32},items:new Array(3).fill(null).map(function(d,s){var l=String(s+1);return{label:"Tab ".concat(l),key:l,children:"Content of tab ".concat(l)}})}),(0,a.jsx)(i.Z,{size:"large",defaultActiveKey:"1",tabBarExtraContent:(0,a.jsx)(t.ZP,{children:"Extra Action"}),style:{marginBottom:32},items:new Array(3).fill(null).map(function(d,s){var l=String(s+1);return{label:"Tab ".concat(l),key:l,children:"Content of tab ".concat(l)}})}),(0,a.jsx)(i.Z,{defaultActiveKey:"1",centered:!0,type:"card",items:new Array(3).fill(null).map(function(d,s){var l=String(s+1);return{disabled:s===2,label:"Tab ".concat(l),key:l,children:"Content of Tab Pane ".concat(l)}})}),(0,a.jsx)(i.Z,{size:"small",defaultActiveKey:"1",centered:!0,type:"card",items:new Array(3).fill(null).map(function(d,s){var l=String(s+1);return{disabled:s===2,label:"Tab ".concat(l),key:l,children:"Content of Tab Pane ".concat(l)}})}),(0,a.jsx)(i.Z,{size:"large",defaultActiveKey:"1",centered:!0,type:"card",items:new Array(3).fill(null).map(function(d,s){var l=String(s+1);return{disabled:s===2,label:"Tab ".concat(l),key:l,children:"Content of Tab Pane ".concat(l)}})})]})})};o.default=n},214941:function(j,o,e){e.r(o);var T=e(600861),c=e.n(T),i=e(627424),t=e.n(i),a=e(667294),n=e(988872),_=e(464778),d=e(785893),s=new Array(2).fill(null).map(function(v,r){var E=String(r+1);return{label:"Tab ".concat(E),children:"Content of Tab Pane ".concat(r+1),key:E}}),l=function(){var r=(0,a.useState)(s[0].key),E=t()(r,2),f=E[0],h=E[1],P=(0,a.useState)(s),D=t()(P,2),b=D[0],x=D[1],A=(0,a.useRef)(0),g=function(u){h(u)},y=function(){var u="newTab".concat(A.current++);x([].concat(c()(b),[{label:"New Tab",children:"New Tab Pane",key:u}])),h(u)},B=function(u){var m=b.findIndex(function(I){return I.key===u}),O=b.filter(function(I){return I.key!==u});if(O.length&&u===f){var K=O[m===O.length?m-1:m].key;h(K)}x(O)},C=function(u,m){m==="add"?y():B(u)};return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{marginBottom:16},children:(0,d.jsx)(n.ZP,{onClick:y,children:"ADD"})}),(0,d.jsx)(_.Z,{hideAdd:!0,onChange:g,activeKey:f,type:"editable-card",onEdit:C,items:b})]})};o.default=l},415023:function(j,o,e){e.r(o);var T=e(667294),c=e(464778),i=e(785893),t=function(d){console.log(d)},a=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],n=function(){return(0,i.jsx)(c.Z,{defaultActiveKey:"1",items:a,onChange:t,indicatorSize:function(s){return s-16}})};o.default=n},657737:function(j,o,e){e.r(o);var T=e(627424),c=e.n(T),i=e(242122),t=e.n(i),a=e(670215),n=e.n(a),_=e(960887),d=e(245587),s=e(724285),l=e(667294),v=e(464778),r=e(785893),E=["className"],f=function(D){var b=D.className,x=n()(D,E),A=(0,d.nB)({id:x["data-node-key"]}),g=A.attributes,y=A.listeners,B=A.setNodeRef,C=A.transform,M=A.transition,u=t()(t()({},x.style),{},{transform:s.ux.Transform.toString(C&&t()(t()({},C),{},{scaleX:1})),transition:M,cursor:"move"});return l.cloneElement(x.children,t()(t()({ref:B,style:u},g),y))},h=function(){var D=(0,l.useState)([{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}]),b=c()(D,2),x=b[0],A=b[1],g=(0,_.VT)(_.we,{activationConstraint:{distance:10}}),y=function(C){var M=C.active,u=C.over;M.id!==(u==null?void 0:u.id)&&A(function(m){var O=m.findIndex(function(I){return I.key===M.id}),K=m.findIndex(function(I){return I.key===(u==null?void 0:u.id)});return(0,d.Rp)(m,O,K)})};return(0,r.jsx)(v.Z,{items:x,renderTabBar:function(C,M){return(0,r.jsx)(_.LB,{sensors:[g],onDragEnd:y,children:(0,r.jsx)(d.Fo,{items:x.map(function(u){return u.key}),strategy:d.PG,children:(0,r.jsx)(M,t()(t()({},C),{},{children:function(m){return(0,l.createElement)(f,t()(t()({},m.props),{},{key:m.key}),m)}}))})})}})};o.default=h},679465:function(j,o,e){e.r(o);var T=e(242122),c=e.n(T),i=e(667294),t=e(965516),a=e(464778),n=e(577134),_=e(785893),d=new Array(3).fill(null).map(function(l,v){var r=String(v+1);return{label:"Tab ".concat(r),key:r,children:"Content of Tab Pane ".concat(r),style:v===0?{height:200}:void 0}}),s=function(){var v=t.Z.useToken(),r=v.token.colorBgContainer,E=function(h,P){return(0,_.jsx)(n.Z,{offsetTop:0,offsetBottom:20,style:{zIndex:1},children:(0,_.jsx)(P,c()(c()({},h),{},{style:{background:r}}))})};return(0,_.jsx)(a.Z,{defaultActiveKey:"1",renderTabBar:E,items:d})};o.default=s},291913:function(j,o,e){e.r(o);var T=e(667294),c=e(464778),i=e(785893),t=function(){return(0,i.jsx)(c.Z,{defaultActiveKey:"1",items:[{label:"Tab 1",key:"1",children:"Tab 1"},{label:"Tab 2",key:"2",children:"Tab 2",disabled:!0},{label:"Tab 3",key:"3",children:"Tab 3"}]})};o.default=t},405988:function(j,o,e){e.r(o);var T=e(600861),c=e.n(T),i=e(627424),t=e.n(i),a=e(667294),n=e(464778),_=e(785893),d=[{label:"Tab 1",children:"Content of Tab 1",key:"1"},{label:"Tab 2",children:"Content of Tab 2",key:"2"},{label:"Tab 3",children:"Content of Tab 3",key:"3",closable:!1}],s=function(){var v=(0,a.useState)(d[0].key),r=t()(v,2),E=r[0],f=r[1],h=(0,a.useState)(d),P=t()(h,2),D=P[0],b=P[1],x=(0,a.useRef)(0),A=function(M){f(M)},g=function(){var M="newTab".concat(x.current++),u=c()(D);u.push({label:"New Tab",children:"Content of new Tab",key:M}),b(u),f(M)},y=function(M){var u=E,m=-1;D.forEach(function(K,I){K.key===M&&(m=I-1)});var O=D.filter(function(K){return K.key!==M});O.length&&u===M&&(m>=0?u=O[m].key:u=O[0].key),b(O),f(u)},B=function(M,u){u==="add"?g():y(M)};return(0,_.jsx)(n.Z,{type:"editable-card",onChange:A,activeKey:E,onEdit:B,items:D})};o.default=s},790005:function(j,o,e){e.r(o);var T=e(238416),c=e.n(T),i=e(242122),t=e.n(i),a=e(627424),n=e.n(a),_=e(667294),d=e(7575),s=e(988872),l=e(464778),v=e(315816),r=e(785893),E=d.Z.Group,f=(0,r.jsx)(s.ZP,{children:"Extra Action"}),h={left:(0,r.jsx)(s.ZP,{className:"tabs-extra-demo-button",children:"Left Extra Action"}),right:(0,r.jsx)(s.ZP,{children:"Right Extra Action"})},P=["left","right"],D=new Array(3).fill(null).map(function(x,A){var g=String(A+1);return{label:"Tab ".concat(g),key:g,children:"Content of tab ".concat(g)}}),b=function(){var A=(0,_.useState)(["left","right"]),g=n()(A,2),y=g[0],B=g[1],C=(0,_.useMemo)(function(){return y.length===0?null:y.reduce(function(M,u){return t()(t()({},M),{},c()({},u,h[u]))},{})},[y]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{tabBarExtraContent:f,items:D}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{children:"You can also specify its direction or both side"}),(0,r.jsx)(v.Z,{}),(0,r.jsx)(E,{options:P,value:y,onChange:function(u){B(u)}}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(l.Z,{tabBarExtraContent:C,items:D})]})};o.default=b},434437:function(j,o,e){e.r(o);var T=e(667294),c=e(735603),i=e(161462),t=e(464778),a=e(785893),n=function(){return(0,a.jsx)(t.Z,{defaultActiveKey:"2",items:[c.Z,i.Z].map(function(d,s){var l=String(s+1);return{label:(0,a.jsxs)("span",{children:[(0,a.jsx)(d,{}),"Tab ",l]}),key:l,children:"Tab ".concat(l)}})})};o.default=n},708009:function(j,o,e){e.r(o);var T=e(627424),c=e.n(T),i=e(667294),t=e(469181),a=e(464778),n=e(785893),_=t.Z.Option,d=["left","right","top","bottom"],s=function(){var v=(0,i.useState)(void 0),r=c()(v,2),E=r[0],f=r[1],h=(0,i.useState)(void 0),P=c()(h,2),D=P[0],b=P[1],x=(0,i.useState)(void 0),A=c()(x,2),g=A[0],y=A[1],B=(0,i.useState)(void 0),C=c()(B,2),M=C[0],u=C[1];return(0,n.jsxs)("div",{children:[(0,n.jsx)(t.Z,{style:{width:200},onChange:function(O){f(O)},children:d.map(function(m){return(0,n.jsxs)(_,{value:m,children:["Parent - ",m]},m)})}),(0,n.jsx)(t.Z,{style:{width:200},onChange:function(O){b(O)},children:d.map(function(m){return(0,n.jsxs)(_,{value:m,children:["Child - ",m]},m)})}),(0,n.jsxs)(t.Z,{style:{width:200},onChange:function(O){y(O)},children:[(0,n.jsx)(_,{value:"line",children:"Parent - line"}),(0,n.jsx)(_,{value:"card",children:"Parent - card"}),(0,n.jsx)(_,{value:"editable-card",children:"Parent - card edit"})]}),(0,n.jsxs)(t.Z,{style:{width:200},onChange:function(O){u(O)},children:[(0,n.jsx)(_,{value:"line",children:"Child - line"}),(0,n.jsx)(_,{value:"card",children:"Child - card"}),(0,n.jsx)(_,{value:"editable-card",children:"Parent - card edit"})]}),(0,n.jsx)(a.Z,{defaultActiveKey:"1",tabPosition:E,type:g,items:[{label:"Tab 1",key:"1",children:(0,n.jsx)(a.Z,{defaultActiveKey:"1",tabPosition:D,type:M,style:{height:300},items:new Array(20).fill(null).map(function(m,O){var K=String(O);return{label:"Tab ".concat(K),key:K,children:"TTTT ".concat(K)}})})},{label:"Tab 2",key:"2",children:"Content of Tab Pane 2"}]})]})};o.default=s},175833:function(j,o,e){e.r(o);var T=e(627424),c=e.n(T),i=e(667294),t=e(945016),a=e(371707),n=e(464778),_=e(785893),d=function(){var l=(0,i.useState)("left"),v=c()(l,2),r=v[0],E=v[1],f=function(P){E(P.target.value)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(t.Z,{style:{marginBottom:24},children:["Tab position:",(0,_.jsxs)(a.ZP.Group,{value:r,onChange:f,children:[(0,_.jsx)(a.ZP.Button,{value:"top",children:"top"}),(0,_.jsx)(a.ZP.Button,{value:"bottom",children:"bottom"}),(0,_.jsx)(a.ZP.Button,{value:"left",children:"left"}),(0,_.jsx)(a.ZP.Button,{value:"right",children:"right"})]})]}),(0,_.jsx)(n.Z,{tabPosition:r,items:new Array(3).fill(null).map(function(h,P){var D=String(P+1);return{label:"Tab ".concat(D),key:D,children:"Content of Tab ".concat(D)}})})]})};o.default=d},7942:function(j,o,e){e.r(o);var T=e(627424),c=e.n(T),i=e(667294),t=e(371707),a=e(464778),n=e(785893),_=function(){var s=(0,i.useState)("small"),l=c()(s,2),v=l[0],r=l[1],E=function(h){r(h.target.value)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)(t.ZP.Group,{value:v,onChange:E,style:{marginBottom:16},children:[(0,n.jsx)(t.ZP.Button,{value:"small",children:"Small"}),(0,n.jsx)(t.ZP.Button,{value:"middle",children:"Middle"}),(0,n.jsx)(t.ZP.Button,{value:"large",children:"Large"})]}),(0,n.jsx)(a.Z,{defaultActiveKey:"1",size:v,style:{marginBottom:32},items:new Array(3).fill(null).map(function(f,h){var P=String(h+1);return{label:"Tab ".concat(P),key:P,children:"Content of tab ".concat(P)}})}),(0,n.jsx)(a.Z,{defaultActiveKey:"1",type:"card",size:v,items:new Array(3).fill(null).map(function(f,h){var P=String(h+1);return{label:"Card Tab ".concat(P),key:P,children:"Content of card tab ".concat(P)}})})]})};o.default=_},203582:function(j,o,e){e.r(o);var T=e(627424),c=e.n(T),i=e(667294),t=e(371707),a=e(464778),n=e(785893),_=function(){var s=(0,i.useState)("top"),l=c()(s,2),v=l[0],r=l[1],E=function(h){r(h.target.value)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)(t.ZP.Group,{onChange:E,value:v,style:{marginBottom:8},children:[(0,n.jsx)(t.ZP.Button,{value:"top",children:"Horizontal"}),(0,n.jsx)(t.ZP.Button,{value:"left",children:"Vertical"})]}),(0,n.jsx)(a.Z,{defaultActiveKey:"1",tabPosition:v,style:{height:220},items:new Array(30).fill(null).map(function(f,h){var P=String(h);return{label:"Tab-".concat(P),key:P,disabled:h===28,children:"Content of tab ".concat(P)}})})]})};o.default=_}}]);