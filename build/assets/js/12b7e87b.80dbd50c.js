"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[5819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=a,g=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return n?r.createElement(g,o(o({ref:t},h),{},{components:n})):r.createElement(g,o({ref:t},h))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},o="10. Images",l={unversionedId:"1 HTML Crash Course/Section-3/images",id:"1 HTML Crash Course/Section-3/images",title:"10. Images",description:"two elements where the attributes sort of define the element itself",source:"@site/docs/1 HTML Crash Course/Section-3/10-images.md",sourceDirName:"1 HTML Crash Course/Section-3",slug:"/1 HTML Crash Course/Section-3/images",permalink:"/fundamentals/1 HTML Crash Course/Section-3/images",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"9. html attributes",permalink:"/fundamentals/1 HTML Crash Course/Section-3/html attributes"},next:{title:"11. links",permalink:"/fundamentals/1 HTML Crash Course/Section-3/Links"}},s={},u=[{value:"image html element",id:"image-html-element",level:3},{value:"the source attribute",id:"the-source-attribute",level:3},{value:"the width and height attributes",id:"the-width-and-height-attributes",level:3},{value:"the alt attribute",id:"the-alt-attribute",level:3}],h={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"10-images"},"10. Images"),(0,a.kt)("p",null,"two elements where the attributes sort of define the element itself"),(0,a.kt)("h3",{id:"image-html-element"},"image html element"),(0,a.kt)("p",null,"the first one is the image html element which is used to embed an image in the web page"),(0,a.kt)("p",null,"the image tag also doesn't need a closing tag so img self closing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- Attributes --\x3e\n<img />\n")),(0,a.kt)("p",null,"now this image tag needs to know which image to display"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"for that i'm going to ",(0,a.kt)("inlineCode",{parentName:"li"},"add an image into the same folder as our html file"))),(0,a.kt)("p",null,"the file name is logo.jpg and is the logo of code evolution"),(0,a.kt)("p",null,"if i open the explorer in visual studio code you can see logo.jpg"),(0,a.kt)("h3",{id:"the-source-attribute"},"the source attribute"),(0,a.kt)("p",null,"now to connect the logo file with the image element we need to add the source\nattribute"),(0,a.kt)("p",null,"src for short, to this we assign the path to the file and this is going to be logo.jpg as it is in the same folder as index.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Attributes --\x3e\n<img src="logo.jpg" />\n')),(0,a.kt)("h3",{id:"the-width-and-height-attributes"},"the width and height attributes"),(0,a.kt)("p",null,"if we now save and refresh the browser we should see a very large image"),(0,a.kt)("p",null,"and this is because the image dimensions are huge"),(0,a.kt)("p",null,"so what we can do is specify two more attributes that restrict the dimensions one is width which we can set to 200"),(0,a.kt)("p",null,"and the other is height which we can set to 200 again"),(0,a.kt)("p",null,"the default unit for these attributes is pixels"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Attributes --\x3e\n<img src="logo.jpg" width="200px" height="200px" />\n')),(0,a.kt)("p",null,"refresh the browser again and we see a much smaller image"),(0,a.kt)("h3",{id:"the-alt-attribute"},"the alt attribute"),(0,a.kt)("p",null,"one more important attribute we should specify on the image tag is the alt attribute"),(0,a.kt)("p",null,"i'm going to set its value to the text code evolution logo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Attributes --\x3e\n<img src="logo.jpg" width="200px" height="200px" alt="Codevolution logo" />\n')),(0,a.kt)("p",null,"this attribute is picked up by screen readers and is used to describe the image to visually impaired people"),(0,a.kt)("p",null,"so this is pretty much how you embed an image in your web page using the image tag and the mandatory source attribute"))}m.isMDXComponent=!0}}]);