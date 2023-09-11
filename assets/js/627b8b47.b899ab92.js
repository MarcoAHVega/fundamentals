"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[5816],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2640:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:15},i="StatusBar component",l={unversionedId:"6 React Native Expo CLI/Section 2: Components/15 StatusBar",id:"6 React Native Expo CLI/Section 2: Components/15 StatusBar",title:"StatusBar component",description:"StatusBar component",source:"@site/docs/6 React Native Expo CLI/Section 2: Components/15 StatusBar.md",sourceDirName:"6 React Native Expo CLI/Section 2: Components",slug:"/6 React Native Expo CLI/Section 2: Components/15 StatusBar",permalink:"/fundamentals/6 React Native Expo CLI/Section 2: Components/15 StatusBar",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Modal Component",permalink:"/fundamentals/6 React Native Expo CLI/Section 2: Components/14 Modal"},next:{title:"ActivityIndicator Component",permalink:"/fundamentals/6 React Native Expo CLI/Section 2: Components/16 ActivityIndicator"}},p={},s=[{value:"<strong>StatusBar component</strong>",id:"statusbar-component-1",level:2},{value:"<strong>=&gt;</strong> Intro",id:"-intro",level:3},{value:"<strong>=&gt;</strong> Code Example",id:"-code-example",level:3},{value:"<strong>=&gt;</strong> Modifying Appearance",id:"-modifying-appearance",level:3},{value:"<strong>=&gt;</strong> Visibility and Hidden Prop",id:"-visibility-and-hidden-prop",level:3},{value:"<strong>=&gt;</strong> Summary",id:"-summary",level:3}],u={toc:s},c="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"statusbar-component"},"StatusBar component"),(0,r.kt)("h2",{id:"statusbar-component-1"},(0,r.kt)("strong",{parentName:"h2"},"StatusBar component")),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"-intro"},(0,r.kt)("strong",{parentName:"h3"},"=>")," Intro"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Welcome back for our next component. Let's take a look at the status part component in React Native.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The status bar component provides control over the application's status bar, which is the area typically located at the top of the screen.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The status bar displays various information such as the current time, Wi-Fi and network status, battery level, and other status icons.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now, our focus will be on the top section of the two devices. You can see they are transparent to begin with."))),(0,r.kt)("h3",{id:"-code-example"},(0,r.kt)("strong",{parentName:"h3"},"=>")," Code Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"let's now import the statusBar component")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"and within the view component invoke status bar"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, StatusBar } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <StatusBar />\n    </View>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When we save the file, there is no visible change in iOS, but in Android, it adds a status bar component with a dark background.")),(0,r.kt)("h3",{id:"-modifying-appearance"},(0,r.kt)("strong",{parentName:"h3"},"=>")," Modifying Appearance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Let's now modify its appearance by adding some props:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set the background color using the backgroundColor prop. For example, backgroundColor: 'lightgreen' (specific to Android).")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, StatusBar } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <StatusBar backgroundColor='lightgreen' />\n    </View>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please note that this prop is specific to Android. The iOS simulator has no background color, while the Android device shows a green background.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Although we can't change the background color on iOS, we can adjust the text color on both platforms.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The prop to control the text color is called",(0,r.kt)("inlineCode",{parentName:"p"}," barStyle")," , and its default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," ."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, StatusBar } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <StatusBar\n        backgroundColor='lightgreen'\n        barStyle='default'\n      />\n    </View>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This corresponds to dark text on iOS and light text on Android.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Currently, we see black text on iOS and white text on Android.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We can change the value of barStyle to ",(0,r.kt)("inlineCode",{parentName:"p"},"dark-content")," , which results in black text on both platforms,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"or ",(0,r.kt)("inlineCode",{parentName:"p"},"light-content")," , which gives us white text on both platforms."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, StatusBar } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <StatusBar\n        backgroundColor='lightgreen'\n        barStyle='dark-content'\n      />\n    </View>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Depending on your application's background color, choose the appropriate value to ensure good visibility and contrast.")),(0,r.kt)("h3",{id:"-visibility-and-hidden-prop"},(0,r.kt)("strong",{parentName:"h3"},"=>")," Visibility and Hidden Prop"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Speaking of visibility, you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"hidden")," prop to hide the status bar.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, StatusBar } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <StatusBar\n        backgroundColor='lightgreen'\n        barStyle='dark-content'\n        hidden\n      />\n    </View>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the hidden prop, and you'll notice that the status bar is now hidden.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As an exercise, I encourage you to try toggling the visibility of the status bar by using a state variable and a button click event, similar to how you control the visibility of a modal."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, StatusBar, Button, Text } from 'react-native'\n\nexport default function App() {\n  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false)\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <StatusBar\n        backgroundColor='lightgreen'\n        barStyle='dark-content'\n        hidden={isStatusBarHidden}\n      />\n      <Button\n        title='Hidden'\n        onPress={() => setIsStatusBarHidden(true)}\n        color='midnightblue'\n      />\n      <Text> </Text>\n      <Button\n        title='Visible'\n        onPress={() => setIsStatusBarHidden(false)}\n        color='midnightblue'\n      />\n    </View>\n  )\n}\n")),(0,r.kt)("h3",{id:"-summary"},(0,r.kt)("strong",{parentName:"h3"},"=>")," Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To summarize, the status bar component allows you to control the application's status bar.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can adjust the background color on Android using the backgroundColor prop,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"change the text color using the barStyle prop,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"and toggle visibility using the hidden prop."))))}d.isMDXComponent=!0}}]);