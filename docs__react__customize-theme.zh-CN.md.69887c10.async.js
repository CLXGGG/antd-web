"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[42106],{967527:function(h,a,r){r.r(a);var x=r(863942),j=r(502143),v=r(968521),c=r(702951),p=r(521587),d=r(199100),u=r(828089),m=r(825673),E=r(902068),C=r(574399),P=r(316073),D=r(24628),f=r(719260),A=r(956140),B=r(127179),g=r(905388),T=r(245583),I=r(606965),k=r(268696),y=r(587302),i=r(424128),S=r(249706),M=r(795127),F=r(116846),l=r(720538),O=r(212039),s=r(73024),R=r(553913),t=r(733851),b=r(667294),e=r(785893);function o(){var _=(0,t.eL)(),n=_.texts;return(0,e.jsx)(t.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsx)("p",{children:n[1].value}),(0,e.jsxs)("ol",{children:[(0,e.jsx)("li",{children:n[2].value}),(0,e.jsx)("li",{children:n[3].value}),(0,e.jsx)("li",{children:n[4].value}),(0,e.jsx)("li",{children:n[5].value})]}),(0,e.jsxs)("h2",{id:"\u914D\u7F6E\u4E3B\u9898",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u914D\u7F6E\u4E3B\u9898",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u914D\u7F6E\u4E3B\u9898"]}),(0,e.jsxs)("p",{children:[n[6].value,(0,e.jsx)("strong",{children:n[7].value}),n[8].value,(0,e.jsx)("code",{children:n[9].value}),n[10].value,(0,e.jsx)("code",{children:n[11].value}),n[12].value]})]}),(0,e.jsxs)(c.Z,{type:"warning",children:[(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[13].value}),n[14].value,(0,e.jsx)("code",{children:n[15].value}),n[16].value,(0,e.jsx)("code",{children:n[17].value}),n[18].value,(0,e.jsx)("code",{children:n[19].value}),n[20].value,(0,e.jsx)("code",{children:n[21].value}),n[22].value]}),(0,e.jsxs)("p",{children:[n[23].value,(0,e.jsx)("code",{children:n[24].value}),n[25].value,(0,e.jsx)(i.Z,{to:"/components/app-cn",sourceType:"Link",children:n[26].value}),n[27].value]})]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"\u4FEE\u6539\u4E3B\u9898\u53D8\u91CF",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4FEE\u6539\u4E3B\u9898\u53D8\u91CF",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4FEE\u6539\u4E3B\u9898\u53D8\u91CF"]}),(0,e.jsxs)("p",{children:[n[28].value,(0,e.jsx)("code",{children:n[29].value}),n[30].value,(0,e.jsx)("code",{children:n[31].value}),n[32].value]}),(0,e.jsx)(l.Z,{autorun:!0,children:`import { Button, ConfigProvider, Space } from 'antd';\r
import React from 'react';\r
\r
const App: React.FC = () => (\r
  <ConfigProvider\r
    theme={{\r
      token: {\r
        // Seed Token\uFF0C\u5F71\u54CD\u8303\u56F4\u5927\r
        colorPrimary: '#00b96b',\r
        borderRadius: 2,\r
\r
        // \u6D3E\u751F\u53D8\u91CF\uFF0C\u5F71\u54CD\u8303\u56F4\u5C0F\r
        colorBgContainer: '#f6ffed',\r
      },\r
    }}\r
  >\r
    <Space>\r
      <Button type="primary">Primary</Button>\r
      <Button>Default</Button>\r
    </Space>\r
  </ConfigProvider>\r
);\r
\r
export default App;`}),(0,e.jsxs)("h3",{id:"\u4F7F\u7528\u9884\u8BBE\u7B97\u6CD5",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528\u9884\u8BBE\u7B97\u6CD5",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528\u9884\u8BBE\u7B97\u6CD5"]}),(0,e.jsx)("p",{children:n[34].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n[35].value,(0,e.jsx)("code",{children:n[36].value})]}),(0,e.jsxs)("li",{children:[n[37].value,(0,e.jsx)("code",{children:n[38].value})]}),(0,e.jsxs)("li",{children:[n[39].value,(0,e.jsx)("code",{children:n[40].value})]})]}),(0,e.jsxs)("p",{children:[n[41].value,(0,e.jsx)("code",{children:n[42].value}),n[43].value,(0,e.jsx)("code",{children:n[44].value}),n[45].value]}),(0,e.jsx)(l.Z,{dark:!0,children:`import React from 'react';\r
import { Button, ConfigProvider, Input, Space, theme } from 'antd';\r
\r
const App: React.FC = () => (\r
  <ConfigProvider\r
    theme={{\r
      // 1. \u5355\u72EC\u4F7F\u7528\u6697\u8272\u7B97\u6CD5\r
      algorithm: theme.darkAlgorithm,\r
\r
      // 2. \u7EC4\u5408\u4F7F\u7528\u6697\u8272\u7B97\u6CD5\u4E0E\u7D27\u51D1\u7B97\u6CD5\r
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],\r
    }}\r
  >\r
    <Space>\r
      <Input placeholder="Please Input" />\r
      <Button type="primary">Submit</Button>\r
    </Space>\r
  </ConfigProvider>\r
);\r
\r
export default App;`}),(0,e.jsxs)("h3",{id:"\u4FEE\u6539\u7EC4\u4EF6\u53D8\u91CF",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4FEE\u6539\u7EC4\u4EF6\u53D8\u91CF",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4FEE\u6539\u7EC4\u4EF6\u53D8\u91CF"]}),(0,e.jsx)("p",{children:n[47].value})]}),(0,e.jsxs)(c.Z,{type:"info",title:"\u7EC4\u4EF6\u7EA7\u522B\u7684\u4E3B\u9898\u7B97\u6CD5",children:[(0,e.jsx)("p",{children:n[48].value}),(0,e.jsxs)("p",{children:[n[49].value,(0,e.jsx)("code",{children:n[50].value}),n[51].value,(0,e.jsx)("code",{children:n[52].value}),n[53].value]})]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)(l.Z,{children:`import React from 'react';\r
import { ConfigProvider, Button, Space, Input, Divider } from 'antd';\r
\r
const App: React.FC = () => (\r
  <>\r
    <ConfigProvider\r
      theme={{\r
        components: {\r
          Button: {\r
            colorPrimary: '#00b96b',\r
            algorithm: true, // \u542F\u7528\u7B97\u6CD5\r
          },\r
          Input: {\r
            colorPrimary: '#eb2f96',\r
            algorithm: true, // \u542F\u7528\u7B97\u6CD5\r
          }\r
        },\r
      }}\r
    >\r
      <Space>\r
        <div style={{ fontSize: 14 }}>\u5F00\u542F\u7B97\u6CD5\uFF1A</div>\r
        <Input placeholder="Please Input" />\r
        <Button type="primary">Submit</Button>\r
      </Space>\r
    </ConfigProvider>\r
    <Divider />\r
    <ConfigProvider\r
      theme={{\r
        components: {\r
          Button: {\r
            colorPrimary: '#00b96b',\r
          },\r
          Input: {\r
            colorPrimary: '#eb2f96',\r
          }\r
        },\r
      }}\r
    >\r
      <Space>\r
        <div style={{ fontSize: 14 }}>\u7981\u7528\u7B97\u6CD5\uFF1A</div>\r
        <Input placeholder="Please Input" />\r
        <Button type="primary">Submit</Button>\r
      </Space>\r
    </ConfigProvider>\r
  </>\r
);\r
\r
export default App;`}),(0,e.jsxs)("h3",{id:"\u7981\u7528\u52A8\u753B",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u7981\u7528\u52A8\u753B",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u7981\u7528\u52A8\u753B"]}),(0,e.jsxs)("p",{children:[n[55].value,(0,e.jsx)("code",{children:n[56].value}),n[57].value,(0,e.jsx)("code",{children:n[58].value}),n[59].value,(0,e.jsx)("code",{children:n[60].value}),n[61].value]}),(0,e.jsx)(l.Z,{children:`import React from 'react';\r
import { Switch, ConfigProvider, Space, Checkbox, Radio, Row, Col } from 'antd';\r
\r
export default () => {\r
  const [checked, setChecked] = React.useState(false);\r
\r
  React.useEffect(() => {\r
    const id = setInterval(() => {\r
      setChecked((prev) => !prev);\r
    }, 1000);\r
\r
    return () => {\r
      clearInterval(id);\r
    };\r
  }, []);\r
\r
  const nodes = (\r
    <Space>\r
      <Checkbox checked={checked}>Checkbox</Checkbox>\r
      <Radio checked={checked}>Radio</Radio>\r
      <Switch checked={checked} />\r
    </Space>\r
  );\r
\r
  return (\r
    <Row gutter={[24, 24]}>\r
      <Col span={24}>{nodes}</Col>\r
\r
      <Col span={24}>\r
        <ConfigProvider\r
          theme={{\r
            token: {\r
              motion: false,\r
            },\r
          }}\r
        >\r
          {nodes}\r
        </ConfigProvider>\r
      </Col>\r
    </Row>\r
  );\r
};`}),(0,e.jsxs)("h2",{id:"\u8FDB\u9636\u4F7F\u7528",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u8FDB\u9636\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u8FDB\u9636\u4F7F\u7528"]}),(0,e.jsxs)("h3",{id:"\u52A8\u6001\u5207\u6362",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u52A8\u6001\u5207\u6362",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u52A8\u6001\u5207\u6362"]}),(0,e.jsxs)("p",{children:[n[63].value,(0,e.jsx)("code",{children:n[64].value}),n[65].value,(0,e.jsx)("code",{children:n[66].value}),n[67].value]}),(0,e.jsx)(l.Z,{children:`import { Button, ConfigProvider, Space, Input, ColorPicker, Divider } from 'antd';\r
import React from 'react';\r
\r
const App: React.FC = () => {\r
  const [primary, setPrimary] = React.useState('#1677ff');\r
\r
  return (\r
    <>\r
      <ColorPicker showText value={primary} onChangeComplete={(color) => setPrimary(color.toHexString())} />\r
      <Divider />\r
      <ConfigProvider\r
        theme={{\r
          token: {\r
            colorPrimary: primary,\r
          },\r
        }}\r
      >\r
        <Space>\r
          <Input placeholder="Please Input" />\r
          <Button type="primary">Submit</Button>\r
        </Space>\r
      </ConfigProvider>\r
    </>\r
  );\r
}\r
\r
export default App;`}),(0,e.jsxs)("h3",{id:"\u5C40\u90E8\u4E3B\u9898\u5D4C\u5957\u4E3B\u9898",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5C40\u90E8\u4E3B\u9898\u5D4C\u5957\u4E3B\u9898",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5C40\u90E8\u4E3B\u9898\uFF08\u5D4C\u5957\u4E3B\u9898\uFF09"]}),(0,e.jsxs)("p",{children:[n[69].value,(0,e.jsx)("code",{children:n[70].value}),n[71].value]}),(0,e.jsx)(l.Z,{children:`import React from 'react';\r
import { Button, ConfigProvider, Space } from 'antd';\r
\r
const App: React.FC = () => (\r
  <ConfigProvider\r
    theme={{\r
      token: {\r
        colorPrimary: '#1677ff',\r
      },\r
    }}\r
  >\r
    <Space>\r
      <Button type="primary">Theme 1</Button>\r
      <ConfigProvider\r
        theme={{\r
          token: {\r
            colorPrimary: '#00b96b',\r
          },\r
        }}\r
      >\r
        <Button type="primary">Theme 2</Button>\r
      </ConfigProvider>\r
    </Space>\r
  </ConfigProvider>\r
);\r
\r
export default App;`}),(0,e.jsxs)("h3",{id:"\u4F7F\u7528-design-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528-design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528 Design Token"]}),(0,e.jsxs)("p",{children:[n[73].value,(0,e.jsx)("code",{children:n[74].value}),n[75].value]}),(0,e.jsx)(l.Z,{children:`import React from 'react';\r
import { Button, theme } from 'antd';\r
\r
const { useToken } = theme;\r
\r
const App: React.FC = () => {\r
  const { token } = useToken();\r
\r
  return (\r
    <div\r
      style={{\r
        backgroundColor: token.colorPrimaryBg,\r
        padding: token.padding,\r
        borderRadius: token.borderRadius,\r
        color: token.colorPrimaryText,\r
        fontSize: token.fontSize,\r
      }}\r
    >\r
      \u4F7F\u7528 Design Token\r
    </div>\r
  );\r
};\r
\r
export default App;`}),(0,e.jsxs)("h3",{id:"\u9759\u6001\u6D88\u8D39\u5982-less",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u9759\u6001\u6D88\u8D39\u5982-less",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u9759\u6001\u6D88\u8D39\uFF08\u5982 less\uFF09"]}),(0,e.jsxs)("p",{children:[n[77].value,(0,e.jsx)("code",{children:n[78].value}),n[79].value]}),(0,e.jsx)(d.Z,{lang:"jsx",children:n[80].value}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[81].value}),n[82].value,(0,e.jsx)("code",{children:n[83].value}),n[84].value]}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[85].value}),(0,e.jsx)("p",{children:n[86].value}),(0,e.jsx)(d.Z,{lang:"jsx",children:n[87].value}),(0,e.jsxs)("p",{children:[n[88].value,(0,e.jsx)(i.Z,{to:"/docs/react/migration-v5",sourceType:"Link",children:n[89].value}),n[90].value]}),(0,e.jsxs)("h3",{id:"\u8C03\u8BD5\u4E3B\u9898",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u8C03\u8BD5\u4E3B\u9898",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u8C03\u8BD5\u4E3B\u9898"]}),(0,e.jsxs)("p",{children:[n[91].value,(0,e.jsx)(i.Z,{to:"/theme-editor-cn",sourceType:"Link",children:n[92].value})]}),(0,e.jsx)("p",{children:n[93].value}),(0,e.jsxs)("h2",{id:"\u57FA\u672C\u6982\u5FF5",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u672C\u6982\u5FF5",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u672C\u6982\u5FF5"]}),(0,e.jsx)("p",{children:n[94].value}),(0,e.jsxs)("h3",{id:"\u6F14\u53D8\u8FC7\u7A0B",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u6F14\u53D8\u8FC7\u7A0B",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6F14\u53D8\u8FC7\u7A0B"]}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*uF3kTrY4InUAAAAAAAAAAAAAARQnAQ",alt:"token"})}),(0,e.jsxs)("h3",{id:"\u57FA\u7840\u53D8\u91CFseed-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u53D8\u91CFseed-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u53D8\u91CF\uFF08Seed Token\uFF09"]}),(0,e.jsxs)("p",{children:[n[95].value,(0,e.jsx)("code",{children:n[96].value}),n[97].value]}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[98].value}),(0,e.jsxs)("h3",{id:"\u68AF\u5EA6\u53D8\u91CFmap-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u68AF\u5EA6\u53D8\u91CFmap-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u68AF\u5EA6\u53D8\u91CF\uFF08Map Token\uFF09"]}),(0,e.jsxs)("p",{children:[n[99].value,(0,e.jsx)("code",{children:n[100].value}),n[101].value,(0,e.jsx)("code",{children:n[102].value}),n[103].value]}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[104].value}),(0,e.jsxs)("h3",{id:"\u522B\u540D\u53D8\u91CFalias-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u522B\u540D\u53D8\u91CFalias-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u522B\u540D\u53D8\u91CF\uFF08Alias Token\uFF09"]}),(0,e.jsx)("p",{children:n[105].value}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[106].value}),(0,e.jsxs)("h3",{id:"\u57FA\u672C\u7B97\u6CD5algorithm",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u672C\u7B97\u6CD5algorithm",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u672C\u7B97\u6CD5\uFF08algorithm)"]}),(0,e.jsx)("p",{children:n[107].value}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[108].value}),(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"theme",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#theme",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Theme"]}),(0,e.jsxs)(u.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[109].value}),(0,e.jsx)("th",{children:n[110].value}),(0,e.jsx)("th",{children:n[111].value}),(0,e.jsx)("th",{children:n[112].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[113].value}),(0,e.jsx)("td",{children:n[114].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[115].value})}),(0,e.jsx)("td",{children:n[116].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[117].value}),(0,e.jsx)("td",{children:n[118].value}),(0,e.jsx)("td",{children:n[119].value}),(0,e.jsx)("td",{children:n[120].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[121].value}),(0,e.jsx)("td",{children:n[122].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[123].value}),n[124].value,(0,e.jsx)("code",{children:n[125].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[126].value})})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[127].value}),(0,e.jsx)("td",{children:n[128].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[129].value})}),(0,e.jsx)("td",{children:n[130].value})]})]})]}),(0,e.jsxs)("h3",{id:"componentsconfig",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#componentsconfig",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ComponentsConfig"]}),(0,e.jsxs)(u.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[131].value}),(0,e.jsx)("th",{children:n[132].value}),(0,e.jsx)("th",{children:n[133].value}),(0,e.jsx)("th",{children:n[134].value})]})}),(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[135].value}),n[136].value,(0,e.jsx)("code",{children:n[137].value}),n[138].value]}),(0,e.jsx)("td",{children:n[139].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[140].value}),n[141].value,(0,e.jsx)("code",{children:n[142].value})]}),(0,e.jsx)("td",{children:n[143].value})]})})]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[n[144].value,(0,e.jsx)("code",{children:n[145].value}),n[146].value,(0,e.jsx)("code",{children:n[147].value}),n[148].value,(0,e.jsx)("code",{children:n[149].value}),n[150].value,(0,e.jsx)("code",{children:n[151].value}),n[152].value]})}),(0,e.jsxs)("h3",{id:"seedtoken",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#seedtoken",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"SeedToken"]})]}),(0,e.jsx)(s.Z,{type:"seed"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"maptoken",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#maptoken",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"MapToken"]}),(0,e.jsx)("blockquote",{children:(0,e.jsx)("p",{children:n[153].value})})]}),(0,e.jsx)(s.Z,{type:"map"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"aliastoken",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#aliastoken",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"AliasToken"]}),(0,e.jsx)("blockquote",{children:(0,e.jsx)("p",{children:n[154].value})})]}),(0,e.jsx)(s.Z,{type:"alias"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"\u4E3A\u4EC0\u4E48-theme-\u4ECE-undefined-\u53D8\u4E3A\u5BF9\u8C61\u6216\u8005\u53D8\u4E3A-undefined-\u65F6\u7EC4\u4EF6\u91CD\u65B0-mount-\u4E86",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4EC0\u4E48-theme-\u4ECE-undefined-\u53D8\u4E3A\u5BF9\u8C61\u6216\u8005\u53D8\u4E3A-undefined-\u65F6\u7EC4\u4EF6\u91CD\u65B0-mount-\u4E86",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4EC0\u4E48 ",(0,e.jsx)("code",{children:n[155].value})," \u4ECE ",(0,e.jsx)("code",{children:n[156].value})," \u53D8\u4E3A\u5BF9\u8C61\u6216\u8005\u53D8\u4E3A ",(0,e.jsx)("code",{children:n[157].value})," \u65F6\u7EC4\u4EF6\u91CD\u65B0 mount \u4E86\uFF1F"]}),(0,e.jsxs)("p",{children:[n[158].value,(0,e.jsx)("code",{children:n[159].value}),n[160].value,(0,e.jsx)("code",{children:n[161].value}),n[162].value,(0,e.jsx)("code",{children:n[163].value}),n[164].value,(0,e.jsx)("code",{children:n[165].value}),n[166].value,(0,e.jsx)("code",{children:n[167].value}),n[168].value]})]})]})})}a.default=o}}]);
