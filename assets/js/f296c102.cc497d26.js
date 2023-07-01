"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[6984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="1. Setup",l={unversionedId:"2 CSS Crash Course/Section-1/Setup",id:"2 CSS Crash Course/Section-1/Setup",title:"1. Setup",description:"browser and a code editor",source:"@site/docs/2 CSS Crash Course/Section-1/1 -Setup.md",sourceDirName:"2 CSS Crash Course/Section-1",slug:"/2 CSS Crash Course/Section-1/Setup",permalink:"/fundamentals/2 CSS Crash Course/Section-1/Setup",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"1 GENERAL CSS STUFF",permalink:"/fundamentals/category/1-general-css-stuff"},next:{title:"2. What is CSS?",permalink:"/fundamentals/2 CSS Crash Course/Section-1/What is CSS"}},s={},c=[{value:"browser and a code editor",id:"browser-and-a-code-editor",level:3},{value:"the prettier code formatter extension",id:"the-prettier-code-formatter-extension",level:3},{value:"project folder",id:"project-folder",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-setup"},"1. Setup"),(0,o.kt)("h3",{id:"browser-and-a-code-editor"},"browser and a code editor"),(0,o.kt)("p",null,"to work with css similar to html we need two things\n",(0,o.kt)("inlineCode",{parentName:"p"},"browser and a code editor")),(0,o.kt)("p",null,"for browser i'm going to be using ",(0,o.kt)("inlineCode",{parentName:"p"},"chrome")),(0,o.kt)("p",null,"to write the css code i'm going to be using ",(0,o.kt)("inlineCode",{parentName:"p"},"visual studio code")),(0,o.kt)("p",null,"head over to code.visualstudio.com and download the editor"),(0,o.kt)("h3",{id:"the-prettier-code-formatter-extension"},"the prettier code formatter extension"),(0,o.kt)("p",null,"once you have installed in the sidebar click extensions and install ",(0,o.kt)("inlineCode",{parentName:"p"},"the prettier code formatter extension")),(0,o.kt)("p",null,"this extension will help with code formatting"),(0,o.kt)("h3",{id:"project-folder"},"project folder"),(0,o.kt)("p",null,"finally open the editor inside a folder of your choice"),(0,o.kt)("p",null,"i have ",(0,o.kt)("inlineCode",{parentName:"p"},"created a folder called css crash course")),(0,o.kt)("p",null,"and i've opened vs code inside the folder"),(0,o.kt)("p",null,"here i'm going to create a new html file\n",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")),(0,o.kt)("p",null,"type exclamation and tab to generate a simple html document"),(0,o.kt)("p",null,"within the body tag add an h1 tag that\nsays css crash course"),(0,o.kt)("p",null,"this pretty much is all the setup we have to do"),(0,o.kt)("p",null,"if you reveal this file in file explorer\nand open index.html in the browser you should see the text as expected\nnow we are ready to learn css"))}u.isMDXComponent=!0}}]);