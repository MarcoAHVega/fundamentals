"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[5449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),c=l,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:l,i[1]=r;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var o=n(7462),l=(n(7294),n(3905));const a={sidebar_position:14},i="Modal Component",r={unversionedId:"6 React Native Expo CLI/Section 2: Components/14 Modal",id:"6 React Native Expo CLI/Section 2: Components/14 Modal",title:"Modal Component",description:"Modal Component",source:"@site/docs/6 React Native Expo CLI/Section 2: Components/14 Modal.md",sourceDirName:"6 React Native Expo CLI/Section 2: Components",slug:"/6 React Native Expo CLI/Section 2: Components/14 Modal",permalink:"/fundamentals/6 React Native Expo CLI/Section 2: Components/14 Modal",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Pressable Component",permalink:"/fundamentals/6 React Native Expo CLI/Section 2: Components/13 Pressable"},next:{title:"StatusBar component",permalink:"/fundamentals/6 React Native Expo CLI/Section 2: Components/15 StatusBar"}},s={},p=[{value:"<strong>Modal Component</strong>",id:"modal-component-1",level:2},{value:"<strong>=&gt;</strong> Intro",id:"-intro",level:3},{value:"<strong>=&gt;</strong> Show and Hide Modal on Button Press",id:"-show-and-hide-modal-on-button-press",level:3},{value:"<strong>=&gt;</strong> Controlling Modal Visibility",id:"-controlling-modal-visibility",level:3},{value:"<strong>=&gt;</strong> Additional Props for Modal",id:"-additional-props-for-modal",level:3},{value:"<strong>=&gt;</strong> Animation and Presentation Style Props",id:"-animation-and-presentation-style-props",level:3},{value:"<strong>=&gt;</strong> Exercise: Implementing Modal Props",id:"-exercise-implementing-modal-props",level:3},{value:"<strong>=&gt;</strong> Summary",id:"-summary",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"modal-component"},"Modal Component"),(0,l.kt)("h2",{id:"modal-component-1"},(0,l.kt)("strong",{parentName:"h2"},"Modal Component")),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"-intro"},(0,l.kt)("strong",{parentName:"h3"},"=>")," Intro"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Modal is a screen that overlays the app content to provide important information or prompt the user for a decision.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Since they are purposefully interruptive, make sure you use them only when necessary."))),(0,l.kt)("h3",{id:"-show-and-hide-modal-on-button-press"},(0,l.kt)("strong",{parentName:"h3"},"=>")," Show and Hide Modal on Button Press"),(0,l.kt)("p",null,"To begin:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Import the Modal component from React Native.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button\n        title='Press'\n        onPress={() => console.log('Button pressed')}\n        color='midnightblue'\n      />\n    </View>\n  )\n}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Just before the closing View tag, define a Modal element."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The Modal opening and closing tags act as a container, and within it, we define a View that represents the content to be presented.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Duplicate the View component from above and modify the background color to light blue.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Inside the View component, add a Text component with the text "Modal content".')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Add a button labeled "Close" with the color midnight blue.'))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button\n        title='Press'\n        onPress={() => console.log('Button pressed')}\n        color='midnightblue'\n      />\n      <Modal>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button\n            title='Close'\n            color='midnightblue'\n          />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,l.kt)("h3",{id:"-controlling-modal-visibility"},(0,l.kt)("strong",{parentName:"h3"},"=>")," Controlling Modal Visibility"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"By default, the Modal is always visible. We need to control its visibility based on user interaction.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"To achieve this, we require a state variable. Import the ",(0,l.kt)("inlineCode",{parentName:"p"},"useState")," hook from React")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"and within the App component, create the state variable ",(0,l.kt)("inlineCode",{parentName:"p"},"isModalVisible")," with a setter function ",(0,l.kt)("inlineCode",{parentName:"p"},"setIsModalVisible")," , and the default value for the state variable is ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," ."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button\n        title='Press'\n        onPress={() => console.log('Button pressed')}\n        color='midnightblue'\n      />\n      <Modal>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button\n            title='Close'\n            color='midnightblue'\n          />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bind this variable to the ",(0,l.kt)("inlineCode",{parentName:"li"},"visible")," prop of the Modal component, so ",(0,l.kt)("inlineCode",{parentName:"li"},"visible")," is equal to ",(0,l.kt)("inlineCode",{parentName:"li"},"isModalVisible")," . Since it is ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," by default, the Modal is initially hidden.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button\n        title='Press'\n        onPress={() => console.log('Button pressed')}\n        color='midnightblue'\n      />\n      <Modal visible={isModalVisible}>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button\n            title='Close'\n            color='midnightblue'\n          />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To toggle the visibility of the Modal, modify the ",(0,l.kt)("inlineCode",{parentName:"li"},"onPress")," event of the button component to call the setter function ",(0,l.kt)("inlineCode",{parentName:"li"},"setIsModalVisible")," passing in a value of ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," .")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button\n        title='Press'\n        onPress={() => setIsModalVisible(true)}\n        color='midnightblue'\n      />\n      <Modal visible={isModalVisible}>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button\n            title='Close'\n            color='midnightblue'\n          />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add another event handler to the button within the Modal component to close it. So, ",(0,l.kt)("inlineCode",{parentName:"li"},"onPress")," calls the function ",(0,l.kt)("inlineCode",{parentName:"li"},"setIsModalVisible")," and we pass in ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," to hide the Modal.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button\n        title='Press'\n        onPress={() => setIsModalVisible(true)}\n        color='midnightblue'\n      />\n      <Modal visible={isModalVisible}>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button\n            title='Close'\n            onPress={() => setIsModalVisible(false)}\n            color='midnightblue'\n          />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'In the simulator, we have a view with a plum background and the "Press" button.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Click the button, and the Modal will be displayed.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Click the button within the Modal, and the Modal will be hidden.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Pretty straightforward usage."))),(0,l.kt)("h3",{id:"-additional-props-for-modal"},(0,l.kt)("strong",{parentName:"h3"},"=>")," Additional Props for Modal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It is recommended to include another prop called ",(0,l.kt)("inlineCode",{parentName:"li"},"onRequestClose")," where we call ",(0,l.kt)("inlineCode",{parentName:"li"},"setIsModalVisible")," passing in ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," .")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button\n        title='Press'\n        onPress={() => setIsModalVisible(true)}\n        color='midnightblue'\n      />\n      <Modal\n        visible={isModalVisible}\n        onRequestClose={() => setIsModalVisible(false)}>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button\n            title='Close'\n            onPress={() => setIsModalVisible(false)}\n            color='midnightblue'\n          />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"onRequestClose")," handler is triggered when the user presses the back button on Android or dismisses the Modal with a gesture on iOS.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In either of the two scenarios, we want to hide the Modal."))),(0,l.kt)("h3",{id:"-animation-and-presentation-style-props"},(0,l.kt)("strong",{parentName:"h3"},"=>")," Animation and Presentation Style Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Let's explore a few more props related to Modals.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"By default, the Modal abruptly appears and disappears because the ",(0,l.kt)("inlineCode",{parentName:"p"},"animationType")," prop is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," ."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button\n        title='Press'\n        onPress={() => setIsModalVisible(true)}\n        color='midnightblue'\n      />\n      <Modal\n        visible={isModalVisible}\n        onRequestClose={() => setIsModalVisible(false)}\n        animationType='none'>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button\n            title='Close'\n            onPress={() => setIsModalVisible(false)}\n            color='midnightblue'\n          />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Set the prop to ",(0,l.kt)("inlineCode",{parentName:"li"},"slide")," , and the Modal will slide in from the bottom.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button\n        title='Press'\n        onPress={() => setIsModalVisible(true)}\n        color='midnightblue'\n      />\n      <Modal\n        visible={isModalVisible}\n        onRequestClose={() => setIsModalVisible(false)}\n        animationType='slide'>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button\n            title='Close'\n            onPress={() => setIsModalVisible(false)}\n            color='midnightblue'\n          />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Alternatively, set the value to ",(0,l.kt)("inlineCode",{parentName:"li"},"fade")," , and the Modal will fade into view.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button\n        title='Press'\n        onPress={() => setIsModalVisible(true)}\n        color='midnightblue'\n      />\n      <Modal\n        visible={isModalVisible}\n        onRequestClose={() => setIsModalVisible(false)}\n        animationType='fade'>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button\n            title='Close'\n            onPress={() => setIsModalVisible(false)}\n            color='midnightblue'\n          />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There is a prop called ",(0,l.kt)("inlineCode",{parentName:"li"},"presentationStyle")," , which is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"fullScreen")," by default.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button\n        title='Press'\n        onPress={() => setIsModalVisible(true)}\n        color='midnightblue'\n      />\n      <Modal\n        visible={isModalVisible}\n        onRequestClose={() => setIsModalVisible(false)}\n        animationType='fade'\n        presentationStyle='fullScreen'>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button\n            title='Close'\n            onPress={() => setIsModalVisible(false)}\n            color='midnightblue'\n          />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can change this to either ",(0,l.kt)("inlineCode",{parentName:"li"},"formSheet")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"pageSheet")," to alter the appearance. For now, set it to ",(0,l.kt)("inlineCode",{parentName:"li"},"pageSheet")," and change back the ",(0,l.kt)("inlineCode",{parentName:"li"},"animationType")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"slide")," as it makes for a much better effect.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button\n        title='Press'\n        onPress={() => setIsModalVisible(true)}\n        color='midnightblue'\n      />\n      <Modal\n        visible={isModalVisible}\n        onRequestClose={() => setIsModalVisible(false)}\n        animationType='slide'\n        presentationStyle='pageSheet'>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button\n            title='Close'\n            onPress={() => setIsModalVisible(false)}\n            color='midnightblue'\n          />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"presentationStyle")," prop only affects iOS and ",(0,l.kt)("inlineCode",{parentName:"li"},"not Android"),".")),(0,l.kt)("h3",{id:"-exercise-implementing-modal-props"},(0,l.kt)("strong",{parentName:"h3"},"=>")," Exercise: Implementing Modal Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"As an exercise, open an iPad simulator and toggle between ",(0,l.kt)("inlineCode",{parentName:"p"},"formSheet")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"pageSheet")," values for the ",(0,l.kt)("inlineCode",{parentName:"p"},"presentationStyle")," prop.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Let me know in the comment section if you were successful in implementing it."))),(0,l.kt)("h3",{id:"-summary"},(0,l.kt)("strong",{parentName:"h3"},"=>")," Summary"),(0,l.kt)("p",null,"To summarize what we have learned:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The Modal component in React Native allows us to present important information or prompt user decisions.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You can define a Modal using the Modal component with the desired content nested as its children.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The visibility of the Modal can be controlled using the ",(0,l.kt)("inlineCode",{parentName:"p"},"visible")," prop, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"onRequestClose")," callback is used to close the Modal when it is dismissed through hardware interaction.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"animationType")," prop to add fancier appearance transitions to the Modal, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"presentationStyle")," prop in iOS to modify its presentation."))))}m.isMDXComponent=!0}}]);