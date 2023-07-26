"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[3541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),c=o,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return n?l.createElement(f,i(i({ref:t},p),{},{components:n})):l.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,i[1]=r;for(var d=2;d<a;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var l=n(7462),o=(n(7294),n(3905));const a={sidebar_position:14},i="Modal Component",r={unversionedId:"6 React Native/14 Modal",id:"6 React Native/14 Modal",title:"Modal Component",description:"In this video, let's take a look at the Modal component in React Native.",source:"@site/docs/6 React Native/14 Modal.md",sourceDirName:"6 React Native",slug:"/6 React Native/14 Modal",permalink:"/fundamentals/6 React Native/14 Modal",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Pressable Component",permalink:"/fundamentals/6 React Native/13 Pressable"},next:{title:"StatusBar component",permalink:"/fundamentals/6 React Native/15 StatusBar"}},s={},d=[{value:"Introduction to Modal",id:"introduction-to-modal",level:3},{value:"Usage of Modal Component",id:"usage-of-modal-component",level:3},{value:"Show and Hide Modal on Button Press",id:"show-and-hide-modal-on-button-press",level:3},{value:"Controlling Modal Visibility",id:"controlling-modal-visibility",level:3},{value:"Testing the Code",id:"testing-the-code",level:3},{value:"Additional Props for Modal",id:"additional-props-for-modal",level:3},{value:"Animation and Presentation Style Props",id:"animation-and-presentation-style-props",level:3},{value:"Exercise: Implementing Modal Props",id:"exercise-implementing-modal-props",level:3},{value:"Summary",id:"summary",level:3}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modal-component"},"Modal Component"),(0,o.kt)("p",null,"In this video, let's take a look at the Modal component in React Native."),(0,o.kt)("h3",{id:"introduction-to-modal"},"Introduction to Modal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Modal is a screen that overlays the app content to provide important information or prompt the user for a decision.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Since they are purposefully interruptive, make sure you use them only when necessary."))),(0,o.kt)("h3",{id:"usage-of-modal-component"},"Usage of Modal Component"),(0,o.kt)("p",null,"Let's switch back to VS Code and understand its usage."),(0,o.kt)("h3",{id:"show-and-hide-modal-on-button-press"},"Show and Hide Modal on Button Press"),(0,o.kt)("p",null,"To begin:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import the Modal component from React Native.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Press' onPress={() => console.log('Button pressed')} color='midnightblue' />\n    </View>\n  )\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Just before the closing View tag, define a Modal element."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Modal opening and closing tags act as a container, and within it, we define a View that represents the content to be presented.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Duplicate the View component from above and modify the background color to light blue.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Inside the View component, add a Text component with the text "Modal content".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Add a button labeled "Close" with the color midnight blue.'))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Press' onPress={() => console.log('Button pressed')} color='midnightblue' />\n      <Modal>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button title='Close' color='midnightblue' />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,o.kt)("h3",{id:"controlling-modal-visibility"},"Controlling Modal Visibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"By default, the Modal is always visible. We need to control its visibility based on user interaction.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To achieve this, we require a state variable. Import the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," hook from React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"and within the App component, create the state variable ",(0,o.kt)("inlineCode",{parentName:"p"},"isModalVisible")," with a setter function ",(0,o.kt)("inlineCode",{parentName:"p"},"setIsModalVisible")," , and the default value for the state variable is ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," ."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Press' onPress={() => console.log('Button pressed')} color='midnightblue' />\n      <Modal>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button title='Close' color='midnightblue' />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bind this variable to the ",(0,o.kt)("inlineCode",{parentName:"li"},"visible")," prop of the Modal component, so ",(0,o.kt)("inlineCode",{parentName:"li"},"visible")," is equal to ",(0,o.kt)("inlineCode",{parentName:"li"},"isModalVisible")," . Since it is ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," by default, the Modal is initially hidden.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Press' onPress={() => console.log('Button pressed')} color='midnightblue' />\n      <Modal visible={isModalVisible}>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button title='Close' color='midnightblue' />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To toggle the visibility of the Modal, modify the ",(0,o.kt)("inlineCode",{parentName:"li"},"onPress")," event of the button component to call the setter function ",(0,o.kt)("inlineCode",{parentName:"li"},"setIsModalVisible")," passing in a value of ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," .")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Press' onPress={() => setIsModalVisible(true)} color='midnightblue' />\n      <Modal visible={isModalVisible}>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button title='Close' color='midnightblue' />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add another event handler to the button within the Modal component to close it. So, ",(0,o.kt)("inlineCode",{parentName:"li"},"onPress")," calls the function ",(0,o.kt)("inlineCode",{parentName:"li"},"setIsModalVisible")," and we pass in ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," to hide the Modal.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Press' onPress={() => setIsModalVisible(true)} color='midnightblue' />\n      <Modal visible={isModalVisible}>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button title='Close' onPress={() => setIsModalVisible(false)} color='midnightblue' />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,o.kt)("h3",{id:"testing-the-code"},"Testing the Code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'In the simulator, we have a view with a plum background and the "Press" button. Click the button, and the Modal will be displayed. Click the button within the Modal, and the Modal will be hidden. Pretty straightforward usage.')),(0,o.kt)("h3",{id:"additional-props-for-modal"},"Additional Props for Modal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is recommended to include another prop called ",(0,o.kt)("inlineCode",{parentName:"li"},"onRequestClose")," where we call ",(0,o.kt)("inlineCode",{parentName:"li"},"setIsModalVisible")," passing in ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," .")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Press' onPress={() => setIsModalVisible(true)} color='midnightblue' />\n      <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button title='Close' onPress={() => setIsModalVisible(false)} color='midnightblue' />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"onRequestClose")," handler is triggered when the user presses the back button on Android or dismisses the Modal with a gesture on iOS.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In either of the two scenarios, we want to hide the Modal."))),(0,o.kt)("h3",{id:"animation-and-presentation-style-props"},"Animation and Presentation Style Props"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Let's explore a few more props related to Modals.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"By default, the Modal abruptly appears and disappears because the ",(0,o.kt)("inlineCode",{parentName:"p"},"animationType")," prop is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"none")," ."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Press' onPress={() => setIsModalVisible(true)} color='midnightblue' />\n      <Modal\n        visible={isModalVisible}\n        onRequestClose={() => setIsModalVisible(false)}\n        animationType='none'\n      >\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button title='Close' onPress={() => setIsModalVisible(false)} color='midnightblue' />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set the prop to ",(0,o.kt)("inlineCode",{parentName:"li"},"slide")," , and the Modal will slide in from the bottom.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Press' onPress={() => setIsModalVisible(true)} color='midnightblue' />\n      <Modal\n        visible={isModalVisible}\n        onRequestClose={() => setIsModalVisible(false)}\n        animationType='slide'\n      >\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button title='Close' onPress={() => setIsModalVisible(false)} color='midnightblue' />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Alternatively, set the value to ",(0,o.kt)("inlineCode",{parentName:"li"},"fade")," , and the Modal will fade into view.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Press' onPress={() => setIsModalVisible(true)} color='midnightblue' />\n      <Modal\n        visible={isModalVisible}\n        onRequestClose={() => setIsModalVisible(false)}\n        animationType='fade'\n      >\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button title='Close' onPress={() => setIsModalVisible(false)} color='midnightblue' />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There is a prop called ",(0,o.kt)("inlineCode",{parentName:"li"},"presentationStyle")," , which is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"fullScreen")," by default.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Press' onPress={() => setIsModalVisible(true)} color='midnightblue' />\n      <Modal\n        visible={isModalVisible}\n        onRequestClose={() => setIsModalVisible(false)}\n        animationType='fade'\n        presentationStyle='fullScreen'\n      >\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button title='Close' onPress={() => setIsModalVisible(false)} color='midnightblue' />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can change this to either ",(0,o.kt)("inlineCode",{parentName:"li"},"formSheet")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"pageSheet")," to alter the appearance. For now, set it to ",(0,o.kt)("inlineCode",{parentName:"li"},"pageSheet")," and change back the ",(0,o.kt)("inlineCode",{parentName:"li"},"animationType")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"slide")," as it makes for a much better effect.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useState } from 'react'\nimport { View, Button, Text, Modal } from 'react-native'\n\nexport default function App() {\n  const [isModalVisible, setIsModalVisible] = useState(false)\n\n  return (\n    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>\n      <Button title='Press' onPress={() => setIsModalVisible(true)} color='midnightblue' />\n      <Modal\n        visible={isModalVisible}\n        onRequestClose={() => setIsModalVisible(false)}\n        animationType='slide'\n        presentationStyle='pageSheet'\n      >\n        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>\n          <Text>Modal content</Text>\n          <Button title='Close' onPress={() => setIsModalVisible(false)} color='midnightblue' />\n        </View>\n      </Modal>\n    </View>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"presentationStyle")," prop only affects iOS and ",(0,o.kt)("inlineCode",{parentName:"li"},"not Android"),".")),(0,o.kt)("h3",{id:"exercise-implementing-modal-props"},"Exercise: Implementing Modal Props"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"As an exercise, open an iPad simulator and toggle between ",(0,o.kt)("inlineCode",{parentName:"p"},"formSheet")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pageSheet")," values for the ",(0,o.kt)("inlineCode",{parentName:"p"},"presentationStyle")," prop.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Let me know in the comment section if you were successful in implementing it."))),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"To summarize what we have learned:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Modal component in React Native allows us to present important information or prompt user decisions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can define a Modal using the Modal component with the desired content nested as its children.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The visibility of the Modal can be controlled using the ",(0,o.kt)("inlineCode",{parentName:"p"},"visible")," prop, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"onRequestClose")," callback is used to close the Modal when it is dismissed through hardware interaction.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"animationType")," prop to add fancier appearance transitions to the Modal, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"presentationStyle")," prop in iOS to modify its presentation."))))}m.isMDXComponent=!0}}]);