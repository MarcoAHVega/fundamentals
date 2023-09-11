"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[9607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},o="Hello World",l={unversionedId:"6 React Native Expo CLI/Section 1: Introduction and Setup/3 Hello World",id:"6 React Native Expo CLI/Section 1: Introduction and Setup/3 Hello World",title:"Hello World",description:"Setting Up Development Environment",source:"@site/docs/6 React Native Expo CLI/Section 1: Introduction and Setup/3 Hello World.md",sourceDirName:"6 React Native Expo CLI/Section 1: Introduction and Setup",slug:"/6 React Native Expo CLI/Section 1: Introduction and Setup/3 Hello World",permalink:"/fundamentals/6 React Native Expo CLI/Section 1: Introduction and Setup/3 Hello World",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Expo vs React Native",permalink:"/fundamentals/6 React Native Expo CLI/Section 1: Introduction and Setup/2 Expo vs React Native"},next:{title:"Running the App on a Device",permalink:"/fundamentals/6 React Native Expo CLI/Section 1: Introduction and Setup/4 Running App on Device"}},p={},c=[{value:"Setting Up Development Environment",id:"setting-up-development-environment",level:3},{value:"Creating a React Native Project with Expo",id:"creating-a-react-native-project-with-expo",level:3},{value:"Understanding Project Files and Folders",id:"understanding-project-files-and-folders",level:3},{value:"Running the React Native Expo App",id:"running-the-react-native-expo-app",level:3}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hello-world"},"Hello World"),(0,r.kt)("h3",{id:"setting-up-development-environment"},"Setting Up Development Environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install Node.js from node.js.org, the latest stable release.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update Node.js if already installed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use VS Code as the code editor, which can be downloaded from code.visualstudio.com.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Create a folder called "React Native Course" and open it in VS Code.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This folder will serve as our workspace throughout the series."))),(0,r.kt)("h3",{id:"creating-a-react-native-project-with-expo"},"Creating a React Native Project with Expo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the terminal in VS Code (shortcut: Control + `) and enter the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," npx create-expo-app@latest [project-name]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This command will create a new React Native project with the Expo package already installed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The project directory will be created, and all necessary dependencies will be installed."))),(0,r.kt)("h3",{id:"understanding-project-files-and-folders"},"Understanding Project Files and Folders"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Take a few minutes to understand the different files and folders generated by create-expo-app.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file contains project dependencies, scripts, and metadata.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"package-lock.json")," file ensures consistent installation of project dependencies.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js")," file serves as the Babel configuration file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"app.json")," file contains configuration options for the project.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js")," file serves as the default screen of the project.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file specifies files and folders that shouldn't be tracked by the Version Control System.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder houses all project dependencies.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," folder contains various resources, such as icons and splash screens."))),(0,r.kt)("h3",{id:"running-the-react-native-expo-app"},"Running the React Native Expo App"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It's finally time to run our first React Native Expo app.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Follow the instructions in the terminal to run the project.","*","*"))))}u.isMDXComponent=!0}}]);