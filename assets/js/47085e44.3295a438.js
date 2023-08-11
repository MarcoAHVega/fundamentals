"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[6721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:8},o="- A Closer Look At The JavaScript Syntax",l={unversionedId:"8 Max JS/Section 11: Understanding the JavaScript Basics/A Closer Look At The JavaScript Syntax",id:"8 Max JS/Section 11: Understanding the JavaScript Basics/A Closer Look At The JavaScript Syntax",title:"- A Closer Look At The JavaScript Syntax",description:"General Syntax",source:"@site/docs/8 Max JS/Section 11: Understanding the JavaScript Basics/224. A Closer Look At The JavaScript Syntax.md",sourceDirName:"8 Max JS/Section 11: Understanding the JavaScript Basics",slug:"/8 Max JS/Section 11: Understanding the JavaScript Basics/A Closer Look At The JavaScript Syntax",permalink:"/fundamentals/8 Max JS/Section 11: Understanding the JavaScript Basics/A Closer Look At The JavaScript Syntax",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:'- Introducing Variables ("Data Containers")',permalink:"/fundamentals/8 Max JS/Section 11: Understanding the JavaScript Basics/Introducing Variables -Data Containers"},next:{title:"- A Second Variable & Practice",permalink:"/fundamentals/8 Max JS/Section 11: Understanding the JavaScript Basics/A Second Variable & Practice"}},s={},c=[{value:"General Syntax",id:"general-syntax",level:3},{value:"Rules vs Conventions",id:"rules-vs-conventions",level:3},{value:"Line Endings",id:"line-endings",level:3},{value:"Consistency",id:"consistency",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"--a-closer-look-at-the-javascript-syntax"},"- A Closer Look At The JavaScript Syntax"),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"general-syntax"},"General Syntax"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You've learned about some important syntax features and rules already.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For example, there must be a ",(0,r.kt)("inlineCode",{parentName:"p"},"white space")," after ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"let")," is a special keyword in JavaScript used to create a variable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We can store a value in a variable using ",(0,r.kt)("inlineCode",{parentName:"p"},"the equal sign."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Variable names must not contain blanks or special characters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The convention is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase")," for variable names."))),(0,r.kt)("h3",{id:"rules-vs-conventions"},"Rules vs Conventions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It's a rule to not have blanks in variable names.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It's a convention to use camelCase notation for variable names.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Following the convention is not mandatory, but it is recommended.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'For example, using "Greeting" with a capital G is valid but against the convention.'))),(0,r.kt)("h3",{id:"line-endings"},"Line Endings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lines in JavaScript code often end with a semi-colon.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It's not mandatory, but it's commonly done to mark the end of a line.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Without a semi-colon, multiple commands in one line would cause an error.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It's considered good practice to split instructions across multiple lines and omit semi-colons.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"However, using semi-colons after every line is still seen in code and can be a personal programming style choice."))),(0,r.kt)("h3",{id:"consistency"},"Consistency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Be consistent with the use of semi-colons and quotes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"While not required, using semi-colons at the end of each line is a common practice.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once a decision is made, stick to it throughout the code."))))}m.isMDXComponent=!0}}]);