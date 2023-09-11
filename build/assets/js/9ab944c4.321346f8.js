"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[1309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?i.createElement(h,l(l({ref:t},m),{},{components:n})):i.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:40},l="Dimensions API",o={unversionedId:"6 React Native Expo CLI/Section 5: Dynamic User Interfaces/40 Dimensions API",id:"6 React Native Expo CLI/Section 5: Dynamic User Interfaces/40 Dimensions API",title:"Dimensions API",description:"=> Intro",source:"@site/docs/6 React Native Expo CLI/Section 5: Dynamic User Interfaces/40 Dimensions API.md",sourceDirName:"6 React Native Expo CLI/Section 5: Dynamic User Interfaces",slug:"/6 React Native Expo CLI/Section 5: Dynamic User Interfaces/40 Dimensions API",permalink:"/fundamentals/6 React Native Expo CLI/Section 5: Dynamic User Interfaces/40 Dimensions API",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Dynamic User Interfaces",permalink:"/fundamentals/6 React Native Expo CLI/Section 5: Dynamic User Interfaces/39 Dynamic User Interfaces"},next:{title:"Dimensions API Drawback",permalink:"/fundamentals/6 React Native Expo CLI/Section 5: Dynamic User Interfaces/41 Dimensions API Drawback"}},s={},p=[{value:"<strong>=&gt;</strong> Intro",id:"-intro",level:3},{value:"In summary",id:"in-summary",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dimensions-api"},"Dimensions API"),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"-intro"},(0,a.kt)("strong",{parentName:"h3"},"=>")," Intro"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In this video, we will explore the Dimensions API in React Native to better understand this topic.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Let's jump straight into the code with an example.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To start, we will nest a ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," component within the container")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"View")," component with the ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," prop set to ",(0,a.kt)("inlineCode",{parentName:"p"},"Styles.box"),",")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"and then a ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," component with ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"Styles.text"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'For the text itself, a simple "Welcome!" is sufficient.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Let me also import the ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," component which I deleted in the previous video."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View, Text } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box}>\n        <Text style={styles.text}>Welcome!</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now, let's define the corresponding styles we have applied to our ",(0,a.kt)("inlineCode",{parentName:"li"},"View")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Text")," components:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View, Text } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box}>\n        <Text style={styles.text}>Welcome!</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    width: 300,\n    height: 300,\n    backgroundColor: 'lightblue',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    fontSize: 24,\n  },\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If we save the file, the blue box and the welcome text will be displayed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Everything looks great at this point. However, let's test the application on a larger device like an iPad.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To do this, in VSCode terminal with the terminal in focus, press ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift + I"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This will bring up a list of iOS devices.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Select "iPad Pro 6th generation." If prompted, approve the installation of the app through Expo Go.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now the app is running on both an iPhone and an iPad, in addition to Android, of course.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"However, it's clear that the app doesn't look the best on iPad.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The box is really small, and the font is not easily readable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"One potential solution to the box dimensions issue is to use percentages for width and height.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Let's set width to 70 percent and height to 40 percent."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View, Text } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box}>\n        <Text style={styles.text}>Welcome!</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    width: '70%',\n    height: '40%',\n    backgroundColor: 'lightblue',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    fontSize: 24,\n  },\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"While this is an improvement, it still doesn't feel right.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The problem is that the two devices have similar height but significantly different width.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Using percentage-based width and height is not sufficient.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Moreover, how do we handle the font size? We may want a larger font, but specifying a percentage won't work.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"What we need is a way to address responsive styles based on the device size.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This is where the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dimensions API")," comes into play. Let's learn how to use it."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Import the Dimensions API from React Native")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View, Text, Dimensions } from 'react-native'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Obtain the device width and height using the API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"So right after a component: ",(0,a.kt)("inlineCode",{parentName:"p"},"const windowWidth = Dimensions.get('')")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View, Text, Dimensions } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box}>\n        <Text style={styles.text}>Welcome!</Text>\n      </View>\n    </View>\n  )\n}\n\nconst windowWidth = Dimensions.get('')\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    width: '70%',\n    height: '40%',\n    backgroundColor: 'lightblue',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    fontSize: 24,\n  },\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," method accepts either ",(0,a.kt)("inlineCode",{parentName:"p"},"screen")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," as an argument.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"screen")," refers to the entire physical display of the device, including areas that might be outside the visible viewport due to notches, status bars, or system nav bars.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On the other hand, ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," refers to the visible area of the screen occupied by your app's UI.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For tasks involving UI elements within your application's visible area, you will want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"window"),"."))),(0,a.kt)("p",null,"Similarly: ",(0,a.kt)("inlineCode",{parentName:"p"},"const windowHeight = Dimensions.get('window')")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"and then we access ",(0,a.kt)("inlineCode",{parentName:"li"},".width")," and ",(0,a.kt)("inlineCode",{parentName:"li"},".height"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View, Text, Dimensions } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box}>\n        <Text style={styles.text}>Welcome!</Text>\n      </View>\n    </View>\n  )\n}\n\nconst windowWidth = Dimensions.get('window').width\nconst windowHeight = Dimensions.get('window').height\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    width: '70%',\n    height: '40%',\n    backgroundColor: 'lightblue',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    fontSize: 24,\n  },\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We can now use these device dimensions to dynamically adjust the styles based on the device size.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For width, we're going to set: ",(0,a.kt)("inlineCode",{parentName:"p"},"width: windowWidth > 500 ? '70%' : '90%',"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For height: ",(0,a.kt)("inlineCode",{parentName:"p"},"height: windowHeight > 600 ? '60%' : '90%',"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For the font size: ",(0,a.kt)("inlineCode",{parentName:"p"},"fontSize: windowWidth > 500 ? 50 : 24,")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View, Text, Dimensions } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box}>\n        <Text style={styles.text}>Welcome!</Text>\n      </View>\n    </View>\n  )\n}\n\nconst windowWidth = Dimensions.get('window').width\nconst windowHeight = Dimensions.get('window').height\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    width: windowWidth > 500 ? '70%' : '90%',\n    height: windowHeight > 600 ? '60%' : '90%',\n    backgroundColor: 'lightblue',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    fontSize: windowWidth > 500 ? 50 : 24,\n  },\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If we save the file, you can see this is much better.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The dimensions now closely follow the device size, and the font is much easier to read on an iPad."))),(0,a.kt)("h3",{id:"in-summary"},"In summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the Dimensions API provides access to the device size.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"By using the device width or height, you can create responsive styles for your UI elements.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now, although our styles seem to be working completely fine, the Dimensions API does have a drawback that prevents it from being the recommended approach for creating dynamic user interfaces.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Let's understand what the drawback is in the next video."))))}u.isMDXComponent=!0}}]);