"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[8331],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var l=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=l.createContext({}),c=function(e){var t=l.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=c(i),d=n,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||a;return i?l.createElement(m,o(o({ref:t},u),{},{components:i})):l.createElement(m,o({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:n,o[1]=r;for(var c=2;c<a;c++)o[c]=i[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8102:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var l=i(7462),n=(i(7294),i(3905));const a={sidebar_position:3},o="FLEXBOX",r={unversionedId:"2 CSS/3 Flexbox",id:"2 CSS/3 Flexbox",title:"FLEXBOX",description:"---",source:"@site/docs/2 CSS/3 Flexbox.md",sourceDirName:"2 CSS",slug:"/2 CSS/3 Flexbox",permalink:"/fundamentals/2 CSS/3 Flexbox",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"RESPONSIVE DESIGN",permalink:"/fundamentals/2 CSS/2 Responsive Design"},next:{title:"ADVANCED SELECTORS",permalink:"/fundamentals/2 CSS/4 Selectors"}},s={},c=[{value:"19 What Is Flexbox?",id:"19-what-is-flexbox",level:2},{value:"What Is Flexbox",id:"what-is-flexbox",level:3},{value:"a quick look at how it works",id:"a-quick-look-at-how-it-works",level:3},{value:"And there&#39;s different CSS properties we can use to align our Flex items....",id:"and-theres-different-css-properties-we-can-use-to-align-our-flex-items",level:3},{value:"<strong>Practice 19</strong>",id:"practice-19",level:3},{value:"20 Flexbox Basics",id:"20-flexbox-basics",level:2},{value:"to align flex items side by side",id:"to-align-flex-items-side-by-side",level:3},{value:"Now we can also change the direction or the orientation of our Flex box",id:"now-we-can-also-change-the-direction-or-the-orientation-of-our-flex-box",level:3},{value:"we can change the direction of the items",id:"we-can-change-the-direction-of-the-items",level:3},{value:"flex wrap property",id:"flex-wrap-property",level:3},{value:"<strong>Practice 20</strong>",id:"practice-20",level:3},{value:"21 Flex Properties",id:"21-flex-properties",level:2},{value:"flex-shrink",id:"flex-shrink",level:3},{value:"flex-grow",id:"flex-grow",level:3},{value:"flex-basis",id:"flex-basis",level:3},{value:"the Flex property",id:"the-flex-property",level:3},{value:"<strong>Practice 21</strong>",id:"practice-21",level:3},{value:"22 Flex Alignment &amp; Justify",id:"22-flex-alignment--justify",level:2},{value:"align-items (Cross axis align)",id:"align-items-cross-axis-align",level:3},{value:"values for align-items",id:"values-for-align-items",level:3},{value:"align-items (with flex-direction: column;)",id:"align-items-with-flex-direction-column",level:3},{value:"when it&#39;s a column this is the cross access. (horizontal)",id:"when-its-a-column-this-is-the-cross-access-horizontal",level:3},{value:"other value for align-items (stretch)",id:"other-value-for-align-items-stretch",level:3},{value:"justify-content (main axis align)",id:"justify-content-main-axis-align",level:3},{value:"justify-content: (with) flex-direction: column;",id:"justify-content-with-flex-direction-column",level:3},{value:"align-self",id:"align-self",level:3},{value:"<strong>Practice 22</strong>",id:"practice-22",level:3}],u={toc:c},h="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,l.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"flexbox"},"FLEXBOX"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"19-what-is-flexbox"},"19 What Is Flexbox?"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"what-is-flexbox"},"What Is Flexbox"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"a-quick-look-at-how-it-works"},"a quick look at how it works"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"if we assign display: flex; to a container div or any container element it creates a flex container"),(0,n.kt)("li",{parentName:"ul"},"and then it makes all direct elements flex items"),(0,n.kt)("li",{parentName:"ul"},"and it's going to actually align horizontal in a row by default"),(0,n.kt)("li",{parentName:"ul"},"but we can also do flex direction column which will align them this way. OK. Align them vertically"),(0,n.kt)("li",{parentName:"ul"},"Now we have a cross axis which goes up and down and we have a main axis that goes this way")),(0,n.kt)("h3",{id:"and-theres-different-css-properties-we-can-use-to-align-our-flex-items"},"And there's different CSS properties we can use to align our Flex items...."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"justify-content")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"align-items")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"align-content"))),(0,n.kt)("h3",{id:"practice-19"},(0,n.kt)("strong",{parentName:"h3"},"Practice 19")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"20-flexbox-basics"},"20 Flexbox Basics"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"to-align-flex-items-side-by-side"},"to align flex items side by side"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"and it's going to actually align horizontal in a row by default"),(0,n.kt)("li",{parentName:"ul"},"And we we automatically have certain alignment properties that we can use"),(0,n.kt)("li",{parentName:"ul"},"We also have properties to basically change the widths of these to fill up the entire row (which I'm going to get into in the next video)"),(0,n.kt)("li",{parentName:"ul"},"and it doesn't matter how many of these we have"),(0,n.kt)("li",{parentName:"ul"},"and we could add anything like if I put an h1")),(0,n.kt)("h3",{id:"now-we-can-also-change-the-direction-or-the-orientation-of-our-flex-box"},"Now we can also change the direction or the orientation of our Flex box"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(",(0,n.kt)("inlineCode",{parentName:"li"},"flex-direction: row"),") flex direction by default it's a row which goes horizontal"),(0,n.kt)("li",{parentName:"ul"},"(",(0,n.kt)("inlineCode",{parentName:"li"},"flex-direction: column"),") Now I can change this to a column and then they're going to be stacked on top of each other")),(0,n.kt)("h3",{id:"we-can-change-the-direction-of-the-items"},"we can change the direction of the items"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"column-reverse")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"row-reverse"))),(0,n.kt)("h3",{id:"flex-wrap-property"},"flex wrap property"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"no-wrap"),", by default we have this set to I believe it's ",(0,n.kt)("inlineCode",{parentName:"li"},"no-wrap"))),(0,n.kt)("h3",{id:"practice-20"},(0,n.kt)("strong",{parentName:"h3"},"Practice 20")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"21-flex-properties"},"21 Flex Properties"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"flex-shrink"},"flex-shrink"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"flex-grow"},"flex-grow"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"flex-basis"},"flex-basis"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"the-flex-property"},"the Flex property"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"we also have the Flex property which implements all three of these.")),(0,n.kt)("h3",{id:"practice-21"},(0,n.kt)("strong",{parentName:"h3"},"Practice 21")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"22-flex-alignment--justify"},"22 Flex Alignment & Justify"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"align-items-cross-axis-align"},"align-items (Cross axis align)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"it's put on the container not on the items themselves because it applies to all of the items"),(0,n.kt)("li",{parentName:"ul"},"Now remember when it's in a row like this the horizontal access is the main axis"),(0,n.kt)("li",{parentName:"ul"},"What a align-items does is it aligns them on the cross axis"),(0,n.kt)("li",{parentName:"ul"},"So if it's a row it's going to be this way (vertical)")),(0,n.kt)("h3",{id:"values-for-align-items"},"values for align-items"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"center")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"flex-start")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"flex-end"))),(0,n.kt)("h3",{id:"align-items-with-flex-direction-column"},"align-items (with flex-direction: column;)"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"when-its-a-column-this-is-the-cross-access-horizontal"},"when it's a column this is the cross access. (horizontal)"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"other-value-for-align-items-stretch"},"other value for align-items (stretch)"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"justify-content-main-axis-align"},"justify-content (main axis align)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"justify-content: center;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"justify-content: flex-start;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"justify-content: flex-end;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"justify-content: space-around;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"justify-content: space-between;"))),(0,n.kt)("h3",{id:"justify-content-with-flex-direction-column"},"justify-content: (with) flex-direction: column;"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"align-self"},"align-self"),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"practice-22"},(0,n.kt)("strong",{parentName:"h3"},"Practice 22")),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);