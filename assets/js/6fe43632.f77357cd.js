"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[2758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=s(n),u=o,g=h["".concat(d,".").concat(u)]||h[u]||c[u]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[h]="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:24},l="Style Inheritance",r={unversionedId:"6 React Native/Section 3: Styling/24 Style Inheritance",id:"6 React Native/Section 3: Styling/24 Style Inheritance",title:"Style Inheritance",description:"- In this final video of the section, we will explore style inheritance in React Native.",source:"@site/docs/6 React Native/Section 3: Styling/24 Style Inheritance.md",sourceDirName:"6 React Native/Section 3: Styling",slug:"/6 React Native/Section 3: Styling/24 Style Inheritance",permalink:"/fundamentals/6 React Native/Section 3: Styling/24 Style Inheritance",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"Shadow and Elevation",permalink:"/fundamentals/6 React Native/Section 3: Styling/23 Shadow and Elevation"},next:{title:"Section 4: Layout",permalink:"/fundamentals/category/section-4-layout"}},d={},s=[{value:"Defining Styles for the Wrapping View Component",id:"defining-styles-for-the-wrapping-view-component",level:3},{value:"Adding Font Color",id:"adding-font-color",level:3},{value:"Understanding Bold Text Style Inheritance",id:"understanding-bold-text-style-inheritance",level:3},{value:"Conclusion",id:"conclusion",level:3}],p={toc:s},h="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"style-inheritance"},"Style Inheritance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In this final video of the section, we will explore style inheritance in React Native.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Let's dive straight into the code and look at an example to better understand this concept.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Within our ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component, within the outer ",(0,o.kt)("inlineCode",{parentName:"p"},"View")," component, let's add a new ",(0,o.kt)("inlineCode",{parentName:"p"},"View")," and nest a ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," component inside it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'The text is going to read "Style Inheritance".'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, Text, StyleSheet } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View>\n        <Text>Style inheritance</Text>\n      </View>\n      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>\n        <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>\n      </View>\n      <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>\n        <Text>Lightgreen box</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    padding: 60,\n  },\n\n  box: {\n    width: 250,\n    height: 250,\n    // width: '25%',\n    // height: '25%',\n    // padding: 10,\n    paddingHorizontal: 10,\n    paddingVertical: 20,\n    // margin: 10,\n    marginVertical: 10,\n    borderWidth: 2,\n    borderColor: 'purple',\n    // borderStyle: 'solid'\n    borderRadius: 5,\n  },\n  lightBlueBg: {\n    backgroundColor: 'lightblue',\n  },\n  lightGreenBg: {\n    backgroundColor: 'lightgreen',\n  },\n  // boxShadow: {\n  //   shadowColor: 'blue',\n  //   shadowOffset: { width: 6, height: 6 },\n  //   shadowOpacity: 0.6,\n  //   shadowRadius: 4,\n  // },\n  androidShadow: {\n    elevation: 20,\n    shadowColor: 'blue',\n  },\n})\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If we return to the UI, we can see the text appears in black.")),(0,o.kt)("h3",{id:"defining-styles-for-the-wrapping-view-component"},"Defining Styles for the Wrapping View Component"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now, let's define some styles for the wrapping ",(0,o.kt)("inlineCode",{parentName:"p"},"View")," component.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.create")," , let's add a new key called ",(0,o.kt)("inlineCode",{parentName:"p"},"darkModeBackgroundColor")," and set it to black.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On the new ",(0,o.kt)("inlineCode",{parentName:"p"},"View")," component, ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," is equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"Styles.darkModeBackgroundColor")," ."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, Text, StyleSheet } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.darkMode}>\n        <Text>Style inheritance</Text>\n      </View>\n      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>\n        <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>\n      </View>\n      <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>\n        <Text>Lightgreen box</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    padding: 60,\n  },\n  darkMode: {\n    backgroundColor: 'black',\n  },\n\n  box: {\n    width: 250,\n    height: 250,\n    // width: '25%',\n    // height: '25%',\n    // padding: 10,\n    paddingHorizontal: 10,\n    paddingVertical: 20,\n    // margin: 10,\n    marginVertical: 10,\n    borderWidth: 2,\n    borderColor: 'purple',\n    // borderStyle: 'solid'\n    borderRadius: 5,\n  },\n  lightBlueBg: {\n    backgroundColor: 'lightblue',\n  },\n  lightGreenBg: {\n    backgroundColor: 'lightgreen',\n  },\n  // boxShadow: {\n  //   shadowColor: 'blue',\n  //   shadowOffset: { width: 6, height: 6 },\n  //   shadowOpacity: 0.6,\n  //   shadowRadius: 4,\n  // },\n  androidShadow: {\n    elevation: 20,\n    shadowColor: 'blue',\n  },\n})\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you now take a look at the UI, we see the ",(0,o.kt)("inlineCode",{parentName:"li"},"View")," with the dark background. However, the text is not visible since its default color is also black.")),(0,o.kt)("h3",{id:"adding-font-color"},"Adding Font Color"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Let's go back to our styles and add a font color for dark mode.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor: 'black',")," ",(0,o.kt)("inlineCode",{parentName:"p"},"color: 'white',")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, Text, StyleSheet } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.darkMode}>\n        <Text>Style inheritance</Text>\n      </View>\n      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>\n        <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>\n      </View>\n      <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>\n        <Text>Lightgreen box</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    padding: 60,\n  },\n  darkMode: {\n    backgroundColor: 'black',\n    color: 'white',\n  },\n\n  box: {\n    width: 250,\n    height: 250,\n    // width: '25%',\n    // height: '25%',\n    // padding: 10,\n    paddingHorizontal: 10,\n    paddingVertical: 20,\n    // margin: 10,\n    marginVertical: 10,\n    borderWidth: 2,\n    borderColor: 'purple',\n    // borderStyle: 'solid'\n    borderRadius: 5,\n  },\n  lightBlueBg: {\n    backgroundColor: 'lightblue',\n  },\n  lightGreenBg: {\n    backgroundColor: 'lightgreen',\n  },\n  // boxShadow: {\n  //   shadowColor: 'blue',\n  //   shadowOffset: { width: 6, height: 6 },\n  //   shadowOpacity: 0.6,\n  //   shadowRadius: 4,\n  // },\n  androidShadow: {\n    elevation: 20,\n    shadowColor: 'blue',\n  },\n})\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If we save the file and go back to the UI, you can see that we still don't see the text.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In CSS for the web, setting a font color on a ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," tag applies the same color to nested ",(0,o.kt)("inlineCode",{parentName:"p"},"paragraph")," tags within the ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," tag. This is possible due to inheritance, which is a feature in CSS.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"However, ",(0,o.kt)("inlineCode",{parentName:"p"},"when working with styles in React Native, there is no inheritance of styles from a "),"View",(0,o.kt)("inlineCode",{parentName:"p"},"component to a"),"Text",(0,o.kt)("inlineCode",{parentName:"p"}," component"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To set the text color to white, you need to create and apply a separate style on this text component.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"darkModeText: { color: 'white', },"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"And apply on the text component: ",(0,o.kt)("inlineCode",{parentName:"p"},"style={Styles.darkModeText}")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, Text, StyleSheet } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.darkMode}>\n        <Text style={styles.darkModeText}>Style inheritance</Text>\n      </View>\n      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>\n        <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>\n      </View>\n      <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>\n        <Text>Lightgreen box</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    padding: 60,\n  },\n  darkMode: {\n    backgroundColor: 'black',\n  },\n  darkModeText: {\n    color: 'white',\n  },\n\n  box: {\n    width: 250,\n    height: 250,\n    // width: '25%',\n    // height: '25%',\n    // padding: 10,\n    paddingHorizontal: 10,\n    paddingVertical: 20,\n    // margin: 10,\n    marginVertical: 10,\n    borderWidth: 2,\n    borderColor: 'purple',\n    // borderStyle: 'solid'\n    borderRadius: 5,\n  },\n  lightBlueBg: {\n    backgroundColor: 'lightblue',\n  },\n  lightGreenBg: {\n    backgroundColor: 'lightgreen',\n  },\n  // boxShadow: {\n  //   shadowColor: 'blue',\n  //   shadowOffset: { width: 6, height: 6 },\n  //   shadowOpacity: 0.6,\n  //   shadowRadius: 4,\n  // },\n  androidShadow: {\n    elevation: 20,\n    shadowColor: 'blue',\n  },\n})\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If we return to the UI, you will see that the text now appears in white.")),(0,o.kt)("h3",{id:"understanding-bold-text-style-inheritance"},"Understanding Bold Text Style Inheritance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now, let's add a new style called ",(0,o.kt)("inlineCode",{parentName:"p"},"boldText")," and set ",(0,o.kt)("inlineCode",{parentName:"p"},"fontWeight")," to bold.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the JSX, within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Text"),' component right after "Style Inheritance", I\'m going to nest another ',(0,o.kt)("inlineCode",{parentName:"p"},"Text")," component.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'The text is going to read "in bold", and for the style, I\'m going to apply only the ',(0,o.kt)("inlineCode",{parentName:"p"},"boldText")," style: ",(0,o.kt)("inlineCode",{parentName:"p"},"style={Styles.boldText}")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, Text, StyleSheet } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.darkMode}>\n        <Text style={styles.darkModeText}>\n          Style inheritance<Text style={styles.boldText}> in bold</Text>\n        </Text>\n      </View>\n      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>\n        <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>\n      </View>\n      <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>\n        <Text>Lightgreen box</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    padding: 60,\n  },\n  darkMode: {\n    backgroundColor: 'black',\n  },\n  darkModeText: {\n    color: 'white',\n  },\n  boldText: {\n    fontWeight: 'bold',\n  },\n\n  box: {\n    width: 250,\n    height: 250,\n    // width: '25%',\n    // height: '25%',\n    // padding: 10,\n    paddingHorizontal: 10,\n    paddingVertical: 20,\n    // margin: 10,\n    marginVertical: 10,\n    borderWidth: 2,\n    borderColor: 'purple',\n    // borderStyle: 'solid'\n    borderRadius: 5,\n  },\n  lightBlueBg: {\n    backgroundColor: 'lightblue',\n  },\n  lightGreenBg: {\n    backgroundColor: 'lightgreen',\n  },\n  // boxShadow: {\n  //   shadowColor: 'blue',\n  //   shadowOffset: { width: 6, height: 6 },\n  //   shadowOpacity: 0.6,\n  //   shadowRadius: 4,\n  // },\n  androidShadow: {\n    elevation: 20,\n    shadowColor: 'blue',\n  },\n})\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now, here is my question: Is the bold text styled in white and bold, or just bold? Take a moment to think about it and let me know your answer in the comment section.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If we return to the UI, we can see that the bold text is indeed both bold and white.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Although React Native's style inheritance capabilities are limited compared to CSS, it still supports style inheritance within text subtrees"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In our case, the white color from the parent ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," component is inherited by the nested ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," component.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"So, inheritance from "),"View",(0,o.kt)("inlineCode",{parentName:"p"},"to"),"Text",(0,o.kt)("inlineCode",{parentName:"p"},"does not work, but from"),"Text",(0,o.kt)("inlineCode",{parentName:"p"},"to another nested"),"Text",(0,o.kt)("inlineCode",{parentName:"p"}," does work.")))),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"With that, we conclude this section on styling in React Native.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We have seen how to add styles inline and using the stylesheet API, ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"how to add multiple styles to the same component using the array syntax, ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the differences in styling Box model properties for the web versus React Native and for iOS versus Android. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We also had a look at shadows and elevation, ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"and finally, style inheritance.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the next section, let's focus our attention on understanding layouts in React Native."))))}c.isMDXComponent=!0}}]);