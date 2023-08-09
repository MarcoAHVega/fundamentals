"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[7530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:8},s="Type Coercion",l={unversionedId:"3 Javascript/variables-data-types-docs/type-coercion",id:"3 Javascript/variables-data-types-docs/type-coercion",title:"Type Coercion",description:"Type Coercion is when data types are converted implicitly by JavaScript.",source:"@site/docs/3 Javascript/01-variables-data-types-docs/08-type-coercion.md",sourceDirName:"3 Javascript/01-variables-data-types-docs",slug:"/3 Javascript/variables-data-types-docs/type-coercion",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/type-coercion",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Operators & Arithmetic",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/operators"},next:{title:"Working with Strings",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/strings"}},i={},p=[{value:"Type Coercion is when data types are converted implicitly by JavaScript.",id:"type-coercion-is-when-data-types-are-converted-implicitly-by-javascript",level:3},{value:"Typically coercion happens when you apply operators to values of different types.",id:"typically-coercion-happens-when-you-apply-operators-to-values-of-different-types",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"type-coercion"},"Type Coercion"),(0,r.kt)("h3",{id:"type-coercion-is-when-data-types-are-converted-implicitly-by-javascript"},"Type Coercion is when data types are converted implicitly by JavaScript."),(0,r.kt)("p",null,"Although the conversion that we did in the previous video can also be called explicit coercion. There's so many different words for the same thing in programming."),(0,r.kt)("p",null,"Anyway, there are a few situations where implicit coercion can occur. For the most part, you have 3 types of coercion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"to string"),(0,r.kt)("li",{parentName:"ul"},"to number"),(0,r.kt)("li",{parentName:"ul"},"to boolean")),(0,r.kt)("h3",{id:"typically-coercion-happens-when-you-apply-operators-to-values-of-different-types"},"Typically coercion happens when you apply operators to values of different types."),(0,r.kt)("p",null,"Let's take a look at some examples. I will warn you, some of this will get weird. But again, this stuff usually isn't a big issue in everyday development."),(0,r.kt)("p",null,"Let's look at our first example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"5 + '5' // 55 (string)\n")),(0,r.kt)("p",null,"So as you can see, if we use the ",(0,r.kt)("strong",{parentName:"p"},"+")," operator on the ",(0,r.kt)("strong",{parentName:"p"},"number")," 5 and a ",(0,r.kt)("strong",{parentName:"p"},"string")," with the character '5', we get a ",(0,r.kt)("strong",{parentName:"p"},"string")," of 55. Some of you may have expected 10, which is the answer to 5 + 5."),(0,r.kt)("p",null,"The reason that this happened is because the ",(0,r.kt)("strong",{parentName:"p"},"number")," 5 is being implicitly coerced into a ",(0,r.kt)("strong",{parentName:"p"},"string")," due to the + operator also being used for concatenation, as I talked about in the last video."),(0,r.kt)("p",null,"This is an example of automatic or implicit coercion because we applied an operator to values of different types."),(0,r.kt)("p",null,"If I wanted to add these together, I would first convert the string '55' to a number like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"5 + Number('5') // 10\n")),(0,r.kt)("p",null,"Although the string would most likely be a variable in this case."),(0,r.kt)("p",null,"Now, let's take the ",(0,r.kt)("strong",{parentName:"p"},"number")," 5 and multiply by the ",(0,r.kt)("strong",{parentName:"p"},"string")," 5."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"5 * '5' // 25 (number)\n")),(0,r.kt)("p",null,"For this expression, we do get the result of 5 ","*"," 5, which is a ",(0,r.kt)("strong",{parentName:"p"},"number")," of 25. So in this case, JavaScript looked at the expression and coerced the ",(0,r.kt)("strong",{parentName:"p"},"string")," of '5' into the ",(0,r.kt)("strong",{parentName:"p"},"number")," 5."),(0,r.kt)("p",null,"This happened because it makes the most sense. The ","*"," can not do anything else but multiply in this expression."),(0,r.kt)("p",null,"Let's try some more weird stuff and see the results"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"5 + null // 5\n")),(0,r.kt)("p",null,"So in this case, we get 5. Reason being that null is coerced to a number of 0. We can see what a value would be as a number by doing the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Number(null) // 0\n")),(0,r.kt)("p",null,"Let's see what the boolean values of true and false would be as a number"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Number(true) // 1\nNumber(false) // 0\n")),(0,r.kt)("p",null,"So with that what do you think the answer would be if we added 5 + true and 5 + false?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"5 + true // 51\n5 + false // 50\n")),(0,r.kt)("p",null,'The null and false being 0, brings us to something called "falsey values". We\'ll get more into that when we talk about conditionals though.'),(0,r.kt)("p",null,"Now let's look at the following expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"5 + undefined // NaN\n")),(0,r.kt)("p",null,"So the result is NaN or ",(0,r.kt)("strong",{parentName:"p"},"not a number"),". We talked a little about this in the last video. The reason is because NaN is the result of a failed number operation. If we run undefined through the Number() method, we also get NaN.\nIf we try and add NaN like this, we also get NaN."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"5 + NaN // NaN\n")),(0,r.kt)("p",null,"Want to see something really strange?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"NaN == NaN // false\n")),(0,r.kt)("p",null,"You read that right. NaN is NOT equal to NaN. Kind of mind blowing. This is because not all NaN numbers are created equal. You can read more about it ",(0,r.kt)("a",{parentName:"p",href:"https://es5.github.io/#x11.9.6"},"here"),", but just know that this will always equate to false."),(0,r.kt)("p",null,"Now there may be times when you need to check for a NaN value. Again, I know we haven't got into functions or conditionals yet, but we do have a function called ",(0,r.kt)("strong",{parentName:"p"},"isNaN")," that we can use like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"isNan(NaN) // true\n")),(0,r.kt)("p",null,'However, this will return true for ANYTHING that is "not a number", such as'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"isNan('Hello') // true\n")),(0,r.kt)("p",null,"If you really want to check for the specific value of NaN, you can use the isNan method on the Number object like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Number.isNan(NaN) // true\nNumber.isNaN('Hello') //false\n")))}d.isMDXComponent=!0}}]);