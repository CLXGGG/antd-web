(self.webpackChunkantd=self.webpackChunkantd||[]).push([[83509],{766764:function(h,l){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"warning",theme:"filled"};l.default=e},674434:function(h,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;const f=d(e(918781));function d(i){return i&&i.__esModule?i:{default:i}}const s=f;l.default=s,h.exports=s},973403:function(h,l,e){"use strict";e.d(l,{Z:function(){return m}});var f=e(487462),d=e(667294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},i=s,y=e(713401),g=function(M,A){return d.createElement(y.Z,(0,f.Z)({},M,{ref:A,icon:i}))},m=d.forwardRef(g)},918781:function(h,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return I}});var f=m(e(667294)),d=y(e(766764)),s=y(e(592074));function i(t,u,a){return u in t?Object.defineProperty(t,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[u]=a,t}function y(t){return t&&t.__esModule?t:{default:t}}function g(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,a=new WeakMap;return(g=function(r){return r?a:u})(t)}function m(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var a=g(u);if(a&&a.has(t))return a.get(t);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in t)if(p!=="default"&&Object.prototype.hasOwnProperty.call(t,p)){var o=c?Object.getOwnPropertyDescriptor(t,p):null;o&&(o.get||o.set)?Object.defineProperty(r,p,o):r[p]=t[p]}return r.default=t,a&&a.set(t,r),r}function x(t){for(var u=1;u<arguments.length;u++){var a=arguments[u]!=null?arguments[u]:{},r=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable}))),r.forEach(function(c){i(t,c,a[c])})}return t}function M(t,u){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);u&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),a.push.apply(a,r)}return a}function A(t,u){return u=u!=null?u:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(u)):M(Object(u)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(u,a))}),t}var E=function(t,u){return f.createElement(s.default,A(x({},t),{ref:u,icon:d.default}))},I=f.forwardRef(E)},929975:function(h,l,e){"use strict";e.r(l);var f=e(973403),d=e(733851),s=e(667294),i=e(925068),y=e(988872),g=e(373638),m=e(785893),x={"docs/spec/download":"docs/resources","docs/spec/work-with-us":"docs/resources"},M=function(E){var I=E.router,t=(0,d.TH)(),u=t.pathname,a=g.KE(u);return(0,s.useEffect)(function(){for(var r=Object.keys(x),c=0;c<r.length;c+=1){var p=r[c];u.includes(p)&&I.replace(g.J1("/".concat(x[p]),a).pathname)}var o=window,O=o.yuyanMonitor;O==null||O.log({code:11,msg:"Page not found: ".concat(location.href,"; Source: ").concat(document.referrer)})},[]),(0,m.jsx)(i.ZP,{status:"404",title:"404",subTitle:a?"\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u8C8C\u4F3C\u4E0D\u5B58\u5728\uFF1F":"Sorry, the page you visited does not exist.",extra:(0,m.jsx)(d.rU,{to:g.J1("/",a),children:(0,m.jsx)(y.ZP,{type:"primary",icon:(0,m.jsx)(f.Z,{}),children:a?"\u8FD4\u56DE Ant Design \u9996\u9875":"Back to home page"})})})};l.default=M},373638:function(h,l,e){"use strict";e.d(l,{J1:function(){return A},Is:function(){return a},Fy:function(){return I},KE:function(){return M},qE:function(){return E}});var f=e(451589),d=e(627424),s=e(242122),i=e(385564),y=e(842348),g=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),m={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":g?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function x(r,c,p,o){var O=r.map(function(n){return n.meta}).filter(function(n){return!n.skip}),v=[],_=function(P,b){return(P.order||0)-(b.order||0)};O.sort(_).forEach(function(n){if(n.category&&(n.category=n.category[c]||n.category),n.type&&(n.type=n.type[c]||n.type),n!=null&&n.title&&(n.title=n.title[c]||n.title),!n.category){v.push(n);return}if(n.category==="Components"&&n.type){var P=v.find(function(D){return(D==null?void 0:D.title)===n.type});P||(P={type:"type",title:n.type,children:[],order:o[n.type]},v.push(P)),P.children=P.children||[],P.children.push(n);return}var b=v.find(function(D){return(D==null?void 0:D.title)===n.category});if(b||(b={type:"category",title:n.category,children:[],order:p[n.category]},v.push(b)),b.children=b.children||[],n.type){var w=b.children.filter(function(D){return(D==null?void 0:D.title)===n.type})[0];w||(w={type:"type",title:n.type,children:[],order:o[n.type]},b.children.push(w)),w.children=w.children||[],w.children.push(n)}else b.children.push(n)});function C(n){return n.sort(_).map(function(P){return P.children?_objectSpread(_objectSpread({},P),{},{children:C(P.children)}):P})}return C(v)}function M(r){return/-cn\/?$/.test(r)}function A(r,c,p,o){var O=r.startsWith("/")?r:"/".concat(r),v;if(c?O==="/"?v="/index-cn":O.endsWith("/")?v=O.replace(/\/$/,"-cn/"):(v="".concat(O,"-cn"),v=v.replace(/(-cn)+/,"-cn")):v=/\/?index-cn/.test(O)?"/":O.replace("-cn",""),o){var _=o[c?"zhCN":"enUS"];v+="#".concat(_)}return{pathname:v,search:p}}function E(r){var c="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",p=new Image,o,O=function(_){o||(o=!0,p.src="",r(_))};return p.onload=function(){return O("responded")},p.onerror=function(){return O("error")},p.src=c,setTimeout(function(){return O("timeout")},1500)}function I(){var r="test",c=window.localStorage;try{return c.setItem(r,"1"),c.removeItem(r),!0}catch(p){return!1}}function t(r){return new Promise(function(c,p){var o=document.createElement("script");o.type="text/javascript",o.src=r,o.onload=c,o.onerror=p,document.head.appendChild(o)})}function u(r){var c=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(r))return"";var p=flattenDeep(r.filter(function(o){if(Array.isArray(o)){var O=_slicedToArray(o,1),v=O[0];return v==="p"}return!1}).map(function(o){var O=flatten(o),v=_toArray(O),_=v[0],C=v.slice(1),n=C.filter(function(P){return typeof P=="string"&&!c.includes(P)}).join("");return[_,n]})).find(function(o){return o&&typeof o=="string"&&!c.includes(o)});return p}var a=function(){return m}},862488:function(h){function l(e,f){for(var d=-1,s=f.length,i=e.length;++d<s;)e[i+d]=f[d];return e}h.exports=l},121078:function(h,l,e){var f=e(862488),d=e(137285);function s(i,y,g,m,x){var M=-1,A=i.length;for(g||(g=d),x||(x=[]);++M<A;){var E=i[M];y>0&&g(E)?y>1?s(E,y-1,g,m,x):f(x,E):m||(x[x.length]=E)}return x}h.exports=s},909454:function(h,l,e){var f=e(644239),d=e(637005),s="[object Arguments]";function i(y){return d(y)&&f(y)==s}h.exports=i},137285:function(h,l,e){var f=e(562705),d=e(135694),s=e(701469),i=f?f.isConcatSpreadable:void 0;function y(g){return s(g)||d(g)||!!(i&&g&&g[i])}h.exports=y},385564:function(h,l,e){var f=e(121078);function d(s){var i=s==null?0:s.length;return i?f(s,1):[]}h.exports=d},842348:function(h,l,e){var f=e(121078),d=1/0;function s(i){var y=i==null?0:i.length;return y?f(i,d):[]}h.exports=s},135694:function(h,l,e){var f=e(909454),d=e(637005),s=Object.prototype,i=s.hasOwnProperty,y=s.propertyIsEnumerable,g=f(function(){return arguments}())?f:function(m){return d(m)&&i.call(m,"callee")&&!y.call(m,"callee")};h.exports=g},701469:function(h){var l=Array.isArray;h.exports=l}}]);