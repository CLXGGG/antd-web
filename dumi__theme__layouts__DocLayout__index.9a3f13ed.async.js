"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[40367],{148050:function(me,kn,r){r.d(kn,{Z:function(){return K}});var Tn=r(459400),C=r.n(Tn),Rn=r(667294),w=r(186548),On=r(309819),dn=r(879587),bn=r(785893),u,c="https://github.com/ant-design/ant-design/edit/master/",W=(0,On.kc)(function(b){var fn=b.token,Fn=b.css,m=fn.colorIcon,H=fn.colorText,P=fn.iconCls;return{editButton:Fn(u||(u=C()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),P,m,H)}});function K(b){var fn=b.title,Fn=b.filename,m=W(),H=m.styles;return(0,bn.jsx)(dn.Z,{title:fn,children:(0,bn.jsx)("a",{className:H.editButton,href:"".concat(c).concat(Fn),target:"_blank",rel:"noopener noreferrer",children:(0,bn.jsx)(w.Z,{})})})}},847740:function(me,kn,r){r.r(kn),r.d(kn,{default:function(){return Pr}});var Tn=r(627424),C=r.n(Tn),Rn=r(294184),w=r.n(Rn),On=r(727484),dn=r.n(On),bn=r(533852),u=r(990845),c=r(667294),W=r(715778),K=r(773036),b=r(302559),fn=r(438746),Fn=r(459400),m=r.n(Fn),H=r(370917),P=r(309819),n=r(785893),Xn,zn={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},_n=function(){var e=(0,P.Fg)(),t=function s(p){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return f<=10?`
.palette-`.concat(p,"-").concat(f,` {
  background: `).concat(e["".concat(p,"-").concat(f)],`;
}
`).concat(s(p,f+1),`
    `):""},a=function s(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return p<=13?`
.palette-gray-`.concat(p,` {
  background: `).concat(zn[p],`;
}
`).concat(s(p+1),`
    `):""};return(0,n.jsx)(H.xB,{styles:(0,H.iv)(Xn||(Xn=m()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),a())})},ne=_n,Kn,ee=function(){return(0,n.jsx)(H.xB,{styles:(0,H.iv)(Kn||(Kn=m()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},$n,se=function(){var i=(0,P.Fg)();return(0,n.jsx)(H.xB,{styles:(0,H.iv)($n||($n=m()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),i.colorText,i.fontSize,i.fontFamily,i.lineHeight,i.colorBgContainer)})},te,Un=function(){var i=(0,P.Fg)(),e=i.anchorTop;return(0,n.jsx)(H.xB,{styles:(0,H.iv)(te||(te=m()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),e)})},Ln=r(510274),Jn,oe=function(){var e=(0,P.Fg)(),t=e.antCls,a=e.colorPrimary;return(0,n.jsx)(H.xB,{styles:(0,H.iv)(Jn||(Jn=m()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.colorText,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,a,new Ln.C(a).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new Ln.C(a).setAlpha(.75).toHexString(),t,t,new Ln.C(a).setAlpha(.75).toHexString(),t,t,t,t,new Ln.C(a).setAlpha(.6).toHexString(),t,t,t)})},ce=oe,re,ae=function(){var i=(0,P.Fg)();return(0,n.jsx)(H.xB,{styles:(0,H.iv)(re||(re=m()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),i.colorText,i.fontSize,i.borderRadius)})},Yn,In=function(){var e=(0,P.Fg)(),t=e.antCls,a=e.iconCls;return(0,n.jsx)(H.xB,{styles:(0,H.iv)(Yn||(Yn=m()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,a,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,a,e.colorBgContainer,a,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},M=In,o,l=function(){var i=(0,P.Fg)(),e=i.antCls,t=i.iconCls;return(0,n.jsx)(H.xB,{styles:(0,H.iv)(o||(o=m()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,e,i.colorPrimary,t,e)})},d,v=function(){var i=(0,P.Fg)(),e=i.iconCls;return(0,n.jsx)(H.xB,{styles:(0,H.iv)(d||(d=m()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),i.colorIcon,i.colorIconHover,i.colorBorder,i.colorTextSecondary,e,i.colorLinkHover)})},y,k=function(){return(0,n.jsx)(H.xB,{styles:(0,H.iv)(y||(y=m()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},A,h=function(){var i=(0,P.Fg)();return(0,n.jsx)(H.xB,{styles:(0,H.iv)(A||(A=m()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),i.screenLG,i.colorBgContainer,i.colorSplit,i.colorLink,i.colorBgContainer)})},G,F=function(){var i=(0,P.Fg)();return(0,n.jsx)(H.xB,{styles:(0,H.iv)(G||(G=m()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),i.colorPrimary,i.colorPrimary,i.colorPrimary,i.colorPrimary,i.colorPrimary)})},J,an=function(){var i=(0,P.Fg)();return(0,n.jsx)(H.xB,{styles:(0,H.iv)(J||(J=m()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),i.colorPrimary,i.colorError,i.colorText,i.colorTextSecondary,i.colorBgContainer,i.borderRadius,i.colorBgContainer,i.colorBgContainer)})},un,ln="dumi-default-",en=function(){var i=(0,P.Fg)();return(0,n.jsx)(H.xB,{styles:(0,H.iv)(un||(un=m()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),ln,i.colorText,i.colorBgContainer,i.colorBgContainer,i.colorTextPlaceholder,ln,i.colorBgElevated,i.colorBgElevated,ln,i.controlItemBgActive,i.controlItemBgHover,i.colorText,i.colorText)})},$,xn=function(){return(0,n.jsx)(H.xB,{styles:(0,H.iv)($||($=m()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},tn=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se,{}),(0,n.jsx)(Un,{}),(0,n.jsx)(ce,{}),(0,n.jsx)(ae,{}),(0,n.jsx)(M,{}),(0,n.jsx)(l,{}),(0,n.jsx)(v,{}),(0,n.jsx)(k,{}),(0,n.jsx)(h,{}),(0,n.jsx)(F,{}),(0,n.jsx)(an,{}),(0,n.jsx)(xn,{}),(0,n.jsx)(ne,{}),(0,n.jsx)(ee,{}),(0,n.jsx)(en,{})]})},pn=tn,An=r(242122),S=r.n(An),sn=r(238416),En=r.n(sn),Hn=r(301210),Vn=r(660532),Q=r(469181),vn=r(344682),Mn=r(11739),de=r(664095),Wn=r(883458),Pn=r(722449),Qn=r(316165),ue="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",Be="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",ye=function(e){return(0,n.jsx)(Qn.Z,S()(S()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?ue:Be})})}))},ge=ye,we=r(562925),yn=r(373638),ie=r(438199),qn,le,je=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.headerHeight,s=e.colorTextHeading,p=e.fontFamily,f=e.mobileMaxWidth;return{logo:t(qn||(qn=m()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),a,s,p,a,s,f),title:t(le||(le=m()([`
      line-height: 32px;
    `])))}}),Oe=function(e){var t=e.isZhCN,a=(0,u.TH)(),s=a.search,p=je(),f=p.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(u.rU,{to:yn.J1("/",t,s),className:f.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:f.title,children:"Ant Design"})]})})},Fe=Oe,$e=r(280882),We=r(963918),Zn=r(988872),he,Ce,Te,Le,Ae=(0,P.kc)(function(i){var e=i.css,t=i.token;return{smallStyle:e(he||(he=m()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(Ce||(Ce=m()([`
    color: `,`;
  `])),t.colorTextQuaternary),downOutlined:e(Te||(Te=m()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(Le||(Le=m()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),Ee=function(){var e=Ae(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(u._H,{id:"app.implementation.community"}),")"]})},He=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(u._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(u._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(u._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(Ee,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(Ee,{})]}),key:"vue"}]},Pe=function(e){var t=e.isRTL,a=Ae(),s=a.styles;return(0,n.jsx)(We.Z,{menu:{items:He()},placement:"bottomRight",children:(0,n.jsxs)(Zn.ZP,{size:"small",children:[(0,n.jsx)(u._H,{id:"app.header.menu.more"}),(0,n.jsx)($e.Z,{className:w()(t?s.downOutlinedRTL:s.downOutlined,s.down)})]})})},Ue=Pe,U=r(600861),X=r.n(U),cn=r(529410),mn=r(472638),Nn,fe,xe={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},Gn=(0,P.kc)(function(i){var e=i.token,t=e.antCls,a=e.iconCls,s=e.fontFamily,p=e.headerHeight,f=e.menuItemBorder,x=e.colorPrimary,j=e.colorText;return{nav:(0,P.iv)(Nn||(Nn=m()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),s,t,t,t,40+12*2,p,p,f,j,t,a,t,x,t,t),popoverMenuNav:(0,P.iv)(fe||(fe=m()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),t,t,t,t,t)}}),pe=function(i){var e,t,a=i.isZhCN,s=i.isMobile,p=i.responsive,f=i.directionText,x=i.onLangChange,j=i.onDirectionChange,g=(0,u.TH)(),N=g.pathname,T=g.search,L=(0,b.Z)(xe),Z=C()(L,1),R=Z[0],O=(0,u.yh)(),I=((e=O["/docs/blog"])===null||e===void 0||(e=e[0])===null||e===void 0?void 0:e.children)||[],D=Gn(),B=D.styles,z=s?"inline":"horizontal",q=N.split("/").filter(function(Bn){return Bn}).slice(0,-1).join("/"),hn=q||"home";N.startsWith("/changelog")?hn="docs/react":N.startsWith("/docs/resources")&&(hn="docs/resources");var on,wn=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(u._H,{id:"app.header.lang"}),onClick:x,key:"switch-lang"},{label:f,onClick:j,key:"switch-direction"}].concat(X()(He()));s?on=wn:p==="crowded"&&(on=[{label:(0,n.jsx)(Vn.Z,{}),key:"additional",children:X()(wn)}]);var jn=[{label:(0,n.jsx)(mn.Z,{to:yn.J1("/docs/spec/introduce",a,T),children:R.design}),key:"docs/spec"},{label:(0,n.jsx)(mn.Z,{to:yn.J1("/docs/react/introduce",a,T),children:R.development}),key:"docs/react"},{label:(0,n.jsx)(mn.Z,{to:yn.J1("/components/overview/",a,T),children:R.components}),key:"components"},I.length?{label:(0,n.jsx)(mn.Z,{to:yn.J1(I.sort(function(Bn,E){var _,nn;return((_=Bn.frontmatter)===null||_===void 0?void 0:_.date)>((nn=E.frontmatter)===null||nn===void 0?void 0:nn.date)?-1:1})[0].link,a,T),children:R.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(mn.Z,{to:yn.J1("/docs/resources",a,T),children:R.resources}),key:"docs/resources"},a?{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(X()((t=on)!==null&&t!==void 0?t:[]));return(0,n.jsx)(cn.Z,{mode:z,selectedKeys:[hn],className:B.nav,disabledOverflow:!0,items:jn,style:{borderRight:0}})},Se=r(879587),ke,et,tt,ot,rt,ve="1.2em",so=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.colorText,s=e.colorBorder,p=e.colorBgContainer,f=e.colorBgTextHover,x=e.borderRadius,j=e.controlHeight,g=e.motionDurationMid;return{btn:t(ke||(ke=m()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),a,s,j,j,x,g,g,f,ve,ve,ve),innerDiv:t(et||(et=m()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),ve,ve),labelStyle:t(tt||(tt=m()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),ve,a,a),label1Style:t(ot||(ot=m()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),a,p),label2Style:t(rt||(rt=m()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),co=function(e){var t=e.label1,a=e.label2,s=e.tooltip1,p=e.tooltip2,f=e.value,x=e.pure,j=e.onClick,g=so(),N=g.styles,T=N.btn,L=N.innerDiv,Z=N.labelStyle,R=N.label1Style,O=N.label2Style,I=(0,n.jsx)("button",{onClick:j,className:T,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[x&&(f===1?t:a),!x&&(0,n.jsxs)("div",{className:L,children:[(0,n.jsx)("span",{className:w()(Z,f===1?R:O),children:t}),(0,n.jsx)("span",{className:w()(Z,f===1?O:R),children:a})]})]})},"lang-button");return s||p?(0,n.jsx)(Se.Z,{title:f===1?s:p,children:I}):I},Ve=co,at,it,lt,st,ct,dt,ut=1120,pt=1200,uo={cn:{message:"Galacean Effects \xB7 \u6240\u89C1\u5373\u6240\u5F97\u7684\u52A8\u6548\u65B0\u65B9\u6848\u3002",shortMessage:"Galacean Effects \xB7 \u6240\u89C1\u5373\u6240\u5F97\u7684\u52A8\u6548\u65B0\u65B9\u6848\u3002",more:"\u524D\u5F80\u4E86\u89E3",link:"https://galacean.antgroup.com/effects/"},en:{message:"",shortMessage:"",more:"",link:""}},po=(0,P.kc)(function(i){var e=i.token,t=i.css,a="#ced4d9";return{header:t(at||(at=m()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,a,a,a),menuRow:t(it||(it=m()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:t(lt||(lt=m()([`
      width: 16px;
    `]))),popoverMenu:En()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0}),banner:t(st||(st=m()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:t(ct||(ct=m()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),e.mobileMaxWidth),icon:t(dt||(dt=m()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),mo=function(){var e=(0,b.Z)(uo),t=C()(e,2),a=t[0],s=t[1],p=(0,u.WF)(),f=p.pkg,x=(0,yn.Is)(),j=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),g=C()(j,2),N=g[0],T=g[1],L=(0,c.useContext)(ie.Z),Z=L.direction,R=L.isMobile,O=L.bannerVisible,I=L.updateSiteConfig,D=(0,c.useRef)(null),B=(0,u.TH)(),z=B.pathname,q=B.search,hn=po(),on=hn.styles,wn=(0,c.useCallback)(function(){T(function(rn){return S()(S()({},rn),{},{menuVisible:!1})})},[]),jn=(0,c.useCallback)(function(){T(function(rn){return S()(S()({},rn),{},{windowWidth:window.innerWidth})})},[]),Bn=(0,c.useCallback)(function(){T(function(rn){return S()(S()({},rn),{},{menuVisible:!0})})},[]),E=(0,c.useCallback)(function(rn){T(function(Dn){return S()(S()({},Dn),{},{menuVisible:rn})})},[]),_=function(){I({direction:Z!=="rtl"?"rtl":"ltr"})},nn=function(){I({bannerVisible:!1}),yn.Fy()&&localStorage.setItem(we.ANT_DESIGN_NOT_SHOW_BANNER,dn()().toISOString())};(0,c.useEffect)(function(){wn()},[B]),(0,c.useEffect)(function(){return jn(),window.addEventListener("resize",jn),function(){window.removeEventListener("resize",jn),D.current&&clearTimeout(D.current)}},[]);var Cn=(0,c.useCallback)(function(rn){var Dn=window.location.href,Re=window.location.pathname;if(/overview/.test(Re)&&/0?[1-39][0-3]?x/.test(rn)){window.location.href=Dn.replace(window.location.origin,rn).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(rn)?"":"/react","/introduce")).replace(/\/$/,"");return}var nt=new URL(Dn.replace(window.location.origin,rn));nt.host.includes("antgroup")&&(window.location.href="".concat(nt.href.replace(/\/$/,""),"/")),window.location.href=nt.href.replace(/\/$/,"")},[]),Sn=(0,c.useCallback)(function(){var rn="".concat(window.location.protocol,"//"),Dn=window.location.href.slice(rn.length);yn.Fy()&&localStorage.setItem("locale",yn.KE(z)?"en-US":"zh-CN"),window.location.href=rn+Dn.replace(window.location.pathname,yn.J1(z,!yn.KE(z),q).pathname)},[B]),Qe=(0,c.useMemo)(function(){return Z!=="rtl"?"RTL":"LTR"},[Z]),V=(0,c.useMemo)(function(){return Z==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[Z]),Y=N.menuVisible,gn=N.windowWidth,be=N.searching,oo=S()(En()({},f.version,f.version),x==null?void 0:x.docVersions),Ir=Object.keys(oo).map(function(rn){return{value:oo[rn],label:rn}}),ro=["","index","index-cn"].includes(z),ao=s==="cn",Mr=Z==="rtl",qe=null;gn<ut?qe="crowded":gn<pt&&(qe="narrow");var Zr=w()(on.header,"clearfix",{"home-header":ro}),_e={isZhCN:ao,isRTL:Mr},io=(0,n.jsx)(pe,S()(S()({},_e),{},{responsive:qe,isMobile:R,directionText:Qe,onLangChange:Sn,onDirectionChange:_}),"nav"),Ne=[io,(0,n.jsx)(Q.Z,{className:"version",size:"small",defaultValue:f.version,onChange:Cn,dropdownStyle:V,popupMatchSelectWidth:!1,getPopupContainer:function(Dn){return Dn.parentNode},options:Ir},"version"),(0,n.jsx)(Ue,S()({},_e),"more"),(0,n.jsx)(Ve,{onClick:Sn,value:yn.KE(z)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(Ve,{onClick:_,value:Z==="rtl"?2:1,label1:(0,n.jsx)(ge,{className:on.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(ge,{className:on.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(Ve,{value:1,label1:(0,n.jsx)(Hn.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];gn<ut?Ne=be?[]:[io]:gn<pt&&(Ne=be?[]:Ne);var lo=ro?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:Zr,children:[R&&(0,n.jsx)(vn.Z,{overlayClassName:on.popoverMenu,placement:"bottomRight",content:Ne,trigger:"click",open:Y,arrow:{arrowPointAtCenter:!0},onOpenChange:E,children:(0,n.jsx)(Vn.Z,{className:"nav-phone-icon",onClick:Bn})}),ao&&O&&(0,n.jsx)(K.ZP,{theme:{token:{colorInfoBg:"#ceebf9",colorTextBase:"#000"}},children:(0,n.jsx)(Mn.Z,{className:on.banner,message:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:R?a.shortMessage:a.message}),(0,n.jsx)("a",{className:on.link,href:a.link,target:"_blank",rel:"noreferrer",onClick:function(){var Dn,Re;(Dn=(Re=window).gtag)===null||Dn===void 0||Dn.call(Re,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:a.link})},children:a.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:nn})}),(0,n.jsxs)(de.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(Wn.Z,S()(S()({},lo[0]),{},{children:(0,n.jsx)(Fe,S()(S()({},_e),{},{location:B}))})),(0,n.jsxs)(Wn.Z,S()(S()({},lo[1]),{},{className:on.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Pn.ZP,{})}),!R&&Ne]}))]})]})},go=mo,Dr=r(945462),ho=r(670215),fo=r.n(ho),xo=r(857278),vo=r(430932),bo=r(985093),Ie=r(115668),yo=r(642207),mt=r(13923),Ge=r(825035),wo=r(937993),jo=r(448118),Co=r(938545),So=r(569980),ko=r(391298),zo=r(630770),gt=r(693399),Me="ant-where-checker",No={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function Bo(){var i=(0,b.Z)(No),e=C()(i,1),t=e[0],a=c.useState(!0),s=C()(a,2),p=s[0],f=s[1];return c.useEffect(function(){var x=document.createElement("p");x.className=Me,x.style.position="fixed",x.style.pointerEvents="none",x.style.visibility="hidden",x.style.width="0",document.body.appendChild(x),(0,gt.updateCSS)(`
:where(.`.concat(Me,`) {
  content: "__CHECK__";
}
    `),Me);var j=getComputedStyle(x),g=j.content;f(String(g).includes("CHECK")),document.body.removeChild(x),(0,gt.removeCSS)(Me)},[]),p?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var ht,ft,To={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Lo=function(){var e=(0,c.useContext)(ie.Z),t=e.isMobile;return(0,P.kc)(function(a){var s=a.token,p=a.css,f=new Ln.C((0,zo.Z)("#f0f3fa","#fff")).onBackground(s.colorBgContainer).toHexString();return{holder:p(ht||(ht=m()([`
      background: `,`;
    `])),f),footer:p(ft||(ft=m()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),f,s.colorTextSecondary,s.colorText,t?60:0,t?20:0,s.marginXXL,s.fontSize)}})()},Ao=function(){var e=(0,fn.Z)(),t=(0,b.Z)(To),a=C()(t,2),s=a[0],p=a[1],f=Lo(),x=f.styles,j=e.getLink,g=c.useMemo(function(){var N=p==="cn",T={title:(0,n.jsx)(u._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:N?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:N?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:N?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(u._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(u._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(u._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(u._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(u._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(u._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(u._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(u._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},L={title:(0,n.jsx)(u._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(xo.Z,{}),title:(0,n.jsx)(u._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(vo.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(bo.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(u._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(Ie.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(u._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(Ie.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(u._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(u._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};N&&L.items.push({icon:(0,n.jsx)(yo.Z,{}),title:(0,n.jsx)(u._H,{id:"app.footer.work_with_us"}),url:j("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:u.rU});var Z={title:(0,n.jsx)(u._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(Hn.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(mt.Z,{}),title:(0,n.jsx)(u._H,{id:"app.footer.change-log"}),url:j("/changelog"),LinkComponent:u.rU},{icon:(0,n.jsx)(Ge.Z,{}),title:(0,n.jsx)(u._H,{id:"app.footer.faq"}),url:j("/docs/react/faq"),LinkComponent:u.rU},{icon:(0,n.jsx)(wo.Z,{}),title:(0,n.jsx)(u._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(jo.Z,{}),title:(0,n.jsx)(u._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(Co.Z,{}),title:(0,n.jsx)(u._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(Ge.Z,{}),title:(0,n.jsx)(u._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(Ge.Z,{}),title:(0,n.jsx)(u._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},R={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(u._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(u._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(u._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,n.jsx)(u._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(u._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(u._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,n.jsx)(u._H,{id:"app.footer.galacean"}),description:(0,n.jsx)(u._H,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(u._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(So.Z,{}),title:(0,n.jsx)(u._H,{id:"app.footer.theme"}),url:j("/theme-editor"),LinkComponent:u.rU}]};return[T,L,Z,R]},[p,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ko.Z,{columns:g,className:x.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:s.owner})]})}),(0,n.jsx)(Bo,{})]})},Xe=Ao,Eo=["children"],Ho=function(e){var t=e.children,a=fo()(e,Eo);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.ql,{children:[(0,n.jsx)("title",{children:a.title}),(0,n.jsx)("meta",{property:"og:title",content:a.title}),a.desc&&(0,n.jsx)("meta",{name:"description",content:a.desc})]}),(0,n.jsx)("div",{style:{minHeight:"100vh"},children:t}),(0,n.jsx)(Xe,{})]})},Po=Ho,Io=r(86198),Ze=r(185209),Mo=function(){var e=(0,u.eL)(),t=(0,c.useMemo)(function(){var f;if(!e.frontmatter.subtitle&&!e.frontmatter.title)f="404 Not Found - Ant Design";else{var x;f="".concat(e.frontmatter.subtitle||""," ").concat(((x=e.frontmatter)===null||x===void 0?void 0:x.title)||""," - Ant Design")}var j=e.frontmatter.description||"";return[f,j]},[e]),a=C()(t,2),s=a[0],p=a[1];return(0,n.jsxs)(u.ql,{children:[(0,n.jsx)("title",{children:s}),(0,n.jsx)("meta",{property:"og:title",content:s}),p&&(0,n.jsx)("meta",{name:"description",content:p})]})},xt=Mo,vt=r(148050),Zo=r(823493),Do=r.n(Zo),Ro=r(464778),Oo=r(658192),bt,yt,wt,jt=["scroll","resize"],Fo=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.boxShadowSecondary,s=e.antCls;return{affixTabs:t(bt||(bt=m()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),a,s,s,s),affixTabsFixed:t(yt||(yt=m()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(wt||(wt=m()([`
      text-transform: capitalize;
    `])))}}),Ct=32,$o=function(){var e=c.useRef(null),t=c.useRef([]),a=c.useState(!1),s=C()(a,2),p=s[0],f=s[1],x=c.useState(void 0),j=C()(x,2),g=j[0],N=j[1],T=Fo(),L=T.styles,Z=L.affixTabs,R=L.affixTabsFixed,O=L.span;function I(B){var z=document.getElementById(B);if(z){var q=z.offsetTop-e.current.offsetHeight-Ct;(0,Oo.Z)(q)}}c.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(B){var z=B.id;return z}),f(!0)},[]),c.useEffect(function(){var B=decodeURIComponent((location.hash||"").slice(1));B&&I(B)},[p]);var D=c.useMemo(function(){function B(){for(var z=window,q=z.scrollY,hn=e.current.offsetHeight,on=t.current.length-1;on>=0;on-=1){var wn=t.current[on],jn=document.getElementById(wn),Bn=jn.offsetTop-hn-Ct;if(Bn<=q){N(wn);return}}N(void 0)}return Do()(B)},[]);return c.useEffect(function(){return jt.forEach(function(B){return window.addEventListener(B,D)}),D(),function(){jt.forEach(function(B){return window.removeEventListener(B,D)})}},[]),(0,n.jsx)("div",{className:w()(Z,g&&R),ref:e,children:(0,n.jsx)(Ro.Z,{activeKey:g,onChange:I,items:t.current.map(function(B){return{key:B,label:(0,n.jsx)("span",{className:O,children:B.replace(/-/g," ")})}})})})},Wo=$o,St,kt,zt,Nt=40,De=1208,Ke=24,Uo=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.antCls;return{resourcePage:t(St||(St=m()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),De),resourceContent:t(kt||(kt=m()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Nt,De,Ke,a),banner:t(zt||(zt=m()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Nt,De,De,Ke,Ke)}}),Vo=function(e){var t,a=e.children,s=Uo(),p=s.styles,f=(0,u.eL)();return(0,n.jsx)(K.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(Io.Z,{children:[(0,n.jsx)(xt,{}),(0,n.jsxs)("div",{id:"resources-page",className:p.resourcePage,children:[(0,n.jsx)(Wo,{}),(0,n.jsxs)("div",{className:p.banner,children:[(0,n.jsxs)(Ze.Z.Title,{style:{fontSize:30},children:[(t=f.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(vt.Z,{title:(0,n.jsx)(u._H,{id:"app.content.edit-page"}),filename:f.frontmatter.filename})]}),(0,n.jsx)("section",{children:f.frontmatter.description})]}),(0,n.jsx)("div",{className:p.resourceContent,children:a}),(0,n.jsx)(Xe,{})]})]})})},Go=Vo,Xo=r(720841),Ko=r(538294),Bt=r(575054),Tt=r(796586),Jo=r(605071),Je=r(945016),Yo=r(217187),ze=r(618073),Lt=r(206171),Qo=r(844183),qo=r(566254),_o=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,u.yh)(),a=(0,fn.Z)(),s=a.pathname,p=a.search,f=(0,u.tx)(),x=e.before,j=e.after,g=(0,c.useMemo)(function(){var N,T=X()(f!=null?f:[]);if(s.startsWith("/docs/spec")){var L=T.splice(0,1);T.push.apply(T,X()(L))}if(s.startsWith("/docs/react")){var Z,R=(Z=Object.entries(t).find(function(B){var z=C()(B,1),q=z[0];return q.startsWith("/changelog")}))===null||Z===void 0?void 0:Z[1];R&&T.splice(1,0,R[0])}if(s.startsWith("/changelog")){var O,I=(O=Object.entries(t).find(function(B){var z=C()(B,1),q=z[0];return q.startsWith("/docs/react")}))===null||O===void 0?void 0:O[1];I&&(T.unshift(I[0]),T.push.apply(T,X()(I.slice(1))))}var D=function(z){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return z&&q&&(0,n.jsx)(Qo.Z,{color:z==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:z.replace("VERSION",qo.Z)})};return(N=T==null?void 0:T.reduce(function(B,z){if(z!=null&&z.title)if(s.startsWith("/docs/spec")){var q,hn,on=z.children.reduce(function(E,_){var nn,Cn,Sn=(nn=(Cn=_.frontmatter)===null||Cn===void 0?void 0:Cn.type)!==null&&nn!==void 0?nn:"default";return E[Sn]||(E[Sn]=[]),E[Sn].push(_),E},{}),wn=[];wn.push.apply(wn,X()((q=(hn=on.default)===null||hn===void 0?void 0:hn.map(function(E){return{label:(0,n.jsxs)(mn.Z,{to:"".concat(E.link).concat(p),children:[x,E==null?void 0:E.title,j]}),key:E.link.replace(/(-cn$)/g,"")}}))!==null&&q!==void 0?q:[])),Object.entries(on).forEach(function(E){var _=C()(E,2),nn=_[0],Cn=_[1];nn!=="default"&&wn.push({type:"group",label:nn,key:nn,children:Cn==null?void 0:Cn.map(function(Sn){return{label:(0,n.jsxs)(mn.Z,{to:"".concat(Sn.link).concat(p),children:[x,Sn==null?void 0:Sn.title,j]}),key:Sn.link.replace(/(-cn$)/g,"")}})})}),B.push({label:z==null?void 0:z.title,key:z==null?void 0:z.title,children:wn})}else{var jn;B.push({type:"group",label:z==null?void 0:z.title,key:z==null?void 0:z.title,children:(jn=z.children)===null||jn===void 0?void 0:jn.map(function(E){var _,nn;return{label:(0,n.jsxs)(mn.Z,{to:"".concat(E.link).concat(p),style:{display:"flex",alignItems:"center"},children:[x,(0,n.jsx)("span",{children:E==null?void 0:E.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(_=E.frontmatter)===null||_===void 0?void 0:_.subtitle},"chinese"),D((nn=E.frontmatter)===null||nn===void 0?void 0:nn.tag,!x&&!j),j]}),key:E.link.replace(/(-cn$)/g,"")}})})}else{var Bn=z.children||[];Bn.every(function(E){var _;return E==null||(_=E.frontmatter)===null||_===void 0?void 0:_.date})&&Bn.sort(function(E,_){var nn,Cn;return((nn=E.frontmatter)===null||nn===void 0?void 0:nn.date)>((Cn=_.frontmatter)===null||Cn===void 0?void 0:Cn.date)?-1:1}),B.push.apply(B,X()(Bn.map(function(E){return{label:(0,n.jsxs)(mn.Z,{to:"".concat(E.link).concat(p),style:{display:"flex",alignItems:"center"},children:[x,E==null?void 0:E.title,D(E.frontmatter.tag,!x&&!j),j]}),key:E.link.replace(/(-cn$)/g,"")}})))}return B},[]))!==null&&N!==void 0?N:[]},[f,t,s,p,e]);return[g,s]},At=_o,Et,Ht,Pt,It,nr=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.colorSplit,s=e.iconCls,p=e.fontSizeIcon;return{prevNextNav:t(Et||(Et=m()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),a),pageNav:t(Ht||(Ht=m()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),s,p),prevNav:t(Pt||(Pt=m()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(It||(It=m()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),er=function i(e){return Array.isArray(e)?e.reduce(function(t,a){if(!a)return t;if("children"in a&&a.children){var s;return t.concat((s=i(a.children))!==null&&s!==void 0?s:[])}return t.concat(a)},[]):null},tr=function(e){var t=e.rtl,a=nr(),s=a.styles,p={className:"footer-nav-icon-before"},f={className:"footer-nav-icon-after"},x=t?(0,n.jsx)(ze.Z,S()({},p)):(0,n.jsx)(Lt.Z,S()({},p)),j=t?(0,n.jsx)(Lt.Z,S()({},f)):(0,n.jsx)(ze.Z,S()({},f)),g=At({before:x,after:j}),N=C()(g,2),T=N[0],L=N[1],Z=(0,c.useContext)(ie.Z),R=Z.isMobile,O=(0,c.useMemo)(function(){var z=er(T);if(!z)return[null,null];var q=-1;return z.forEach(function(hn,on){hn&&hn.key===L&&(q=on)}),[z[q-1],z[q+1]]},[T,L]),I=C()(O,2),D=I[0],B=I[1];return R?null:(0,n.jsxs)("section",{className:s.prevNextNav,children:[D&&c.cloneElement(D.label,{className:w()(s.pageNav,s.prevNav,D.className)}),B&&c.cloneElement(B.label,{className:w()(s.pageNav,s.nextNav,B.className)})]})},or=tr,rr=r(302281),ar=r(15060),ir=r(889812),Mt,Zt,Dt,lr=(0,P.kc)(function(i){var e=i.token,t=i.css;return{history:t(Mt||(Mt=m()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:t(Zt||(Zt=m()([`
    // white-space: pre;
  `]))),ref:t(Dt||(Dt=m()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),sr={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function cr(i){var e=i.changelog,t=e===void 0?"":e,a=i.refs,s=a===void 0?[]:a,p=i.styles,f=c.useMemo(function(){for(var x=[],j=!1,g="",N=0;N<t.length;N+=1){var T=t[N];if(T!=="`")g+=T;else{var L=g;j&&(L=(0,n.jsx)("code",{children:L})),x.push(L),g="",j=!j}}return x.push(g),x},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:f}),s==null?void 0:s.map(function(x){var j;return(0,n.jsxs)("a",{className:p.ref,href:x,target:"_blank",rel:"noreferrer",children:["#",(j=x.match(/^.*\/(\d+)$/))===null||j===void 0?void 0:j[1]]},x)})]})}function dr(i,e){var t=(0,ir.Z)(e==="cn"?{key:"component-changelog-cn",request:function(){return r.e(32104).then(r.t.bind(r,332104,19))}}:{key:"component-changelog-en",request:function(){return r.e(65212).then(r.t.bind(r,365212,19))}});return(0,c.useMemo)(function(){var a=i.replace(/-/g,""),s=Object.keys(t).find(function(p){return p.toLowerCase()===a.toLowerCase()});return t[s]},[t,i])}function ur(i){var e,t=i.pathname,a=t===void 0?"":t,s=(0,b.Z)(sr),p=C()(s,2),f=p[0],x=p[1],j=c.useState(!1),g=C()(j,2),N=g[0],T=g[1],L=lr(),Z=L.styles,R=((e=a.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",O=dr(R,x),I=c.useMemo(function(){var D={};return O==null||O.forEach(function(B){D[B.version]=D[B.version]||[],D[B.version].push(B)}),Object.keys(D).map(function(B){var z=D[B];return{children:(0,n.jsxs)(Ze.Z,{children:[(0,n.jsx)("h4",{children:B}),(0,n.jsx)("ul",{children:z.map(function(q,hn){return(0,n.jsx)("li",{className:Z.li,children:(0,n.jsx)(cr,S()(S()({},q),{},{styles:Z}))},hn)})})]})}})},[O]);return!O||!O.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Zn.ZP,{className:Z.history,icon:(0,n.jsx)(mt.Z,{}),onClick:function(){T(!0)},children:f.changelog}),(0,n.jsx)(rr.Z,{title:f.changelog,extra:(0,n.jsx)(mn.Z,{style:{fontSize:14},to:"/changelog".concat(x==="cn"?"-cn":""),children:f.full}),open:N,width:"40vw",onClose:function(){T(!1)},destroyOnClose:!0,children:(0,n.jsx)(ar.Z,{items:I})})]})}var pr=function(i){return(0,n.jsx)(c.Suspense,{fallback:null,children:(0,n.jsx)(ur,S()({},i))})},mr=r(524229),Rt=r(211646),gr=r(294047),Ot=r(315816),hr=function(e){var t=e.className,a=e.style;return(0,n.jsx)("svg",{className:t,style:a,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Ft=hr,$t,Wt,Ut,Vt,Gt,Xt,Kt,Ye="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",fr=(0,P.kc)(function(i){var e=i.token,t=i.css;return{card:t($t||($t=m()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t(Wt||(Wt=m()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Ut||(Ut=m()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(Vt||(Vt=m()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(Gt||(Gt=m()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(Xt||(Xt=m()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:t(Kt||(Kt=m()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),xr={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},vr=function(e){var t=e.zhihuLink,a=e.yuqueLink,s=e.juejinLink,p=(0,b.Z)(xr),f=C()(p,1),x=f[0],j=fr(),g=j.styles,N=g.card,T=g.bigTitle,L=g.cardBody,Z=g.left,R=g.title,O=g.subTitle,I=g.btn;return!t&&!a&&!s?null:(0,n.jsxs)(gr.Z,{className:N,bordered:!1,children:[(0,n.jsx)("h3",{className:T,children:x.bigTitle}),t&&(0,n.jsxs)("div",{className:L,children:[(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:R,children:"Ant Design"}),(0,n.jsxs)("div",{className:O,children:[(0,n.jsx)(Ie.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(ze.Z,{className:"arrowIcon"}),(0,n.jsx)(Zn.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:x.zhiHu})]})]})]}),(0,n.jsx)(Zn.ZP,{type:"primary",className:I,icon:(0,n.jsx)(Ie.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:x.buttonText})]}),a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ot.Z,{}),(0,n.jsxs)("div",{className:L,children:[(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:R,children:"Ant Design"}),(0,n.jsxs)("div",{className:O,children:[(0,n.jsx)(Rt.Z,{className:"logo yuque-logo"}),(0,n.jsx)(ze.Z,{className:"arrowIcon"}),(0,n.jsx)(Zn.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:x.yuQue})]})]})]}),(0,n.jsx)(Zn.ZP,{type:"primary",className:I,icon:(0,n.jsx)(Rt.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:a,children:x.buttonText})]})]}),s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ot.Z,{}),(0,n.jsxs)("div",{className:L,children:[(0,n.jsxs)("div",{className:Z,children:[(0,n.jsx)("img",{src:Ye,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:R,children:"Ant Design"}),(0,n.jsxs)("div",{className:O,children:[(0,n.jsx)(Ft,{className:"logo juejin-logo"}),(0,n.jsx)(ze.Z,{className:"arrowIcon"}),(0,n.jsx)(Zn.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:x.junjin})]})]})]}),(0,n.jsx)(Zn.ZP,{type:"primary",className:I,icon:(0,n.jsx)(Ft,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:s,children:x.buttonText})]})]})]})},br=vr,Jt,Yt,Qt,qt,_t,yr=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.antCls;return{contributorsList:t(Jt||(Jt=m()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),a,a,e.motionDurationSlow,a),listMobile:t(Yt||(Yt=m()([`
      margin: 1em 0 !important;
    `]))),toc:t(Qt||(Qt=m()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),a,a),tocWrapper:t(qt||(qt=m()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t(_t||(_t=m()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),wr=function(e){var t=e.num,a=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:a}).map(function(s,p){return(0,n.jsx)(Bt.Z.Avatar,{size:"small",active:!0,style:{marginLeft:p===0?0:-8}},p)})})},jr=function(e){var t=e.name,a=e.avatar,s=(0,c.useState)(!0),p=C()(s,2),f=p[0],x=p[1],j=(0,c.useState)(!1),g=C()(j,2),N=g[0],T=g[1];return(0,c.useLayoutEffect)(function(){var L=new Image;L.src=a,L.onload=function(){return x(!1)},L.onerror=function(){return T(!0)}},[]),N?null:f?(0,n.jsx)(Bt.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(Tt.C,{size:"small",src:a,alt:t,children:t})},Cr=function(e){var t,a,s,p,f,x,j=e.children,g=(0,u.eL)(),N=(0,u.zh)(),T=(0,fn.Z)(),L=T.pathname,Z=T.hash,R=(0,u.YB)(),O=R.formatMessage,I=yr(),D=I.styles,B=(0,P.Fg)(),z=(0,c.useContext)(ie.Z),q=z.direction,hn=z.isMobile,on=(0,Yo.Z)(!1),wn=C()(on,2),jn=wn[0],Bn=wn[1],E=(0,c.useMemo)(function(){var V;return((V=g.toc)===null||V===void 0?void 0:V.filter(function(Y){return Y._debug_demo}).map(function(Y){return Y.id}))||[]},[g]),_=E.includes(Z.slice(1));(0,c.useLayoutEffect)(function(){Bn(_)},[]);var nn=(0,c.useMemo)(function(){return{showDebug:jn,setShowDebug:Bn}},[jn,E]),Cn=(0,c.useMemo)(function(){return((N==null?void 0:N.toc)||g.toc).reduce(function(V,Y){if(Y.depth===2)V.push(S()({},Y));else if(Y.depth===3){var gn=V[V.length-1];gn&&(gn.children=gn.children||[],gn.children.push(S()({},Y)))}return V},[])},[N==null?void 0:N.toc,g.toc]),Sn=q==="rtl",Qe=(0,c.useMemo)(function(){var V=g.frontmatter.author;return V?typeof V=="string"?V.split(",").map(function(Y){return{name:Y,avatar:"https://github.com/".concat(Y,".png")}}):Array.isArray(V)?V:[]:[]},[g.frontmatter.author]);return(0,n.jsx)(mr.Z.Provider,{value:nn,children:(0,n.jsxs)(Wn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!g.frontmatter.toc&&(0,n.jsx)("section",{className:D.tocWrapper,children:(0,n.jsx)(Jo.Z,{className:D.toc,affix:!1,targetOffset:B.anchorTop,showInkInFixed:!0,items:Cn.map(function(V){var Y;return{href:"#".concat(V.id),title:V.title,key:V.id,children:(Y=V.children)===null||Y===void 0?void 0:Y.filter(function(gn){return jn||!E.includes(gn.id)}).map(function(gn){return{key:gn.id,href:"#".concat(gn.id),title:(0,n.jsx)("span",{className:w()(E.includes(gn.id)&&"toc-debug"),children:gn==null?void 0:gn.title})}})}})})}),(0,n.jsxs)("article",{className:w()(D.articleWrapper,{rtl:Sn}),children:[(t=g.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)(Ze.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(Je.Z,{size:"small",children:[(a=g.frontmatter)===null||a===void 0?void 0:a.title,(s=g.frontmatter)===null||s===void 0?void 0:s.subtitle,!L.startsWith("/components/overview")&&(0,n.jsx)(vt.Z,{title:(0,n.jsx)(u._H,{id:"app.content.edit-page"}),filename:g.frontmatter.filename})]}),L.startsWith("/components/")&&(0,n.jsx)(pr,{pathname:L})]}):null,g.frontmatter.date||g.frontmatter.author?(0,n.jsx)(Ze.Z.Paragraph,{children:(0,n.jsxs)(Je.Z,{children:[g.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Xo.Z,{})," ",dn()(g.frontmatter.date).format("YYYY-MM-DD")]}),Qe.map(function(V){return(0,n.jsx)("a",{href:"https://github.com/".concat(V.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(Je.Z,{size:3,children:[(0,n.jsx)(jr,{name:V.name,avatar:V.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",V.name]})]})},V.name)})]})}):null,!g.frontmatter.__autoDescription&&g.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:j}),(((p=g.frontmatter)===null||p===void 0?void 0:p.zhihu_url)||((f=g.frontmatter)===null||f===void 0?void 0:f.yuque_url)||((x=g.frontmatter)===null||x===void 0?void 0:x.juejin_url))&&(0,n.jsx)(br,{zhihuLink:g.frontmatter.zhihu_url,yuqueLink:g.frontmatter.yuque_url,juejinLink:g.frontmatter.juejin_url}),g.frontmatter.filename&&(0,n.jsx)(Ko.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:w()(D.contributorsList,En()({},D.listMobile,hn)),fileName:g.frontmatter.filename,renderItem:function(Y,gn){var be;return!Y||gn?(0,n.jsx)(wr,{}):(be=Y.username)!==null&&be!==void 0&&be.includes("github-actions")?null:(0,n.jsx)(Se.Z,{mouseEnterDelay:.3,title:"".concat(O({id:"app.content.contributors"}),": ").concat(Y.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(Y.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(Tt.C,{size:"small",src:Y.url,alt:Y.username,children:Y.username})})})},Y.username)}})]}),(0,n.jsx)(or,{rtl:Sn}),(0,n.jsx)(Xe,{})]})})},Sr=Cr,kr=r(650010),no,eo,zr=(0,P.kc)(function(i){var e=i.token,t=i.css,a=e.antCls,s=e.fontFamily,p=e.colorSplit;return{asideContainer:t(no||(no=m()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),s,a,a,a,a,a,a,p,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),mainMenu:t(eo||(eo=m()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),Nr=function(){var e=(0,u.tx)(),t=(0,c.useContext)(ie.Z),a=t.isMobile,s=t.theme,p=zr(),f=p.styles,x=At(),j=C()(x,2),g=j[0],N=j[1],T=s.includes("dark"),L=(0,P.Fg)(),Z=L.colorBgContainer,R=(0,n.jsx)(K.ZP,{theme:{components:{Menu:{itemBg:Z,darkItemBg:Z}}},children:(0,n.jsx)(cn.Z,{items:g,inlineIndent:30,className:f.asideContainer,mode:"inline",theme:T?"dark":"light",selectedKeys:[N],defaultOpenKeys:e==null?void 0:e.map(function(O){var I=O.title;return I}).filter(function(O){return O})})});return a?(0,n.jsx)(kr.Z,{children:R},"Mobile-menu"):(0,n.jsx)(Wn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:f.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:R})})},Br=Nr,to,Tr=(0,P.kc)(function(i){var e=i.css,t=i.token;return{main:e(to||(to=m()([`
    display: flex;
    margin-top: `,`px;
  `])),t.contentMarginTop)}}),Lr=function(e){var t=e.children,a=Tr(),s=a.styles;return(0,n.jsxs)("main",{className:s.main,children:[(0,n.jsx)(xt,{}),(0,n.jsx)(Br,{}),(0,n.jsx)(Sr,{children:t})]})},Ar=Lr,Er={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},Hr=function(){var e=(0,u.pC)(),t=(0,fn.Z)(),a=t.pathname,s=t.search,p=t.hash,f=(0,b.Z)(Er),x=C()(f,2),j=x[0],g=x[1],N=(0,c.useRef)(null),T=(0,c.useContext)(ie.Z),L=T.direction,Z=(0,u.WF)(),R=Z.loading;(0,c.useLayoutEffect)(function(){g==="cn"?dn().locale("zh-cn"):dn().locale("en")},[]),(0,c.useEffect)(function(){var I=document.getElementById("nprogress-style");I&&(N.current=setTimeout(function(){var D;(D=I.parentNode)===null||D===void 0||D.removeChild(I)},0))},[]),(0,c.useEffect)(function(){var I,D=p.replace("#","");D&&((I=document.getElementById(decodeURIComponent(D)))===null||I===void 0||I.scrollIntoView())},[R,p]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",a+s)},[t]);var O=(0,c.useMemo)(function(){return["","/"].some(function(I){return I===a})||["/index"].some(function(I){return a.startsWith(I)})?(0,n.jsx)(Po,{title:j.title,desc:j.description,children:e}):a.startsWith("/docs/resource")?(0,n.jsx)(Go,{children:e}):a.startsWith("/theme-editor")?e:(0,n.jsx)(Ar,{children:e})},[a,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:g==="cn"?"zh-CN":g,"data-direction":L,className:w()({rtl:L==="rtl"})}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{property:"og:description",content:j.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(K.ZP,{direction:L,locale:g==="cn"?W.Z:void 0,children:[(0,n.jsx)(pn,{}),(0,n.jsx)(go,{}),O]})]})},Pr=Hr},647727:function(me,kn,r){r.d(kn,{Z:function(){return Tn.Z}});var Tn=r(582485)},605071:function(me,kn,r){r.d(kn,{Z:function(){return In}});var Tn=r(242122),C=r.n(Tn),Rn=r(238416),w=r.n(Rn),On=r(600861),dn=r.n(On),bn=r(627424),u=r.n(bn),c=r(667294),W=r(294184),K=r.n(W),b=r(656790),fn=r(517423),Fn=r(982673),m=r(658192),H=r(252901),P=r(73287),n=c.createContext(void 0),Xn=n,zn=r(785893),_n=function(o){var l=o.href,d=o.title,v=o.prefixCls,y=o.children,k=o.className,A=o.target,h=o.replace,G=c.useContext(Xn),F=G||{},J=F.registerLink,an=F.unregisterLink,un=F.scrollTo,ln=F.onClick,en=F.activeLink,$=F.direction;c.useEffect(function(){return J==null||J(l),function(){an==null||an(l)}},[l]);var xn=function(Q){h&&(Q.preventDefault(),window.location.replace(l)),ln==null||ln(Q,{title:d,href:l}),un==null||un(l)};if(!1)var tn;var pn=c.useContext(P.E_),An=pn.getPrefixCls,S=An("anchor",v),sn=en===l,En=K()("".concat(S,"-link"),k,w()({},"".concat(S,"-link-active"),sn)),Hn=K()("".concat(S,"-link-title"),w()({},"".concat(S,"-link-title-active"),sn));return(0,zn.jsxs)("div",{className:En,children:[(0,zn.jsx)("a",{className:Hn,href:l,title:typeof d=="string"?d:"",target:A,onClick:xn,children:d}),$!=="horizontal"?y:null]})},ne=_n,Kn=r(548073),ee=r(141035),$n=r(986943),se=function(o){var l,d,v=o.componentCls,y=o.holderOffsetBlock,k=o.motionDurationSlow,A=o.lineWidthBold,h=o.colorPrimary,G=o.lineType,F=o.colorSplit;return w()({},"".concat(v,"-wrapper"),(d={marginBlockStart:-y,paddingBlockStart:y},w()(d,v,C()(C()({},(0,Kn.Wf)(o)),{},w()({position:"relative",paddingInlineStart:A},"".concat(v,"-link"),(l={paddingBlock:o.linkPaddingBlock,paddingInline:"".concat(o.linkPaddingInlineStart,"px 0"),"&-title":C()(C()({},Kn.vS),{},{position:"relative",display:"block",marginBlockEnd:o.anchorTitleBlock,color:o.colorText,transition:"all ".concat(o.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},w()(l,"&-active > ".concat(v,"-link-title"),{color:o.colorPrimary}),w()(l,"".concat(v,"-link"),{paddingBlock:o.anchorPaddingBlockSecondary}),l)))),w()(d,"&:not(".concat(v,"-wrapper-horizontal)"),w()({},v,w()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat(A,"px ").concat(G," ").concat(F),content:'" "'}},"".concat(v,"-ink"),w()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(k," ease-in-out"),width:A,backgroundColor:h},"&".concat(v,"-ink-visible"),{display:"inline-block"})))),w()(d,"".concat(v,"-fixed ").concat(v,"-ink ").concat(v,"-ink"),{display:"none"}),d))},te=function(o){var l,d=o.componentCls,v=o.motionDurationSlow,y=o.lineWidthBold,k=o.colorPrimary;return w()({},"".concat(d,"-wrapper-horizontal"),w()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"1px ".concat(o.lineType," ").concat(o.colorSplit),content:'" "'}},d,(l={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},w()(l,"".concat(d,"-link:first-of-type"),{paddingInline:0}),w()(l,"".concat(d,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(v," ease-in-out, width ").concat(v," ease-in-out"),height:y,backgroundColor:k}),l)))},Un=(0,ee.Z)("Anchor",function(M){var o=M.fontSize,l=M.fontSizeLG,d=M.paddingXXS,v=(0,$n.TS)(M,{holderOffsetBlock:d,anchorPaddingBlockSecondary:d/2,anchorTitleBlock:o/14*3,anchorBallSize:l/2});return[se(v),te(v)]},function(M){return{linkPaddingBlock:M.paddingXXS,linkPaddingInlineStart:M.padding}});function Ln(){return window}function Jn(M,o){if(!M.getClientRects().length)return 0;var l=M.getBoundingClientRect();return l.width||l.height?o===window?(o=M.ownerDocument.documentElement,l.top-o.clientTop):l.top-o.getBoundingClientRect().top:l.top}var oe=/#([\S ]+)$/,ce=function(o){var l,d,v=o.rootClassName,y=o.anchorPrefixCls,k=o.className,A=o.style,h=o.offsetTop,G=o.affix,F=G===void 0?!0:G,J=o.showInkInFixed,an=J===void 0?!1:J,un=o.children,ln=o.items,en=o.direction,$=en===void 0?"vertical":en,xn=o.bounds,tn=o.targetOffset,pn=o.onClick,An=o.onChange,S=o.getContainer,sn=o.getCurrentAnchor,En=o.replace;if(!1)var Hn;var Vn=c.useState([]),Q=u()(Vn,2),vn=Q[0],Mn=Q[1],de=c.useState(null),Wn=u()(de,2),Pn=Wn[0],Qn=Wn[1],ue=c.useRef(Pn),Be=c.useRef(null),ye=c.useRef(null),ge=c.useRef(!1),we=c.useContext(P.E_),yn=we.direction,ie=we.getTargetContainer,qn=we.anchor,le=(l=S!=null?S:ie)!==null&&l!==void 0?l:Ln,je=JSON.stringify(vn),Oe=(0,b.zX)(function(U){vn.includes(U)||Mn(function(X){return[].concat(dn()(X),[U])})}),Fe=(0,b.zX)(function(U){vn.includes(U)&&Mn(function(X){return X.filter(function(cn){return cn!==U})})}),$e=function(){var X,cn=(X=Be.current)===null||X===void 0?void 0:X.querySelector(".".concat(y,"-link-title-active"));if(cn&&ye.current){var mn=ye.current.style,Nn=$==="horizontal";mn.top=Nn?"":"".concat(cn.offsetTop+cn.clientHeight/2,"px"),mn.height=Nn?"":"".concat(cn.clientHeight,"px"),mn.left=Nn?"".concat(cn.offsetLeft,"px"):"",mn.width=Nn?"".concat(cn.clientWidth,"px"):"",Nn&&(0,fn.Z)(cn,{scrollMode:"if-needed",block:"nearest"})}},We=function(X){var cn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,mn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,Nn=[],fe=le();if(X.forEach(function(Gn){var pe=oe.exec(Gn==null?void 0:Gn.toString());if(pe){var Se=document.getElementById(pe[1]);if(Se){var ke=Jn(Se,fe);ke<cn+mn&&Nn.push({link:Gn,top:ke})}}}),Nn.length){var xe=Nn.reduce(function(Gn,pe){return pe.top>Gn.top?pe:Gn});return xe.link}return""},Zn=(0,b.zX)(function(U){if(ue.current!==U){var X=typeof sn=="function"?sn(U):U;Qn(X),ue.current=X,An==null||An(U)}}),he=c.useCallback(function(){if(!ge.current){var U=We(vn,tn!==void 0?tn:h||0,xn);Zn(U)}},[je,tn,h]),Ce=c.useCallback(function(U){Zn(U);var X=oe.exec(U);if(X){var cn=document.getElementById(X[1]);if(cn){var mn=le(),Nn=(0,Fn.Z)(mn,!0),fe=Jn(cn,mn),xe=Nn+fe;xe-=tn!==void 0?tn:h||0,ge.current=!0,(0,m.Z)(xe,{getContainer:le,callback:function(){ge.current=!1}})}}},[tn,h]),Te=K()(v,"".concat(y,"-wrapper"),(d={},w()(d,"".concat(y,"-wrapper-horizontal"),$==="horizontal"),w()(d,"".concat(y,"-rtl"),yn==="rtl"),d),k,qn==null?void 0:qn.className),Le=K()(y,w()({},"".concat(y,"-fixed"),!F&&!an)),Ae=K()("".concat(y,"-ink"),w()({},"".concat(y,"-ink-visible"),Pn)),Ee=C()(C()({maxHeight:h?"calc(100vh - ".concat(h,"px)"):"100vh"},qn==null?void 0:qn.style),A),He=function U(X){return Array.isArray(X)?X.map(function(cn){return(0,c.createElement)(ne,C()(C()({replace:En},cn),{},{key:cn.key}),$==="vertical"&&U(cn.children))}):null},Pe=(0,zn.jsx)("div",{ref:Be,className:Te,style:Ee,children:(0,zn.jsxs)("div",{className:Le,children:[(0,zn.jsx)("span",{className:Ae,ref:ye}),"items"in o?He(ln):un]})});c.useEffect(function(){var U=le();return he(),U==null||U.addEventListener("scroll",he),function(){U==null||U.removeEventListener("scroll",he)}},[je]),c.useEffect(function(){typeof sn=="function"&&Zn(sn(ue.current||""))},[sn]),c.useEffect(function(){$e()},[$,sn,je,Pn]);var Ue=c.useMemo(function(){return{registerLink:Oe,unregisterLink:Fe,scrollTo:Ce,activeLink:Pn,onClick:pn,direction:$}},[Pn,pn,Ce,$]);return(0,zn.jsx)(Xn.Provider,{value:Ue,children:F?(0,zn.jsx)(H.Z,{offsetTop:h,target:le,children:Pe}):Pe})},re=function(o){var l=o.prefixCls,d=o.rootClassName,v=c.useContext(P.E_),y=v.getPrefixCls,k=y("anchor",l),A=Un(k),h=u()(A,2),G=h[0],F=h[1];return G((0,zn.jsx)(ce,C()(C()({},o),{},{rootClassName:K()(F,d),anchorPrefixCls:k})))},ae=re,Yn=ae;Yn.Link=ne;var In=Yn},86198:function(me,kn,r){r.d(kn,{Z:function(){return M}});var Tn=r(600861),C=r.n(Tn),Rn=r(238416),w=r.n(Rn),On=r(627424),dn=r.n(On),bn=r(670215),u=r.n(bn),c=r(242122),W=r.n(c),K=r(667294),b=r(294184),fn=r.n(b),Fn=r(518475),m=r(73287),H=r(121790),P=r(45598),n=r(296708);function Xn(o,l,d){if(typeof d=="boolean")return d;if(o.length)return!0;var v=(0,P.default)(l);return v.some(function(y){return y.type===n.Z})}var zn=r(141035),_n=function(l){var d,v=l.componentCls,y=l.bodyBg,k=l.lightSiderBg,A=l.lightTriggerBg,h=l.lightTriggerColor;return w()({},"".concat(v,"-sider-light"),(d={background:k},w()(d,"".concat(v,"-sider-trigger"),{color:h,background:A}),w()(d,"".concat(v,"-sider-zero-width-trigger"),{color:h,background:A,border:"1px solid ".concat(y),borderInlineStart:0}),d))},ne=_n,Kn=function(l){var d,v,y=l.antCls,k=l.componentCls,A=l.colorText,h=l.triggerColor,G=l.footerBg,F=l.triggerBg,J=l.headerHeight,an=l.headerPadding,un=l.headerColor,ln=l.footerPadding,en=l.triggerHeight,$=l.zeroTriggerHeight,xn=l.zeroTriggerWidth,tn=l.motionDurationMid,pn=l.motionDurationSlow,An=l.fontSize,S=l.borderRadius,sn=l.bodyBg,En=l.headerBg,Hn=l.siderBg;return v={},w()(v,k,W()(W()((d={display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:sn,"&, *":{boxSizing:"border-box"}},w()(d,"&".concat(k,"-has-sider"),w()({flexDirection:"row"},"> ".concat(k,", > ").concat(k,"-content"),{width:0})),w()(d,"".concat(k,"-header, &").concat(k,"-footer"),{flex:"0 0 auto"}),w()(d,"".concat(k,"-sider"),{position:"relative",minWidth:0,background:Hn,transition:"all ".concat(tn,", background 0s"),"&-children":w()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(y,"-menu").concat(y,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:en},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:en,color:h,lineHeight:"".concat(en,"px"),textAlign:"center",background:F,cursor:"pointer",transition:"all ".concat(tn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:J,insetInlineEnd:-xn,zIndex:1,width:xn,height:$,color:h,fontSize:l.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Hn,borderStartStartRadius:0,borderStartEndRadius:S,borderEndEndRadius:S,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(pn," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(pn),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-xn,borderStartStartRadius:S,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:S}}}}),d),ne(l)),{},{"&-rtl":{direction:"rtl"}})),w()(v,"".concat(k,"-header"),w()({height:J,padding:an,color:un,lineHeight:"".concat(J,"px"),background:En},"".concat(y,"-menu"),{lineHeight:"inherit"})),w()(v,"".concat(k,"-footer"),{padding:ln,color:A,fontSize:An,background:G}),w()(v,"".concat(k,"-content"),{flex:"auto",minHeight:0}),v},ee=(0,zn.Z)("Layout",function(o){return[Kn(o)]},function(o){var l=o.colorBgLayout,d=o.controlHeight,v=o.controlHeightLG,y=o.colorText,k=o.controlHeightSM,A=o.marginXXS,h=o.colorTextLightSolid,G=o.colorBgContainer,F=v*1.25;return{colorBgHeader:"#001529",colorBgBody:l,colorBgTrigger:"#002140",bodyBg:l,headerBg:"#001529",headerHeight:d*2,headerPadding:"0 ".concat(F,"px"),headerColor:y,footerPadding:"".concat(k,"px ").concat(F,"px"),footerBg:l,siderBg:"#001529",triggerHeight:v+A*2,triggerBg:"#002140",triggerColor:h,zeroTriggerWidth:v,zeroTriggerHeight:v,lightSiderBg:G,lightTriggerBg:G,lightTriggerColor:y}},{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),$n=r(785893),se=["prefixCls","suffixCls","className","tagName"],te=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function Un(o){var l=o.suffixCls,d=o.tagName,v=o.displayName;return function(y){var k=K.forwardRef(function(A,h){return(0,$n.jsx)(y,W()({ref:h,suffixCls:l,tagName:d},A))});return k}}var Ln=K.forwardRef(function(o,l){var d=o.prefixCls,v=o.suffixCls,y=o.className,k=o.tagName,A=u()(o,se),h=K.useContext(m.E_),G=h.getPrefixCls,F=G("layout",d),J=ee(F),an=dn()(J,2),un=an[0],ln=an[1],en=v?"".concat(F,"-").concat(v):F;return un((0,$n.jsx)(k,W()({className:fn()(d||en,y,ln),ref:l},A)))}),Jn=K.forwardRef(function(o,l){var d,v=K.useContext(m.E_),y=v.direction,k=K.useState([]),A=dn()(k,2),h=A[0],G=A[1],F=o.prefixCls,J=o.className,an=o.rootClassName,un=o.children,ln=o.hasSider,en=o.tagName,$=o.style,xn=u()(o,te),tn=(0,Fn.default)(xn,["suffixCls"]),pn=K.useContext(m.E_),An=pn.getPrefixCls,S=pn.layout,sn=An("layout",F),En=Xn(h,un,ln),Hn=ee(sn),Vn=dn()(Hn,2),Q=Vn[0],vn=Vn[1],Mn=fn()(sn,(d={},w()(d,"".concat(sn,"-has-sider"),En),w()(d,"".concat(sn,"-rtl"),y==="rtl"),d),S==null?void 0:S.className,J,an,vn),de=K.useMemo(function(){return{siderHook:{addSider:function(Pn){G(function(Qn){return[].concat(C()(Qn),[Pn])})},removeSider:function(Pn){G(function(Qn){return Qn.filter(function(ue){return ue!==Pn})})}}}},[]);return Q((0,$n.jsx)(H.V.Provider,{value:de,children:(0,$n.jsx)(en,W()(W()({ref:l,className:Mn,style:W()(W()({},S==null?void 0:S.style),$)},tn),{},{children:un}))}))}),oe=Un({tagName:"div",displayName:"Layout"})(Jn),ce=Un({suffixCls:"header",tagName:"header",displayName:"Header"})(Ln),re=Un({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(Ln),ae=Un({suffixCls:"content",tagName:"main",displayName:"Content"})(Ln),Yn=oe,In=Yn;In.Header=ce,In.Footer=re,In.Content=ae,In.Sider=n.Z,In._InternalSiderContext=n.D;var M=In},715778:function(me,kn,r){r.d(kn,{Z:function(){return b}});var Tn=r(174219),C=r(242122),Rn=r.n(C),w=r(585369),On={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},dn=On,bn={lang:Rn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},w.Z),timePickerLocale:Rn()({},dn)};bn.lang.ok="\u786E\u5B9A";var u=bn,c=u,W="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",K={locale:"zh-cn",Pagination:Tn.Z,DatePicker:u,TimePicker:dn,Calendar:c,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:W,method:W,array:W,object:W,number:W,date:W,boolean:W,integer:W,float:W,regexp:W,email:W,url:W,hex:W},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},b=K},15060:function(me,kn,r){r.d(kn,{Z:function(){return In}});var Tn=r(242122),C=r.n(Tn),Rn=r(627424),w=r.n(Rn),On=r(670215),dn=r.n(On),bn=r(667294),u=r(294184),c=r.n(u),W=r(73287),K=r(238416),b=r.n(K),fn=r(548073),Fn=r(141035),m=r(986943),H=function(o){var l,d,v,y,k,A,h=o.componentCls;return b()({},h,C()(C()({},(0,fn.Wf)(o)),{},(A={margin:0,padding:0,listStyle:"none"},b()(A,"".concat(h,"-item"),{position:"relative",margin:0,paddingBottom:o.itemPaddingBottom,fontSize:o.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:o.itemHeadSize,insetInlineStart:(o.itemHeadSize-o.tailWidth)/2,height:"calc(100% - ".concat(o.itemHeadSize,"px)"),borderInlineStart:"".concat(o.tailWidth,"px ").concat(o.lineType," ").concat(o.tailColor)},"&-pending":(l={},b()(l,"".concat(h,"-item-head"),{fontSize:o.fontSizeSM,backgroundColor:"transparent"}),b()(l,"".concat(h,"-item-tail"),{display:"none"}),l),"&-head":{position:"absolute",width:o.itemHeadSize,height:o.itemHeadSize,backgroundColor:o.dotBg,border:"".concat(o.dotBorderWidth,"px ").concat(o.lineType," transparent"),borderRadius:"50%","&-blue":{color:o.colorPrimary,borderColor:o.colorPrimary},"&-red":{color:o.colorError,borderColor:o.colorError},"&-green":{color:o.colorSuccess,borderColor:o.colorSuccess},"&-gray":{color:o.colorTextDisabled,borderColor:o.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:o.itemHeadSize/2,insetInlineStart:o.itemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:o.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(o.fontSize*o.lineHeight-o.fontSize)+o.lineWidth,marginInlineStart:o.margin+o.itemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":(d={},b()(d,"> ".concat(h,"-item-tail"),{display:"none"}),b()(d,"> ".concat(h,"-item-content"),{minHeight:o.controlHeightLG*1.2}),d)}),b()(A,"&".concat(h,`-alternate,
        &`).concat(h,`-right,
        &`).concat(h,"-label"),b()({},"".concat(h,"-item"),{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:"-".concat(o.marginXXS,"px"),"&-custom":{marginInlineStart:o.tailWidth/2}},"&-left":b()({},"".concat(h,"-item-content"),{insetInlineStart:"calc(50% - ".concat(o.marginXXS,"px)"),width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"start"}),"&-right":b()({},"".concat(h,"-item-content"),{width:"calc(50% - ".concat(o.marginSM,"px)"),margin:0,textAlign:"end"})})),b()(A,"&".concat(h,"-right"),b()({},"".concat(h,"-item-right"),(v={},b()(v,"".concat(h,`-item-tail,
            `).concat(h,`-item-head,
            `).concat(h,"-item-head-custom"),{insetInlineStart:"calc(100% - ".concat((o.itemHeadSize+o.tailWidth)/2,"px)")}),b()(v,"".concat(h,"-item-content"),{width:"calc(100% - ".concat(o.itemHeadSize+o.marginXS,"px)")}),v))),b()(A,"&".concat(h,`-pending
        `).concat(h,`-item-last
        `).concat(h,"-item-tail"),{display:"block",height:"calc(100% - ".concat(o.margin,"px)"),borderInlineStart:"".concat(o.tailWidth,"px dotted ").concat(o.tailColor)}),b()(A,"&".concat(h,`-reverse
        `).concat(h,`-item-last
        `).concat(h,"-item-tail"),{display:"none"}),b()(A,"&".concat(h,"-reverse ").concat(h,"-item-pending"),(y={},b()(y,"".concat(h,"-item-tail"),{insetBlockStart:o.margin,display:"block",height:"calc(100% - ".concat(o.margin,"px)"),borderInlineStart:"".concat(o.tailWidth,"px dotted ").concat(o.tailColor)}),b()(y,"".concat(h,"-item-content"),{minHeight:o.controlHeightLG*1.2}),y)),b()(A,"&".concat(h,"-label"),(k={},b()(k,"".concat(h,"-item-label"),{position:"absolute",insetBlockStart:-(o.fontSize*o.lineHeight-o.fontSize)+o.tailWidth,width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"end"}),b()(k,"".concat(h,"-item-right"),b()({},"".concat(h,"-item-label"),{insetInlineStart:"calc(50% + ".concat(o.marginSM,"px)"),width:"calc(50% - ".concat(o.marginSM,"px)"),textAlign:"start"})),k)),b()(A,"&-rtl",b()({direction:"rtl"},"".concat(h,"-item-head-custom"),{transform:"translate(50%, -50%)"})),A)))},P=(0,Fn.Z)("Timeline",function(M){var o=(0,m.TS)(M,{itemHeadSize:10,customHeadPaddingVertical:M.paddingXXS,paddingInlineEnd:2});return[H(o)]},function(M){return{tailColor:M.colorSplit,tailWidth:M.lineWidthBold,dotBorderWidth:M.wireframe?M.lineWidthBold:M.lineWidth*3,dotBg:M.colorBgContainer,itemPaddingBottom:M.padding*1.25}}),n=r(785893),Xn=["prefixCls","className","color","dot","pending","position","label","children"],zn=function(o){var l,d=o.prefixCls,v=o.className,y=o.color,k=y===void 0?"blue":y,A=o.dot,h=o.pending,G=h===void 0?!1:h,F=o.position,J=o.label,an=o.children,un=dn()(o,Xn),ln=bn.useContext(W.E_),en=ln.getPrefixCls,$=en("timeline",d),xn=c()("".concat($,"-item"),b()({},"".concat($,"-item-pending"),G),v),tn=/blue|red|green|gray/.test(k||"")?void 0:k,pn=c()("".concat($,"-item-head"),(l={},b()(l,"".concat($,"-item-head-custom"),!!A),b()(l,"".concat($,"-item-head-").concat(k),!tn),l));return(0,n.jsxs)("li",C()(C()({},un),{},{className:xn,children:[J&&(0,n.jsx)("div",{className:"".concat($,"-item-label"),children:J}),(0,n.jsx)("div",{className:"".concat($,"-item-tail")}),(0,n.jsx)("div",{className:pn,style:{borderColor:tn,color:tn},children:A}),(0,n.jsx)("div",{className:"".concat($,"-item-content"),children:an})]}))},_n=zn,ne=r(600861),Kn=r.n(ne),ee=r(100628),$n=r.n(ee),se=["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"],te=["className"],Un=function(o){var l,d=o.prefixCls,v=o.className,y=o.pending,k=y===void 0?!1:y,A=o.children,h=o.items,G=o.rootClassName,F=o.reverse,J=F===void 0?!1:F,an=o.direction,un=o.hashId,ln=o.pendingDot,en=o.mode,$=en===void 0?"":en,xn=dn()(o,se),tn=function(vn,Mn){return $==="alternate"?vn==="right"?"".concat(d,"-item-right"):vn==="left"||Mn%2===0?"".concat(d,"-item-left"):"".concat(d,"-item-right"):$==="left"?"".concat(d,"-item-left"):$==="right"||vn==="right"?"".concat(d,"-item-right"):""},pn=Kn()(h||[]),An=typeof k=="boolean"?null:k;k&&pn.push({pending:!!k,dot:ln||(0,n.jsx)($n(),{}),children:An}),J&&pn.reverse();var S=pn.length,sn="".concat(d,"-item-last"),En=pn.filter(function(Q){return!!Q}).map(function(Q,vn){var Mn,de=vn===S-2?sn:"",Wn=vn===S-1?sn:"",Pn=Q.className,Qn=dn()(Q,te);return(0,bn.createElement)(_n,C()(C()({},Qn),{},{className:c()([Pn,!J&&k?de:Wn,tn((Mn=Q==null?void 0:Q.position)!==null&&Mn!==void 0?Mn:"",vn)]),key:(Q==null?void 0:Q.key)||vn}))}),Hn=pn.some(function(Q){return!!(Q!=null&&Q.label)}),Vn=c()(d,(l={},b()(l,"".concat(d,"-pending"),!!k),b()(l,"".concat(d,"-reverse"),!!J),b()(l,"".concat(d,"-").concat($),!!$&&!Hn),b()(l,"".concat(d,"-label"),Hn),b()(l,"".concat(d,"-rtl"),an==="rtl"),l),v,G,un);return(0,n.jsx)("ul",C()(C()({},xn),{},{className:Vn,children:En}))},Ln=Un,Jn=r(45598);function oe(M,o){return M&&Array.isArray(M)?M:(0,Jn.default)(o).map(function(l){var d,v;return C()({children:(d=l==null||(v=l.props)===null||v===void 0?void 0:v.children)!==null&&d!==void 0?d:""},l.props)})}var ce=oe,re=["prefixCls","children","items","className","style"],ae=function(o){var l=bn.useContext(W.E_),d=l.getPrefixCls,v=l.direction,y=l.timeline,k=o.prefixCls,A=o.children,h=o.items,G=o.className,F=o.style,J=dn()(o,re),an=d("timeline",k);if(!1)var un;var ln=P(an),en=w()(ln,2),$=en[0],xn=en[1],tn=ce(h,A);return $((0,n.jsx)(Ln,C()(C()({},J),{},{className:c()(y==null?void 0:y.className,G),style:C()(C()({},y==null?void 0:y.style),F),prefixCls:an,direction:v,items:tn,hashId:xn})))};ae.Item=_n;var Yn=ae,In=Yn}}]);