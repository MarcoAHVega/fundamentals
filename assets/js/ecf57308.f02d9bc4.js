"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[8830],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},u="mdxType",x={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(p,".").concat(d)]||u[d]||x[d]||a;return t?o.createElement(m,l(l({ref:n},c),{},{components:t})):o.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5262:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>x,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:32},l="Flex Wrap",i={unversionedId:"6 React Native/Section 4: Layout/32 Flex Wrap",id:"6 React Native/Section 4: Layout/32 Flex Wrap",title:"Flex Wrap",description:"- This property allows us to control how flex items behave when there is limited space within the container.",source:"@site/docs/6 React Native/Section 4: Layout/32 Flex Wrap.md",sourceDirName:"6 React Native/Section 4: Layout",slug:"/6 React Native/Section 4: Layout/32 Flex Wrap",permalink:"/fundamentals/6 React Native/Section 4: Layout/32 Flex Wrap",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32},sidebar:"tutorialSidebar",previous:{title:"Align Self",permalink:"/fundamentals/6 React Native/Section 4: Layout/31 Align Self"},next:{title:"Align Content",permalink:"/fundamentals/6 React Native/Section 4: Layout/33 Align Content"}},p={},s=[{value:"Default Value of Flex Wrap",id:"default-value-of-flex-wrap",level:3},{value:"Using flexWrap",id:"using-flexwrap",level:3},{value:"No Wrap",id:"no-wrap",level:3},{value:"Wrap",id:"wrap",level:3},{value:"Wrap Reverse",id:"wrap-reverse",level:3},{value:"Horizontal Wrapping",id:"horizontal-wrapping",level:3},{value:"Summary",id:"summary",level:3}],c={toc:s},u="wrapper";function x(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flex-wrap"},"Flex Wrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This property allows us to control how flex items behave when there is limited space within the container.")),(0,r.kt)("h3",{id:"default-value-of-flex-wrap"},"Default Value of Flex Wrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"By default, the flex-wrap property is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"no-wrap"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This means that the items will remain in a single line, even if there is not enough space.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"to demonstrate this, comment out ",(0,r.kt)("inlineCode",{parentName:"p"},"flex: 1,")," and set a ",(0,r.kt)("inlineCode",{parentName:"p"},"height: 300"),","))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View } from 'react-native'\nimport Box from './components/Box'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>\n      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>\n      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>\n      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>\n      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    // flex: 1,\n    height: 300,\n    marginTop: 64,\n    borderWidth: 6,\n    borderColor: 'red',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"and you can see when there is not enough space the items overflow the container")),(0,r.kt)("h3",{id:"using-flexwrap"},"Using flexWrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"to prevent this overflow and handle limited space more effectively we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"flexWrap")," property")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"the flexWrap property can accept one of ",(0,r.kt)("inlineCode",{parentName:"p"},"three possible values")))),(0,r.kt)("h3",{id:"no-wrap"},"No Wrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the flexWrap property is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"nowrap"),", there is no change in the UI, and the items remain in a single line.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View } from 'react-native'\nimport Box from './components/Box'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>\n      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>\n      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>\n      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>\n      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    // flex: 1,\n    flexWrap: 'nowrap',\n    height: 300,\n    marginTop: 64,\n    borderWidth: 6,\n    borderColor: 'red',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"end this is the default value")),(0,r.kt)("h3",{id:"wrap"},"Wrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setting the flex-wrap property to ",(0,r.kt)("inlineCode",{parentName:"li"},"wrap")," allows the items to wrap within the container.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View } from 'react-native'\nimport Box from './components/Box'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>\n      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>\n      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>\n      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>\n      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    // flex: 1,\n    flexWrap: 'wrap',\n    height: 300,\n    marginTop: 64,\n    borderWidth: 6,\n    borderColor: 'red',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The wrapping takes place only when needed, and the items are wrapped into the next row or column.")),(0,r.kt)("h3",{id:"wrap-reverse"},"Wrap Reverse"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The value ",(0,r.kt)("inlineCode",{parentName:"li"},"wrap-reverse")," places the items starting at the end of the cross axis.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View } from 'react-native'\nimport Box from './components/Box'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>\n      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>\n      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>\n      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>\n      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    // flex: 1,\n    flexWrap: 'wrap-reverse',\n    height: 300,\n    marginTop: 64,\n    borderWidth: 6,\n    borderColor: 'red',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instead of wrapping to the right column, they wrap to the previous column.")),(0,r.kt)("h3",{id:"horizontal-wrapping"},"Horizontal Wrapping"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Horizontal wrapping of items is possible by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-direction")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"row"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"With flexWrap set to ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap"),", you can see the items wrapping to the next row."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View } from 'react-native'\nimport Box from './components/Box'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>\n      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>\n      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>\n      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>\n      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    // flex: 1,\n    flexDirection: 'row',\n    flexWrap: 'wrap',\n    height: 300,\n    marginTop: 64,\n    borderWidth: 6,\n    borderColor: 'red',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setting the value to ",(0,r.kt)("inlineCode",{parentName:"li"},"wrap-reverse"),",( uncomment ",(0,r.kt)("inlineCode",{parentName:"li"},"flex: 1,"),"and delete the ",(0,r.kt)("inlineCode",{parentName:"li"},"height"),"),")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View } from 'react-native'\nimport Box from './components/Box'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>\n      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>\n      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>\n      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>\n      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    flexDirection: 'row',\n    flexWrap: 'wrap-reverse',\n    marginTop: 64,\n    borderWidth: 6,\n    borderColor: 'red',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"places the items at the end of the cross axis and wraps them to the row above.")),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In summary, the flex Wrap property is a valuable tool for controlling the wrapping behavior of flex items within the container.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The possible values are ",(0,r.kt)("inlineCode",{parentName:"p"},"nowrap")," (default), ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap-reverse"),"."))))}x.isMDXComponent=!0}}]);