"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[9693],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>h});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=t.createContext({}),c=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(m.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=c(a),d=r,h=l["".concat(m,".").concat(d)]||l[d]||u[d]||o;return a?t.createElement(h,s(s({ref:n},p),{},{components:a})):t.createElement(h,s({ref:n},p))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[l]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6718:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=a(7462),r=(a(7294),a(3905));const o={sidebar_position:9},s="map() Method",i={unversionedId:"3 Javascript/iteration-array-methods-docs/map",id:"3 Javascript/iteration-array-methods-docs/map",title:"map() Method",description:"The map() creates a new array populated with the results of calling a provided function on every element in the array.",source:"@site/docs/3 Javascript/05-iteration-array-methods-docs/09-map.md",sourceDirName:"3 Javascript/05-iteration-array-methods-docs",slug:"/3 Javascript/iteration-array-methods-docs/map",permalink:"/fundamentals/3 Javascript/iteration-array-methods-docs/map",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Filter() Method",permalink:"/fundamentals/3 Javascript/iteration-array-methods-docs/filter"},next:{title:"reduce() Method",permalink:"/fundamentals/3 Javascript/iteration-array-methods-docs/reduce"}},m={},c=[{value:"Using forEach()",id:"using-foreach",level:3},{value:"Using map() with an array of objects",id:"using-map-with-an-array-of-objects",level:3},{value:"Chaining map Methods",id:"chaining-map-methods",level:3},{value:"Chaining With Other Methods",id:"chaining-with-other-methods",level:3}],p={toc:c},l="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(l,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"map-method"},"map() Method"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," creates a new array populated with the results of calling a provided function on every element in the array."),(0,r.kt)("p",null,"Let's look at a simple example where we have an array, and we want to create a new array with each number multiplied by 2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const numbers = [1, 2, 3, 4, 5]\n\nconst doubledNumbers = numbers.map((number) => number * 2)\n\nconsole.log(doubledNumbers) // [2, 4, 6, 8, 10]\n")),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," method returns a new array, we can assign the result to a variable and use it later."),(0,r.kt)("h3",{id:"using-foreach"},"Using forEach()"),(0,r.kt)("p",null,"Let's do the same thing using the ",(0,r.kt)("inlineCode",{parentName:"p"},"forEach()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const doubledNumbers2 = []\n\nnumbers.forEach((number) => {\n  doubledNumbers2.push(number * 2)\n})\n\nconsole.log(doubledNumbers2) // [2, 4, 6, 8, 10]\n")),(0,r.kt)("p",null,"You can see ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," is cleaner and more concise than ",(0,r.kt)("inlineCode",{parentName:"p"},"forEach()"),"."),(0,r.kt)("h3",{id:"using-map-with-an-array-of-objects"},"Using map() with an array of objects"),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," to transform an array of objects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const companies = [\n  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },\n  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },\n  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },\n  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },\n  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },\n  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },\n  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },\n  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },\n  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },\n]\n")),(0,r.kt)("p",null,"Let's create an array of company names:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const companyNames = companies.map((company) => company.name)\n\nconsole.log(companyNames)\n// ['Company One', 'Company Two', 'Company Three', 'Company Four', 'Company Five', 'Company Six', 'Company Seven', 'Company Eight', 'Company Nine']\n")),(0,r.kt)("p",null,"Let's create an array of new objects with just the name and category properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const companyInfo = companies.map((company) => {\n  return {\n    name: company.name,\n    category: company.category,\n  };\n}\n")),(0,r.kt)("p",null,"Let's create an array of objects with the name and the length of each company in years:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const companyYears = companies.map((company) => {\n  return {\n    name: company.name,\n    length: company.end - company.start + ' years',\n  }\n})\n")),(0,r.kt)("h3",{id:"chaining-map-methods"},"Chaining map Methods"),(0,r.kt)("p",null,"We can chain methods together to create a more complex result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const squareAndDouble = numbers.map((number) => Math.sqrt(number)).map((number) => number * 2)\n\nconsole.log(squareAndDouble)\n// [2, 2.8284271247461903, 3.4641016151377544, 4, 4.47213595499958]\n")),(0,r.kt)("p",null,"If the shorthand syntax is confusing you, this is the same as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const squareAndDouble2 = numbers\n  .map(function (number) {\n    return Math.sqrt(number)\n  })\n  .map(function (number) {\n    return number * 2\n  })\n\nconsole.log(squareAndDouble2)\n// [2, 2.8284271247461903, 3.4641016151377544, 4, 4.47213595499958]\n")),(0,r.kt)("h3",{id:"chaining-with-other-methods"},"Chaining With Other Methods"),(0,r.kt)("p",null,"We can chain different methods together to create more complex functionality. Let's say that we want to filter the even numbers and then double them, we can chain ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filter()")," together:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const evenDouble = numbers.filter((number) => number % 2 === 0).map((number) => number * 2)\n\nconsole.log(evenDouble) // [4, 8, 12, 16, 20]\n")))}u.isMDXComponent=!0}}]);