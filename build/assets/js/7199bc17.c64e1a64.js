"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[8389],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:7},i="Arrow Functions",s={unversionedId:"3 Javascript/functions-scope-docs/arrow-functions",id:"3 Javascript/functions-scope-docs/arrow-functions",title:"Arrow Functions",description:"Arrow functions were introduced in ES6 or ES2015. They are a shorter syntax for writing functions with some advantages such as being more compact, implicit returns and lexical scope. Let's look at the syntax.",source:"@site/docs/3 Javascript/03-functions-scope-docs/07-arrow-functions.md",sourceDirName:"3 Javascript/03-functions-scope-docs",slug:"/3 Javascript/functions-scope-docs/arrow-functions",permalink:"/fundamentals/3 Javascript/functions-scope-docs/arrow-functions",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Function Declaration vs Function Expression",permalink:"/fundamentals/3 Javascript/functions-scope-docs/declaration-vs-expression"},next:{title:"Immediately Invoked Function Expressions (IIFE)",permalink:"/fundamentals/3 Javascript/functions-scope-docs/immediately-invoked-functions"}},l={},c=[{value:"Implicit Return",id:"implicit-return",level:3},{value:"Returning an object literal",id:"returning-an-object-literal",level:3},{value:"Single argument shorthand",id:"single-argument-shorthand",level:3},{value:"Anonymous Functions",id:"anonymous-functions",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arrow-functions"},"Arrow Functions"),(0,r.kt)("p",null,"Arrow functions were introduced in ",(0,r.kt)("strong",{parentName:"p"},"ES6")," or ",(0,r.kt)("strong",{parentName:"p"},"ES2015"),". They are a shorter syntax for writing functions with some advantages such as being more compact, implicit returns and lexical scope. Let's look at the syntax."),(0,r.kt)("p",null,"First off, let's look at a simple traditional function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function add(a, b) {\n  return a + b\n}\n\nadd(1, 2) // 3\n")),(0,r.kt)("p",null,"Now let's look at the same thing written as an arrow function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const add = (a, b) => {\n  return a + b\n}\n\nadd(1, 2) // 3\n")),(0,r.kt)("p",null,"There are a few things to note here. First, we took away the ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," keyword and instead added a variable declaration. This is because arrow functions are always anonymous functions so we need to assign them to a variable in this case."),(0,r.kt)("p",null,"Secondly, we added what we call a ",(0,r.kt)("inlineCode",{parentName:"p"},"fat arrow")," to the function, which is an equal sign and a greater-than sign. Sometimes, arrow functions are reffered to as ",(0,r.kt)("inlineCode",{parentName:"p"},"fat-arrow functions"),"."),(0,r.kt)("h3",{id:"implicit-return"},"Implicit Return"),(0,r.kt)("p",null,"We can actually shorten this particular function a bit more, because it only has one line of code that is a single expression. In this case, we can remove the curly braces and the return statement. If there were multiple lines of code (statements), we would need to add the curly braces and the return statement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const add = (a, b) => a + b\n\nadd(1, 2) // 3\n")),(0,r.kt)("p",null,"Instead of explicitly returning the result, ",(0,r.kt)("inlineCode",{parentName:"p"},"a + b")," will be returned implcitly. When we don't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," keyword, it is called an ",(0,r.kt)("strong",{parentName:"p"},"implicit return"),". If there were more than one line of code in the function, we would have to use the curly braces and the ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," keyword."),(0,r.kt)("h3",{id:"returning-an-object-literal"},"Returning an object literal"),(0,r.kt)("p",null,"Where you can run into an issue with implicit returns is when you want to return an object literal."),(0,r.kt)("p",null,"Be sure that you use parenthises around the curly braces if you want to return an object literal implicitly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const createObj = () => ({ name: 'John' })\n")),(0,r.kt)("h3",{id:"single-argument-shorthand"},"Single argument shorthand"),(0,r.kt)("p",null,"Another cool feature of arrow functions is that we can remove the parenthises around the argument if it is a single argument."),(0,r.kt)("p",null,"If you are using VS Code with prettier as I am, it may add the parenthises automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const add10 = (a) => a + 10\n\nadd10(1) // 11\n")),(0,r.kt)("h3",{id:"anonymous-functions"},"Anonymous Functions"),(0,r.kt)("p",null,"Many times we don't want to use a named function, but instead want to use an anonymous function. This is useful when we want to use a function as a callback. We can use an arrow function in this case as well."),(0,r.kt)("p",null,"I know we have not gone over high order array methods like forEach() yet (we will very soon), but just to give you an idea of how this works. Let's create an array with some numbers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const numbers = [1, 2, 3, 4, 5]\n")),(0,r.kt)("p",null,"The forEach() method can be used to iterate over an array. It takes a callback function as an argument. The callback function will be called for each element in the array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"numbers.forEach(function (number) {\n  console.log(number)\n})\n")),(0,r.kt)("p",null,"To shorten this to one line, we can use an arrow function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"numbers.forEach((number) => console.log(number))\n")))}d.isMDXComponent=!0}}]);