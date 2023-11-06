"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[265],{3905:(e,i,n)=>{n.d(i,{Zo:()=>p,kt:()=>h});var t=n(7294);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function r(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?r(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function s(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),d=function(e){var i=t.useContext(o),n=i;return e&&(n="function"==typeof e?e(i):l(l({},i),e)),n},p=function(e){var i=d(e.components);return t.createElement(o.Provider,{value:i},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},c=t.forwardRef((function(e,i){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,h=u["".concat(o,".").concat(c)]||u[c]||m[c]||r;return n?t.createElement(h,l(l({ref:i},p),{},{components:n})):t.createElement(h,l({ref:i},p))}));function h(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var s={};for(var o in i)hasOwnProperty.call(i,o)&&(s[o]=i[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6201:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=n(7462),a=(n(7294),n(3905));const r={sidebar_position:4},l="MEDIA QUERIES",s={unversionedId:"2 CSS/4 Media Queries",id:"2 CSS/4 Media Queries",title:"MEDIA QUERIES",description:"https://youtu.be/K24lUqcT0Ms?si=4lpxfRf9Ht0jO3LK",source:"@site/docs/2 CSS/4 Media Queries.md",sourceDirName:"2 CSS",slug:"/2 CSS/4 Media Queries",permalink:"/fundamentals/2 CSS/4 Media Queries",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"GRID",permalink:"/fundamentals/2 CSS/3 Grid"},next:{title:"ANIMATIONS",permalink:"/fundamentals/2 CSS/8 Animations"}},o={},d=[{value:"Introduction",id:"introduction",level:3},{value:"Responsive Layout Challenge",id:"responsive-layout-challenge",level:3},{value:"Using Media Queries",id:"using-media-queries",level:3},{value:"Implementing Media Queries",id:"implementing-media-queries",level:3},{value:"Understanding Media Query Behavior",id:"understanding-media-query-behavior",level:3},{value:"Predefined Media Queries",id:"predefined-media-queries",level:3},{value:"Mobile-first pre-defined media queries",id:"mobile-first-pre-defined-media-queries",level:4},{value:"Desktop-first pre-defined media queries",id:"desktop-first-pre-defined-media-queries",level:4},{value:"Portfolio Website Example",id:"portfolio-website-example",level:3},{value:"Improved Container Utility Class",id:"improved-container-utility-class",level:3},{value:"Mobile-first container utility class",id:"mobile-first-container-utility-class",level:4},{value:"Desktop-first container utility class",id:"desktop-first-container-utility-class",level:4},{value:"Mobile-First Approach",id:"mobile-first-approach",level:3},{value:"Benefits of Predefined Media Queries",id:"benefits-of-predefined-media-queries",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Video Resource",id:"video-resource",level:3}],p={toc:d},u="wrapper";function m(e){let{components:i,...r}=e;return(0,a.kt)(u,(0,t.Z)({},p,r,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"media-queries"},"MEDIA QUERIES"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/K24lUqcT0Ms?si=4lpxfRf9Ht0jO3LK"},"https://youtu.be/K24lUqcT0Ms?si=4lpxfRf9Ht0jO3LK")),(0,a.kt)("p",null,"Write this text word by word using markdown format, dividing its sections with h4 tags, using bullet points for all its main parts, using backticks for code terminology:"),(0,a.kt)("p",null,"Certainly! Here is the provided text formatted using Markdown:"),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5097).Z,width:"694",height:"437"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You might be wondering why there's a chameleon in the thumbnail of this video."),(0,a.kt)("li",{parentName:"ul"},"A chameleon can change its color and pattern, adapting its appearance to match its environment."),(0,a.kt)("li",{parentName:"ul"},"The chameleon's ability to quickly and seamlessly change its appearance is a skill to be admired."),(0,a.kt)("li",{parentName:"ul"},"What I'm suggesting is that we ought to be more like the chameleon when creating our responsive layouts.")),(0,a.kt)("h3",{id:"responsive-layout-challenge"},"Responsive Layout Challenge"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You've built yourself a header component."),(0,a.kt)("li",{parentName:"ul"},"Your header has a title on the left, a menu in the middle, and a sign-in button on the right."),(0,a.kt)("li",{parentName:"ul"},"Your header looks good on large viewports."),(0,a.kt)("li",{parentName:"ul"},"However, when you resize the page, eventually your header breaks."),(0,a.kt)("li",{parentName:"ul"},"You need a way to add styles on smaller viewports.")),(0,a.kt)("h3",{id:"using-media-queries"},"Using Media Queries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This is exactly what media queries do."),(0,a.kt)("li",{parentName:"ul"},"They allow you to target specific viewport sizes and apply styles on them."),(0,a.kt)("li",{parentName:"ul"},"Resizing the page, we see our header breaks on a width of 1231 pixels."),(0,a.kt)("li",{parentName:"ul"},"The title gets displayed on two lines, and the button becomes huge."),(0,a.kt)("li",{parentName:"ul"},"The syntax for adding media queries is ",(0,a.kt)("inlineCode",{parentName:"li"},"@media (conditions) { styles }"),"."),(0,a.kt)("li",{parentName:"ul"},"In between the ",(0,a.kt)("inlineCode",{parentName:"li"},"@media")," and parentheses, you can specify the media type you want to target."),(0,a.kt)("li",{parentName:"ul"},"Common media types include ",(0,a.kt)("inlineCode",{parentName:"li"},"screen"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"print"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"speech"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"all"),"."),(0,a.kt)("li",{parentName:"ul"},"If you don't specify a media type, it will target all by default."),(0,a.kt)("li",{parentName:"ul"},"To add a breakpoint, you can specify ",(0,a.kt)("inlineCode",{parentName:"li"},"max-width")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"min-width")," followed by the desired size in pixels.")),(0,a.kt)("h3",{id:"implementing-media-queries"},"Implementing Media Queries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Back in our header example, inside the curly braces of our media query is where we can select elements and apply styles on them."),(0,a.kt)("li",{parentName:"ul"},"To make the header responsive, you reduce the font size of the title, links, and button for smaller viewports."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"@media")," query with ",(0,a.kt)("inlineCode",{parentName:"li"},"max-width")," 1231 pixels is applied, and the font sizes are adjusted using class selectors.")),(0,a.kt)("h3",{id:"understanding-media-query-behavior"},"Understanding Media Query Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Media queries can be set with ",(0,a.kt)("inlineCode",{parentName:"li"},"max-width")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"min-width")," to control whether the styles apply below or above a certain screen width."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Max-width")," targets screens below the specified breakpoint, while ",(0,a.kt)("inlineCode",{parentName:"li"},"min-width")," targets screens above the breakpoint."),(0,a.kt)("li",{parentName:"ul"},"Understanding both ",(0,a.kt)("inlineCode",{parentName:"li"},"max-width")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"min-width")," is important for creating responsive designs."),(0,a.kt)("li",{parentName:"ul"},"The choice of whether to use ",(0,a.kt)("inlineCode",{parentName:"li"},"max-width")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"min-width")," depends on whether you're designing mobile-first or desktop-first.")),(0,a.kt)("h3",{id:"predefined-media-queries"},"Predefined Media Queries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To simplify responsive design, you can use predefined media queries for different screen sizes."),(0,a.kt)("li",{parentName:"ul"},"These predefined queries allow you to set breakpoints for specific screen widths and apply consistent styles."),(0,a.kt)("li",{parentName:"ul"},"Instead of adding media queries when a component breaks, you use predefined media queries to make components responsive on those breakpoints.")),(0,a.kt)("h4",{id:"mobile-first-pre-defined-media-queries"},"Mobile-first pre-defined media queries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* Mobile-first pre-defined media queries: */\n\n/* xs */\n@media (min-width: 475px) {\n}\n\n/* sm */\n@media (min-width: 640px) {\n}\n\n/* md */\n@media (min-width: 768px) {\n}\n\n/* lg */\n@media (min-width: 1024px) {\n}\n\n/* xl */\n@media (min-width: 1280px) {\n}\n\n/* 2xl */\n@media (min-width: 1536px) {\n}\n")),(0,a.kt)("h4",{id:"desktop-first-pre-defined-media-queries"},"Desktop-first pre-defined media queries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* Desktop-first pre-defined media queries: */\n\n/* 2xl */\n@media (max-width: 1536px) {\n}\n\n/* xl */\n@media (max-width: 1280px) {\n}\n\n/* lg */\n@media (max-width: 1024px) {\n}\n\n/* md */\n@media (max-width: 768px) {\n}\n\n/* sm */\n@media (max-width: 640px) {\n}\n\n/* xs */\n@media (max-width: 475px) {\n}\n")),(0,a.kt)("h3",{id:"portfolio-website-example"},"Portfolio Website Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In a portfolio website example, only six predefined media queries are used to make the site responsive."),(0,a.kt)("li",{parentName:"ul"},"The predefined queries are set for extra small, small, medium, large, extra-large, and extra-extra-large screens."),(0,a.kt)("li",{parentName:"ul"},"Using predefined media queries reduces the number of breakpoints needed.")),(0,a.kt)("h3",{id:"improved-container-utility-class"},"Improved Container Utility Class"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A container utility class is introduced that ensures proper alignment and responsive shrinking of sections."),(0,a.kt)("li",{parentName:"ul"},"The container utility class allows containers to shrink only when the viewport touches their borders, creating a more elegant responsive design.")),(0,a.kt)("h4",{id:"mobile-first-container-utility-class"},"Mobile-first container utility class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* Mobile-first container utility class: */\n\n.container {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n/* xs */\n@media (min-width: 475px) {\n  .container {\n    max-width: 475px;\n  }\n}\n\n/* sm */\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n\n/* md */\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n\n/* lg */\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n\n/* xl */\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n\n/* 2xl */\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n")),(0,a.kt)("h4",{id:"desktop-first-container-utility-class"},"Desktop-first container utility class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* Desktop-first container utility class: */\n\n.container {\n  max-width: 1536px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n/* 2xl */\n@media (max-width: 1536px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n\n/* xl */\n@media (max-width: 1280px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n\n/* lg */\n@media (max-width: 1024px) {\n  .container {\n    max-width: 768px;\n  }\n}\n\n/* md */\n@media (max-width: 768px) {\n  .container {\n    max-width: 640px;\n  }\n}\n\n/* sm */\n@media (max-width: 640px) {\n  .container {\n    max-width: 475px;\n  }\n}\n\n/* xs */\n@media (max-width: 475px) {\n  .container {\n    width: 100%;\n  }\n}\n")),(0,a.kt)("h3",{id:"mobile-first-approach"},"Mobile-First Approach"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the mobile-first approach, the container has a width of 100% for screens smaller than the first breakpoint."),(0,a.kt)("li",{parentName:"ul"},"Inside each media query, the container's ",(0,a.kt)("inlineCode",{parentName:"li"},"max-width")," is set to the same value as the ",(0,a.kt)("inlineCode",{parentName:"li"},"min-width")," of its breakpoint.")),(0,a.kt)("h3",{id:"benefits-of-predefined-media-queries"},"Benefits of Predefined Media Queries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using predefined media queries reduces the need for numerous breakpoints."),(0,a.kt)("li",{parentName:"ul"},"This approach results in a cleaner and more efficient responsive design."),(0,a.kt)("li",{parentName:"ul"},"The container utility class and predefined media queries make responsive design more manageable.")),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can create responsive layouts like a chameleon by using predefined media queries and a responsive container utility class."),(0,a.kt)("li",{parentName:"ul"},"The mobile-first approach and thoughtful application of media queries result in efficient and elegant responsive designs.")),(0,a.kt)("h3",{id:"video-resource"},"Video Resource"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you want to see these techniques in action in a real-world example, you can watch the video on the channel where an entire portfolio website is built using the container utility class and the six predefined media queries.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/dLDn_k8GmaU?si=SPWCkFcNuoh8iUEc"},"https://youtu.be/dLDn_k8GmaU?si=SPWCkFcNuoh8iUEc")))}m.isMDXComponent=!0},5097:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/chameleon-00c7cb67e4b1c224edd37a13488f645f.png"}}]);