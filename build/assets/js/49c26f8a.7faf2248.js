"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[3792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||l;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:a,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const l={sidebar_position:3},i="While Loops & Do While Loops",r={unversionedId:"3 Javascript/iteration-array-methods-docs/while-do-while-loop",id:"3 Javascript/iteration-array-methods-docs/while-do-while-loop",title:"While Loops & Do While Loops",description:"In the last video, we looked at for loops, which are used to iterate over a block of code until a condition is met. A while and do while loop does the same thing using a different syntax. They work a bit different as well.",source:"@site/docs/3 Javascript/05-iteration-array-methods-docs/03-while-do-while-loop.md",sourceDirName:"3 Javascript/05-iteration-array-methods-docs",slug:"/3 Javascript/iteration-array-methods-docs/while-do-while-loop",permalink:"/fundamentals/3 Javascript/iteration-array-methods-docs/while-do-while-loop",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Break & Continue",permalink:"/fundamentals/3 Javascript/iteration-array-methods-docs/break-and-continue"},next:{title:"FizzBuzz Challenge",permalink:"/fundamentals/3 Javascript/iteration-array-methods-docs/fizzbuzz-challenge"}},s={},p=[{value:"While Loop Syntax",id:"while-loop-syntax",level:3},{value:"Looping Over Arrays",id:"looping-over-arrays",level:3},{value:"Nested While Loops",id:"nested-while-loops",level:3},{value:"Do While Loops",id:"do-while-loops",level:3}],d={toc:p},h="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"while-loops--do-while-loops"},"While Loops & Do While Loops"),(0,a.kt)("p",null,"In the last video, we looked at ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loops, which are used to iterate over a block of code until a condition is met. A ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"do while")," loop does the same thing using a different syntax. They work a bit different as well."),(0,a.kt)("h3",{id:"while-loop-syntax"},"While Loop Syntax"),(0,a.kt)("p",null,"The syntax for a while loop is very similar in many languages. The syntax is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"while ([conditionExpression]) {\n  statement\n}\n")),(0,a.kt)("p",null,"There are a few differences between the ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop, which we have already talked about, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," loop."),(0,a.kt)("p",null,"In a ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," loop, the variable is initialized before the loop runs and it is initialized outside of the loop."),(0,a.kt)("p",null,"Let's look at a simple example and print Number 1-10, like we did with the ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let i = 0\n\nwhile (i <= 20) {\n  console.log('Number ' + i)\n  i++\n}\n")),(0,a.kt)("p",null,"For many cases, you could use a ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop and achieve the same result, but a rule that many programmers follow is to use a ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop when you know the number of times you want to run the loop and use a ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," loop when the number of times the loop will run is unknown. That is not a mandatory convention, but something that a lot of people do."),(0,a.kt)("h3",{id:"looping-over-arrays"},"Looping Over Arrays"),(0,a.kt)("p",null,"We can loop over arrays with ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," loops as well"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [10, 20, 30, 40]\n\nlet i = 0\n\nwhile (i < arr.length) {\n  console.log(arr[i])\n  i++\n}\n")),(0,a.kt)("h3",{id:"nested-while-loops"},"Nested While Loops"),(0,a.kt)("p",null,"We can nest ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," loops to create a loop that runs a loop inside of a loop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let i = 1\n\nwhile (i <= 10) {\n  console.log('Number ' + i)\n  let j = 1\n  while (j <= 10) {\n    console.log(i + ' * ' + j + ' = ' + i * j)\n    j++\n  }\n  i++\n}\n")),(0,a.kt)("h3",{id:"do-while-loops"},"Do While Loops"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"do while")," loop is a little different from the ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," loop. The ",(0,a.kt)("inlineCode",{parentName:"p"},"do while")," loop will always run at least once, even if the condition is false."),(0,a.kt)("p",null,'So the answer to the question, "when would I want to use a ',(0,a.kt)("inlineCode",{parentName:"p"},"do while"),' loop?" is when you ',(0,a.kt)("strong",{parentName:"p"},"always")," want to run the block of code at least once."),(0,a.kt)("p",null,"The syntax for a ",(0,a.kt)("inlineCode",{parentName:"p"},"do while")," loop is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"do {\n  statement\n} while ([conditionExpression])\n")),(0,a.kt)("p",null,"Let's look at a simple example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let i = 1\n\ndo {\n  console.log('Number ' + i)\n  i++\n} while (i <= 20)\n")),(0,a.kt)("p",null,"Now let's change the ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," value to 21. This means that the condition expression is never met, however, the console.log() will run at least once, even if the condition is false."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let i = 21\n\ndo {\n  console.log('Number ' + i)\n  i++\n} while (i <= 20)\n")),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"break")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"continue")," statements with while and do while loops."))}c.isMDXComponent=!0}}]);