"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[2244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||y[m]||r;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:19},o="Styling React Native apps",l={unversionedId:"6 React Native/Section 3: Styling/19 Styling",id:"6 React Native/Section 3: Styling/19 Styling",title:"Styling React Native apps",description:"- Styling React Native apps shares similarities with styling web apps but introduces some key differences.",source:"@site/docs/6 React Native/Section 3: Styling/19 Styling.md",sourceDirName:"6 React Native/Section 3: Styling",slug:"/6 React Native/Section 3: Styling/19 Styling",permalink:"/fundamentals/6 React Native/Section 3: Styling/19 Styling",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Section 3: Styling",permalink:"/fundamentals/category/section-3-styling"},next:{title:"The StyleSheet API",permalink:"/fundamentals/6 React Native/Section 3: Styling/20 StyleSheet API"}},s={},c=[{value:"Approaches to styling a React Native component:",id:"approaches-to-styling-a-react-native-component",level:3},{value:"Focus of this section: the stylesheet API",id:"focus-of-this-section-the-stylesheet-api",level:3}],p={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"styling-react-native-apps"},"Styling React Native apps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Styling React Native apps shares similarities with styling web apps but introduces some key differences."),(0,a.kt)("li",{parentName:"ul"},"The most notable difference is that ",(0,a.kt)("inlineCode",{parentName:"li"},"React Native does not use CSS for styling"),"."),(0,a.kt)("li",{parentName:"ul"},"Instead, you style your app using JavaScript itself."),(0,a.kt)("li",{parentName:"ul"},"The naming conventions for styles and their values are similar to CSS on the web but with a slight modification."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Names are written in camel case"),", such as ",(0,a.kt)("inlineCode",{parentName:"li"},"backgroundColor")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"background-color")," .")),(0,a.kt)("h3",{id:"approaches-to-styling-a-react-native-component"},"Approaches to styling a React Native component:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"The first approach")," is using inline styles with the ",(0,a.kt)("inlineCode",{parentName:"li"},"style prop"),", which is accepted by most of the core components."),(0,a.kt)("li",{parentName:"ul"},"We have already explored this approach in the previous section of this course, where we specified a plain JavaScript object as the value for the ",(0,a.kt)("inlineCode",{parentName:"li"},"style")," prop."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"The second approach")," involves utilizing the ",(0,a.kt)("inlineCode",{parentName:"li"},"stylesheet API")," provided by React Native."),(0,a.kt)("li",{parentName:"ul"},"This API allows you to define multiple styles in one place using the ",(0,a.kt)("inlineCode",{parentName:"li"},"create")," method.")),(0,a.kt)("h3",{id:"focus-of-this-section-the-stylesheet-api"},"Focus of this section: the stylesheet API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In this section, ",(0,a.kt)("inlineCode",{parentName:"li"},"we will primarily focus on the stylesheet API"),"."),(0,a.kt)("li",{parentName:"ul"},"We will explore how to style various core components and understand the nuances of applying specific styles across iOS and Android platforms.")))}y.isMDXComponent=!0}}]);