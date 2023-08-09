"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[4533],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:14},o="- Accessing Object Properties",s={unversionedId:"8 Max JS/Section 11: Understanding the JavaScript Basics/Accessing Object Properties",id:"8 Max JS/Section 11: Understanding the JavaScript Basics/Accessing Object Properties",title:"- Accessing Object Properties",description:"For objects, accessing properties is similar to arrays.",source:"@site/docs/8 Max JS/Section 11: Understanding the JavaScript Basics/230. Accessing Object Properties.md",sourceDirName:"8 Max JS/Section 11: Understanding the JavaScript Basics",slug:"/8 Max JS/Section 11: Understanding the JavaScript Basics/Accessing Object Properties",permalink:"/fundamentals/8 Max JS/Section 11: Understanding the JavaScript Basics/Accessing Object Properties",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"- Splitting Code Across Multiple Lines",permalink:"/fundamentals/8 Max JS/Section 11: Understanding the JavaScript Basics/Splitting Code Across Multiple Lines"},next:{title:"- Performing Operations",permalink:"/fundamentals/8 Max JS/Section 11: Understanding the JavaScript Basics/Performing Operations"}},c={},l=[{value:"For objects, accessing properties is similar to arrays.",id:"for-objects-accessing-properties-is-similar-to-arrays",level:3},{value:"Dot notation",id:"dot-notation",level:3},{value:"IDEs like Visual Studio Code provide auto-completion for object properties.",id:"ides-like-visual-studio-code-provide-auto-completion-for-object-properties",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"--accessing-object-properties"},"- Accessing Object Properties"),(0,i.kt)("h3",{id:"for-objects-accessing-properties-is-similar-to-arrays"},"For objects, accessing properties is similar to arrays."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To output a specific property, use the variable name followed by a dot.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This dot syntax allows us to access different properties of an object."))),(0,i.kt)("h3",{id:"dot-notation"},"Dot notation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In JavaScript, dot notation is a syntax used to access properties and methods of objects. It allows you to retrieve or modify specific values within an object.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dot notation is a fundamental concept in JavaScript, allowing you to interact with objects and access their properties and methods easily."))),(0,i.kt)("h3",{id:"ides-like-visual-studio-code-provide-auto-completion-for-object-properties"},"IDEs like Visual Studio Code provide auto-completion for object properties."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Suggestions are displayed with a blue box indicating the actual properties.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select the desired property from the dropdown and use it in your code."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let age = 32\nlet userName = 'Max'\nlet hobbies = ['Sports', 'Cooking', 'Reading']\nlet job = {\n  title: 'developer',\n  place: 'New York',\n  salary: 50000,\n}\nalert(hobbies[0])\nalert(job.title)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The above code will display the first hobby ('Sports') and then the job title ('developer').")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Objects are an important value type in JavaScript and are frequently used in code."))))}d.isMDXComponent=!0}}]);