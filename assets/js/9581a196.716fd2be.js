"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[1010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),f=l,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_position:4},i="ADVANCED SELECTORS",o={unversionedId:"2 CSS/4 Selectors",id:"2 CSS/4 Selectors",title:"ADVANCED SELECTORS",description:"---",source:"@site/docs/2 CSS/4 Selectors.md",sourceDirName:"2 CSS",slug:"/2 CSS/4 Selectors",permalink:"/fundamentals/2 CSS/4 Selectors",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"FLEXBOX",permalink:"/fundamentals/2 CSS/3 Flexbox"},next:{title:"Shadows and Variables",permalink:"/fundamentals/2 CSS/5 Shadows and Variables"}},c={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"advanced-selectors"},"ADVANCED SELECTORS"),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"23 Targeted Selectors"),(0,l.kt)("h3",null,"1. descendent selector (div p ",")"),(0,l.kt)("h3",null,"2. Direct child (div > p ",") (if div is a direct parent of p)"),(0,l.kt)("h3",null,"3. directly after an element (div + p ",") (if p is right after div)"),(0,l.kt)("h3",null,"4. add attributes as selectors (`a[target] ","`) (target attribute)"),(0,l.kt)("h3",null,"5. reference the actual value (`a[target='_blank'] ","`) (target attribute)"),(0,l.kt)("h3",null,"6. specific attribute values"),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"24 nth-child Pseudo Selectors"),(0,l.kt)("h3",null,"1. first child Pseudo Selectors (`li:first-child ","`)"),(0,l.kt)("h3",null,"2. last-child Pseudo Selectors (`li:last-child ","`)"),(0,l.kt)("h3",null,"3. nth-child Pseudo Selector"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nth is basically like kind of like a placeholder"),(0,l.kt)("li",{parentName:"ul"},"nth-child selector matches every element that is the nth child, regardless of type, of its parent"),(0,l.kt)("li",{parentName:"ul"},"Position 3 ",(0,l.kt)("inlineCode",{parentName:"li"},"li:nth-child(3)")),(0,l.kt)("li",{parentName:"ul"},"Every 3rd ",(0,l.kt)("inlineCode",{parentName:"li"},"li:nth-child(3n + 0)")),(0,l.kt)("li",{parentName:"ul"},"Now this formula that we passed in here is the counter"),(0,l.kt)("li",{parentName:"ul"},"Every 3rd after 7 ",(0,l.kt)("inlineCode",{parentName:"li"},"li:nth-child(3n + 7)")),(0,l.kt)("li",{parentName:"ul"},"every odd ",(0,l.kt)("inlineCode",{parentName:"li"},"li:nth-child(odd) {}")),(0,l.kt)("li",{parentName:"ul"},"every even ",(0,l.kt)("inlineCode",{parentName:"li"},"li:nth-child(even) {}"))),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"25 before & after Pseudo Selectors"),(0,l.kt)("h3",null,"1. the before and after pseudo selector"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"actually allows us to insert content before or after an element")),(0,l.kt)("h3",null,"2. put an asterisk after the label"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".is-required:after {\n  content: '*';\n  color: red;\n  padding-left: 2px;\n}\n")),(0,l.kt)("h3",null,"3. put an asterisk before the label"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".is-required:before {\n  content: '*';\n  color: red;\n  padding-left: 2px;\n}\n")),(0,l.kt)("h3",null,"4. in an image overlay"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Now another really practical use for before is to do an overlay in an image overlay.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"header:before {\n  content: '';\n  background: url('https://source.unsplash.com/1600x900/?nature,water') no-repeat center\n    center/cover;\n  opacity: 0.4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n")),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);