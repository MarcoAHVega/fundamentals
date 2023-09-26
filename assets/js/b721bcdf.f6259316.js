"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:60},l="Multiline TextInput",o={unversionedId:"6 React Native Expo CLI/Section 8: Inputs and Forms/60 Multiline TextInput",id:"6 React Native Expo CLI/Section 8: Inputs and Forms/60 Multiline TextInput",title:"Multiline TextInput",description:"Multiline TextInput",source:"@site/docs/6 React Native Expo CLI/Section 8: Inputs and Forms/60 Multiline TextInput.md",sourceDirName:"6 React Native Expo CLI/Section 8: Inputs and Forms",slug:"/6 React Native Expo CLI/Section 8: Inputs and Forms/60 Multiline TextInput",permalink:"/fundamentals/6 React Native Expo CLI/Section 8: Inputs and Forms/60 Multiline TextInput",draft:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"TextInput Props",permalink:"/fundamentals/6 React Native Expo CLI/Section 8: Inputs and Forms/59 TextInput Props"},next:{title:"Switch",permalink:"/fundamentals/6 React Native Expo CLI/Section 8: Inputs and Forms/61 Switch"}},p={},u=[{value:"<strong>Multiline TextInput</strong>",id:"multiline-textinput-1",level:2},{value:"<strong>=&gt;</strong> Intro",id:"-intro",level:3},{value:"<strong>=&gt;</strong> Creating a Multi-line Input",id:"-creating-a-multi-line-input",level:3},{value:"<strong>=&gt;</strong> Styling the multiline Input",id:"-styling-the-multiline-input",level:3},{value:"<strong>=&gt;</strong> Addressing Alignment",id:"-addressing-alignment",level:3},{value:"<strong>=&gt;</strong> Summary",id:"-summary",level:3}],s={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multiline-textinput"},"Multiline TextInput"),(0,i.kt)("h2",{id:"multiline-textinput-1"},(0,i.kt)("strong",{parentName:"h2"},"Multiline TextInput")),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"-intro"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Intro"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In this video, we will explore how to define and style a multiline input in React Native.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unlike the web, which has an input element for single-line input and a text area element for multiline input, in React Native, the same text input element can be used for both purposes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All we have to do is include the ",(0,i.kt)("inlineCode",{parentName:"p"},"multiline")," prop."))),(0,i.kt)("h3",{id:"-creating-a-multi-line-input"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Creating a Multi-line Input"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Let's add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"TextInput")," component.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We're going to set ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," as equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"Styles.input"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"placeholder"),' as equal to "message," and then add the ',(0,i.kt)("inlineCode",{parentName:"p"},"multiline")," prop"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native'\nimport { useState } from 'react'\n\nexport default function App() {\n  const [name, setName] = useState('')\n  return (\n    <SafeAreaView style={styles.container}>\n      <TextInput\n        style={styles.input}\n        value={name}\n        onChangeText={setName}\n        placeholder='email@example.com'\n        // secureTextEntry\n        // keyboardType='numeric'\n        autoCorrect={false}\n        autoCapitalize='none'\n      />\n      <TextInput\n        style={styles.input}\n        placeholder='message'\n        multiline\n      />\n      <Text style={styles.text}>My name is {name}</Text>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    paddingTop: StatusBar.currentHeight,\n  },\n  input: {\n    height: 40,\n    margin: 12,\n    padding: 10,\n    borderWidth: 1,\n  },\n  text: {\n    fontSize: 30,\n    padding: 10,\n  },\n})\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If we take a look at the UI, we don't see much difference since the underlying element is the same.")),(0,i.kt)("h3",{id:"-styling-the-multiline-input"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Styling the multiline Input"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To make this multiline input stand out, we need to add some additional styles.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Styles")," object, add a new key-value pair ",(0,i.kt)("inlineCode",{parentName:"p"},"multilineText: { minHeight: 100 }"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Now, we need to specify an array of styles for the TextInput"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native'\nimport { useState } from 'react'\n\nexport default function App() {\n  const [name, setName] = useState('')\n  return (\n    <SafeAreaView style={styles.container}>\n      <TextInput\n        style={styles.input}\n        value={name}\n        onChangeText={setName}\n        placeholder='email@example.com'\n        // secureTextEntry\n        // keyboardType='numeric'\n        autoCorrect={false}\n        autoCapitalize='none'\n      />\n      <TextInput\n        style={[styles.input, styles.multilineText]}\n        placeholder='message'\n        multiline\n      />\n      <Text style={styles.text}>My name is {name}</Text>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    paddingTop: StatusBar.currentHeight,\n  },\n  input: {\n    height: 40,\n    margin: 12,\n    padding: 10,\n    borderWidth: 1,\n  },\n  text: {\n    fontSize: 30,\n    padding: 10,\n  },\n  multilineText: {\n    minHeight: 100,\n  },\n})\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If we take a look at the UI, it is clear that this now resembles a multi-line text input.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A user will be able to understand from the get-go that they can input longer text, which is always good."))),(0,i.kt)("h3",{id:"-addressing-alignment"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Addressing Alignment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Now, it's important to note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"multiline")," prop aligns the text input to the top on iOS and centers it on Android.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To address this, we need to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"textAlignVertical"),' and set it to "top."'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native'\nimport { useState } from 'react'\n\nexport default function App() {\n  const [name, setName] = useState('')\n  return (\n    <SafeAreaView style={styles.container}>\n      <TextInput\n        style={styles.input}\n        value={name}\n        onChangeText={setName}\n        placeholder='email@example.com'\n        // secureTextEntry\n        // keyboardType='numeric'\n        autoCorrect={false}\n        autoCapitalize='none'\n      />\n      <TextInput\n        style={[styles.input, styles.multilineText]}\n        placeholder='message'\n        multiline\n      />\n      <Text style={styles.text}>My name is {name}</Text>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    paddingTop: StatusBar.currentHeight,\n  },\n  input: {\n    height: 40,\n    margin: 12,\n    padding: 10,\n    borderWidth: 1,\n  },\n  text: {\n    fontSize: 30,\n    padding: 10,\n  },\n  multilineText: {\n    minHeight: 100,\n    textAlignVertical: 'top',\n  },\n})\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If we head back to the UI, we can see it is now properly aligned to the top.")),(0,i.kt)("h3",{id:"-summary"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"That covers the text input component in React Native, including how to create a multi-line input and style it to meet your design requirements.")))}c.isMDXComponent=!0}}]);