"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[3721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},o=void 0,l={unversionedId:"7 React 2023/PART 1: REACT FUNDAMENTALS/Section 5: Components, Props, and JSX",id:"7 React 2023/PART 1: REACT FUNDAMENTALS/Section 5: Components, Props, and JSX",title:"Section 5: Components, Props, and JSX",description:"---",source:"@site/docs/7 React 2023/PART 1: REACT FUNDAMENTALS/Section 5: Components, Props, and JSX.md",sourceDirName:"7 React 2023/PART 1: REACT FUNDAMENTALS",slug:"/7 React 2023/PART 1: REACT FUNDAMENTALS/Section 5: Components, Props, and JSX",permalink:"/fundamentals/7 React 2023/PART 1: REACT FUNDAMENTALS/Section 5: Components, Props, and JSX",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Section 4: Essential JavaScript for React",permalink:"/fundamentals/7 React 2023/PART 1: REACT FUNDAMENTALS/Section 4: Essential JavaScript for React"},next:{title:"Section 6: State, Events, and Forms",permalink:"/fundamentals/7 React 2023/PART 1: REACT FUNDAMENTALS/Section 6: State, Events, and Forms"}},p={},s=[{value:"- Section Overview",id:"--section-overview",level:2},{value:"Core Concepts of Building React Apps",id:"core-concepts-of-building-react-apps",level:3},{value:"Components",id:"components",level:3},{value:"Props",id:"props",level:3},{value:"JSX Syntax",id:"jsx-syntax",level:3},{value:"Sharing Data between Components",id:"sharing-data-between-components",level:3},{value:"Rendering Lists and Conditional Rendering",id:"rendering-lists-and-conditional-rendering",level:3},{value:"Building a Developer Profile Card",id:"building-a-developer-profile-card",level:3},{value:"<strong>- Rendering the Root Component and Strict Mode</strong>",id:"--rendering-the-root-component-and-strict-mode",level:2},{value:"Building the Pizza Menu Project",id:"building-the-pizza-menu-project",level:3},{value:"Importing React and ReactDOM",id:"importing-react-and-reactdom",level:3},{value:"Creating the App Component",id:"creating-the-app-component",level:3},{value:"Rendering the App Component",id:"rendering-the-app-component",level:3},{value:"Rendering in Older Versions of React",id:"rendering-in-older-versions-of-react",level:3},{value:"Activating Strict Mode",id:"activating-strict-mode",level:3},{value:"- ## Before We Start Coding: Debugging",id:"---before-we-start-coding-debugging",level:2},{value:"Checking if the Application is Running",id:"checking-if-the-application-is-running",level:3},{value:"Hard Reloading the Browser",id:"hard-reloading-the-browser",level:3},{value:"Keeping the Terminal and Dev Tools Open",id:"keeping-the-terminal-and-dev-tools-open",level:3},{value:"Understanding Error Messages",id:"understanding-error-messages",level:3},{value:"Working with ESLint",id:"working-with-eslint",level:3},{value:"Troubleshooting Extensions",id:"troubleshooting-extensions",level:3},{value:"Comparing Code for Bugs",id:"comparing-code-for-bugs",level:3},{value:"Handling Legacy Code",id:"handling-legacy-code",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"- ## Components as Building Blocks",id:"---components-as-building-blocks",level:2},{value:"Putting Concepts into Practice",id:"putting-concepts-into-practice",level:3},{value:"- Creating And Reusing a Component",id:"--creating-and-reusing-a-component",level:2},{value:"- What is JSX?",id:"--what-is-jsx",level:2},{value:"- Creating More Components",id:"--creating-more-components",level:2},{value:"- JavaScript Logic in Components",id:"--javascript-logic-in-components",level:2},{value:"- Separation of Concerns",id:"--separation-of-concerns",level:2},{value:"- Styling React Applications",id:"--styling-react-applications",level:2},{value:"- Passing and Receiving Props",id:"--passing-and-receiving-props",level:2},{value:"- Props, Immutability, and One-Way Data Flow",id:"--props-immutability-and-one-way-data-flow",level:2},{value:"- CHALLENGE ##1: Profile Card (v1)",id:"--challenge-1-profile-card-v1",level:2},{value:"- The Rules of JSX",id:"--the-rules-of-jsx",level:2},{value:"- Rendering Lists",id:"--rendering-lists",level:2},{value:"- Conditional Rendering With &amp;&amp;",id:"--conditional-rendering-with-",level:2},{value:"- Conditional Rendering With Ternaries",id:"--conditional-rendering-with-ternaries",level:2},{value:"- Conditional Rendering With Multiple Returns",id:"--conditional-rendering-with-multiple-returns",level:2},{value:"- Extracting JSX Into a New Component",id:"--extracting-jsx-into-a-new-component",level:2},{value:"- Destructuring Props",id:"--destructuring-props",level:2},{value:"- React Fragments",id:"--react-fragments",level:2},{value:"- Setting Classes and Text Conditionally",id:"--setting-classes-and-text-conditionally",level:2},{value:"- Section Summary",id:"--section-summary",level:2},{value:"- CHALLENGE ##2: Profile Card (v2)",id:"--challenge-2-profile-card-v2",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"--section-overview"},"- Section Overview"),(0,i.kt)("h3",{id:"core-concepts-of-building-react-apps"},"Core Concepts of Building React Apps"),(0,i.kt)("p",null,"In this section, we will explore three core concepts of building React apps."),(0,i.kt)("h3",{id:"components"},"Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Components are the building blocks of React applications.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"They serve as the foundation for creating UI elements.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Components can be reused and combined to create complex UI structures."))),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Props allow data to be passed from a parent component to a child component.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"They provide a way to customize and configure components.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Props are read-only and should not be modified within the child component."))),(0,i.kt)("h3",{id:"jsx-syntax"},"JSX Syntax"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"JSX is a syntax extension for JavaScript that allows writing HTML-like code in JavaScript files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It simplifies the process of creating and rendering components.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"JSX elements can be used to define the structure and appearance of UI components."))),(0,i.kt)("h3",{id:"sharing-data-between-components"},"Sharing Data between Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Components can communicate and share data with each other using props.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Props enable the transfer of information from a parent component to its child components.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This allows for dynamic and interactive rendering of data within the app."))),(0,i.kt)("h3",{id:"rendering-lists-and-conditional-rendering"},"Rendering Lists and Conditional Rendering"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React provides methods for rendering lists of items dynamically.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Conditional rendering allows components to display different content based on certain conditions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"These techniques enhance the flexibility and versatility of React applications."))),(0,i.kt)("h3",{id:"building-a-developer-profile-card"},"Building a Developer Profile Card"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Throughout this section, we will build a developer profile card as a practical project.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This project will serve as a hands-on exercise to apply the core concepts we learn.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"By building the profile card, you will gain experience in creating components, using props, and implementing JSX syntax.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This project will provide a solid foundation for further React development."))),(0,i.kt)("h2",{id:"--rendering-the-root-component-and-strict-mode"},(0,i.kt)("strong",{parentName:"h2"},"- Rendering the Root Component and Strict Mode")),(0,i.kt)("h3",{id:"building-the-pizza-menu-project"},"Building the Pizza Menu Project"),(0,i.kt)("p",null,"In this section, we will build the Pizza Menu project from scratch."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Let's start by ",(0,i.kt)("inlineCode",{parentName:"p"},"deleting all files in the src folder"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," in the src folder, as the entry point for our project."))),(0,i.kt)("h3",{id:"importing-react-and-reactdom"},"Importing React and ReactDOM"),(0,i.kt)("p",null,"In the index.js file, we need to import React and ReactDOM."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport ReactDOM from 'react-dom/client'\n")),(0,i.kt)("h3",{id:"creating-the-app-component"},"Creating the App Component"),(0,i.kt)("p",null,"Next, we will create the App component."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Define a function called App.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Return the JSX code ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>Hello React!</h1>")," ."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport ReactDOM from 'react-dom/client'\n\nfunction App() {\n  return <h1>Hello React!!</h1>\n}\n")),(0,i.kt)("h3",{id:"rendering-the-app-component"},"Rendering the App Component"),(0,i.kt)("p",null,"To render our app component, we need to select the root element and render the app inside it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"document.getElementById"),' method to select the root element with the id "root".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactDOM.createRoot")," method to create a root element.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Render the app component inside the root element using the ",(0,i.kt)("inlineCode",{parentName:"p"},"root.render")," method."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport ReactDOM from 'react-dom/client'\n\nfunction App() {\n  return <h1>Hello React!!</h1>\n}\n\nconst root = ReactDOM.createRoot(document.getElementById('root'))\nroot.render(<App />)\n")),(0,i.kt)("h3",{id:"rendering-in-older-versions-of-react"},"Rendering in Older Versions of React"),(0,i.kt)("p",null,"If you are working with an older codebase before React v18, rendering works differently."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"React.render")," method to render the app component.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make sure to import ",(0,i.kt)("inlineCode",{parentName:"p"},"react-dom/client")," for this method to work."))),(0,i.kt)("h3",{id:"activating-strict-mode"},"Activating Strict Mode"),(0,i.kt)("p",null,"We can activate strict mode by wrapping the app component with the ",(0,i.kt)("inlineCode",{parentName:"p"},"React.StrictMode")," component."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"React.StrictMode")," component to wrap the app component.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport ReactDOM from 'react-dom/client'\n\nfunction App() {\n  return <h1>Hello React!!</h1>\n}\n\nconst root = ReactDOM.createRoot(document.getElementById('root'))\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Strict mode helps catch bugs and outdated API usage during development.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It renders all components twice to identify potential issues.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It's a good practice to always activate strict mode when developing React applications."))),(0,i.kt)("h2",{id:"---before-we-start-coding-debugging"},"- ## Before We Start Coding: Debugging"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Techniques for dealing with errors and problems")),(0,i.kt)("h3",{id:"checking-if-the-application-is-running"},"Checking if the Application is Running"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Making sure the application is actually running")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Restarting the application if it's not updating"))),(0,i.kt)("h3",{id:"hard-reloading-the-browser"},"Hard Reloading the Browser"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sometimes a hard reload is necessary to fix issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clicking the reloading button in the browser"))),(0,i.kt)("h3",{id:"keeping-the-terminal-and-dev-tools-open"},"Keeping the Terminal and Dev Tools Open"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Keeping the terminal and dev tools open at all times")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Monitoring for unexpected errors in the console"))),(0,i.kt)("h3",{id:"understanding-error-messages"},"Understanding Error Messages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React's error messages and error overlays")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using error messages to identify and fix issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Googling error messages for solutions"))),(0,i.kt)("h3",{id:"working-with-eslint"},"Working with ESLint"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using ESLint to catch potential issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Working with ESLint warnings and errors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Checking the Problems tab for ESLint issues"))),(0,i.kt)("h3",{id:"troubleshooting-extensions"},"Troubleshooting Extensions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Issues with the Prettier and ESLint extensions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Checking the Output tab for extension errors"))),(0,i.kt)("h3",{id:"comparing-code-for-bugs"},"Comparing Code for Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Comparing code with the final project code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Identifying and fixing bugs in your code"))),(0,i.kt)("h3",{id:"handling-legacy-code"},"Handling Legacy Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Handling older versions of React")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Making necessary adjustments for older code bases"))),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tips for dealing with problems in React applications")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Importance of debugging skills in the coding process"))),(0,i.kt)("h2",{id:"---components-as-building-blocks"},"- ## Components as Building Blocks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React is all about components.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Components are the most fundamental concept in React.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React applications are made entirely out of components.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Components are the building blocks of any user interface in React.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React renders a view for each component, which makes up the user interface.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Each component has its own data, JavaScript logic, and appearance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Components describe how they work and what they look like.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Complex UIs in React are built by combining multiple components.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Components can be nested inside each other.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nesting components and component reusability are key aspects of using components in React.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Components can be easily reused by passing different data using props.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Breaking a design into components is a crucial skill in React development.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A component tree shows the hierarchy and relationships between components.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Parent and child components are terms used in React to describe relationships.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A component tree helps understand how components are nested and relate to each other."))),(0,i.kt)("h3",{id:"putting-concepts-into-practice"},"Putting Concepts into Practice"),(0,i.kt)("p",null,"Now that we have learned about components, let's start applying these concepts in practice."),(0,i.kt)("h2",{id:"--creating-and-reusing-a-component"},"- Creating And Reusing a Component"),(0,i.kt)("h2",{id:"--what-is-jsx"},"- What is JSX?"),(0,i.kt)("h2",{id:"--creating-more-components"},"- Creating More Components"),(0,i.kt)("h2",{id:"--javascript-logic-in-components"},"- JavaScript Logic in Components"),(0,i.kt)("h2",{id:"--separation-of-concerns"},"- Separation of Concerns"),(0,i.kt)("h2",{id:"--styling-react-applications"},"- Styling React Applications"),(0,i.kt)("h2",{id:"--passing-and-receiving-props"},"- Passing and Receiving Props"),(0,i.kt)("h2",{id:"--props-immutability-and-one-way-data-flow"},"- Props, Immutability, and One-Way Data Flow"),(0,i.kt)("h2",{id:"--challenge-1-profile-card-v1"},"- CHALLENGE ##1: Profile Card (v1)"),(0,i.kt)("h2",{id:"--the-rules-of-jsx"},"- The Rules of JSX"),(0,i.kt)("h2",{id:"--rendering-lists"},"- Rendering Lists"),(0,i.kt)("h2",{id:"--conditional-rendering-with-"},"- Conditional Rendering With &&"),(0,i.kt)("h2",{id:"--conditional-rendering-with-ternaries"},"- Conditional Rendering With Ternaries"),(0,i.kt)("h2",{id:"--conditional-rendering-with-multiple-returns"},"- Conditional Rendering With Multiple Returns"),(0,i.kt)("h2",{id:"--extracting-jsx-into-a-new-component"},"- Extracting JSX Into a New Component"),(0,i.kt)("h2",{id:"--destructuring-props"},"- Destructuring Props"),(0,i.kt)("h2",{id:"--react-fragments"},"- React Fragments"),(0,i.kt)("h2",{id:"--setting-classes-and-text-conditionally"},"- Setting Classes and Text Conditionally"),(0,i.kt)("h2",{id:"--section-summary"},"- Section Summary"),(0,i.kt)("h2",{id:"--challenge-2-profile-card-v2"},"- CHALLENGE ##2: Profile Card (v2)"))}m.isMDXComponent=!0}}]);