"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[40367],{148050:function(be,zn,o){o.d(zn,{Z:function(){return Y}});var Nn=o(459400),j=o.n(Nn),Zn=o(667294),y=o(186548),Dn=o(309819),pn=o(879587),wn=o(785893),p,c="https://github.com/ant-design/ant-design/edit/master/",$=(0,Dn.kc)(function(b){var W=b.token,Rn=b.css,m=W.colorIcon,P=W.colorText,Z=W.iconCls;return{editButton:Rn(p||(p=j()([`
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
    `])),Z,m,P)}});function Y(b){var W=b.title,Rn=b.filename,m=$(),P=m.styles;return(0,wn.jsx)(pn.Z,{title:W,children:(0,wn.jsx)("a",{className:P.editButton,href:"".concat(c).concat(Rn),target:"_blank",rel:"noopener noreferrer",children:(0,wn.jsx)(y.Z,{})})})}},244011:function(be,zn,o){o.r(zn),o.d(zn,{default:function(){return Ur}});var Nn=o(627424),j=o.n(Nn),Zn=o(294184),y=o.n(Zn),Dn=o(727484),pn=o.n(Dn),wn=o(533852),p=o(733851),c=o(667294),$=o(715778),Y=o(75529),b=o(302559),W=o(438746),Rn=o(459400),m=o.n(Rn),P=o(370917),Z=o(309819),n=o(785893),se,_n={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},mn=function(){var e=(0,Z.Fg)(),t=function s(d){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return f<=10?`
.palette-`.concat(d,"-").concat(f,` {
  background: `).concat(e["".concat(d,"-").concat(f)],`;
}
`).concat(s(d,f+1),`
    `):""},a=function s(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return d<=13?`
.palette-gray-`.concat(d,` {
  background: `).concat(_n[d],`;
}
`).concat(s(d+1),`
    `):""};return(0,n.jsx)(P.xB,{styles:(0,P.iv)(se||(se=m()([`
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
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),a())})},ge=mn,ne,Yn=function(){return(0,n.jsx)(P.xB,{styles:(0,P.iv)(ne||(ne=m()([`
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
    `])))})},ee,ce=function(){var i=(0,Z.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(ee||(ee=m()([`
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
      `])),i.colorText,i.fontSize,i.fontFamily,i.lineHeight,i.colorBgContainer)})},On,he=function(){var i=(0,Z.Fg)(),e=i.anchorTop;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(On||(On=m()([`
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
    `])),e)})},Fn=o(510274),$n,te=function(){var e=(0,Z.Fg)(),t=e.antCls,a=e.colorPrimary;return(0,n.jsx)(P.xB,{styles:(0,P.iv)($n||($n=m()([`
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
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.colorText,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,a,new Fn.C(a).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new Fn.C(a).setAlpha(.75).toHexString(),t,t,new Fn.C(a).setAlpha(.75).toHexString(),t,t,t,t,new Fn.C(a).setAlpha(.6).toHexString(),t,t,t)})},fe=te,oe,de=function(){var i=(0,Z.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(oe||(oe=m()([`
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
      `])),i.colorText,i.fontSize,i.borderRadius)})},ue,xe=function(){var e=(0,Z.Fg)(),t=e.antCls,a=e.iconCls;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(ue||(ue=m()([`
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
      `])),e.colorBgContainer,e.colorSplit,e.borderRadiusLG,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,a,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,a,e.colorBgContainer,a,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},re=xe,Ln,gn=function(){var i=(0,Z.Fg)(),e=i.antCls,t=i.iconCls;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(Ln||(Ln=m()([`
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
      `])),t,e,i.colorPrimary,t,e)})},l,r=function(){var i=(0,Z.Fg)(),e=i.iconCls;return(0,n.jsx)(P.xB,{styles:(0,P.iv)(l||(l=m()([`
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
      `])),i.colorIcon,i.colorIconHover,i.colorBorder,i.colorTextSecondary,e,i.colorLinkHover)})},u,g=function(){return(0,n.jsx)(P.xB,{styles:(0,P.iv)(u||(u=m()([`
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
    `])))})},z,S=function(){var i=(0,Z.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(z||(z=m()([`
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
      `])),i.screenLG,i.colorBgContainer,i.colorSplit,i.colorLink,i.colorBgContainer)})},H,A=function(){var i=(0,Z.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(H||(H=m()([`
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
      `])),i.colorPrimary,i.colorPrimary,i.colorPrimary,i.colorPrimary,i.colorPrimary)})},v,N=function(){var i=(0,Z.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(v||(v=m()([`
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
      `])),i.colorPrimary,i.colorError,i.colorText,i.colorTextSecondary,i.colorBgContainer,i.borderRadius,i.colorBgContainer,i.colorBgContainer)})},G,Q="dumi-default-",tn=function(){var i=(0,Z.Fg)();return(0,n.jsx)(P.xB,{styles:(0,P.iv)(G||(G=m()([`
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
      `])),Q,i.colorText,i.colorBgContainer,i.colorBgContainer,i.colorTextPlaceholder,Q,i.colorBgElevated,i.colorBgElevated,Q,i.controlItemBgActive,i.controlItemBgHover,i.colorText,i.colorText)})},xn,ln=function(){return(0,n.jsx)(P.xB,{styles:(0,P.iv)(xn||(xn=m()([`
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
    `])))})},sn=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ce,{}),(0,n.jsx)(he,{}),(0,n.jsx)(fe,{}),(0,n.jsx)(de,{}),(0,n.jsx)(re,{}),(0,n.jsx)(gn,{}),(0,n.jsx)(r,{}),(0,n.jsx)(g,{}),(0,n.jsx)(S,{}),(0,n.jsx)(A,{}),(0,n.jsx)(N,{}),(0,n.jsx)(ln,{}),(0,n.jsx)(ge,{}),(0,n.jsx)(Yn,{}),(0,n.jsx)(tn,{})]})},V=sn,hn=o(242122),T=o.n(hn),cn=o(238416),K=o.n(cn),on=o(301210),An=o(660532),Wn=o(469181),Qn=o(344682),Vn=o(11739),_=o(664095),vn=o(883458),Un=o(722449),pe=o(316165),En="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",ae="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",ie=function(e){return(0,n.jsx)(pe.Z,T()(T()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?En:ae})})}))},Se=ie,ke=o(562925),yn=o(373638),Gn=o(438199),Ae,le,Xe=(0,Z.kc)(function(i){var e=i.token,t=i.css,a=e.headerHeight,s=e.colorTextHeading,d=e.fontFamily,f=e.mobileMaxWidth;return{logo:t(Ae||(Ae=m()([`
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
    `])),a,s,d,a,s,f),title:t(le||(le=m()([`
      line-height: 32px;
    `])))}}),Ke=function(e){var t=e.isZhCN,a=(0,p.TH)(),s=a.search,d=Xe(),f=d.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(p.rU,{to:yn.J1("/",t,s),className:f.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:f.title,children:"Ant Design"})]})})},Hn=Ke,Ee=o(280882),Je=o(963918),Xn=o(988872),He,Ie,me,ye,Pe=(0,Z.kc)(function(i){var e=i.css,t=i.token;return{smallStyle:e(He||(He=m()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(Ie||(Ie=m()([`
    color: `,`;
  `])),t.colorTextQuaternary),downOutlined:e(me||(me=m()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(ye||(ye=m()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),Me=function(){var e=Pe(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(p._H,{id:"app.implementation.community"}),")"]})},Ze=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(p._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(p._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(p._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(Me,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(Me,{})]}),key:"vue"}]},Ye=function(e){var t=e.isRTL,a=Pe(),s=a.styles;return(0,n.jsx)(Je.Z,{menu:{items:Ze()},placement:"bottomRight",children:(0,n.jsxs)(Xn.ZP,{size:"small",children:[(0,n.jsx)(p._H,{id:"app.header.menu.more"}),(0,n.jsx)(Ee.Z,{className:y()(t?s.downOutlinedRTL:s.downOutlined,s.down)})]})})},ze=Ye,Te=o(600861),Kn=o.n(Te),De=o(529410),In=o(472638),Re,Oe,Qe={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},Fe=(0,Z.kc)(function(i){var e=i.token,t=e.antCls,a=e.iconCls,s=e.fontFamily,d=e.headerHeight,f=e.menuItemBorder,x=e.colorPrimary,w=e.colorText;return{nav:(0,Z.iv)(Re||(Re=m()([`
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
    `])),s,t,t,t,40+12*2,d,d,f,w,t,a,t,x,t,t),popoverMenuNav:(0,Z.iv)(Oe||(Oe=m()([`
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
    `])),t,t,t,t,t)}}),qe=function(i){var e,t,a=i.isZhCN,s=i.isMobile,d=i.responsive,f=i.directionText,x=i.onLangChange,w=i.onDirectionChange,h=(0,p.TH)(),k=h.pathname,L=h.search,E=(0,b.Z)(Qe),D=j()(E,1),O=D[0],F=(0,p.yh)(),M=((e=F["/docs/blog"])===null||e===void 0||(e=e[0])===null||e===void 0?void 0:e.children)||[],R=Fe(),B=R.styles,C=s?"inline":"horizontal",q=k.split("/").filter(function(Bn){return Bn}).slice(0,-1).join("/"),bn=q||"home";k.startsWith("/changelog")?bn="docs/react":k.startsWith("/docs/resources")&&(bn="docs/resources");var rn,jn=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(p._H,{id:"app.header.lang"}),onClick:x,key:"switch-lang"},{label:f,onClick:w,key:"switch-direction"}].concat(Kn()(Ze()));s?rn=jn:d==="crowded"&&(rn=[{label:(0,n.jsx)(An.Z,{}),key:"additional",children:Kn()(jn)}]);var Cn=[{label:(0,n.jsx)(In.Z,{to:yn.J1("/docs/spec/introduce",a,L),children:O.design}),key:"docs/spec"},{label:(0,n.jsx)(In.Z,{to:yn.J1("/docs/react/introduce",a,L),children:O.development}),key:"docs/react"},{label:(0,n.jsx)(In.Z,{to:yn.J1("/components/overview/",a,L),children:O.components}),key:"components"},M.length?{label:(0,n.jsx)(In.Z,{to:yn.J1(M.sort(function(Bn,I){var nn,en;return((nn=Bn.frontmatter)===null||nn===void 0?void 0:nn.date)>((en=I.frontmatter)===null||en===void 0?void 0:en.date)?-1:1})[0].link,a,L),children:O.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(In.Z,{to:yn.J1("/docs/resources",a,L),children:O.resources}),key:"docs/resources"},a?{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(Kn()((t=rn)!==null&&t!==void 0?t:[]));return(0,n.jsx)(De.Z,{mode:C,selectedKeys:[bn],className:B.nav,disabledOverflow:!0,items:Cn,style:{borderRight:0}})},U=o(879587),dn,un,Pn,Tn,we,Jn="1.2em",qn=(0,Z.kc)(function(i){var e=i.token,t=i.css,a=e.colorText,s=e.colorBorder,d=e.colorBgContainer,f=e.colorBgTextHover,x=e.borderRadius,w=e.controlHeight,h=e.motionDurationMid;return{btn:t(dn||(dn=m()([`
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
    `])),a,s,w,w,x,h,h,f,Jn,Jn,Jn),innerDiv:t(un||(un=m()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Jn,Jn),labelStyle:t(Pn||(Pn=m()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Jn,a,a),label1Style:t(Tn||(Tn=m()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),a,d),label2Style:t(we||(we=m()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),ve=function(e){var t=e.label1,a=e.label2,s=e.tooltip1,d=e.tooltip2,f=e.value,x=e.pure,w=e.onClick,h=qn(),k=h.styles,L=k.btn,E=k.innerDiv,D=k.labelStyle,O=k.label1Style,F=k.label2Style,M=(0,n.jsx)("button",{onClick:w,className:L,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[x&&(f===1?t:a),!x&&(0,n.jsxs)("div",{className:E,children:[(0,n.jsx)("span",{className:y()(D,f===1?O:F),children:t}),(0,n.jsx)("span",{className:y()(D,f===1?F:O),children:a})]})]})},"lang-button");return s||d?(0,n.jsx)(U.Z,{title:f===1?s:d,children:M}):M},je=ve,Be,st,ct,dt,ut,pt,mt=1120,gt=1200,uo={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},po=(0,Z.kc)(function(i){var e=i.token,t=i.css,a="#ced4d9";return{header:t(Be||(Be=m()([`
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
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,a,a,a),menuRow:t(st||(st=m()([`
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
    `]))),dataDirectionIcon:t(ct||(ct=m()([`
      width: 16px;
    `]))),popoverMenu:K()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0}),banner:t(dt||(dt=m()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:t(ut||(ut=m()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),e.mobileMaxWidth),icon:t(pt||(pt=m()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),mo=function(){var e=(0,b.Z)(uo),t=j()(e,2),a=t[0],s=t[1],d=(0,p.WF)(),f=d.pkg,x=(0,yn.Is)(),w=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),h=j()(w,2),k=h[0],L=h[1],E=(0,c.useContext)(Gn.Z),D=E.direction,O=E.isMobile,F=E.bannerVisible,M=E.updateSiteConfig,R=(0,c.useRef)(null),B=(0,p.TH)(),C=B.pathname,q=B.search,bn=po(),rn=bn.styles,jn=(0,c.useCallback)(function(){L(function(an){return T()(T()({},an),{},{menuVisible:!1})})},[]),Cn=(0,c.useCallback)(function(){L(function(an){return T()(T()({},an),{},{windowWidth:window.innerWidth})})},[]),Bn=(0,c.useCallback)(function(){L(function(an){return T()(T()({},an),{},{menuVisible:!0})})},[]),I=(0,c.useCallback)(function(an){L(function(Mn){return T()(T()({},Mn),{},{menuVisible:an})})},[]),nn=function(){M({direction:D!=="rtl"?"rtl":"ltr"})},en=function(){M({bannerVisible:!1}),yn.Fy()&&localStorage.setItem(ke.ANT_DESIGN_NOT_SHOW_BANNER,pn()().toISOString())};(0,c.useEffect)(function(){jn()},[B]),(0,c.useEffect)(function(){return Cn(),window.addEventListener("resize",Cn),function(){window.removeEventListener("resize",Cn),R.current&&clearTimeout(R.current)}},[]);var Sn=(0,c.useCallback)(function(an){var Mn=window.location.href,Ge=window.location.pathname;if(/overview/.test(Ge)&&/0?[1-39][0-3]?x/.test(an)){window.location.href=Mn.replace(window.location.origin,an).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(an)?"":"/react","/introduce")).replace(/\/$/,"");return}var lt=new URL(Mn.replace(window.location.origin,an));lt.host.includes("antgroup")&&(window.location.href="".concat(lt.href.replace(/\/$/,""),"/")),window.location.href=lt.href.replace(/\/$/,"")},[]),kn=(0,c.useCallback)(function(){var an="".concat(window.location.protocol,"//"),Mn=window.location.href.slice(an.length);yn.Fy()&&localStorage.setItem("locale",yn.KE(C)?"en-US":"zh-CN"),window.location.href=an+Mn.replace(window.location.pathname,yn.J1(C,!yn.KE(C),q).pathname)},[B]),rt=(0,c.useMemo)(function(){return D!=="rtl"?"RTL":"LTR"},[D]),X=(0,c.useMemo)(function(){return D==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[D]),J=k.menuVisible,fn=k.windowWidth,Ce=k.searching,ao=T()(K()({},f.version,f.version),x==null?void 0:x.docVersions),Gr=Object.keys(ao).map(function(an){return{value:ao[an],label:an}}),io=["","index","index-cn"].includes(C),lo=s==="cn",Xr=D==="rtl",at=null;fn<mt?at="crowded":fn<gt&&(at="narrow");var Kr=y()(rn.header,"clearfix",{"home-header":io}),it={isZhCN:lo,isRTL:Xr},so=(0,n.jsx)(qe,T()(T()({},it),{},{responsive:at,isMobile:O,directionText:rt,onLangChange:kn,onDirectionChange:nn}),"nav"),Le=[so,(0,n.jsx)(Wn.Z,{className:"version",size:"small",defaultValue:f.version,onChange:Sn,dropdownStyle:X,popupMatchSelectWidth:!1,getPopupContainer:function(Mn){return Mn.parentNode},options:Gr},"version"),(0,n.jsx)(ze,T()({},it),"more"),(0,n.jsx)(je,{onClick:kn,value:yn.KE(C)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(je,{onClick:nn,value:D==="rtl"?2:1,label1:(0,n.jsx)(Se,{className:rn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(Se,{className:rn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(je,{value:1,label1:(0,n.jsx)(on.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];fn<mt?Le=Ce?[]:[so]:fn<gt&&(Le=Ce?[]:Le);var co=io?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:Kr,children:[O&&(0,n.jsx)(Qn.Z,{overlayClassName:rn.popoverMenu,placement:"bottomRight",content:Le,trigger:"click",open:J,arrow:{arrowPointAtCenter:!0},onOpenChange:I,children:(0,n.jsx)(An.Z,{className:"nav-phone-icon",onClick:Bn})}),lo&&F&&(0,n.jsx)(Y.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,n.jsx)(Vn.Z,{className:rn.banner,message:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:O?a.shortMessage:a.message}),(0,n.jsx)("a",{className:rn.link,href:a.link,target:"_blank",rel:"noreferrer",onClick:function(){var Mn,Ge;(Mn=(Ge=window).gtag)===null||Mn===void 0||Mn.call(Ge,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:a.link})},children:a.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:en})}),(0,n.jsxs)(_.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(vn.Z,T()(T()({},co[0]),{},{children:(0,n.jsx)(Hn,T()(T()({},it),{},{location:B}))})),(0,n.jsxs)(vn.Z,T()(T()({},co[1]),{},{className:rn.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Un.ZP,{})}),!O&&Le]}))]})]})},go=mo,Jr=o(945462),ho=o(670215),fo=o.n(ho),xo=o(857278),vo=o(430932),bo=o(985093),$e=o(115668),yo=o(642207),ht=o(13923),_e=o(825035),wo=o(937993),jo=o(448118),Co=o(938545),So=o(569980),ko=o(391298),zo=o(630770),ft=o(693399),We="ant-where-checker",To={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function Bo(){var i=(0,b.Z)(To),e=j()(i,1),t=e[0],a=c.useState(!0),s=j()(a,2),d=s[0],f=s[1];return c.useEffect(function(){var x=document.createElement("p");x.className=We,x.style.position="fixed",x.style.pointerEvents="none",x.style.visibility="hidden",x.style.width="0",document.body.appendChild(x),(0,ft.updateCSS)(`
:where(.`.concat(We,`) {
  content: "__CHECK__";
}
    `),We);var w=getComputedStyle(x),h=w.content;f(String(h).includes("CHECK")),document.body.removeChild(x),(0,ft.removeCSS)(We)},[]),d?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var xt,vt,No={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Lo=function(){var e=(0,c.useContext)(Gn.Z),t=e.isMobile;return(0,Z.kc)(function(a){var s=a.token,d=a.css,f=new Fn.C((0,zo.Z)("#f0f3fa","#fff")).onBackground(s.colorBgContainer).toHexString();return{holder:d(xt||(xt=m()([`
      background: `,`;
    `])),f),footer:d(vt||(vt=m()([`
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
    `])),f,s.colorTextSecondary,s.colorText,t?60:0,t?20:0,s.marginXXL,s.fontSize)}})()},Ao=function(){var e=(0,W.Z)(),t=(0,b.Z)(No),a=j()(t,2),s=a[0],d=a[1],f=Lo(),x=f.styles,w=e.getLink,h=c.useMemo(function(){var k=d==="cn",L={title:(0,n.jsx)(p._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:k?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:k?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:k?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(p._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(p._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(p._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(p._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(p._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(p._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(p._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(p._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},E={title:(0,n.jsx)(p._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(xo.Z,{}),title:(0,n.jsx)(p._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(vo.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(bo.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(p._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)($e.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(p._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)($e.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(p._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(p._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};k&&E.items.push({icon:(0,n.jsx)(yo.Z,{}),title:(0,n.jsx)(p._H,{id:"app.footer.work_with_us"}),url:w("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:p.rU});var D={title:(0,n.jsx)(p._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(on.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(ht.Z,{}),title:(0,n.jsx)(p._H,{id:"app.footer.change-log"}),url:w("/changelog"),LinkComponent:p.rU},{icon:(0,n.jsx)(_e.Z,{}),title:(0,n.jsx)(p._H,{id:"app.footer.faq"}),url:w("/docs/react/faq"),LinkComponent:p.rU},{icon:(0,n.jsx)(wo.Z,{}),title:(0,n.jsx)(p._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(jo.Z,{}),title:(0,n.jsx)(p._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(Co.Z,{}),title:(0,n.jsx)(p._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(_e.Z,{}),title:(0,n.jsx)(p._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(_e.Z,{}),title:(0,n.jsx)(p._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},O={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(p._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(p._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(p._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,n.jsx)(p._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(p._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(p._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,n.jsx)(p._H,{id:"app.footer.galacean"}),description:(0,n.jsx)(p._H,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(p._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(So.Z,{}),title:(0,n.jsx)(p._H,{id:"app.footer.theme"}),url:w("/theme-editor"),LinkComponent:p.rU}]};return[L,E,D,O]},[d,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ko.Z,{columns:h,className:x.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:s.owner})]})}),(0,n.jsx)(Bo,{})]})},nt=Ao,Eo=["children"],Ho=function(e){var t=e.children,a=fo()(e,Eo);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(p.ql,{children:[(0,n.jsx)("title",{children:a.title}),(0,n.jsx)("meta",{property:"og:title",content:a.title}),a.desc&&(0,n.jsx)("meta",{name:"description",content:a.desc})]}),(0,n.jsx)("div",{style:{minHeight:"100vh"},children:t}),(0,n.jsx)(nt,{})]})},Io=Ho,Po=o(86198),Ve=o(185209),Mo=function(){var e=(0,p.eL)(),t=(0,c.useMemo)(function(){var f;if(!e.frontmatter.subtitle&&!e.frontmatter.title)f="404 Not Found - Ant Design";else{var x;f="".concat(e.frontmatter.subtitle||""," ").concat(((x=e.frontmatter)===null||x===void 0?void 0:x.title)||""," - Ant Design")}var w=e.frontmatter.description||"";return[f,w]},[e]),a=j()(t,2),s=a[0],d=a[1];return(0,n.jsxs)(p.ql,{children:[(0,n.jsx)("title",{children:s}),(0,n.jsx)("meta",{property:"og:title",content:s}),d&&(0,n.jsx)("meta",{name:"description",content:d})]})},bt=Mo,yt=o(148050),Zo=o(823493),Do=o.n(Zo),Ro=o(464778),Oo=o(658192),wt,jt,Ct,St=["scroll","resize"],Fo=(0,Z.kc)(function(i){var e=i.token,t=i.css,a=e.boxShadowSecondary,s=e.antCls;return{affixTabs:t(wt||(wt=m()([`
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
    `])),a,s,s,s),affixTabsFixed:t(jt||(jt=m()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(Ct||(Ct=m()([`
      text-transform: capitalize;
    `])))}}),kt=32,$o=function(){var e=c.useRef(null),t=c.useRef([]),a=c.useState(!1),s=j()(a,2),d=s[0],f=s[1],x=c.useState(void 0),w=j()(x,2),h=w[0],k=w[1],L=Fo(),E=L.styles,D=E.affixTabs,O=E.affixTabsFixed,F=E.span;function M(B){var C=document.getElementById(B);if(C){var q=C.offsetTop-e.current.offsetHeight-kt;(0,Oo.Z)(q)}}c.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(B){var C=B.id;return C}),f(!0)},[]),c.useEffect(function(){var B=decodeURIComponent((location.hash||"").slice(1));B&&M(B)},[d]);var R=c.useMemo(function(){function B(){for(var C=window,q=C.scrollY,bn=e.current.offsetHeight,rn=t.current.length-1;rn>=0;rn-=1){var jn=t.current[rn],Cn=document.getElementById(jn),Bn=Cn.offsetTop-bn-kt;if(Bn<=q){k(jn);return}}k(void 0)}return Do()(B)},[]);return c.useEffect(function(){return St.forEach(function(B){return window.addEventListener(B,R)}),R(),function(){St.forEach(function(B){return window.removeEventListener(B,R)})}},[]),(0,n.jsx)("div",{className:y()(D,h&&O),ref:e,children:(0,n.jsx)(Ro.Z,{activeKey:h,onChange:M,items:t.current.map(function(B){return{key:B,label:(0,n.jsx)("span",{className:F,children:B.replace(/-/g," ")})}})})})},Wo=$o,zt,Tt,Bt,Nt=40,Ue=1208,et=24,Vo=(0,Z.kc)(function(i){var e=i.token,t=i.css,a=e.antCls;return{resourcePage:t(zt||(zt=m()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),Ue),resourceContent:t(Tt||(Tt=m()([`
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
    `])),Nt,Ue,et,a),banner:t(Bt||(Bt=m()([`
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
    `])),Nt,Ue,Ue,et,et)}}),Uo=function(e){var t,a=e.children,s=Vo(),d=s.styles,f=(0,p.eL)();return(0,n.jsx)(Y.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(Po.Z,{children:[(0,n.jsx)(bt,{}),(0,n.jsxs)("div",{id:"resources-page",className:d.resourcePage,children:[(0,n.jsx)(Wo,{}),(0,n.jsxs)("div",{className:d.banner,children:[(0,n.jsxs)(Ve.Z.Title,{style:{fontSize:30},children:[(t=f.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(yt.Z,{title:(0,n.jsx)(p._H,{id:"app.content.edit-page"}),filename:f.frontmatter.filename})]}),(0,n.jsx)("section",{children:f.frontmatter.description})]}),(0,n.jsx)("div",{className:d.resourceContent,children:a}),(0,n.jsx)(nt,{})]})]})})},Go=Uo,Xo=o(720841),Ko=o(538294),Lt=o(575054),At=o(796586),Jo=o(605071),tt=o(945016),Yo=o(217187),Ne=o(618073),Et=o(206171),Qo=o(844183),qo=o(566254),_o=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,p.yh)(),a=(0,W.Z)(),s=a.pathname,d=a.search,f=(0,p.tx)(),x=e.before,w=e.after,h=(0,c.useMemo)(function(){var k,L=Kn()(f!=null?f:[]);if(s.startsWith("/docs/spec")){var E=L.splice(0,1);L.push.apply(L,Kn()(E))}if(s.startsWith("/docs/react")){var D,O=(D=Object.entries(t).find(function(B){var C=j()(B,1),q=C[0];return q.startsWith("/changelog")}))===null||D===void 0?void 0:D[1];O&&L.splice(1,0,O[0])}if(s.startsWith("/changelog")){var F,M=(F=Object.entries(t).find(function(B){var C=j()(B,1),q=C[0];return q.startsWith("/docs/react")}))===null||F===void 0?void 0:F[1];M&&(L.unshift(M[0]),L.push.apply(L,Kn()(M.slice(1))))}var R=function(C){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return C&&q&&(0,n.jsx)(Qo.Z,{color:C==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:C.replace("VERSION",qo.Z)})};return(k=L==null?void 0:L.reduce(function(B,C){if(C!=null&&C.title)if(s.startsWith("/docs/spec")){var q,bn,rn=C.children.reduce(function(I,nn){var en,Sn,kn=(en=(Sn=nn.frontmatter)===null||Sn===void 0?void 0:Sn.type)!==null&&en!==void 0?en:"default";return I[kn]||(I[kn]=[]),I[kn].push(nn),I},{}),jn=[];jn.push.apply(jn,Kn()((q=(bn=rn.default)===null||bn===void 0?void 0:bn.map(function(I){return{label:(0,n.jsxs)(In.Z,{to:"".concat(I.link).concat(d),children:[x,I==null?void 0:I.title,w]}),key:I.link.replace(/(-cn$)/g,"")}}))!==null&&q!==void 0?q:[])),Object.entries(rn).forEach(function(I){var nn=j()(I,2),en=nn[0],Sn=nn[1];en!=="default"&&jn.push({type:"group",label:en,key:en,children:Sn==null?void 0:Sn.map(function(kn){return{label:(0,n.jsxs)(In.Z,{to:"".concat(kn.link).concat(d),children:[x,kn==null?void 0:kn.title,w]}),key:kn.link.replace(/(-cn$)/g,"")}})})}),B.push({label:C==null?void 0:C.title,key:C==null?void 0:C.title,children:jn})}else{var Cn;B.push({type:"group",label:C==null?void 0:C.title,key:C==null?void 0:C.title,children:(Cn=C.children)===null||Cn===void 0?void 0:Cn.map(function(I){var nn,en;return{label:(0,n.jsxs)(In.Z,{to:"".concat(I.link).concat(d),style:{display:"flex",alignItems:"center"},children:[x,(0,n.jsx)("span",{children:I==null?void 0:I.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(nn=I.frontmatter)===null||nn===void 0?void 0:nn.subtitle},"chinese"),R((en=I.frontmatter)===null||en===void 0?void 0:en.tag,!x&&!w),w]}),key:I.link.replace(/(-cn$)/g,"")}})})}else{var Bn=C.children||[];Bn.every(function(I){var nn;return I==null||(nn=I.frontmatter)===null||nn===void 0?void 0:nn.date})&&Bn.sort(function(I,nn){var en,Sn;return((en=I.frontmatter)===null||en===void 0?void 0:en.date)>((Sn=nn.frontmatter)===null||Sn===void 0?void 0:Sn.date)?-1:1}),B.push.apply(B,Kn()(Bn.map(function(I){return{label:(0,n.jsxs)(In.Z,{to:"".concat(I.link).concat(d),style:{display:"flex",alignItems:"center"},children:[x,I==null?void 0:I.title,R(I.frontmatter.tag,!x&&!w),w]}),key:I.link.replace(/(-cn$)/g,"")}})))}return B},[]))!==null&&k!==void 0?k:[]},[f,t,s,d,e]);return[h,s]},Ht=_o,It,Pt,Mt,Zt,nr=(0,Z.kc)(function(i){var e=i.token,t=i.css,a=e.colorSplit,s=e.iconCls,d=e.fontSizeIcon;return{prevNextNav:t(It||(It=m()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),a),pageNav:t(Pt||(Pt=m()([`
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
    `])),s,d),prevNav:t(Mt||(Mt=m()([`
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
    `]))),nextNav:t(Zt||(Zt=m()([`
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
    `])))}}),er=function i(e){return Array.isArray(e)?e.reduce(function(t,a){if(!a)return t;if("children"in a&&a.children){var s;return t.concat((s=i(a.children))!==null&&s!==void 0?s:[])}return t.concat(a)},[]):null},tr=function(e){var t=e.rtl,a=nr(),s=a.styles,d={className:"footer-nav-icon-before"},f={className:"footer-nav-icon-after"},x=t?(0,n.jsx)(Ne.Z,T()({},d)):(0,n.jsx)(Et.Z,T()({},d)),w=t?(0,n.jsx)(Et.Z,T()({},f)):(0,n.jsx)(Ne.Z,T()({},f)),h=Ht({before:x,after:w}),k=j()(h,2),L=k[0],E=k[1],D=(0,c.useContext)(Gn.Z),O=D.isMobile,F=(0,c.useMemo)(function(){var C=er(L);if(!C)return[null,null];var q=-1;return C.forEach(function(bn,rn){bn&&bn.key===E&&(q=rn)}),[C[q-1],C[q+1]]},[L,E]),M=j()(F,2),R=M[0],B=M[1];return O?null:(0,n.jsxs)("section",{className:s.prevNextNav,children:[R&&c.cloneElement(R.label,{className:y()(s.pageNav,s.prevNav,R.className)}),B&&c.cloneElement(B.label,{className:y()(s.pageNav,s.nextNav,B.className)})]})},or=tr,rr=o(302281),ar=o(15060),ir=o(154098),lr=o.n(ir);function sr(i){var e=i;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status==="pending"||(e.status="pending",e.then(function(t){e.status="fulfilled",e.value=t},function(t){e.status="rejected",e.reason=t})),e)}var cr=sr,dr=o(856690),ur=o.n(dr),pr=o(689728),mr=o.n(pr),gr=function(){function i(){ur()(this,i),K()(this,"cache",new Map)}return mr()(i,[{key:"get",value:function(t){return this.cache.get(t)}},{key:"set",value:function(t,a){this.cache.set(t,a)}},{key:"promise",value:function(t,a){var s=this.get(t);if(s)return s;var d=a();return this.set(t,d),d}}]),i}(),hr=new gr,fr=function(e){var t,a;return typeof e=="string"?(t=function(){return lr()(e).then(function(d){return d.json()})},a=e):(t=e.request,a=e.key),cr(hr.promise(a,t))},xr=fr,Dt,Rt,Ot,vr=(0,Z.kc)(function(i){var e=i.token,t=i.css;return{history:t(Dt||(Dt=m()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:t(Rt||(Rt=m()([`
    // white-space: pre;
  `]))),ref:t(Ot||(Ot=m()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),br={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function yr(i){var e=i.changelog,t=e===void 0?"":e,a=i.refs,s=a===void 0?[]:a,d=i.styles,f=c.useMemo(function(){for(var x=[],w=!1,h="",k=0;k<t.length;k+=1){var L=t[k];if(L!=="`")h+=L;else{var E=h;w&&(E=(0,n.jsx)("code",{children:E})),x.push(E),h="",w=!w}}return x.push(h),x},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:f}),s==null?void 0:s.map(function(x){var w;return(0,n.jsxs)("a",{className:d.ref,href:x,target:"_blank",rel:"noreferrer",children:["#",(w=x.match(/^.*\/(\d+)$/))===null||w===void 0?void 0:w[1]]},x)})]})}function wr(i,e){var t=xr(e==="cn"?{key:"component-changelog-cn",request:function(){return o.e(32104).then(o.t.bind(o,332104,19))}}:{key:"component-changelog-en",request:function(){return o.e(65212).then(o.t.bind(o,365212,19))}});return(0,c.useMemo)(function(){var a=i.replace(/-/g,""),s=Object.keys(t).find(function(d){return d.toLowerCase()===a.toLowerCase()});return t[s]},[t,i])}function jr(i){var e,t=i.pathname,a=t===void 0?"":t,s=(0,b.Z)(br),d=j()(s,2),f=d[0],x=d[1],w=c.useState(!1),h=j()(w,2),k=h[0],L=h[1],E=vr(),D=E.styles,O=((e=a.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",F=wr(O,x),M=c.useMemo(function(){var R={};return F==null||F.forEach(function(B){R[B.version]=R[B.version]||[],R[B.version].push(B)}),Object.keys(R).map(function(B){var C=R[B];return{children:(0,n.jsxs)(Ve.Z,{children:[(0,n.jsx)("h4",{children:B}),(0,n.jsx)("ul",{children:C.map(function(q,bn){return(0,n.jsx)("li",{className:D.li,children:(0,n.jsx)(yr,T()(T()({},q),{},{styles:D}))},bn)})})]})}})},[F]);return!F||!F.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Xn.ZP,{className:D.history,icon:(0,n.jsx)(ht.Z,{}),onClick:function(){L(!0)},children:f.changelog}),(0,n.jsx)(rr.Z,{title:f.changelog,extra:(0,n.jsx)(In.Z,{style:{fontSize:14},to:"/changelog".concat(x==="cn"?"-cn":""),children:f.full}),open:k,width:"40vw",onClose:function(){L(!1)},destroyOnClose:!0,children:(0,n.jsx)(ar.Z,{items:M})})]})}var Cr=function(i){return(0,n.jsx)(c.Suspense,{fallback:null,children:(0,n.jsx)(jr,T()({},i))})},Sr=o(524229),Ft=o(211646),kr=o(294047),$t=o(315816),zr=function(e){var t=e.className,a=e.style;return(0,n.jsx)("svg",{className:t,style:a,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Wt=zr,Vt,Ut,Gt,Xt,Kt,Jt,Yt,ot="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",Tr=(0,Z.kc)(function(i){var e=i.token,t=i.css;return{card:t(Vt||(Vt=m()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t(Ut||(Ut=m()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Gt||(Gt=m()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(Xt||(Xt=m()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(Kt||(Kt=m()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(Jt||(Jt=m()([`
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
    `]))),btn:t(Yt||(Yt=m()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),Br={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},Nr=function(e){var t=e.zhihuLink,a=e.yuqueLink,s=e.juejinLink,d=(0,b.Z)(Br),f=j()(d,1),x=f[0],w=Tr(),h=w.styles,k=h.card,L=h.bigTitle,E=h.cardBody,D=h.left,O=h.title,F=h.subTitle,M=h.btn;return!t&&!a&&!s?null:(0,n.jsxs)(kr.Z,{className:k,bordered:!1,children:[(0,n.jsx)("h3",{className:L,children:x.bigTitle}),t&&(0,n.jsxs)("div",{className:E,children:[(0,n.jsxs)("div",{className:D,children:[(0,n.jsx)("img",{src:ot,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:O,children:"Ant Design"}),(0,n.jsxs)("div",{className:F,children:[(0,n.jsx)($e.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(Ne.Z,{className:"arrowIcon"}),(0,n.jsx)(Xn.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:x.zhiHu})]})]})]}),(0,n.jsx)(Xn.ZP,{type:"primary",className:M,icon:(0,n.jsx)($e.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:x.buttonText})]}),a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)($t.Z,{}),(0,n.jsxs)("div",{className:E,children:[(0,n.jsxs)("div",{className:D,children:[(0,n.jsx)("img",{src:ot,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:O,children:"Ant Design"}),(0,n.jsxs)("div",{className:F,children:[(0,n.jsx)(Ft.Z,{className:"logo yuque-logo"}),(0,n.jsx)(Ne.Z,{className:"arrowIcon"}),(0,n.jsx)(Xn.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:x.yuQue})]})]})]}),(0,n.jsx)(Xn.ZP,{type:"primary",className:M,icon:(0,n.jsx)(Ft.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:a,children:x.buttonText})]})]}),s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)($t.Z,{}),(0,n.jsxs)("div",{className:E,children:[(0,n.jsxs)("div",{className:D,children:[(0,n.jsx)("img",{src:ot,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:O,children:"Ant Design"}),(0,n.jsxs)("div",{className:F,children:[(0,n.jsx)(Wt,{className:"logo juejin-logo"}),(0,n.jsx)(Ne.Z,{className:"arrowIcon"}),(0,n.jsx)(Xn.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:x.junjin})]})]})]}),(0,n.jsx)(Xn.ZP,{type:"primary",className:M,icon:(0,n.jsx)(Wt,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:s,children:x.buttonText})]})]})]})},Lr=Nr,Qt,qt,_t,no,eo,Ar=(0,Z.kc)(function(i){var e=i.token,t=i.css,a=e.antCls;return{contributorsList:t(Qt||(Qt=m()([`
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
    `])),a,a,e.motionDurationSlow,a),listMobile:t(qt||(qt=m()([`
      margin: 1em 0 !important;
    `]))),toc:t(_t||(_t=m()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),a,a),tocWrapper:t(no||(no=m()([`
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
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t(eo||(eo=m()([`
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
    `])),e.screenLG)}}),Er=function(e){var t=e.num,a=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:a}).map(function(s,d){return(0,n.jsx)(Lt.Z.Avatar,{size:"small",active:!0,style:{marginLeft:d===0?0:-8}},d)})})},Hr=function(e){var t=e.name,a=e.avatar,s=(0,c.useState)(!0),d=j()(s,2),f=d[0],x=d[1],w=(0,c.useState)(!1),h=j()(w,2),k=h[0],L=h[1];return(0,c.useLayoutEffect)(function(){var E=new Image;E.src=a,E.onload=function(){return x(!1)},E.onerror=function(){return L(!0)}},[]),k?null:f?(0,n.jsx)(Lt.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(At.C,{size:"small",src:a,alt:t,children:t})},Ir=function(e){var t,a,s,d,f,x,w=e.children,h=(0,p.eL)(),k=(0,p.zh)(),L=(0,W.Z)(),E=L.pathname,D=L.hash,O=(0,p.YB)(),F=O.formatMessage,M=Ar(),R=M.styles,B=(0,Z.Fg)(),C=(0,c.useContext)(Gn.Z),q=C.direction,bn=C.isMobile,rn=(0,Yo.Z)(!1),jn=j()(rn,2),Cn=jn[0],Bn=jn[1],I=(0,c.useMemo)(function(){var X;return((X=h.toc)===null||X===void 0?void 0:X.filter(function(J){return J._debug_demo}).map(function(J){return J.id}))||[]},[h]),nn=I.includes(D.slice(1));(0,c.useLayoutEffect)(function(){Bn(nn)},[]);var en=(0,c.useMemo)(function(){return{showDebug:Cn,setShowDebug:Bn}},[Cn,I]),Sn=(0,c.useMemo)(function(){return((k==null?void 0:k.toc)||h.toc).reduce(function(X,J){if(J.depth===2)X.push(T()({},J));else if(J.depth===3){var fn=X[X.length-1];fn&&(fn.children=fn.children||[],fn.children.push(T()({},J)))}return X},[])},[k==null?void 0:k.toc,h.toc]),kn=q==="rtl",rt=(0,c.useMemo)(function(){var X=h.frontmatter.author;return X?typeof X=="string"?X.split(",").map(function(J){return{name:J,avatar:"https://github.com/".concat(J,".png")}}):Array.isArray(X)?X:[]:[]},[h.frontmatter.author]);return(0,n.jsx)(Sr.Z.Provider,{value:en,children:(0,n.jsxs)(vn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!h.frontmatter.toc&&(0,n.jsx)("section",{className:R.tocWrapper,children:(0,n.jsx)(Jo.Z,{className:R.toc,affix:!1,targetOffset:B.anchorTop,showInkInFixed:!0,items:Sn.map(function(X){var J;return{href:"#".concat(X.id),title:X.title,key:X.id,children:(J=X.children)===null||J===void 0?void 0:J.filter(function(fn){return Cn||!I.includes(fn.id)}).map(function(fn){return{key:fn.id,href:"#".concat(fn.id),title:(0,n.jsx)("span",{className:y()(I.includes(fn.id)&&"toc-debug"),children:fn==null?void 0:fn.title})}})}})})}),(0,n.jsxs)("article",{className:y()(R.articleWrapper,{rtl:kn}),children:[(t=h.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)(Ve.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(tt.Z,{size:"small",children:[(a=h.frontmatter)===null||a===void 0?void 0:a.title,(s=h.frontmatter)===null||s===void 0?void 0:s.subtitle,!E.startsWith("/components/overview")&&(0,n.jsx)(yt.Z,{title:(0,n.jsx)(p._H,{id:"app.content.edit-page"}),filename:h.frontmatter.filename})]}),E.startsWith("/components/")&&(0,n.jsx)(Cr,{pathname:E})]}):null,h.frontmatter.date||h.frontmatter.author?(0,n.jsx)(Ve.Z.Paragraph,{children:(0,n.jsxs)(tt.Z,{children:[h.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Xo.Z,{})," ",pn()(h.frontmatter.date).format("YYYY-MM-DD")]}),rt.map(function(X){return(0,n.jsx)("a",{href:"https://github.com/".concat(X.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(tt.Z,{size:3,children:[(0,n.jsx)(Hr,{name:X.name,avatar:X.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",X.name]})]})},X.name)})]})}):null,!h.frontmatter.__autoDescription&&h.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:w}),(((d=h.frontmatter)===null||d===void 0?void 0:d.zhihu_url)||((f=h.frontmatter)===null||f===void 0?void 0:f.yuque_url)||((x=h.frontmatter)===null||x===void 0?void 0:x.juejin_url))&&(0,n.jsx)(Lr,{zhihuLink:h.frontmatter.zhihu_url,yuqueLink:h.frontmatter.yuque_url,juejinLink:h.frontmatter.juejin_url}),h.frontmatter.filename&&(0,n.jsx)(Ko.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:y()(R.contributorsList,K()({},R.listMobile,bn)),fileName:h.frontmatter.filename,renderItem:function(J,fn){var Ce;return!J||fn?(0,n.jsx)(Er,{}):(Ce=J.username)!==null&&Ce!==void 0&&Ce.includes("github-actions")?null:(0,n.jsx)(U.Z,{mouseEnterDelay:.3,title:"".concat(F({id:"app.content.contributors"}),": ").concat(J.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(J.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(At.C,{size:"small",src:J.url,alt:J.username,children:J.username})})})},J.username)}})]}),(0,n.jsx)(or,{rtl:kn}),(0,n.jsx)(nt,{})]})})},Pr=Ir,Mr=o(650010),to,oo,Zr=(0,Z.kc)(function(i){var e=i.token,t=i.css,a=e.antCls,s=e.fontFamily,d=e.colorSplit;return{asideContainer:t(to||(to=m()([`
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
    `])),s,a,a,a,a,a,a,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),mainMenu:t(oo||(oo=m()([`
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
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),Dr=function(){var e=(0,p.tx)(),t=(0,c.useContext)(Gn.Z),a=t.isMobile,s=t.theme,d=Zr(),f=d.styles,x=Ht(),w=j()(x,2),h=w[0],k=w[1],L=s.includes("dark"),E=(0,Z.Fg)(),D=E.colorBgContainer,O=(0,n.jsx)(Y.ZP,{theme:{components:{Menu:{itemBg:D,darkItemBg:D}}},children:(0,n.jsx)(De.Z,{items:h,inlineIndent:30,className:f.asideContainer,mode:"inline",theme:L?"dark":"light",selectedKeys:[k],defaultOpenKeys:e==null?void 0:e.map(function(F){var M=F.title;return M}).filter(function(F){return F})})});return a?(0,n.jsx)(Mr.Z,{children:O},"Mobile-menu"):(0,n.jsx)(vn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:f.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:O})})},Rr=Dr,ro,Or=(0,Z.kc)(function(i){var e=i.css,t=i.token;return{main:e(ro||(ro=m()([`
    display: flex;
    margin-top: `,`px;
  `])),t.contentMarginTop)}}),Fr=function(e){var t=e.children,a=Or(),s=a.styles;return(0,n.jsxs)("main",{className:s.main,children:[(0,n.jsx)(bt,{}),(0,n.jsx)(Rr,{}),(0,n.jsx)(Pr,{children:t})]})},$r=Fr,Wr={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},Vr=function(){var e=(0,p.pC)(),t=(0,W.Z)(),a=t.pathname,s=t.search,d=t.hash,f=(0,b.Z)(Wr),x=j()(f,2),w=x[0],h=x[1],k=(0,c.useRef)(null),L=(0,c.useContext)(Gn.Z),E=L.direction,D=(0,p.WF)(),O=D.loading;(0,c.useLayoutEffect)(function(){h==="cn"?pn().locale("zh-cn"):pn().locale("en")},[]),(0,c.useEffect)(function(){var M=document.getElementById("nprogress-style");M&&(k.current=setTimeout(function(){var R;(R=M.parentNode)===null||R===void 0||R.removeChild(M)},0))},[]),(0,c.useEffect)(function(){var M,R=d.replace("#","");R&&((M=document.getElementById(decodeURIComponent(R)))===null||M===void 0||M.scrollIntoView())},[O,d]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",a+s)},[t]);var F=(0,c.useMemo)(function(){return["","/"].some(function(M){return M===a})||["/index"].some(function(M){return a.startsWith(M)})?(0,n.jsx)(Io,{title:w.title,desc:w.description,children:e}):a.startsWith("/docs/resource")?(0,n.jsx)(Go,{children:e}):a.startsWith("/theme-editor")?e:(0,n.jsx)($r,{children:e})},[a,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(p.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:h==="cn"?"zh-CN":h,"data-direction":E,className:y()({rtl:E==="rtl"})}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{property:"og:description",content:w.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(Y.ZP,{direction:E,locale:h==="cn"?$.Z:void 0,children:[(0,n.jsx)(V,{}),(0,n.jsx)(go,{}),F]})]})},Ur=Vr},647727:function(be,zn,o){o.d(zn,{Z:function(){return Nn.Z}});var Nn=o(582485)},605071:function(be,zn,o){o.d(zn,{Z:function(){return Ln}});var Nn=o(242122),j=o.n(Nn),Zn=o(238416),y=o.n(Zn),Dn=o(600861),pn=o.n(Dn),wn=o(627424),p=o.n(wn),c=o(667294),$=o(294184),Y=o.n($),b=o(656790),W=o(517423),Rn=o(982673),m=o(658192),P=o(252901),Z=o(73287),n=o(670544),se=c.createContext(void 0),_n=se,mn=o(785893),ge=function(l){var r=l.href,u=l.title,g=l.prefixCls,z=l.children,S=l.className,H=l.target,A=l.replace,v=c.useContext(_n),N=v||{},G=N.registerLink,Q=N.unregisterLink,tn=N.scrollTo,xn=N.onClick,ln=N.activeLink,sn=N.direction;c.useEffect(function(){return G==null||G(r),function(){Q==null||Q(r)}},[r]);var V=function(Vn){A&&(Vn.preventDefault(),window.location.replace(r)),xn==null||xn(Vn,{title:u,href:r}),tn==null||tn(r)};if(!1)var hn;var T=c.useContext(Z.E_),cn=T.getPrefixCls,K=cn("anchor",g),on=ln===r,An=Y()("".concat(K,"-link"),S,y()({},"".concat(K,"-link-active"),on)),Wn=Y()("".concat(K,"-link-title"),y()({},"".concat(K,"-link-title-active"),on));return(0,mn.jsxs)("div",{className:An,children:[(0,mn.jsx)("a",{className:Wn,href:r,title:typeof u=="string"?u:"",target:H,onClick:V,children:u}),sn!=="horizontal"?z:null]})},ne=ge,Yn=o(615624),ee=o(548073),ce=o(286665),On=o(986943),he=function(l){var r,u,g=l.componentCls,z=l.holderOffsetBlock,S=l.motionDurationSlow,H=l.lineWidthBold,A=l.colorPrimary,v=l.lineType,N=l.colorSplit,G=l.calc;return y()({},"".concat(g,"-wrapper"),(u={marginBlockStart:G(z).mul(-1).equal(),paddingBlockStart:z},y()(u,g,j()(j()({},(0,ee.Wf)(l)),{},y()({position:"relative",paddingInlineStart:H},"".concat(g,"-link"),(r={paddingBlock:l.linkPaddingBlock,paddingInline:"".concat((0,Yn.bf)(l.linkPaddingInlineStart)," 0"),"&-title":j()(j()({},ee.vS),{},{position:"relative",display:"block",marginBlockEnd:l.anchorTitleBlock,color:l.colorText,transition:"all ".concat(l.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},y()(r,"&-active > ".concat(g,"-link-title"),{color:l.colorPrimary}),y()(r,"".concat(g,"-link"),{paddingBlock:l.anchorPaddingBlockSecondary}),r)))),y()(u,"&:not(".concat(g,"-wrapper-horizontal)"),y()({},g,y()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat((0,Yn.bf)(H)," ").concat(v," ").concat(N),content:'" "'}},"".concat(g,"-ink"),y()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(S," ease-in-out"),width:H,backgroundColor:A},"&".concat(g,"-ink-visible"),{display:"inline-block"})))),y()(u,"".concat(g,"-fixed ").concat(g,"-ink ").concat(g,"-ink"),{display:"none"}),u))},Fn=function(l){var r,u=l.componentCls,g=l.motionDurationSlow,z=l.lineWidthBold,S=l.colorPrimary;return y()({},"".concat(u,"-wrapper-horizontal"),y()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"".concat((0,Yn.bf)(l.lineWidth)," ").concat(l.lineType," ").concat(l.colorSplit),content:'" "'}},u,(r={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},y()(r,"".concat(u,"-link:first-of-type"),{paddingInline:0}),y()(r,"".concat(u,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(g," ease-in-out, width ").concat(g," ease-in-out"),height:z,backgroundColor:S}),r)))},$n=function(l){return{linkPaddingBlock:l.paddingXXS,linkPaddingInlineStart:l.padding}},te=(0,ce.I$)("Anchor",function(gn){var l=gn.fontSize,r=gn.fontSizeLG,u=gn.paddingXXS,g=gn.calc,z=(0,On.TS)(gn,{holderOffsetBlock:u,anchorPaddingBlockSecondary:g(u).div(2).equal(),anchorTitleBlock:g(l).div(14).mul(3).equal(),anchorBallSize:g(r).div(2).equal()});return[he(z),Fn(z)]},$n);function fe(){return window}function oe(gn,l){if(!gn.getClientRects().length)return 0;var r=gn.getBoundingClientRect();return r.width||r.height?l===window?(l=gn.ownerDocument.documentElement,r.top-l.clientTop):r.top-l.getBoundingClientRect().top:r.top}var de=/#([\S ]+)$/,ue=function(l){var r,u,g=l.rootClassName,z=l.prefixCls,S=l.className,H=l.style,A=l.offsetTop,v=l.affix,N=v===void 0?!0:v,G=l.showInkInFixed,Q=G===void 0?!1:G,tn=l.children,xn=l.items,ln=l.direction,sn=ln===void 0?"vertical":ln,V=l.bounds,hn=l.targetOffset,T=l.onClick,cn=l.onChange,K=l.getContainer,on=l.getCurrentAnchor,An=l.replace;if(!1)var Wn;var Qn=c.useState([]),Vn=p()(Qn,2),_=Vn[0],vn=Vn[1],Un=c.useState(null),pe=p()(Un,2),En=pe[0],ae=pe[1],ie=c.useRef(En),Se=c.useRef(null),ke=c.useRef(null),yn=c.useRef(!1),Gn=c.useContext(Z.E_),Ae=Gn.direction,le=Gn.anchor,Xe=Gn.getTargetContainer,Ke=Gn.getPrefixCls,Hn=Ke("anchor",z),Ee=(0,n.Z)(Hn),Je=te(Hn,Ee),Xn=p()(Je,2),He=Xn[0],Ie=Xn[1],me=(r=K!=null?K:Xe)!==null&&r!==void 0?r:fe,ye=JSON.stringify(_),Pe=(0,b.zX)(function(U){_.includes(U)||vn(function(dn){return[].concat(pn()(dn),[U])})}),Me=(0,b.zX)(function(U){_.includes(U)&&vn(function(dn){return dn.filter(function(un){return un!==U})})}),Ze=function(){var dn,un=(dn=Se.current)===null||dn===void 0?void 0:dn.querySelector(".".concat(Hn,"-link-title-active"));if(un&&ke.current){var Pn=ke.current.style,Tn=sn==="horizontal";Pn.top=Tn?"":"".concat(un.offsetTop+un.clientHeight/2,"px"),Pn.height=Tn?"":"".concat(un.clientHeight,"px"),Pn.left=Tn?"".concat(un.offsetLeft,"px"):"",Pn.width=Tn?"".concat(un.clientWidth,"px"):"",Tn&&(0,W.Z)(un,{scrollMode:"if-needed",block:"nearest"})}},Ye=function(dn){var un=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,Pn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,Tn=[],we=me();if(dn.forEach(function(qn){var ve=de.exec(qn==null?void 0:qn.toString());if(ve){var je=document.getElementById(ve[1]);if(je){var Be=oe(je,we);Be<un+Pn&&Tn.push({link:qn,top:Be})}}}),Tn.length){var Jn=Tn.reduce(function(qn,ve){return ve.top>qn.top?ve:qn});return Jn.link}return""},ze=(0,b.zX)(function(U){if(ie.current!==U){var dn=typeof on=="function"?on(U):U;ae(dn),ie.current=dn,cn==null||cn(U)}}),Te=c.useCallback(function(){if(!yn.current){var U=Ye(_,hn!==void 0?hn:A||0,V);ze(U)}},[ye,hn,A]),Kn=c.useCallback(function(U){ze(U);var dn=de.exec(U);if(dn){var un=document.getElementById(dn[1]);if(un){var Pn=me(),Tn=(0,Rn.Z)(Pn,!0),we=oe(un,Pn),Jn=Tn+we;Jn-=hn!==void 0?hn:A||0,yn.current=!0,(0,m.Z)(Jn,{getContainer:me,callback:function(){yn.current=!1}})}}},[hn,A]),De=Y()(Ie,Ee,g,"".concat(Hn,"-wrapper"),(u={},y()(u,"".concat(Hn,"-wrapper-horizontal"),sn==="horizontal"),y()(u,"".concat(Hn,"-rtl"),Ae==="rtl"),u),S,le==null?void 0:le.className),In=Y()(Hn,y()({},"".concat(Hn,"-fixed"),!N&&!Q)),Re=Y()("".concat(Hn,"-ink"),y()({},"".concat(Hn,"-ink-visible"),En)),Oe=j()(j()({maxHeight:A?"calc(100vh - ".concat(A,"px)"):"100vh"},le==null?void 0:le.style),H),Qe=function U(dn){return Array.isArray(dn)?dn.map(function(un){return(0,c.createElement)(ne,j()(j()({replace:An},un),{},{key:un.key}),sn==="vertical"&&U(un.children))}):null},Fe=(0,mn.jsx)("div",{ref:Se,className:De,style:Oe,children:(0,mn.jsxs)("div",{className:In,children:[(0,mn.jsx)("span",{className:Re,ref:ke}),"items"in l?Qe(xn):tn]})});c.useEffect(function(){var U=me();return Te(),U==null||U.addEventListener("scroll",Te),function(){U==null||U.removeEventListener("scroll",Te)}},[ye]),c.useEffect(function(){typeof on=="function"&&ze(on(ie.current||""))},[on]),c.useEffect(function(){Ze()},[sn,on,ye,En]);var qe=c.useMemo(function(){return{registerLink:Pe,unregisterLink:Me,scrollTo:Kn,activeLink:En,onClick:T,direction:sn}},[En,T,Kn,sn]);return He((0,mn.jsx)(_n.Provider,{value:qe,children:N?(0,mn.jsx)(P.Z,{offsetTop:A,target:me,children:Fe}):Fe}))},xe=ue,re=xe;re.Link=ne;var Ln=re},86198:function(be,zn,o){o.d(zn,{Z:function(){return gn}});var Nn=o(600861),j=o.n(Nn),Zn=o(238416),y=o.n(Zn),Dn=o(627424),pn=o.n(Dn),wn=o(670215),p=o.n(wn),c=o(242122),$=o.n(c),Y=o(667294),b=o(294184),W=o.n(b),Rn=o(518475),m=o(73287),P=o(121790),Z=o(45598),n=o(296708);function se(l,r,u){if(typeof u=="boolean")return u;if(l.length)return!0;var g=(0,Z.default)(r);return g.some(function(z){return z.type===n.Z})}var _n=o(615624),mn=o(286665),ge=function(r){var u,g=r.componentCls,z=r.bodyBg,S=r.lightSiderBg,H=r.lightTriggerBg,A=r.lightTriggerColor;return y()({},"".concat(g,"-sider-light"),(u={background:S},y()(u,"".concat(g,"-sider-trigger"),{color:A,background:H}),y()(u,"".concat(g,"-sider-zero-width-trigger"),{color:A,background:H,border:"1px solid ".concat(z),borderInlineStart:0}),u))},ne=ge,Yn=function(r){var u,g,z=r.antCls,S=r.componentCls,H=r.colorText,A=r.triggerColor,v=r.footerBg,N=r.triggerBg,G=r.headerHeight,Q=r.headerPadding,tn=r.headerColor,xn=r.footerPadding,ln=r.triggerHeight,sn=r.zeroTriggerHeight,V=r.zeroTriggerWidth,hn=r.motionDurationMid,T=r.motionDurationSlow,cn=r.fontSize,K=r.borderRadius,on=r.bodyBg,An=r.headerBg,Wn=r.siderBg;return g={},y()(g,S,$()($()((u={display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:on,"&, *":{boxSizing:"border-box"}},y()(u,"&".concat(S,"-has-sider"),y()({flexDirection:"row"},"> ".concat(S,", > ").concat(S,"-content"),{width:0})),y()(u,"".concat(S,"-header, &").concat(S,"-footer"),{flex:"0 0 auto"}),y()(u,"".concat(S,"-sider"),{position:"relative",minWidth:0,background:Wn,transition:"all ".concat(hn,", background 0s"),"&-children":y()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(z,"-menu").concat(z,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:ln},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:ln,color:A,lineHeight:(0,_n.bf)(ln),textAlign:"center",background:N,cursor:"pointer",transition:"all ".concat(hn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:G,insetInlineEnd:r.calc(V).mul(-1).equal(),zIndex:1,width:V,height:sn,color:A,fontSize:r.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Wn,borderStartStartRadius:0,borderStartEndRadius:K,borderEndEndRadius:K,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(T," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(T),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:r.calc(V).mul(-1).equal(),borderStartStartRadius:K,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:K}}}}),u),ne(r)),{},{"&-rtl":{direction:"rtl"}})),y()(g,"".concat(S,"-header"),y()({height:G,padding:Q,color:tn,lineHeight:(0,_n.bf)(G),background:An},"".concat(z,"-menu"),{lineHeight:"inherit"})),y()(g,"".concat(S,"-footer"),{padding:xn,color:H,fontSize:cn,background:v}),y()(g,"".concat(S,"-content"),{flex:"auto",minHeight:0}),g},ee=function(r){var u=r.colorBgLayout,g=r.controlHeight,z=r.controlHeightLG,S=r.colorText,H=r.controlHeightSM,A=r.marginXXS,v=r.colorTextLightSolid,N=r.colorBgContainer,G=z*1.25;return{colorBgHeader:"#001529",colorBgBody:u,colorBgTrigger:"#002140",bodyBg:u,headerBg:"#001529",headerHeight:g*2,headerPadding:"0 ".concat(G,"px"),headerColor:S,footerPadding:"".concat(H,"px ").concat(G,"px"),footerBg:u,siderBg:"#001529",triggerHeight:z+A*2,triggerBg:"#002140",triggerColor:v,zeroTriggerWidth:z,zeroTriggerHeight:z,lightSiderBg:N,lightTriggerBg:N,lightTriggerColor:S}},ce=(0,mn.I$)("Layout",function(l){return[Yn(l)]},ee,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),On=o(785893),he=["prefixCls","suffixCls","className","tagName"],Fn=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function $n(l){var r=l.suffixCls,u=l.tagName,g=l.displayName;return function(z){var S=Y.forwardRef(function(H,A){return(0,On.jsx)(z,$()({ref:A,suffixCls:r,tagName:u},H))});return S}}var te=Y.forwardRef(function(l,r){var u=l.prefixCls,g=l.suffixCls,z=l.className,S=l.tagName,H=p()(l,he),A=Y.useContext(m.E_),v=A.getPrefixCls,N=v("layout",u),G=ce(N),Q=pn()(G,2),tn=Q[0],xn=Q[1],ln=g?"".concat(N,"-").concat(g):N;return tn((0,On.jsx)(S,$()({className:W()(u||ln,z,xn),ref:r},H)))}),fe=Y.forwardRef(function(l,r){var u,g=Y.useContext(m.E_),z=g.direction,S=Y.useState([]),H=pn()(S,2),A=H[0],v=H[1],N=l.prefixCls,G=l.className,Q=l.rootClassName,tn=l.children,xn=l.hasSider,ln=l.tagName,sn=l.style,V=p()(l,Fn),hn=(0,Rn.default)(V,["suffixCls"]),T=Y.useContext(m.E_),cn=T.getPrefixCls,K=T.layout,on=cn("layout",N),An=se(A,tn,xn),Wn=ce(on),Qn=pn()(Wn,2),Vn=Qn[0],_=Qn[1],vn=W()(on,(u={},y()(u,"".concat(on,"-has-sider"),An),y()(u,"".concat(on,"-rtl"),z==="rtl"),u),K==null?void 0:K.className,G,Q,_),Un=Y.useMemo(function(){return{siderHook:{addSider:function(En){v(function(ae){return[].concat(j()(ae),[En])})},removeSider:function(En){v(function(ae){return ae.filter(function(ie){return ie!==En})})}}}},[]);return Vn((0,On.jsx)(P.V.Provider,{value:Un,children:(0,On.jsx)(ln,$()($()({ref:r,className:vn,style:$()($()({},K==null?void 0:K.style),sn)},hn),{},{children:tn}))}))}),oe=$n({tagName:"div",displayName:"Layout"})(fe),de=$n({suffixCls:"header",tagName:"header",displayName:"Header"})(te),ue=$n({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(te),xe=$n({suffixCls:"content",tagName:"main",displayName:"Content"})(te),re=oe,Ln=re;Ln.Header=de,Ln.Footer=ue,Ln.Content=xe,Ln.Sider=n.Z,Ln._InternalSiderContext=n.D;var gn=Ln},715778:function(be,zn,o){o.d(zn,{Z:function(){return b}});var Nn=o(174219),j=o(242122),Zn=o.n(j),y=o(585369),Dn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},pn=Dn,wn={lang:Zn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},y.Z),timePickerLocale:Zn()({},pn)};wn.lang.ok="\u786E\u5B9A";var p=wn,c=p,$="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",Y={locale:"zh-cn",Pagination:Nn.Z,DatePicker:p,TimePicker:pn,Calendar:c,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:$,method:$,array:$,object:$,number:$,date:$,boolean:$,integer:$,float:$,regexp:$,email:$,url:$,hex:$},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},b=Y},15060:function(be,zn,o){o.d(zn,{Z:function(){return gn}});var Nn=o(242122),j=o.n(Nn),Zn=o(627424),y=o.n(Zn),Dn=o(670215),pn=o.n(Dn),wn=o(667294),p=o(294184),c=o.n(p),$=o(73287),Y=o(238416),b=o.n(Y),W=o(615624),Rn=o(548073),m=o(286665),P=o(986943),Z=function(r){var u,g,z,S,H,A,v=r.componentCls,N=r.calc;return b()({},v,j()(j()({},(0,Rn.Wf)(r)),{},(A={margin:0,padding:0,listStyle:"none"},b()(A,"".concat(v,"-item"),{position:"relative",margin:0,paddingBottom:r.itemPaddingBottom,fontSize:r.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:r.itemHeadSize,insetInlineStart:N(N(r.itemHeadSize).sub(r.tailWidth)).div(2).equal(),height:"calc(100% - ".concat((0,W.bf)(r.itemHeadSize),")"),borderInlineStart:"".concat((0,W.bf)(r.tailWidth)," ").concat(r.lineType," ").concat(r.tailColor)},"&-pending":(u={},b()(u,"".concat(v,"-item-head"),{fontSize:r.fontSizeSM,backgroundColor:"transparent"}),b()(u,"".concat(v,"-item-tail"),{display:"none"}),u),"&-head":{position:"absolute",width:r.itemHeadSize,height:r.itemHeadSize,backgroundColor:r.dotBg,border:"".concat((0,W.bf)(r.dotBorderWidth)," ").concat(r.lineType," transparent"),borderRadius:"50%","&-blue":{color:r.colorPrimary,borderColor:r.colorPrimary},"&-red":{color:r.colorError,borderColor:r.colorError},"&-green":{color:r.colorSuccess,borderColor:r.colorSuccess},"&-gray":{color:r.colorTextDisabled,borderColor:r.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:N(r.itemHeadSize).div(2).equal(),insetInlineStart:N(r.itemHeadSize).div(2).equal(),width:"auto",height:"auto",marginBlockStart:0,paddingBlock:r.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:N(N(r.fontSize).mul(r.lineHeight).sub(r.fontSize)).mul(-1).add(r.lineWidth).equal(),marginInlineStart:N(r.margin).add(r.itemHeadSize).equal(),marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":(g={},b()(g,"> ".concat(v,"-item-tail"),{display:"none"}),b()(g,"> ".concat(v,"-item-content"),{minHeight:N(r.controlHeightLG).mul(1.2).equal()}),g)}),b()(A,"&".concat(v,`-alternate,
        &`).concat(v,`-right,
        &`).concat(v,"-label"),b()({},"".concat(v,"-item"),{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:N(r.marginXXS).mul(-1).equal(),"&-custom":{marginInlineStart:N(r.tailWidth).div(2).equal()}},"&-left":b()({},"".concat(v,"-item-content"),{insetInlineStart:"calc(50% - ".concat((0,W.bf)(r.marginXXS),")"),width:"calc(50% - ".concat((0,W.bf)(r.marginSM),")"),textAlign:"start"}),"&-right":b()({},"".concat(v,"-item-content"),{width:"calc(50% - ".concat((0,W.bf)(r.marginSM),")"),margin:0,textAlign:"end"})})),b()(A,"&".concat(v,"-right"),b()({},"".concat(v,"-item-right"),(z={},b()(z,"".concat(v,`-item-tail,
            `).concat(v,`-item-head,
            `).concat(v,"-item-head-custom"),{insetInlineStart:"calc(100% - ".concat((0,W.bf)(N(N(r.itemHeadSize).add(r.tailWidth)).div(2).equal()),")")}),b()(z,"".concat(v,"-item-content"),{width:"calc(100% - ".concat((0,W.bf)(N(r.itemHeadSize).add(r.marginXS).equal()),")")}),z))),b()(A,"&".concat(v,`-pending
        `).concat(v,`-item-last
        `).concat(v,"-item-tail"),{display:"block",height:"calc(100% - ".concat((0,W.bf)(r.margin),")"),borderInlineStart:"".concat((0,W.bf)(r.tailWidth)," dotted ").concat(r.tailColor)}),b()(A,"&".concat(v,`-reverse
        `).concat(v,`-item-last
        `).concat(v,"-item-tail"),{display:"none"}),b()(A,"&".concat(v,"-reverse ").concat(v,"-item-pending"),(S={},b()(S,"".concat(v,"-item-tail"),{insetBlockStart:r.margin,display:"block",height:"calc(100% - ".concat((0,W.bf)(r.margin),")"),borderInlineStart:"".concat((0,W.bf)(r.tailWidth)," dotted ").concat(r.tailColor)}),b()(S,"".concat(v,"-item-content"),{minHeight:N(r.controlHeightLG).mul(1.2).equal()}),S)),b()(A,"&".concat(v,"-label"),(H={},b()(H,"".concat(v,"-item-label"),{position:"absolute",insetBlockStart:N(N(r.fontSize).mul(r.lineHeight).sub(r.fontSize)).mul(-1).add(r.tailWidth).equal(),width:"calc(50% - ".concat((0,W.bf)(r.marginSM),")"),textAlign:"end"}),b()(H,"".concat(v,"-item-right"),b()({},"".concat(v,"-item-label"),{insetInlineStart:"calc(50% + ".concat((0,W.bf)(r.marginSM),")"),width:"calc(50% - ".concat((0,W.bf)(r.marginSM),")"),textAlign:"start"})),H)),b()(A,"&-rtl",b()({direction:"rtl"},"".concat(v,"-item-head-custom"),{transform:"translate(50%, -50%)"})),A)))},n=function(r){return{tailColor:r.colorSplit,tailWidth:r.lineWidthBold,dotBorderWidth:r.wireframe?r.lineWidthBold:r.lineWidth*3,dotBg:r.colorBgContainer,itemPaddingBottom:r.padding*1.25}},se=(0,m.I$)("Timeline",function(l){var r=(0,P.TS)(l,{itemHeadSize:10,customHeadPaddingVertical:l.paddingXXS,paddingInlineEnd:2});return[Z(r)]},n),_n=o(670544),mn=o(785893),ge=["prefixCls","className","color","dot","pending","position","label","children"],ne=function(r){var u,g=r.prefixCls,z=r.className,S=r.color,H=S===void 0?"blue":S,A=r.dot,v=r.pending,N=v===void 0?!1:v,G=r.position,Q=r.label,tn=r.children,xn=pn()(r,ge),ln=wn.useContext($.E_),sn=ln.getPrefixCls,V=sn("timeline",g),hn=c()("".concat(V,"-item"),b()({},"".concat(V,"-item-pending"),N),z),T=/blue|red|green|gray/.test(H||"")?void 0:H,cn=c()("".concat(V,"-item-head"),(u={},b()(u,"".concat(V,"-item-head-custom"),!!A),b()(u,"".concat(V,"-item-head-").concat(H),!T),u));return(0,mn.jsxs)("li",j()(j()({},xn),{},{className:hn,children:[Q&&(0,mn.jsx)("div",{className:"".concat(V,"-item-label"),children:Q}),(0,mn.jsx)("div",{className:"".concat(V,"-item-tail")}),(0,mn.jsx)("div",{className:cn,style:{borderColor:T,color:T},children:A}),(0,mn.jsx)("div",{className:"".concat(V,"-item-content"),children:tn})]}))},Yn=ne,ee=o(600861),ce=o.n(ee),On=o(100628),he=o.n(On),Fn=["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"],$n=["className"],te=function(r){var u,g=r.prefixCls,z=r.className,S=r.pending,H=S===void 0?!1:S,A=r.children,v=r.items,N=r.rootClassName,G=r.reverse,Q=G===void 0?!1:G,tn=r.direction,xn=r.hashId,ln=r.pendingDot,sn=r.mode,V=sn===void 0?"":sn,hn=pn()(r,Fn),T=function(vn,Un){return V==="alternate"?vn==="right"?"".concat(g,"-item-right"):vn==="left"||Un%2===0?"".concat(g,"-item-left"):"".concat(g,"-item-right"):V==="left"?"".concat(g,"-item-left"):V==="right"||vn==="right"?"".concat(g,"-item-right"):""},cn=ce()(v||[]),K=typeof H=="boolean"?null:H;H&&cn.push({pending:!!H,dot:ln||(0,mn.jsx)(he(),{}),children:K}),Q&&cn.reverse();var on=cn.length,An="".concat(g,"-item-last"),Wn=cn.filter(function(_){return!!_}).map(function(_,vn){var Un,pe=vn===on-2?An:"",En=vn===on-1?An:"",ae=_.className,ie=pn()(_,$n);return(0,wn.createElement)(Yn,j()(j()({},ie),{},{className:c()([ae,!Q&&H?pe:En,T((Un=_==null?void 0:_.position)!==null&&Un!==void 0?Un:"",vn)]),key:(_==null?void 0:_.key)||vn}))}),Qn=cn.some(function(_){return!!(_!=null&&_.label)}),Vn=c()(g,(u={},b()(u,"".concat(g,"-pending"),!!H),b()(u,"".concat(g,"-reverse"),!!Q),b()(u,"".concat(g,"-").concat(V),!!V&&!Qn),b()(u,"".concat(g,"-label"),Qn),b()(u,"".concat(g,"-rtl"),tn==="rtl"),u),z,N,xn);return(0,mn.jsx)("ul",j()(j()({},hn),{},{className:Vn,children:Wn}))},fe=te,oe=o(45598);function de(l,r){return l&&Array.isArray(l)?l:(0,oe.default)(r).map(function(u){var g,z;return j()({children:(g=u==null||(z=u.props)===null||z===void 0?void 0:z.children)!==null&&g!==void 0?g:""},u.props)})}var ue=de,xe=["prefixCls","children","items","className","style"],re=function(r){var u=wn.useContext($.E_),g=u.getPrefixCls,z=u.direction,S=u.timeline,H=r.prefixCls,A=r.children,v=r.items,N=r.className,G=r.style,Q=pn()(r,xe),tn=g("timeline",H);if(!1)var xn;var ln=(0,_n.Z)(tn),sn=se(tn,ln),V=y()(sn,2),hn=V[0],T=V[1],cn=ue(v,A);return hn((0,mn.jsx)(fe,j()(j()({},Q),{},{className:c()(S==null?void 0:S.className,N,ln),style:j()(j()({},S==null?void 0:S.style),G),prefixCls:tn,direction:z,items:cn,hashId:T})))};re.Item=Yn;var Ln=re,gn=Ln}}]);
