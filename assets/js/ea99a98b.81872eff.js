"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[6408],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(y,l(l({ref:t},c),{},{components:a})):n.createElement(y,l({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2113:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},l="Data Types",s={unversionedId:"3 Javascript/variables-data-types-docs/data-types",id:"3 Javascript/variables-data-types-docs/data-types",title:"Data Types",description:"Primitive types vs reference types",source:"@site/docs/3 Javascript/01-variables-data-types-docs/04-data-types.md",sourceDirName:"3 Javascript/01-variables-data-types-docs",slug:"/3 Javascript/variables-data-types-docs/data-types",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/data-types",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/variables"},next:{title:"Stack vs Heap Memory Allocation",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/stack_heap"}},o={},p=[{value:"Primitive types vs reference types",id:"primitive-types-vs-reference-types",level:3},{value:"Primitive Data Types",id:"primitive-data-types",level:3},{value:"Dynamic vs Static Types",id:"dynamic-vs-static-types",level:3},{value:"Assigning Variables",id:"assigning-variables",level:3},{value:"String",id:"string",level:3},{value:"Number",id:"number",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Null",id:"null",level:3},{value:"Undefined",id:"undefined",level:3},{value:"Symbol",id:"symbol",level:3},{value:"BigInt",id:"bigint",level:3},{value:"typeof Operator",id:"typeof-operator",level:3},{value:"Reference Data Types (Objects)",id:"reference-data-types-objects",level:3},{value:"Arrays",id:"arrays",level:3},{value:"Object Literals",id:"object-literals",level:3},{value:"Functions",id:"functions",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-types"},"Data Types"),(0,r.kt)("h3",{id:"primitive-types-vs-reference-types"},"Primitive types vs reference types"),(0,r.kt)("p",null,"When we create a variable, the data that we define has a type. There are ",(0,r.kt)("inlineCode",{parentName:"p"},"primitive types")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"reference types"),". The big difference under the hood is the way that they're stored and accessed from memory."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Primitive Types")," - Stored directly in the location that the variables is accessed"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Reference Types (Objects)")," - Accessed by reference")),(0,r.kt)("h3",{id:"primitive-data-types"},"Primitive Data Types"),(0,r.kt)("p",null,"That may not make much sense right now, but in the next video I'm going to go more in depth on how this works under the hood. So first well talk about the 7 primitive types of JavaScript."),(0,r.kt)("p",null,"The 7 primitive data types are the following"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")," - a sequence of characters. In JavaScript, strings can be enclosed within the single or double quotes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Number")," - Represent both integer and floating-point numbers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean")," - Represent a logical entity and can have two values: true or false"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Null")," - Represents the intentional absence of any object value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Undefined")," - A variable that has not been assigned a value is undefined."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Symbol")," - It is a built-in object whose constructor returns a symbol-that is unique"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BigInt")," - New data type used for numbers that are greater than the Number type can handle.")),(0,r.kt)("h3",{id:"dynamic-vs-static-types"},"Dynamic vs Static Types"),(0,r.kt)("p",null,'JavaScript is a "dynamically-typed" language. This means that when we create a variable or a function, we don\'t explicitly assign the type. JavaScript assigns the type of that value dynamically. In other words, the type is associated with the ',(0,r.kt)("strong",{parentName:"p"},"value"),", not the ",(0,r.kt)("strong",{parentName:"p"},"variable"),". So you can have a variable value be a string and then later in the script, change it to a number. You probably won't do that very often, but you can."),(0,r.kt)("p",null,'There are other languages that are "statically-typed". This is where you would explicitly define the type of data. Java is an example of a statically-typed language. There\'s also a language called TypeScript, which is essentially JavaScript with some extra features, including types. So is TypeScript, you could do this.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-TypeScript"},"const y:number = 100\n")),(0,r.kt)("p",null,"You can see we defined it as a ",(0,r.kt)("strong",{parentName:"p"},"number"),". So now that ",(0,r.kt)("strong",{parentName:"p"},"y")," variable's value HAS to always be a number."),(0,r.kt)("p",null,"This is not something we can do with vanilla JavaScript. The advantage of static types is that it makes your code more robust and less prone to errors. The downside is you need to write a bit more code."),(0,r.kt)("h3",{id:"assigning-variables"},"Assigning Variables"),(0,r.kt)("h3",{id:"string"},"String"),(0,r.kt)("p",null,'A string is a "string" of characters wrapped in either single or double quotes. Strings can include any number, letter or symbol'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const firstName = 'Sara'\n")),(0,r.kt)("h3",{id:"number"},"Number"),(0,r.kt)("p",null,"Any number in JavaScript is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Number")," type, including floats and decimals. Some languages have separate types for floats and integers. JavaScript does not. Numbers are not wrapped in quotes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const age = 30\nconst temp = 98.9\n")),(0,r.kt)("h3",{id:"boolean"},"Boolean"),(0,r.kt)("p",null,"A boolean is a true or false value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const hasKids = true\n")),(0,r.kt)("h3",{id:"null"},"Null"),(0,r.kt)("p",null,"Intentional absence"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const aptNumber = null\n")),(0,r.kt)("h3",{id:"undefined"},"Undefined"),(0,r.kt)("p",null,"Undefined represents a variable that has not been defined a value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let score\nconst score = undefined\n")),(0,r.kt)("h3",{id:"symbol"},"Symbol"),(0,r.kt)("p",null,"A \u201csymbol\u201d represents a unique identifier. We will talk more about what they are used for later, but this is how we can create one"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const id = Symbol('id')\n")),(0,r.kt)("h3",{id:"bigint"},"BigInt"),(0,r.kt)("p",null,"BigInt is a new primitive type and represents integers that are out of the range of the Number type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const n = 9007199254740991n\n")),(0,r.kt)("h3",{id:"typeof-operator"},"typeof Operator"),(0,r.kt)("p",null,"To check the type of a variable in JavaScript, you can use the typeof operator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(typeof name)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tip:")," If you run typeof on a variable that holds ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", you will not get null, you will get ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),". This is generally regarded as a mistake. More info ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null"},"here")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(typeof aptNumber)\n")),(0,r.kt)("h3",{id:"reference-data-types-objects"},"Reference Data Types (Objects)"),(0,r.kt)("p",null,"We talked about the primitive data types that are stored directly in memory where they are accessed. Reference types work a little differently under the hood. There are basically 3 types that are passed by reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Arrays")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Objects"))),(0,r.kt)("p",null,'Technically, these are all "objects", meaning that they have properties and methods.'),(0,r.kt)("p",null,'Reference types or "objects" are a non-primitive value and when assigned to a variable, the variable is given a ',(0,r.kt)("strong",{parentName:"p"},"reference")," to that value. The reference points to the object's location in memory. Unlike primitives, where the variable contains the actual value. I'll talk more about this in the next video."),(0,r.kt)("h3",{id:"arrays"},"Arrays"),(0,r.kt)("p",null,"I know we haven't gone over arrays yet so don't worry if you've never worked with them. They're essentially a data structure that can hold multiple values."),(0,r.kt)("p",null,"So if we write"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const numbers = [1, 2, 3, 4]\n")),(0,r.kt)("p",null,"We have created an array in memory and a variable that points to the address or location of that array."),(0,r.kt)("h3",{id:"object-literals"},"Object Literals"),(0,r.kt)("p",null,"Objects are comma separated lists of ",(0,r.kt)("inlineCode",{parentName:"p"},"name-value pairs"),". We'll get into them later, but just to give you an example here"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  name: 'John',\n  age: 30\n}\n")),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Functions are also objects in JavaScript. They can have ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"methods"),". What distinguishes them from other objects is that they can be called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const sayHello = function () {\n  return 'Hello'\n}\n\nsayHello()\n")),(0,r.kt)("p",null,'If we check the type with typeof, we\'ll get "object" for arrays and object literals, but we actually get "function" for a function. This is still an object, it\'s just identified as a function object, which can be called as you can see ',(0,r.kt)("a",{parentName:"p",href:"https://262.ecma-international.org/5.1/#sec-11.4.3"},"here")))}d.isMDXComponent=!0}}]);