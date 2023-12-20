"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[80345],{671549:function(u,a,r){r.r(a);var x=r(863942),j=r(502143),m=r(968521),t=r(702951),v=r(521587),d=r(199100),o=r(828089),p=r(825673),E=r(902068),g=r(574399),f=r(316073),P=r(24628),C=r(719260),T=r(956140),k=r(127179),y=r(905388),D=r(245583),I=r(606965),A=r(268696),b=r(587302),i=r(424128),S=r(249706),M=r(795127),O=r(116846),s=r(720538),R=r(212039),l=r(73024),B=r(553913),c=r(733851),Z=r(667294),e=r(785893);function h(){var _=(0,c.eL)(),n=_.texts;return(0,e.jsx)(c.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsx)("p",{children:n[1].value}),(0,e.jsxs)("ol",{children:[(0,e.jsx)("li",{children:n[2].value}),(0,e.jsx)("li",{children:n[3].value}),(0,e.jsx)("li",{children:n[4].value}),(0,e.jsx)("li",{children:n[5].value})]}),(0,e.jsxs)("h2",{id:"basic-usage",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Basic Usage"]}),(0,e.jsxs)("p",{children:[n[6].value,(0,e.jsx)("strong",{children:n[7].value}),n[8].value,(0,e.jsx)("code",{children:n[9].value}),n[10].value]})]}),(0,e.jsxs)(t.Z,{type:"warning",children:[(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[11].value}),n[12].value,(0,e.jsx)("code",{children:n[13].value}),n[14].value,(0,e.jsx)("code",{children:n[15].value}),n[16].value,(0,e.jsx)("code",{children:n[17].value}),n[18].value,(0,e.jsx)("code",{children:n[19].value}),n[20].value]}),(0,e.jsxs)("p",{children:[n[21].value,(0,e.jsx)("code",{children:n[22].value}),n[23].value,(0,e.jsx)(i.Z,{to:"/components/app",sourceType:"Link",children:n[24].value}),n[25].value]})]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"customize-design-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#customize-design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Customize Design Token"]}),(0,e.jsxs)("p",{children:[n[26].value,(0,e.jsx)("code",{children:n[27].value}),n[28].value,(0,e.jsx)("code",{children:n[29].value}),n[30].value]}),(0,e.jsx)(s.Z,{autorun:!0,children:`import { Button, ConfigProvider, Space } from 'antd';\r
import React from 'react';\r
\r
const App: React.FC = () => (\r
  <ConfigProvider\r
    theme={{\r
      token: {\r
        // Seed Token\r
        colorPrimary: '#00b96b',\r
        borderRadius: 2,\r
\r
        // Alias Token\r
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
export default App;`}),(0,e.jsxs)("h3",{id:"use-preset-algorithms",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#use-preset-algorithms",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Use Preset Algorithms"]}),(0,e.jsxs)("p",{children:[n[32].value,(0,e.jsx)("code",{children:n[33].value}),n[34].value]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n[35].value,(0,e.jsx)("code",{children:n[36].value})]}),(0,e.jsxs)("li",{children:[n[37].value,(0,e.jsx)("code",{children:n[38].value})]}),(0,e.jsxs)("li",{children:[n[39].value,(0,e.jsx)("code",{children:n[40].value})]})]}),(0,e.jsxs)("p",{children:[n[41].value,(0,e.jsx)("code",{children:n[42].value}),n[43].value,(0,e.jsx)("code",{children:n[44].value}),n[45].value]}),(0,e.jsx)(s.Z,{dark:!0,children:`import React from 'react';\r
import { Button, ConfigProvider, Input, Space, theme } from 'antd';\r
\r
const App: React.FC = () => (\r
  <ConfigProvider\r
    theme={{\r
      // 1. Use dark algorithm\r
      algorithm: theme.darkAlgorithm,\r
\r
      // 2. Combine dark algorithm and compact algorithm\r
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
export default App;`}),(0,e.jsxs)("h3",{id:"customize-component-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#customize-component-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Customize Component Token"]}),(0,e.jsx)("p",{children:n[47].value})]}),(0,e.jsxs)(t.Z,{type:"info",title:"Algorithm",of:"",component:"",token:"",children:[(0,e.jsx)("p",{children:n[48].value}),(0,e.jsxs)("p",{children:[n[49].value,(0,e.jsx)("code",{children:n[50].value}),n[51].value,(0,e.jsx)("code",{children:n[52].value}),n[53].value]})]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)(s.Z,{children:`import React from 'react';\r
import { ConfigProvider, Button, Space, Input, Divider } from 'antd';\r
\r
const App: React.FC = () => (\r
  <>\r
    <ConfigProvider\r
      theme={{\r
        components: {\r
          Button: {\r
            colorPrimary: '#00b96b',\r
            algorithm: true, // Enable algorithm\r
          },\r
          Input: {\r
            colorPrimary: '#eb2f96',\r
            algorithm: true, // Enable algorithm\r
          }\r
        },\r
      }}\r
    >\r
      <Space>\r
        <div style={{ fontSize: 14 }}>Enable algorithm: </div>\r
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
        <div style={{ fontSize: 14 }}>Disable algorithm: </div>\r
        <Input placeholder="Please Input" />\r
        <Button type="primary">Submit</Button>\r
      </Space>\r
    </ConfigProvider>\r
  </>\r
);\r
\r
export default App;`}),(0,e.jsxs)("h3",{id:"disable-motion",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#disable-motion",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Disable Motion"]}),(0,e.jsxs)("p",{children:[n[55].value,(0,e.jsx)("code",{children:n[56].value}),n[57].value,(0,e.jsx)("code",{children:n[58].value}),n[59].value,(0,e.jsx)("code",{children:n[60].value}),n[61].value]}),(0,e.jsx)(s.Z,{children:`import React from 'react';\r
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
};`}),(0,e.jsxs)("h2",{id:"advanced",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#advanced",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Advanced"]}),(0,e.jsxs)("h3",{id:"switch-themes-dynamically",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#switch-themes-dynamically",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Switch Themes Dynamically"]}),(0,e.jsxs)("p",{children:[n[63].value,(0,e.jsx)("code",{children:n[64].value}),n[65].value,(0,e.jsx)("code",{children:n[66].value}),n[67].value]}),(0,e.jsx)(s.Z,{children:`import { Button, ConfigProvider, Space, Input, ColorPicker, Divider } from 'antd';\r
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
export default App;`}),(0,e.jsxs)("h3",{id:"nested-theme",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#nested-theme",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Nested Theme"]}),(0,e.jsxs)("p",{children:[n[69].value,(0,e.jsx)("code",{children:n[70].value}),n[71].value]}),(0,e.jsx)(s.Z,{children:`import React from 'react';\r
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
export default App;`}),(0,e.jsxs)("h3",{id:"consume-design-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#consume-design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Consume Design Token"]}),(0,e.jsxs)("p",{children:[n[73].value,(0,e.jsx)("code",{children:n[74].value}),n[75].value]}),(0,e.jsx)(s.Z,{children:`import React from 'react';\r
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
      Consume Design Token\r
    </div>\r
  );\r
};\r
\r
export default App;`}),(0,e.jsxs)("h3",{id:"static-consume-eg-less",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#static-consume-eg-less",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Static consume (e.g. less)"]}),(0,e.jsx)("p",{children:n[77].value}),(0,e.jsx)(d.Z,{lang:"jsx",children:n[78].value}),(0,e.jsxs)("p",{children:[n[79].value,(0,e.jsx)("code",{children:n[80].value}),n[81].value,(0,e.jsx)("code",{children:n[82].value}),n[83].value]}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[84].value}),(0,e.jsx)("p",{children:n[85].value}),(0,e.jsx)(d.Z,{lang:"jsx",children:n[86].value}),(0,e.jsxs)("p",{children:[n[87].value,(0,e.jsx)(i.Z,{to:"/docs/react/migration-v5",sourceType:"Link",children:n[88].value}),n[89].value]}),(0,e.jsxs)("h3",{id:"theme-editor",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#theme-editor",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Theme editor"]}),(0,e.jsxs)("p",{children:[n[90].value,(0,e.jsx)(i.Z,{to:"/theme-editor",sourceType:"Link",children:n[91].value})]}),(0,e.jsx)("p",{children:n[92].value}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]}),(0,e.jsx)("p",{children:n[93].value}),(0,e.jsxs)("h3",{id:"life-of-design-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#life-of-design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Life of Design Token"]}),(0,e.jsx)("p",{children:(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*uF3kTrY4InUAAAAAAAAAAAAAARQnAQ",alt:"token"})}),(0,e.jsxs)("h3",{id:"seed-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#seed-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Seed Token"]}),(0,e.jsxs)("p",{children:[n[94].value,(0,e.jsx)("code",{children:n[95].value}),n[96].value]}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[97].value}),(0,e.jsxs)("h3",{id:"map-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#map-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Map Token"]}),(0,e.jsxs)("p",{children:[n[98].value,(0,e.jsx)("code",{children:n[99].value}),n[100].value,(0,e.jsx)("code",{children:n[101].value}),n[102].value]}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[103].value}),(0,e.jsxs)("h3",{id:"alias-token",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#alias-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Alias Token"]}),(0,e.jsx)("p",{children:n[104].value}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[105].value}),(0,e.jsxs)("h3",{id:"algorithm",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#algorithm",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Algorithm"]}),(0,e.jsx)("p",{children:n[106].value}),(0,e.jsx)(d.Z,{lang:"tsx",children:n[107].value}),(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"theme",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#theme",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Theme"]}),(0,e.jsxs)(o.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[108].value}),(0,e.jsx)("th",{children:n[109].value}),(0,e.jsx)("th",{children:n[110].value}),(0,e.jsx)("th",{children:n[111].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[112].value}),(0,e.jsx)("td",{children:n[113].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[114].value})}),(0,e.jsx)("td",{children:n[115].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[116].value}),(0,e.jsx)("td",{children:n[117].value}),(0,e.jsx)("td",{children:n[118].value}),(0,e.jsx)("td",{children:n[119].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[120].value}),(0,e.jsx)("td",{children:n[121].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[122].value}),n[123].value,(0,e.jsx)("code",{children:n[124].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[125].value})})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[126].value}),(0,e.jsx)("td",{children:n[127].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[128].value})}),(0,e.jsx)("td",{children:n[129].value})]})]})]}),(0,e.jsxs)("h3",{id:"componentsconfig",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#componentsconfig",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ComponentsConfig"]}),(0,e.jsxs)(o.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[130].value}),(0,e.jsx)("th",{children:n[131].value}),(0,e.jsx)("th",{children:n[132].value}),(0,e.jsx)("th",{children:n[133].value})]})}),(0,e.jsx)("tbody",{children:(0,e.jsxs)("tr",{children:[(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[134].value}),n[135].value,(0,e.jsx)("code",{children:n[136].value}),n[137].value]}),(0,e.jsx)("td",{children:n[138].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[139].value}),n[140].value,(0,e.jsx)("code",{children:n[141].value})]}),(0,e.jsx)("td",{children:n[142].value})]})})]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[143].value}),n[144].value,(0,e.jsx)("code",{children:n[145].value}),n[146].value,(0,e.jsx)("code",{children:n[147].value}),n[148].value]})}),(0,e.jsxs)("h3",{id:"seedtoken",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#seedtoken",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"SeedToken"]})]}),(0,e.jsx)(l.Z,{type:"seed"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"maptoken",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#maptoken",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"MapToken"]}),(0,e.jsx)("blockquote",{children:(0,e.jsx)("p",{children:n[149].value})})]}),(0,e.jsx)(l.Z,{type:"map"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"aliastoken",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#aliastoken",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"AliasToken"]}),(0,e.jsx)("blockquote",{children:(0,e.jsx)("p",{children:n[150].value})})]}),(0,e.jsx)(l.Z,{type:"alias"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"why-component-re-mounted-when-theme-changed-from-undefined-to-some-object-or-to-undefined",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-component-re-mounted-when-theme-changed-from-undefined-to-some-object-or-to-undefined",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why component re-mounted when ",(0,e.jsx)("code",{children:n[151].value})," changed from ",(0,e.jsx)("code",{children:n[152].value})," to some object or to ",(0,e.jsx)("code",{children:n[153].value}),"?"]}),(0,e.jsxs)("p",{children:[n[154].value,(0,e.jsx)("code",{children:n[155].value}),n[156].value,(0,e.jsx)("code",{children:n[157].value}),n[158].value,(0,e.jsx)("code",{children:n[159].value}),n[160].value,(0,e.jsx)("code",{children:n[161].value}),n[162].value,(0,e.jsx)("code",{children:n[163].value}),n[164].value]})]})]})})}a.default=h}}]);
