"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[5002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:17},l="Alert component",i={unversionedId:"6 React Native/Section 2: Components/17 Alert",id:"6 React Native/Section 2: Components/17 Alert",title:"Alert component",description:"- The Alert component in React Native serves more as an API than a typical component. Instead of rendering it as part of JSX, you invoke methods that generate UI elements.",source:"@site/docs/6 React Native/Section 2: Components/17 Alert.md",sourceDirName:"6 React Native/Section 2: Components",slug:"/6 React Native/Section 2: Components/17 Alert",permalink:"/fundamentals/6 React Native/Section 2: Components/17 Alert",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"ActivityIndicator Component",permalink:"/fundamentals/6 React Native/Section 2: Components/16 ActivityIndicator"},next:{title:"Custom Components",permalink:"/fundamentals/6 React Native/Section 2: Components/18 Custom Components"}},p={},s=[{value:"Usage Example",id:"usage-example",level:3},{value:"Adding a massage",id:"adding-a-massage",level:3},{value:"Controlling the buttons",id:"controlling-the-buttons",level:3},{value:"Available APIs",id:"available-apis",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alert-component"},"Alert component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Alert component in React Native serves more as an API than a typical component. Instead of rendering it as part of JSX, you invoke methods that generate UI elements.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When using the Alert component, you can launch another dialog with a specified title and message.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Additionally, you have the option to include a list of buttons."))),(0,r.kt)("h3",{id:"usage-example"},"Usage Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the Alert component from React Native.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Define a button within the View component in the JSX of the App component.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the Button component.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Add a title to the Button component, called "alert", and an onPress prop.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The onPress prop should be an arrow function where we invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"Alert.alert()"),' , passing a string ("invalid data") as the first parameter.'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, Alert, Button } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Alert' onPress={() => Alert.alert('Invalid data!')} />\n    </View>\n  )\n}\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Upon pressing the button, the alert dialog will be displayed with the specified ",(0,r.kt)("inlineCode",{parentName:"li"},"title"),' ("invalid data").')),(0,r.kt)("h3",{id:"adding-a-massage"},"Adding a massage"),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally, you can specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," as the second parameter in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Alert.alert()")," function.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To display multiple alerts, duplicate the button and change the title and message accordingly."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, Alert, Button } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Alert' onPress={() => Alert.alert('Invalid data!')} />\n      <Button title='Alert 2' onPress={() => Alert.alert('Invalid data!', 'DOB Incorrect')} />\n    </View>\n  )\n}\n")),(0,r.kt)("h3",{id:"controlling-the-buttons"},"Controlling the buttons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"on iOS you can specify any number of buttons while on Android the limit is three")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To control the buttons shown in the alert, you can pass an array as the third parameter in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Alert.alert()")," function.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Within the array, specify objects with a "text" property (e.g., "cancel") and a corresponding "onPress" handler.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'The "onPress" handler can be defined as an arrow function that performs a desired action (e.g., logging to the console).'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, Alert, Button } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Alert' onPress={() => Alert.alert('Invalid data!')} />\n      <Button title='Alert 2' onPress={() => Alert.alert('Invalid data!', 'DOB Incorrect')} />\n      <Button\n        title='Alert 3'\n        onPress={() =>\n          Alert.alert('Invalid data!', 'DOB Incorrect', [\n            {\n              text: 'Cancel',\n              onPress: () => console.log('Cancel pressed'),\n            },\n            {\n              text: 'OK',\n              onPress: () => console.log('OK pressed'),\n            },\n          ])\n        }\n      />\n    </View>\n  )\n}\n")),(0,r.kt)("h3",{id:"available-apis"},"Available APIs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alert is just one of the many available apis in react native")),(0,r.kt)("ol",{start:13},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The appearance of the alert dialog may vary slightly between iOS and Android platforms.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For a comprehensive list of available APIs in React Native, refer to the documentation on development APIs."))))}u.isMDXComponent=!0}}]);