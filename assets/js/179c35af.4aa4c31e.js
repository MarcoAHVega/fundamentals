"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?l.createElement(m,r(r({ref:t},u),{},{components:n})):l.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const i={},r="8. The div and span tags",o={unversionedId:"1 HTML/Section-2/The div and span tags",id:"1 HTML/Section-2/The div and span tags",title:"8. The div and span tags",description:"block vs inline",source:"@site/docs/1 HTML/Section-2/8-The div and span tags.md",sourceDirName:"1 HTML/Section-2",slug:"/1 HTML/Section-2/The div and span tags",permalink:"/fundamentals/1 HTML/Section-2/The div and span tags",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"7. Inline text formatting",permalink:"/fundamentals/1 HTML/Section-2/Inline Text Formatting"},next:{title:"3 ATTRIBUTES, IMAGES AND LINKS",permalink:"/fundamentals/category/3-attributes-images-and-links"}},s={},p=[{value:"the two default display values of html elements",id:"the-two-default-display-values-of-html-elements",level:3},{value:"block level element",id:"block-level-element",level:3},{value:"inline element",id:"inline-element",level:3},{value:"the division element",id:"the-division-element",level:3},{value:"the span element",id:"the-span-element",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"8-the-div-and-span-tags"},"8. The div and span tags"),(0,a.kt)("p",null,"block vs inline"),(0,a.kt)("h3",{id:"the-two-default-display-values-of-html-elements"},"the two default display values of html elements"),(0,a.kt)("p",null,"one thing you might have noticed is that the heading and paragraph tags start the content on a new line whereas the formatting tags don't start on a new line"),(0,a.kt)("p",null,"which brings us to the two default display values of html elements"),(0,a.kt)("p",null,"in html elements can either be block level or inline"),(0,a.kt)("h3",{id:"block-level-element"},"block level element"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"block level element always starts on a new line and takes up the full width\navailable")),(0,a.kt)("h3",{id:"inline-element"},"inline element"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"inline elements do not start on new line and only takes up as much width as necessary")),(0,a.kt)("h3",{id:"the-division-element"},"the division element"),(0,a.kt)("p",null,"although we have seen examples of both\nthere are two more elements that you need to be aware of"),(0,a.kt)("p",null,"first is the division element or the ",(0,a.kt)("inlineCode",{parentName:"p"},"div"),"\ntag"),(0,a.kt)("p",null,"this element is a block level element"),(0,a.kt)("p",null,"so if you have two div tags block one and block two"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!--Block and inline display --\x3e\n<div>Block 1</div>\n<div>Block 2</div>\n")),(0,a.kt)("p",null,"they start on a new line and take up the full width"),(0,a.kt)("p",null,"of course the text is pretty small right now so you don't see it spanning the entire width of the browser"),(0,a.kt)("h3",{id:"the-span-element"},"the span element"),(0,a.kt)("p",null,"next we have the ",(0,a.kt)("inlineCode",{parentName:"p"},"span")," element"),(0,a.kt)("p",null,"or the span tag which is an inline element"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!--Block and inline display --\x3e\n<div>Block 1</div>\n<div>Block 2</div>\n\n<span>Inline 1</span>\n<span>Inline 2</span>\n")),(0,a.kt)("p",null,"so in line one and in line two"),(0,a.kt)("p",null,"if we refresh you can see inline two does not start on a new line and both take up only the\nnecessary width in this case the width of the text"),(0,a.kt)("p",null,"now when writing html alone the div and span tags are of less significance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"they are however very useful when we have to add styles to a group of elements or only a portion of the element")),(0,a.kt)("p",null,"we will revisit these tags in the css crash course"),(0,a.kt)("p",null,"for now just remember about the div tag which is a block level element and the span tag which is an inline element"),(0,a.kt)("p",null,"there are two tags which you see a lot in web development"))}c.isMDXComponent=!0}}]);