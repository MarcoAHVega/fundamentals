"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[4240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:8},o="View Component",l={unversionedId:"6 React Native/8 View",id:"6 React Native/8 View",title:"View Component",description:"- The View component is a fundamental code component in React Native.",source:"@site/docs/6 React Native/8 View.md",sourceDirName:"6 React Native",slug:"/6 React Native/8 View",permalink:"/fundamentals/6 React Native/8 View",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Core Components",permalink:"/fundamentals/6 React Native/7 Core Components"},next:{title:"Text Component",permalink:"/fundamentals/6 React Native/9 Text"}},p={},m=[{value:"Setting up the Project",id:"setting-up-the-project",level:3},{value:"Starting with a Clean Slate",id:"starting-with-a-clean-slate",level:3},{value:"Displaying the View Component",id:"displaying-the-view-component",level:3},{value:"Expanding the View Component",id:"expanding-the-view-component",level:3},{value:"Nesting Views within the View Component",id:"nesting-views-within-the-view-component",level:3},{value:"Summary",id:"summary",level:3}],c={toc:m},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"view-component"},"View Component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The View component is a fundamental code component in React Native.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It serves as a building block for creating user interfaces.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The View component functions as a container that supports layouts using flexbox styling, touch handling, and accessibility controls.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In web development terms, the View component can be compared to the div tag.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When working with React Native, the View component is typically nested inside other views and can have zero or more children of any type.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It provides the structure and organization for other components in the UI."))),(0,r.kt)("h3",{id:"setting-up-the-project"},"Setting up the Project"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new Expo project using the command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app core-components --template blank --sdk 49\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure you are running the latest version of Expo (version 49) by checking the package.json file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start the development server by running the command"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Open the iOS simulator by pressing the key "I" in the terminal.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open the Android emulator in Android Studio.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Run the app on the Android emulator by pressing the key "A" in the terminal.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Verify that the app is running on both the iOS simulator and Android emulator."))),(0,r.kt)("h3",{id:"starting-with-a-clean-slate"},"Starting with a Clean Slate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Delete the existing code in the "app.js" file.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Import the View component from the React Native library.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Define a new component called "App" and make it the default export.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Within the JSX code, return the View component."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View } from 'react-native'\n\nfunction App() {\n  return <View>{/* Your code here */}</View>\n}\n\nexport default App\n")),(0,r.kt)("h3",{id:"displaying-the-view-component"},"Displaying the View Component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a background color to the View component using inline styles.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Set the style prop as an object and set the background color to "plum".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Save the file and observe the iOS simulator and Android emulator."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View } from 'react-native'\n\nfunction App() {\n  return <View style={{ backgroundColor: 'plum' }}>{/* Your code here */}</View>\n}\n\nexport default App\n")),(0,r.kt)("h3",{id:"expanding-the-view-component"},"Expanding the View Component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Add the style property "flex: 1" to the View component.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This will make the View component flexibly expand and take up all available space on the screen.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Save the file and observe the expanded View component."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View } from 'react-native'\n\nfunction App() {\n  return <View style={{ flex: 1, backgroundColor: 'plum' }}>{/* Your code here */}</View>\n}\n\nexport default App\n")),(0,r.kt)("h3",{id:"nesting-views-within-the-view-component"},"Nesting Views within the View Component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a new View component with a light blue background color.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specify its height and width as 200.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Duplicate the View component and change its background color to light green.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Save the file and observe the nested views within the outer View component."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View } from 'react-native'\n\nfunction App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum' }}>\n      <View style={{ backgroundColor: 'lightblue', height: 200, width: 200 }} />\n      <View style={{ backgroundColor: 'lightgreen', height: 200, width: 200 }} />\n    </View>\n  )\n}\n\nexport default App\n")),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The View component is a core component in React Native that serves as a container for other components.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It supports layout and styling using flexbox.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remember to import the View component before using it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nested views can be used to create complex user interfaces."))))}s.isMDXComponent=!0}}]);