"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[73277],{624051:function(u,s,e){e.r(s);var d=e(667294),a=e(373656),i=e(75529),_=e(785893),r=a.ZP._InternalPanelDoNotUseOrYouWillBeFired;s.default=function(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i.ZP,{theme:{components:{Message:{contentPadding:40,contentBg:"#e6f4ff"}}},children:(0,_.jsx)(r,{content:"Hello World!",type:"error"})}),(0,_.jsx)(i.ZP,{theme:{components:{Message:{colorBgElevated:"#e6f4ff"}}},children:(0,_.jsx)(r,{content:"Hello World!",type:"error"})})]})}},860946:function(u,s,e){e.r(s);var d=e(627424),a=e.n(d),i=e(667294),_=e(373656),r=e(988872),n=e(785893),t=function(){var P=_.ZP.useMessage(),o=a()(P,2),l=o[0],E=o[1],c=function(){l.open({type:"success",content:"This is a prompt message with custom className and style",className:"custom-class",style:{marginTop:"20vh"}})};return(0,n.jsxs)(n.Fragment,{children:[E,(0,n.jsx)(r.ZP,{onClick:c,children:"Customized style"})]})};s.default=t},721655:function(u,s,e){e.r(s);var d=e(627424),a=e.n(d),i=e(667294),_=e(373656),r=e(988872),n=e(785893),t=function(){var P=_.ZP.useMessage(),o=a()(P,2),l=o[0],E=o[1],c=function(){l.open({type:"success",content:"This is a prompt message for success, and it will disappear in 10 seconds",duration:10})};return(0,n.jsxs)(n.Fragment,{children:[E,(0,n.jsx)(r.ZP,{onClick:c,children:"Customized display duration"})]})};s.default=t},779075:function(u,s,e){e.r(s);var d=e(627424),a=e.n(d),i=e(667294),_=e(373656),r=e(988872),n=e(785893),t=function(){var P=_.ZP.useMessage(),o=a()(P,2),l=o[0],E=o[1],c=function(){l.info("Hello, Ant Design!")};return(0,n.jsxs)(n.Fragment,{children:[E,(0,n.jsx)(r.ZP,{type:"primary",onClick:c,children:"Display normal message"})]})};s.default=t},159268:function(u,s,e){e.r(s);var d=e(667294),a=e(373656),i=e(988872),_=e(785893),r=function(){a.ZP.info("This is a normal message")},n=function(){return(0,_.jsx)(i.ZP,{type:"primary",onClick:r,children:"Static Method"})};s.default=n},991517:function(u,s,e){e.r(s);var d=e(627424),a=e.n(d),i=e(667294),_=e(373656),r=e(988872),n=e(785893),t=function(){var P=_.ZP.useMessage(),o=a()(P,2),l=o[0],E=o[1],c=function(){l.open({type:"loading",content:"Action in progress..",duration:0}),setTimeout(l.destroy,2500)};return(0,n.jsxs)(n.Fragment,{children:[E,(0,n.jsx)(r.ZP,{onClick:c,children:"Display a loading indicator"})]})};s.default=t},758768:function(u,s,e){e.r(s);var d=e(627424),a=e.n(d),i=e(667294),_=e(373656),r=e(945016),n=e(988872),t=e(785893),D=function(){var o=_.ZP.useMessage(),l=a()(o,2),E=l[0],c=l[1],M=function(){E.open({type:"success",content:"This is a success message"})},O=function(){E.open({type:"error",content:"This is an error message"})},g=function(){E.open({type:"warning",content:"This is a warning message"})};return(0,t.jsxs)(t.Fragment,{children:[c,(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(n.ZP,{onClick:M,children:"Success"}),(0,t.jsx)(n.ZP,{onClick:O,children:"Error"}),(0,t.jsx)(n.ZP,{onClick:g,children:"Warning"})]})]})};s.default=D},342634:function(u,s,e){e.r(s);var d=e(667294),a=e(373656),i=e(785893),_=a.ZP._InternalPanelDoNotUseOrYouWillBeFired;s.default=function(){return(0,i.jsx)(_,{content:"Hello World!",type:"error"})}},70527:function(u,s,e){e.r(s);var d=e(627424),a=e.n(d),i=e(667294),_=e(373656),r=e(988872),n=e(785893),t=function(){var P=_.ZP.useMessage(),o=a()(P,2),l=o[0],E=o[1],c=function(){l.open({type:"loading",content:"Action in progress..",duration:2.5}).then(function(){return _.ZP.success("Loading finished",2.5)}).then(function(){return _.ZP.info("Loading finished",2.5)})};return(0,n.jsxs)(n.Fragment,{children:[E,(0,n.jsx)(r.ZP,{onClick:c,children:"Display sequential messages"})]})};s.default=t},697893:function(u,s,e){e.r(s);var d=e(627424),a=e.n(d),i=e(667294),_=e(373656),r=e(988872),n=e(785893),t=function(){var P=_.ZP.useMessage(),o=a()(P,2),l=o[0],E=o[1],c="updatable",M=function(){l.open({key:c,type:"loading",content:"Loading..."}),setTimeout(function(){l.open({key:c,type:"success",content:"Loaded!",duration:2})},1e3)};return(0,n.jsxs)(n.Fragment,{children:[E,(0,n.jsx)(r.ZP,{type:"primary",onClick:M,children:"Open the message box"})]})};s.default=t}}]);