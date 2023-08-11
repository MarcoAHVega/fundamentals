"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[903],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(a),m=o,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(b,s(s({ref:t},p),{},{components:a})):n.createElement(b,s({ref:t},p))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<r;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:6},s="Object Nesting, spreading, methods and more",l={unversionedId:"3 Javascript/arrays-and-objects-docs/object-spread-methods",id:"3 Javascript/arrays-and-objects-docs/object-spread-methods",title:"Object Nesting, spreading, methods and more",description:"So we saw how to create object literals in JavaScript. I want to go a bit deeper and look at nesting, the spread operator as well as some static methods on the Object constructor.",source:"@site/docs/3 Javascript/02-arrays-and-objects-docs/06-object-spread-methods.md",sourceDirName:"3 Javascript/02-arrays-and-objects-docs",slug:"/3 Javascript/arrays-and-objects-docs/object-spread-methods",permalink:"/fundamentals/3 Javascript/arrays-and-objects-docs/object-spread-methods",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Object Literals",permalink:"/fundamentals/3 Javascript/arrays-and-objects-docs/object-literals"},next:{title:"Destructuring & Naming",permalink:"/fundamentals/3 Javascript/arrays-and-objects-docs/destructuring-naming"}},c={},i=[{value:"Nesting objects",id:"nesting-objects",level:3},{value:"Spread operator",id:"spread-operator",level:3},{value:"Object.assign()",id:"objectassign",level:3},{value:"Arrays of objects",id:"arrays-of-objects",level:3},{value:"Object methods",id:"object-methods",level:3},{value:"keys()",id:"keys",level:3},{value:"Getting the length of an object",id:"getting-the-length-of-an-object",level:3},{value:"values()",id:"values",level:3},{value:"entries()",id:"entries",level:3},{value:"hasOwnProperty()",id:"hasownproperty",level:3}],p={toc:i},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"object-nesting-spreading-methods-and-more"},"Object Nesting, spreading, methods and more"),(0,o.kt)("p",null,"So we saw how to create object literals in JavaScript. I want to go a bit deeper and look at nesting, the spread operator as well as some static methods on the Object constructor."),(0,o.kt)("p",null,"First, I do want to show you another way of creating objects that you may run into and that is by using the Object constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const todo = new Object()\n// Same as\nconst todo = {}\n")),(0,o.kt)("p",null,"We can add properties to the object using dot notation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"todo.id = 1\ntodo.title = 'Buy milk'\ntodo.completed = false\n")),(0,o.kt)("p",null,"Later on when we get more into OOP, I'll show you how we can create our own object constructors that we can use to create multiple instances of the same object. So that we can do something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const todo1 = new Todo()\n")),(0,o.kt)("p",null,"For now, we'll stick with static object literals."),(0,o.kt)("h3",{id:"nesting-objects"},"Nesting objects"),(0,o.kt)("p",null,"We can put objects inside other objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const person = {\n  address: {\n    coords: {\n      lat: 42.3601,\n      lng: -71.0589,\n    },\n  },\n}\n")),(0,o.kt)("p",null,"If we want to access nested objects, we simply use dot notation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"person.address.coords.lat\n")),(0,o.kt)("h3",{id:"spread-operator"},"Spread operator"),(0,o.kt)("p",null,"The spread operator is used to ",(0,o.kt)("strong",{parentName:"p"},"spread")," across object properties into a new object. Let's first look at another example of nesting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const obj1 = { a: 1, b: 2 }\nconst obj2 = { c: 1, d: 4 }\n\nconst obj3 = { obj1, obj2 } // { { a: 1, b: 2 }, { c: 1, d: 4 } }\n")),(0,o.kt)("h3",{id:"objectassign"},"Object.assign()"),(0,o.kt)("p",null,"We can do the same thing we did with the spread operator with the Object.assign() method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const obj1 = { a: 1, b: 2 }\nconst obj2 = { c: 1, d: 4 }\n\nconst obj3 = Object.assign({}, obj1, obj2) // { a: 1, b: 2, c: 1, d: 4 }\n")),(0,o.kt)("p",null,"The first param we pass in is an empty object, then each one after is an object we want to spread into the empty object."),(0,o.kt)("p",null,"In the code above, we are simply nesting. We can use the spread operator to spread the properties instead of just nesting the entire object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const obj3 = { ...obj1, ...obj2 } // { a: 1, b: 2, c: 1, d: 4 }\n")),(0,o.kt)("h3",{id:"arrays-of-objects"},"Arrays of objects"),(0,o.kt)("p",null,"In many cases, you will be dealing with arrays of objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const people = [\n  { id: 1, name: 'John' },\n  { id: 2, name: 'Sara' },\n  { id: 3, name: 'Mike' },\n]\n")),(0,o.kt)("p",null,"We can access the name ",(0,o.kt)("strong",{parentName:"p"},"Sara")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"people[1].name // Sara\n")),(0,o.kt)("h3",{id:"object-methods"},"Object methods"),(0,o.kt)("p",null,"The Object() constructor has some helpful methods that we can use, just like the ",(0,o.kt)("inlineCode",{parentName:"p"},"Number()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"String()")," constructors. We already looked at ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()"),", let's look at some others."),(0,o.kt)("h3",{id:"keys"},"keys()"),(0,o.kt)("p",null,"Get an array of all the keys in an object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Object.keys(person) // ['name', 'age', 'address']\n")),(0,o.kt)("h3",{id:"getting-the-length-of-an-object"},"Getting the length of an object"),(0,o.kt)("p",null,"We can't use the ",(0,o.kt)("inlineCode",{parentName:"p"},"length")," property directly on an object. If I do the following, it will look for a 'length' property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"person.length // undefined\n")),(0,o.kt)("p",null,"However, we can first get the keys of the object and then use the length property on the keys array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Object.keys(person).length // 3\n")),(0,o.kt)("h3",{id:"values"},"values()"),(0,o.kt)("p",null,"We can get an array of all the values in an object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Object.values(person) // [ 'John', 30, { address } ]\n")),(0,o.kt)("h3",{id:"entries"},"entries()"),(0,o.kt)("p",null,"Get an array of key/value pairs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Object.entries(person) // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'address', { address } ] ]\n")),(0,o.kt)("h3",{id:"hasownproperty"},"hasOwnProperty()"),(0,o.kt)("p",null,"Get a boolean indicating if the object has the property"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"person.hasOwnProperty('name') // true\n")))}u.isMDXComponent=!0}}]);