"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[9936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),p=i,h=u["".concat(s,".").concat(p)]||u[p]||v[p]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8668:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:5},l=void 0,o={unversionedId:"7 React 2023/PART 1: REACT FUNDAMENTALS/Section 6: State, Events, and Forms",id:"7 React 2023/PART 1: REACT FUNDAMENTALS/Section 6: State, Events, and Forms",title:"Section 6: State, Events, and Forms",description:"---",source:"@site/docs/7 React 2023/PART 1: REACT FUNDAMENTALS/Section 6: State, Events, and Forms.md",sourceDirName:"7 React 2023/PART 1: REACT FUNDAMENTALS",slug:"/7 React 2023/PART 1: REACT FUNDAMENTALS/Section 6: State, Events, and Forms",permalink:"/fundamentals/7 React 2023/PART 1: REACT FUNDAMENTALS/Section 6: State, Events, and Forms",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Section 5: Components, Props, and JSX",permalink:"/fundamentals/7 React 2023/PART 1: REACT FUNDAMENTALS/Section 5: Components, Props, and JSX"},next:{title:"Section 7: Thinking In React: State Management",permalink:"/fundamentals/7 React 2023/PART 1: REACT FUNDAMENTALS/Section 7: Thinking In React: State Management"}},s={},d=[{value:"\ud83d\udfe3 Section Overview",id:"-section-overview",level:2},{value:"\ud83d\udfe3 Let&#39;s Build a Steps Component",id:"-lets-build-a-steps-component",level:2},{value:"\ud83d\udfe3 Handling Events the React Way",id:"-handling-events-the-react-way",level:2},{value:"\ud83d\udfe3 What is State in React?",id:"-what-is-state-in-react",level:2},{value:"\ud83d\udfe3 Creating a State Variable With useState",id:"-creating-a-state-variable-with-usestate",level:2},{value:"\ud83d\udfe3 Don&#39;t Set State Manually!",id:"-dont-set-state-manually",level:2},{value:"\ud83d\udfe3 The Mechanics of State",id:"-the-mechanics-of-state",level:2},{value:"\ud83d\udfe3 Adding Another Piece of State",id:"-adding-another-piece-of-state",level:2},{value:"\ud83d\udfe3 React Developer Tools",id:"-react-developer-tools",level:2},{value:"\ud83d\udfe3 Updating State Based on Current State",id:"-updating-state-based-on-current-state",level:2},{value:"\ud83d\udfe3 More Thoughts About State + State Guidelines",id:"-more-thoughts-about-state--state-guidelines",level:2},{value:"\ud83d\udfe3 A Vanilla JavaScript Implementation",id:"-a-vanilla-javascript-implementation",level:2},{value:"\ud83d\udfe3 CHALLENGE #1: Date Counter (v1)",id:"-challenge-1-date-counter-v1",level:2},{value:"\ud83d\udfe3 Starting a New Project: The &quot;Far Away&quot; Travel List",id:"-starting-a-new-project-the-far-away-travel-list",level:2},{value:"\ud83d\udfe3 Building the Layout",id:"-building-the-layout",level:2},{value:"\ud83d\udfe3 Rendering the Items List",id:"-rendering-the-items-list",level:2},{value:"\ud83d\udfe3 Building a Form and Handling Submissions",id:"-building-a-form-and-handling-submissions",level:2},{value:"\ud83d\udfe3 Controlled Elements",id:"-controlled-elements",level:2},{value:"\ud83d\udfe3 State vs. Props",id:"-state-vs-props",level:2},{value:"\ud83d\udfe3 EXERCISE #1: Flashcards",id:"-exercise-1-flashcards",level:2},{value:"\ud83d\udfe3 CHALLENGE #2: Date Counter (v2)",id:"-challenge-2-date-counter-v2",level:2}],c={toc:d},u="wrapper";function v(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"-section-overview"},"\ud83d\udfe3 Section Overview"),(0,i.kt)("h2",{id:"-lets-build-a-steps-component"},"\ud83d\udfe3 Let's Build a Steps Component"),(0,i.kt)("h2",{id:"-handling-events-the-react-way"},"\ud83d\udfe3 Handling Events the React Way"),(0,i.kt)("h2",{id:"-what-is-state-in-react"},"\ud83d\udfe3 What is State in React?"),(0,i.kt)("h2",{id:"-creating-a-state-variable-with-usestate"},"\ud83d\udfe3 Creating a State Variable With useState"),(0,i.kt)("h2",{id:"-dont-set-state-manually"},"\ud83d\udfe3 Don't Set State Manually!"),(0,i.kt)("h2",{id:"-the-mechanics-of-state"},"\ud83d\udfe3 The Mechanics of State"),(0,i.kt)("h2",{id:"-adding-another-piece-of-state"},"\ud83d\udfe3 Adding Another Piece of State"),(0,i.kt)("h2",{id:"-react-developer-tools"},"\ud83d\udfe3 React Developer Tools"),(0,i.kt)("h2",{id:"-updating-state-based-on-current-state"},"\ud83d\udfe3 Updating State Based on Current State"),(0,i.kt)("h2",{id:"-more-thoughts-about-state--state-guidelines"},"\ud83d\udfe3 More Thoughts About State + State Guidelines"),(0,i.kt)("h2",{id:"-a-vanilla-javascript-implementation"},"\ud83d\udfe3 A Vanilla JavaScript Implementation"),(0,i.kt)("h2",{id:"-challenge-1-date-counter-v1"},"\ud83d\udfe3 CHALLENGE #1: Date Counter (v1)"),(0,i.kt)("h2",{id:"-starting-a-new-project-the-far-away-travel-list"},'\ud83d\udfe3 Starting a New Project: The "Far Away" Travel List'),(0,i.kt)("h2",{id:"-building-the-layout"},"\ud83d\udfe3 Building the Layout"),(0,i.kt)("h2",{id:"-rendering-the-items-list"},"\ud83d\udfe3 Rendering the Items List"),(0,i.kt)("h2",{id:"-building-a-form-and-handling-submissions"},"\ud83d\udfe3 Building a Form and Handling Submissions"),(0,i.kt)("h2",{id:"-controlled-elements"},"\ud83d\udfe3 Controlled Elements"),(0,i.kt)("h2",{id:"-state-vs-props"},"\ud83d\udfe3 State vs. Props"),(0,i.kt)("h2",{id:"-exercise-1-flashcards"},"\ud83d\udfe3 EXERCISE #1: Flashcards"),(0,i.kt)("h2",{id:"-challenge-2-date-counter-v2"},"\ud83d\udfe3 CHALLENGE #2: Date Counter (v2)"))}v.isMDXComponent=!0}}]);