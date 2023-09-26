"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[9420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:61},o="Switch",l={unversionedId:"6 React Native Expo CLI/Section 8: Inputs and Forms/61 Switch",id:"6 React Native Expo CLI/Section 8: Inputs and Forms/61 Switch",title:"Switch",description:"Switch",source:"@site/docs/6 React Native Expo CLI/Section 8: Inputs and Forms/61 Switch.md",sourceDirName:"6 React Native Expo CLI/Section 8: Inputs and Forms",slug:"/6 React Native Expo CLI/Section 8: Inputs and Forms/61 Switch",permalink:"/fundamentals/6 React Native Expo CLI/Section 8: Inputs and Forms/61 Switch",draft:!1,tags:[],version:"current",sidebarPosition:61,frontMatter:{sidebar_position:61},sidebar:"tutorialSidebar",previous:{title:"Multiline TextInput",permalink:"/fundamentals/6 React Native Expo CLI/Section 8: Inputs and Forms/60 Multiline TextInput"},next:{title:"Login Form",permalink:"/fundamentals/6 React Native Expo CLI/Section 8: Inputs and Forms/62 Login Form"}},s={},p=[{value:"<strong>Switch</strong>",id:"switch-1",level:2},{value:"<strong>=&gt;</strong> Intro",id:"-intro",level:3},{value:"<strong>=&gt;</strong> Usage Steps",id:"-usage-steps",level:3},{value:"<strong>=&gt;</strong> Step 1: Importing the Switch Component",id:"-step-1-importing-the-switch-component",level:4},{value:"<strong>=&gt;</strong> Step 2: Creating a Container",id:"-step-2-creating-a-container",level:4},{value:"<strong>=&gt;</strong> Step 3: Defining Styles",id:"-step-3-defining-styles",level:4},{value:"<strong>=&gt;</strong> Step 4: Connecting with state variable",id:"-step-4-connecting-with-state-variable",level:4},{value:"<strong>=&gt;</strong> Customizing Appearance using trackColor and thumbColor",id:"-customizing-appearance-using-trackcolor-and-thumbcolor",level:3},{value:"<strong>=&gt;</strong> Platform Differences",id:"-platform-differences",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"switch"},"Switch"),(0,i.kt)("h2",{id:"switch-1"},(0,i.kt)("strong",{parentName:"h2"},"Switch")),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"-intro"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Intro"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In this video, let's explore the ",(0,i.kt)("inlineCode",{parentName:"p"},"Switch")," component in React Native.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Switch")," component serves as a valuable tool for integrating toggles into your app's user interface.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It is particularly well suited for scenarios where you require users to make binary choices, such as enabling or disabling specific app features."))),(0,i.kt)("h3",{id:"-usage-steps"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Usage Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Let's head back to VS Code and understand its usage step by step:")),(0,i.kt)("h4",{id:"-step-1-importing-the-switch-component"},(0,i.kt)("strong",{parentName:"h4"},"=>")," Step 1: Importing the Switch Component"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Begin by importing the Switch component from the React Native library.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native'\n")),(0,i.kt)("h4",{id:"-step-2-creating-a-container"},(0,i.kt)("strong",{parentName:"h4"},"=>")," Step 2: Creating a Container"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Let's use the ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," component from React Native and create a container for the switch component.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We're going to set ",(0,i.kt)("inlineCode",{parentName:"p"},"styles")," as equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"styles.switchContainer"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inside this container, nest a ",(0,i.kt)("inlineCode",{parentName:"p"},"Text"),' component that says "Dark mode" with a style set to ',(0,i.kt)("inlineCode",{parentName:"p"},"styles.text"),". Then, invoke the switch component."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native'\nimport { useState } from 'react'\n\nexport default function App() {\n  const [name, setName] = useState('')\n  return (\n    <SafeAreaView style={styles.container}>\n      <TextInput\n        style={styles.input}\n        value={name}\n        onChangeText={setName}\n        placeholder='email@example.com'\n        // secureTextEntry\n        // keyboardType='numeric'\n        autoCorrect={false}\n        autoCapitalize='none'\n      />\n      <TextInput\n        style={[styles.input, styles.multilineText]}\n        placeholder='message'\n        multiline\n      />\n      <Text style={styles.text}>My name is {name}</Text>\n      <View style={styles.switchContainer}>\n        <Text style={styles.text}>Dark Mode</Text>\n        <Switch />\n      </View>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    paddingTop: StatusBar.currentHeight,\n  },\n  input: {\n    height: 40,\n    margin: 12,\n    padding: 10,\n    borderWidth: 1,\n  },\n  text: {\n    fontSize: 30,\n    padding: 10,\n  },\n  multilineText: {\n    minHeight: 100,\n    textAlignVertical: 'top',\n  },\n})\n")),(0,i.kt)("h4",{id:"-step-3-defining-styles"},(0,i.kt)("strong",{parentName:"h4"},"=>")," Step 3: Defining Styles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Let's define the styles for the switchContainer.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"flexDirection"),' to "row," ',(0,i.kt)("inlineCode",{parentName:"p"},"alignItems"),' to "center," ',(0,i.kt)("inlineCode",{parentName:"p"},"justifyContent"),' to "space-between," and finally, ',(0,i.kt)("inlineCode",{parentName:"p"},"paddingHorizontal")," to 10."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native'\nimport { useState } from 'react'\n\nexport default function App() {\n  const [name, setName] = useState('')\n  return (\n    <SafeAreaView style={styles.container}>\n      <TextInput\n        style={styles.input}\n        value={name}\n        onChangeText={setName}\n        placeholder='email@example.com'\n        // secureTextEntry\n        // keyboardType='numeric'\n        autoCorrect={false}\n        autoCapitalize='none'\n      />\n      <TextInput\n        style={[styles.input, styles.multilineText]}\n        placeholder='message'\n        multiline\n      />\n      <Text style={styles.text}>My name is {name}</Text>\n      <View style={styles.switchContainer}>\n        <Text style={styles.text}>Dark Mode</Text>\n        <Switch />\n      </View>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    paddingTop: StatusBar.currentHeight,\n  },\n  input: {\n    height: 40,\n    margin: 12,\n    padding: 10,\n    borderWidth: 1,\n  },\n  text: {\n    fontSize: 30,\n    padding: 10,\n  },\n  multilineText: {\n    minHeight: 100,\n    textAlignVertical: 'top',\n  },\n  switchContainer: {\n    flexDirection: 'row',\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    paddingHorizontal: 10,\n  },\n})\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Now, we will have 10 pixels of horizontal padding for the text "dark mode," but that is okay as styling isn\'t really the main focus.')),(0,i.kt)("h4",{id:"-step-4-connecting-with-state-variable"},(0,i.kt)("strong",{parentName:"h4"},"=>")," Step 4: Connecting with state variable"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For step 4, create a new state variable named ",(0,i.kt)("inlineCode",{parentName:"p"},"isDarkMode")," with an initial value of ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then, add two props to the switch component: ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," is equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"isDarkMode"),",")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"and ",(0,i.kt)("inlineCode",{parentName:"p"},"onValueChange"),", where we toggle the ",(0,i.kt)("inlineCode",{parentName:"p"},"isDarkMode")," value.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We pass in a function that receives the ",(0,i.kt)("inlineCode",{parentName:"p"},"previousState")," and set it to the inverse of the previous state, ",(0,i.kt)("inlineCode",{parentName:"p"},"!previousState")," basically inverting the value."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native'\nimport { useState } from 'react'\n\nexport default function App() {\n  const [name, setName] = useState('')\n  const [isDarkMode, setIsDarkMode] = useState(false)\n  return (\n    <SafeAreaView style={styles.container}>\n      <TextInput\n        style={styles.input}\n        value={name}\n        onChangeText={setName}\n        placeholder='email@example.com'\n        // secureTextEntry\n        // keyboardType='numeric'\n        autoCorrect={false}\n        autoCapitalize='none'\n      />\n      <TextInput\n        style={[styles.input, styles.multilineText]}\n        placeholder='message'\n        multiline\n      />\n      <Text style={styles.text}>My name is {name}</Text>\n      <View style={styles.switchContainer}>\n        <Text style={styles.text}>Dark Mode</Text>\n        <Switch\n          value={isDarkMode}\n          onValueChange={() => setIsDarkMode(previousState => !previousStates)}\n        />\n      </View>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    paddingTop: StatusBar.currentHeight,\n  },\n  input: {\n    height: 40,\n    margin: 12,\n    padding: 10,\n    borderWidth: 1,\n  },\n  text: {\n    fontSize: 30,\n    padding: 10,\n  },\n  multilineText: {\n    minHeight: 100,\n    textAlignVertical: 'top',\n  },\n  switchContainer: {\n    flexDirection: 'row',\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    paddingHorizontal: 10,\n  },\n})\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In a practical scenario, you can consider showing different content or activating certain features in your application when the switch is turned on or off.")),(0,i.kt)("h3",{id:"-customizing-appearance-using-trackcolor-and-thumbcolor"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Customizing Appearance using trackColor and thumbColor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As for the props, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"trackColor")," to set colors for the track in different states.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is an object. If the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", let's set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"#767577"),", and if it is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", we set it to light blue.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We can also set the thumb color using the ",(0,i.kt)("inlineCode",{parentName:"p"},"thumbColor")," prop, let's set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"#F4F3F4"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native'\nimport { useState } from 'react'\n\nexport default function App() {\n  const [name, setName] = useState('')\n  const [isDarkMode, setIsDarkMode] = useState(false)\n  return (\n    <SafeAreaView style={styles.container}>\n      <TextInput\n        style={styles.input}\n        value={name}\n        onChangeText={setName}\n        placeholder='email@example.com'\n        // secureTextEntry\n        // keyboardType='numeric'\n        autoCorrect={false}\n        autoCapitalize='none'\n      />\n      <TextInput\n        style={[styles.input, styles.multilineText]}\n        placeholder='message'\n        multiline\n      />\n      <Text style={styles.text}>My name is {name}</Text>\n      <View style={styles.switchContainer}>\n        <Text style={styles.text}>Dark Mode</Text>\n        <Switch\n          value={isDarkMode}\n          onValueChange={() => setIsDarkMode(previousState => !previousState)}\n          trackColor={{ false: '#767577', true: 'lightblue' }}\n          thumbColor={'#f4f3f4'}\n        />\n      </View>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    paddingTop: StatusBar.currentHeight,\n  },\n  input: {\n    height: 40,\n    margin: 12,\n    padding: 10,\n    borderWidth: 1,\n  },\n  text: {\n    fontSize: 30,\n    padding: 10,\n  },\n  multilineText: {\n    minHeight: 100,\n    textAlignVertical: 'top',\n  },\n  switchContainer: {\n    flexDirection: 'row',\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    paddingHorizontal: 10,\n  },\n})\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If we take a look at the UI, we can see we have different colors from before.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ideally, these would be dictated by your brand colors."))),(0,i.kt)("h3",{id:"-platform-differences"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Platform Differences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can also see that the appearance of the switch component is different across the two platforms.")))}m.isMDXComponent=!0}}]);