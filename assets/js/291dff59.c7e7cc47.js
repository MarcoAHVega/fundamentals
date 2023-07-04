"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[4932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,b=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:9},l="Object Challenge",i={unversionedId:"3 Javascript/arrays-and-objects-docs/object-challenge",id:"3 Javascript/arrays-and-objects-docs/object-challenge",title:"Object Challenge",description:"Step 1",source:"@site/docs/3 Javascript/02-arrays-and-objects-docs/09-object-challenge.md",sourceDirName:"3 Javascript/02-arrays-and-objects-docs",slug:"/3 Javascript/arrays-and-objects-docs/object-challenge",permalink:"/fundamentals/3 Javascript/arrays-and-objects-docs/object-challenge",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"An Intro to JSON",permalink:"/fundamentals/3 Javascript/arrays-and-objects-docs/json-intro"},next:{title:"React 18",permalink:"/fundamentals/category/react-18"}},s={},p=[{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Step 1 Solution",id:"step-1-solution",level:3},{value:"Step 2 Solution",id:"step-2-solution",level:3},{value:"Step 4 Solution",id:"step-4-solution",level:3},{value:"Step 4 Solution",id:"step-4-solution-1",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"object-challenge"},"Object Challenge"),(0,r.kt)("h3",{id:"step-1"},"Step 1"),(0,r.kt)("p",null,"Create an array of objects called ",(0,r.kt)("inlineCode",{parentName:"p"},"library"),". Add 3 objects with a property of ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),". Title and author should be strings (whatever value you want) and status should be another object with the properties of ",(0,r.kt)("inlineCode",{parentName:"p"},"own"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"reading")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read"),". Which should all be boolean values. For all status, set ",(0,r.kt)("inlineCode",{parentName:"p"},"own")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"reading")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," to false."),(0,r.kt)("h3",{id:"step-2"},"Step 2"),(0,r.kt)("p",null,"You finished reading all of the books. Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," value for all of them to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Do not edit the initial object. Set the values using dot notation."),(0,r.kt)("h3",{id:"step-3"},"Step 3"),(0,r.kt)("p",null,"Destructure the title from the first book and rename the variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"firstBook")),(0,r.kt)("h3",{id:"step-4"},"Step 4"),(0,r.kt)("p",null,"Turn the library object into a JSON string. There is a specific function that we looked at in the last section that we can use to do this."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click For Solution"),(0,r.kt)("h3",{id:"step-1-solution"},"Step 1 Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const library = [\n  {\n    title: 'The Road Ahead',\n    author: 'Bill Gates',\n    status: {\n      own: true,\n      reading: true,\n      read: false,\n    },\n  },\n  {\n    title: 'Steve Jobs',\n    author: 'Walter Isaacson',\n    status: {\n      own: true,\n      reading: false,\n      read: false,\n    },\n  },\n  {\n    title: 'Mockingjay: The Final Book of The Hunger Games',\n    author: 'Suzanne Collins',\n    status: {\n      own: true,\n      reading: false,\n      read: true,\n    },\n  },\n]\n")),(0,r.kt)("h3",{id:"step-2-solution"},"Step 2 Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"library[0].status.read = true\nlibrary[1].status.read = true\nlibrary[3].status.read = true\n")),(0,r.kt)("h3",{id:"step-4-solution"},"Step 4 Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { title: firstBook } = library[0]\nconsole.log(firstBook)\n")),(0,r.kt)("h3",{id:"step-4-solution-1"},"Step 4 Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const libraryJSON = JSON.stringify(library)\nconsole.log(libraryJSON)\n"))))}d.isMDXComponent=!0}}]);