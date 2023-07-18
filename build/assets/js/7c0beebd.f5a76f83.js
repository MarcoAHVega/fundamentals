"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[7793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},i),{},{components:n})):r.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},l="Calculator Challenge",c={unversionedId:"3 Javascript/logic-control-scope-docs/calculator-challenge",id:"3 Javascript/logic-control-scope-docs/calculator-challenge",title:"Calculator Challenge",description:"Now that you know how to write functions and use control structures like if statements and switches, let's try to write a simple calculator.",source:"@site/docs/3 Javascript/04-logic-control-scope-docs/04-calculator-challenge.md",sourceDirName:"3 Javascript/04-logic-control-scope-docs",slug:"/3 Javascript/logic-control-scope-docs/calculator-challenge",permalink:"/fundamentals/3 Javascript/logic-control-scope-docs/calculator-challenge",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Switches",permalink:"/fundamentals/3 Javascript/logic-control-scope-docs/switches"},next:{title:"Truthy & Falsy Values",permalink:"/fundamentals/3 Javascript/logic-control-scope-docs/truthy-falsy"}},s={},u=[],i={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calculator-challenge"},"Calculator Challenge"),(0,a.kt)("p",null,"Now that you know how to write functions and use control structures like if statements and switches, let's try to write a simple calculator."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instructions:")),(0,a.kt)("p",null,"Create a function called ",(0,a.kt)("inlineCode",{parentName:"p"},"calculator")," that takes three parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"num1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"num2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"operator"),". The operator can be ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),". The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"calculator(5, 2, '+') // returns 7\ncalculator(5, 2, '-') // returns 3\ncalculator(5, 2, '*') // returns 10\ncalculator(5, 2, '/') // returns 2.5\ncalculator(5, 2, '%') // returns an error message\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hint:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can use an if statement to the operator, but this is a good example for using a switch statement.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Click For Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function calculator(num1, num2, operator) {\n  let result\n  switch (operator) {\n    case '+':\n      result = num1 + num2\n      break\n    case '-':\n      result = num1 - num2\n      break\n    case '*':\n      result = num1 * num2\n      break\n    case '/':\n      result = num1 / num2\n      break\n    default:\n      result = 'Invalid operator'\n  }\n  console.log(result)\n  return result\n}\n\ncalculator(3, 4, '*') // returns 12\n"))))}m.isMDXComponent=!0}}]);