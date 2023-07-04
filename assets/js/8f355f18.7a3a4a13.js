"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[3840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(r),d=n,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var i=2;i<s;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const s={sidebar_position:7},o="Destructuring & Naming",l={unversionedId:"3 Javascript/arrays-and-objects-docs/destructuring-naming",id:"3 Javascript/arrays-and-objects-docs/destructuring-naming",title:"Destructuring & Naming",description:"Variables with the same name",source:"@site/docs/3 Javascript/02-arrays-and-objects-docs/07-destructuring-naming.md",sourceDirName:"3 Javascript/02-arrays-and-objects-docs",slug:"/3 Javascript/arrays-and-objects-docs/destructuring-naming",permalink:"/fundamentals/3 Javascript/arrays-and-objects-docs/destructuring-naming",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Object Nesting, spreading, methods and more",permalink:"/fundamentals/3 Javascript/arrays-and-objects-docs/object-spread-methods"},next:{title:"An Intro to JSON",permalink:"/fundamentals/3 Javascript/arrays-and-objects-docs/json-intro"}},c={},i=[{value:"Variables with the same name",id:"variables-with-the-same-name",level:3},{value:"Destructuring an object",id:"destructuring-an-object",level:3},{value:"Destructuring an array",id:"destructuring-an-array",level:3},{value:"The rest operator",id:"the-rest-operator",level:3}],u={toc:i},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"destructuring--naming"},"Destructuring & Naming"),(0,n.kt)("h3",{id:"variables-with-the-same-name"},"Variables with the same name"),(0,n.kt)("p",null,"In some cases, we may have a variable that we want to add as an object property value. If a property name (key) is the same as the variable name for the value, we can withdraw the variable name of the value. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const firstName = 'John'\nconst lastName = 'Doe'\nconst age = 30\n")),(0,n.kt)("p",null,"Here I will put the variables above as the values for each property of the object. I will use the same variable names as the property names."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const person = {\n  firstName: firstName\n  lastName: lastName\n  age: age\n};\n")),(0,n.kt)("p",null,"We can shorten this code by removing the variable names from the property values. The variable names are the same as the property names, so we can remove them."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const person = {\n  firstName\n  lastName\n  age\n};\n")),(0,n.kt)("h3",{id:"destructuring-an-object"},"Destructuring an object"),(0,n.kt)("p",null,"Destructuring allows us to pull values/variables out of an object"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const todo = {\n  id: 1,\n  title: 'Take out trash',\n}\n\nconst { id, title } = todo\n\nconsole.log(id, title) // 1, 'take out the trash'\n")),(0,n.kt)("p",null,"We can also go multiple levels deep:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const todo = {\n  id: 1,\n  title: 'Take out trash',\n  user: {\n    name: 'John',\n  },\n}\n\nconst {\n  user: { name },\n} = todo\n\nconsole.log(name) // John\n")),(0,n.kt)("p",null,"If we want to rename the properties, we can do that too:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { id: todoId } = todo\n\nconsole.log(todoId) // 1\n")),(0,n.kt)("h3",{id:"destructuring-an-array"},"Destructuring an array"),(0,n.kt)("p",null,"We can also destructure arrays. I personally don't destructure arrays as much as I do objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const numbers = [10, 20, 30, 40]\n\nconst [firstNumber, secondNumber] = numbers\n\nconsole.log(firstNumber, secondNumber) // 10, 20\n")),(0,n.kt)("h3",{id:"the-rest-operator"},"The rest operator"),(0,n.kt)("p",null,"The spread operator (...) can be used here, but in this situation, we call it the ",(0,n.kt)("inlineCode",{parentName:"p"},"rest operator"),'. It puts the "rest" of the values in an array'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const [firstNumber, secondNumber, ...rest] = numbers\n\nconsole.log(rest) // [30, 40]\n")))}m.isMDXComponent=!0}}]);