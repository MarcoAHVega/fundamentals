"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[8677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:52},o="FlatList",l={unversionedId:"6 React Native Expo CLI/Section 7: How to render list/52 FlatList",id:"6 React Native Expo CLI/Section 7: How to render list/52 FlatList",title:"FlatList",description:"=> Intro",source:"@site/docs/6 React Native Expo CLI/Section 7: How to render list/52 FlatList.md",sourceDirName:"6 React Native Expo CLI/Section 7: How to render list",slug:"/6 React Native Expo CLI/Section 7: How to render list/52 FlatList",permalink:"/fundamentals/6 React Native Expo CLI/Section 7: How to render list/52 FlatList",draft:!1,tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52},sidebar:"tutorialSidebar",previous:{title:"Lists",permalink:"/fundamentals/6 React Native Expo CLI/Section 7: How to render list/51 Lists"},next:{title:"ItemSeparator",permalink:"/fundamentals/6 React Native Expo CLI/Section 7: How to render list/53 ItemSeparator"}},s={},p=[{value:"<strong>=&gt;</strong> Intro",id:"-intro",level:3},{value:"The recommended approach",id:"the-recommended-approach",level:3},{value:"horizontal prop",id:"horizontal-prop",level:3},{value:"keyExtractor prop",id:"keyextractor-prop",level:3},{value:"Adding horizontal padding",id:"adding-horizontal-padding",level:3},{value:"to summarize",id:"to-summarize",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flatlist"},"FlatList"),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"-intro"},(0,r.kt)("strong",{parentName:"h3"},"=>")," Intro"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the previous video We learned how to render a list in React Native using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")," component and the ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"However, with this method, all items are rendered even if they're not in the viewport.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"While rendering all list items might not be an issue for small lists, for larger data sets consisting of thousands of items, it can lead to performance problems."))),(0,r.kt)("h3",{id:"the-recommended-approach"},"The recommended approach"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In React Native to rendering lists is to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"FlatList")," component, which ",(0,r.kt)("strong",{parentName:"li"},"renders only the items currently in view, making it highly performant for long lists."))),(0,r.kt)("p",null,"Let's see it in action:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Comment out the ",(0,r.kt)("inlineCode",{parentName:"li"},"ScrollView")," component code."),(0,r.kt)("li",{parentName:"ol"},"Import the ",(0,r.kt)("inlineCode",{parentName:"li"},"FlatList")," component from React Native."),(0,r.kt)("li",{parentName:"ol"},"Replace the map method code with the ",(0,r.kt)("inlineCode",{parentName:"li"},"FlatList")," component code.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'\nimport pokemonList from './data.json'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.container}>\n      {/* <ScrollView style={styles.scrollView}>\n        {pokemonList.map(pokemon => {\n          return (\n            <View\n              style={styles.card}\n              key={pokemon.id}>\n              <Text style={styles.cardText}>{pokemon.type}</Text>\n              <Text style={styles.cardText}>{pokemon.name}</Text>\n            </View>\n          )\n        })}\n      </ScrollView> */}\n      <FlatList />\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#f5f5f5',\n    paddingTop: StatusBar.currentHeight,\n  },\n  scrollView: {\n    paddingHorizontal: 16,\n  },\n  card: {\n    backgroundColor: 'white',\n    padding: 16,\n    borderRadius: 8,\n    borderWidth: 1,\n    marginBottom: 16,\n  },\n  cardText: {\n    fontSize: 30,\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Flat List is a self-closing component and has two mandatory props:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"data={}"),": The ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," prop is used to pass the array of items that you want to render in the list.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In our case, it is the ",(0,r.kt)("inlineCode",{parentName:"li"},"pokemonlist"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'\nimport pokemonList from './data.json'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.container}>\n      {/* <ScrollView style={styles.scrollView}>\n        {pokemonList.map(pokemon => {\n          return (\n            <View\n              style={styles.card}\n              key={pokemon.id}>\n              <Text style={styles.cardText}>{pokemon.type}</Text>\n              <Text style={styles.cardText}>{pokemon.name}</Text>\n            </View>\n          )\n        })}\n      </ScrollView> */}\n      <FlatList data={pokemonList} />\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#f5f5f5',\n    paddingTop: StatusBar.currentHeight,\n  },\n  scrollView: {\n    paddingHorizontal: 16,\n  },\n  card: {\n    backgroundColor: 'white',\n    padding: 16,\n    borderRadius: 8,\n    borderWidth: 1,\n    marginBottom: 16,\n  },\n  cardText: {\n    fontSize: 30,\n  },\n})\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"renderItem={}"),": The ",(0,r.kt)("inlineCode",{parentName:"li"},"renderItem")," prop is a function that returns the JSX for rendering each item in the list.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'\nimport pokemonList from './data.json'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.container}>\n      {/* <ScrollView style={styles.scrollView}>\n        {pokemonList.map(pokemon => {\n          return (\n            <View\n              style={styles.card}\n              key={pokemon.id}>\n              <Text style={styles.cardText}>{pokemon.type}</Text>\n              <Text style={styles.cardText}>{pokemon.name}</Text>\n            </View>\n          )\n        })}\n      </ScrollView> */}\n      <FlatList\n        data={pokemonList}\n        renderItem={() => {}}\n      />\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#f5f5f5',\n    paddingTop: StatusBar.currentHeight,\n  },\n  scrollView: {\n    paddingHorizontal: 16,\n  },\n  card: {\n    backgroundColor: 'white',\n    padding: 16,\n    borderRadius: 8,\n    borderWidth: 1,\n    marginBottom: 16,\n  },\n  cardText: {\n    fontSize: 30,\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The function receives an object containing the current ",(0,r.kt)("inlineCode",{parentName:"p"},"item"),", and you can define how each item should be rendered.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is the same as what we return from the ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"So, copy the return statement and paste it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'We do have to change "pokemon" to "item".'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'\nimport pokemonList from './data.json'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.container}>\n      {/* <ScrollView style={styles.scrollView}>\n        {pokemonList.map(pokemon => {\n          return (\n            <View\n              style={styles.card}\n              key={pokemon.id}>\n              <Text style={styles.cardText}>{pokemon.type}</Text>\n              <Text style={styles.cardText}>{pokemon.name}</Text>\n            </View>\n          )\n        })}\n      </ScrollView> */}\n      <FlatList\n        data={pokemonList}\n        renderItem={({ item }) => {\n          return (\n            <View\n              style={styles.card}\n              key={item.id}>\n              <Text style={styles.cardText}>{item.type}</Text>\n              <Text style={styles.cardText}>{item.name}</Text>\n            </View>\n          )\n        }}\n      />\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#f5f5f5',\n    paddingTop: StatusBar.currentHeight,\n  },\n  scrollView: {\n    paddingHorizontal: 16,\n  },\n  card: {\n    backgroundColor: 'white',\n    padding: 16,\n    borderRadius: 8,\n    borderWidth: 1,\n    marginBottom: 16,\n  },\n  cardText: {\n    fontSize: 30,\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if we now take a look at the UI. We can still see our list, and we can scroll down to the bottom, but this list is more performant.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Let's verify that by logging the item ID to the console:"))),(0,r.kt)("p",null,"Within the render item function, ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log(item.ID)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'\nimport pokemonList from './data.json'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.container}>\n      {/* <ScrollView style={styles.scrollView}>\n        {pokemonList.map(pokemon => {\n          return (\n            <View\n              style={styles.card}\n              key={pokemon.id}>\n              <Text style={styles.cardText}>{pokemon.type}</Text>\n              <Text style={styles.cardText}>{pokemon.name}</Text>\n            </View>\n          )\n        })}\n      </ScrollView> */}\n      <FlatList\n        data={pokemonList}\n        renderItem={({ item }) => {\n          console.log(item.id)\n          return (\n            <View\n              style={styles.card}\n              key={item.id}>\n              <Text style={styles.cardText}>{item.type}</Text>\n              <Text style={styles.cardText}>{item.name}</Text>\n            </View>\n          )\n        }}\n      />\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#f5f5f5',\n    paddingTop: StatusBar.currentHeight,\n  },\n  scrollView: {\n    paddingHorizontal: 16,\n  },\n  card: {\n    backgroundColor: 'white',\n    padding: 16,\n    borderRadius: 8,\n    borderWidth: 1,\n    marginBottom: 16,\n  },\n  cardText: {\n    fontSize: 30,\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"take a look at the terminal. We can see the first 64 IDs instead of 100.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now you might think that this is incorrect. We see six or seven items in the viewport but we see 64 in the terminal. How is that right?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Well, the thing is, ",(0,r.kt)("inlineCode",{parentName:"p"},"the FlatList component ensures it generates a few devices length of content in advance to ensure smooth scrolling"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"But now that the initial number of cards have been rendered, if we scroll down a bit, you can see the additional IDs being logged in the console.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"They are lazily loaded to ensure smooth scrolling."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you were to try this experiment with an array of 50 Pokemon, you would see all 50 in the logs and would assume FlatList has no performance benefits.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I wanted to make sure you don't walk away with that wrong idea, and hence the long list of items."))),(0,r.kt)("h3",{id:"horizontal-prop"},"horizontal prop"),(0,r.kt)("p",null,"On a side note, if you want ",(0,r.kt)("strong",{parentName:"p"},"to render the list horizontally"),", you can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal={}")," prop and set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'\nimport pokemonList from './data.json'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.container}>\n      {/* <ScrollView style={styles.scrollView}>\n        {pokemonList.map(pokemon => {\n          return (\n            <View\n              style={styles.card}\n              key={pokemon.id}>\n              <Text style={styles.cardText}>{pokemon.type}</Text>\n              <Text style={styles.cardText}>{pokemon.name}</Text>\n            </View>\n          )\n        })}\n      </ScrollView> */}\n      <FlatList\n        data={pokemonList}\n        renderItem={({ item }) => {\n          console.log(item.id)\n          return (\n            <View\n              style={styles.card}\n              key={item.id}>\n              <Text style={styles.cardText}>{item.type}</Text>\n              <Text style={styles.cardText}>{item.name}</Text>\n            </View>\n          )\n        }}\n        horizontal={true}\n      />\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#f5f5f5',\n    paddingTop: StatusBar.currentHeight,\n  },\n  scrollView: {\n    paddingHorizontal: 16,\n  },\n  card: {\n    backgroundColor: 'white',\n    padding: 16,\n    borderRadius: 8,\n    borderWidth: 1,\n    marginBottom: 16,\n  },\n  cardText: {\n    fontSize: 30,\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can see the cards are now rendered horizontally.")),(0,r.kt)("h3",{id:"keyextractor-prop"},"keyExtractor prop"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If this is clear, let me highlight one more prop before we proceed to the next video:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The prop is ",(0,r.kt)("inlineCode",{parentName:"p"},"keyExtractor={}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"This prop is a function that takes an item from the data array and returns a unique key for that item."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is used to identify the unique items in the list, similar to the key prop when using the map method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"By default, it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"keyExtractor={item.key}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"and if that is not present, it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"keyExtractor={item.id}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If that as well is not present, it uses the item ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," as key.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Index, by the way, is available as the second argument to the callback function, where the first argument is the ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," itself. ",(0,r.kt)("inlineCode",{parentName:"p"},"keyExtractor={(item, index) => }"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In our case, we do have an ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," property for every item, and the same is used by default.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"However, you can define it yourself. So ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"item.Id")," and we convert this to a string, as the function should return a string, (but I believe there is implicit conversion for a numeric type)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'\nimport pokemonList from './data.json'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.container}>\n      {/* <ScrollView style={styles.scrollView}>\n        {pokemonList.map(pokemon => {\n          return (\n            <View\n              style={styles.card}\n              key={pokemon.id}>\n              <Text style={styles.cardText}>{pokemon.type}</Text>\n              <Text style={styles.cardText}>{pokemon.name}</Text>\n            </View>\n          )\n        })}\n      </ScrollView> */}\n      <FlatList\n        data={pokemonList}\n        renderItem={({ item }) => {\n          console.log(item.id)\n          return (\n            <View\n              style={styles.card}\n              key={item.id}>\n              <Text style={styles.cardText}>{item.type}</Text>\n              <Text style={styles.cardText}>{item.name}</Text>\n            </View>\n          )\n        }}\n        keyExtractor={item => item.id.toString()}\n        // horizontal={true}\n      />\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#f5f5f5',\n    paddingTop: StatusBar.currentHeight,\n  },\n  scrollView: {\n    paddingHorizontal: 16,\n  },\n  card: {\n    backgroundColor: 'white',\n    padding: 16,\n    borderRadius: 8,\n    borderWidth: 1,\n    marginBottom: 16,\n  },\n  cardText: {\n    fontSize: 30,\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If we save the file, our UI should still be working as expected.")),(0,r.kt)("h3",{id:"adding-horizontal-padding"},"Adding horizontal padding"),(0,r.kt)("p",null,"Now we are missing the horizontal padding, so you can wrap the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList")," component with a ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," component and add ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"styles.scrollView"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'\nimport pokemonList from './data.json'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.container}>\n      {/* <ScrollView style={styles.scrollView}>\n        {pokemonList.map(pokemon => {\n          return (\n            <View\n              style={styles.card}\n              key={pokemon.id}>\n              <Text style={styles.cardText}>{pokemon.type}</Text>\n              <Text style={styles.cardText}>{pokemon.name}</Text>\n            </View>\n          )\n        })}\n      </ScrollView> */}\n      <View style={styles.scrollView}>\n        <FlatList\n          data={pokemonList}\n          renderItem={({ item }) => {\n            console.log(item.id)\n            return (\n              <View\n                style={styles.card}\n                key={item.id}>\n                <Text style={styles.cardText}>{item.type}</Text>\n                <Text style={styles.cardText}>{item.name}</Text>\n              </View>\n            )\n          }}\n          keyExtractor={item => item.id.toString()}\n          // horizontal={true}\n        />\n      </View>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#f5f5f5',\n    paddingTop: StatusBar.currentHeight,\n  },\n  scrollView: {\n    paddingHorizontal: 16,\n  },\n  card: {\n    backgroundColor: 'white',\n    padding: 16,\n    borderRadius: 8,\n    borderWidth: 1,\n    marginBottom: 16,\n  },\n  cardText: {\n    fontSize: 30,\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If we save the file, a list of Pokemon should look much better.")),(0,r.kt)("p",null,"Apart from ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"renderItem"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"keyExtractor"),", there are quite a few props that can be used to customize the behavior and appearance of the Flat List. Let's see what they are in the upcoming videos."),(0,r.kt)("h3",{id:"to-summarize"},"to summarize"),(0,r.kt)("p",null,"But to summarize what we have learned in this video:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")," renders all its React child components at once and has a performance downside.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FlatList"),", on the other hand, renders items easily when they're about to appear and removes items that scroll way off the screen to save memory and processing time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList")," is a recommended approach to render lists in React Native."))))}c.isMDXComponent=!0}}]);