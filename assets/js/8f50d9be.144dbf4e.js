"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[6093],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?i.createElement(h,n(n({ref:t},u),{},{components:a})):i.createElement(h,n({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var d=2;d<r;d++)n[d]=a[d];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7151:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(7462),o=(a(7294),a(3905));const r={sidebar_position:7},n="CSS GRID",l={unversionedId:"2 CSS/7 CSS Grid",id:"2 CSS/7 CSS Grid",title:"CSS GRID",description:"---",source:"@site/docs/2 CSS/7 CSS Grid.md",sourceDirName:"2 CSS",slug:"/2 CSS/7 CSS Grid",permalink:"/fundamentals/2 CSS/7 CSS Grid",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"ANIMATIONS",permalink:"/fundamentals/2 CSS/6 Animations Transitions and Transform"},next:{title:"SASS",permalink:"/fundamentals/2 CSS/8 Sass"}},s={},d=[{value:"33 What Is CSS Grid",id:"33-what-is-css-grid",level:2},{value:"So what is the grid",id:"so-what-is-the-grid",level:3},{value:"the biggest difference between flex and the grid",id:"the-biggest-difference-between-flex-and-the-grid",level:3},{value:"different use cases for grid and flex",id:"different-use-cases-for-grid-and-flex",level:3},{value:"<strong>Practice 33</strong>",id:"practice-33",level:3},{value:"34 Grid Basics &amp; Columns",id:"34-grid-basics--columns",level:2},{value:"we&#39;re gonna go over just The basics of how <code>the grid</code> works",id:"were-gonna-go-over-just-the-basics-of-how-the-grid-works",level:3},{value:"Basics:",id:"basics",level:3},{value:"The grid works in a similar way to flexbox",id:"the-grid-works-in-a-similar-way-to-flexbox",level:3},{value:"<strong>Practice 34</strong>",id:"practice-34",level:3},{value:"35 Grid Rows",id:"35-grid-rows",level:2},{value:"Now there&#39;s also a <code>grid-template-rows</code> property",id:"now-theres-also-a-grid-template-rows-property",level:3},{value:"we&#39;re also going to talk about the <code>implicit rows</code>",id:"were-also-going-to-talk-about-the-implicit-rows",level:3},{value:"Now unlike flexbox the grid is multi-dimensional so we can we can use <code>grid-template-rows:</code> along with &#39;grid-template-columns:`",id:"now-unlike-flexbox-the-grid-is-multi-dimensional-so-we-can-we-can-use-grid-template-rows-along-with-grid-template-columns",level:3},{value:"So just to show you that let&#39;s set grid columns",id:"so-just-to-show-you-that-lets-set-grid-columns",level:3},{value:"<strong>Practice 35</strong>",id:"practice-35",level:3},{value:"36 Spanning Columns &amp; Rows",id:"36-spanning-columns--rows",level:2},{value:"how to take a grid item and span it across multiple rows and columns",id:"how-to-take-a-grid-item-and-span-it-across-multiple-rows-and-columns",level:3},{value:"<strong>Practice 36</strong>",id:"practice-36",level:3},{value:"37 Auto-Fit &amp; Minmax",id:"37-auto-fit--minmax",level:2},{value:"we&#39;re going to look at <code>auto-fit and minmax</code> which can make your grid kind of responsive.",id:"were-going-to-look-at-auto-fit-and-minmax-which-can-make-your-grid-kind-of-responsive",level:3},{value:"<strong>Practice 37</strong>",id:"practice-37",level:3},{value:"38 Grid Template Areas",id:"38-grid-template-areas",level:2},{value:"we&#39;re going to get into a property called <code>grid-template-areas:</code> which basically allows us to visually map out the alignment of our elements through CSS",id:"were-going-to-get-into-a-property-called-grid-template-areas-which-basically-allows-us-to-visually-map-out-the-alignment-of-our-elements-through-css",level:3},{value:"<strong>Practice 38</strong>",id:"practice-38",level:3},{value:"39 Media Queries &amp; The Grid",id:"39-media-queries--the-grid",level:2},{value:"we&#39;re going to take a look at media queries with the grid",id:"were-going-to-take-a-look-at-media-queries-with-the-grid",level:3},{value:"<strong>Practice 39</strong>",id:"practice-39",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"css-grid"},"CSS GRID"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"33-what-is-css-grid"},"33 What Is CSS Grid"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"so-what-is-the-grid"},"So what is the grid"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"the-biggest-difference-between-flex-and-the-grid"},"the biggest difference between flex and the grid"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"different-use-cases-for-grid-and-flex"},"different use cases for grid and flex"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"practice-33"},(0,o.kt)("strong",{parentName:"h3"},"Practice 33")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"34-grid-basics--columns"},"34 Grid Basics & Columns"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"were-gonna-go-over-just-the-basics-of-how-the-grid-works"},"we're gonna go over just The basics of how ",(0,o.kt)("inlineCode",{parentName:"h3"},"the grid")," works"),(0,o.kt)("p",null,"and the ",(0,o.kt)("inlineCode",{parentName:"p"},"grid-template-columns")," property"),(0,o.kt)("h3",{id:"basics"},"Basics:"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"the-grid-works-in-a-similar-way-to-flexbox"},"The grid works in a similar way to flexbox"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"let's go ahead and create our mark up")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"let's style the items")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then, we want to add display to the div container")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now if I save that nothing happens, What we need to do is add (grid-template-columns:)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now even if we have more than 3 grid items here, That's absolutely fine")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"let's say we wanted the middle one to stretch, We could use ",(0,o.kt)("inlineCode",{parentName:"p"},"auto"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"And let's say I wanted them all to be the same but I wanted them to fill the container")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now there's a better way to do this, You can simply use ",(0,o.kt)("inlineCode",{parentName:"p"},"repeat()"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now we used pixels here, but the most common unit using the grid is a ",(0,o.kt)("inlineCode",{parentName:"p"},"fraction"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now notice that these have no margin, there's a specific property, ",(0,o.kt)("inlineCode",{parentName:"p"},"grid-gap:"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"What I want to show you now is just how easy it is to do a simple layout"))),(0,o.kt)("h3",{id:"practice-34"},(0,o.kt)("strong",{parentName:"h3"},"Practice 34")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"35-grid-rows"},"35 Grid Rows"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"now-theres-also-a-grid-template-rows-property"},"Now there's also a ",(0,o.kt)("inlineCode",{parentName:"h3"},"grid-template-rows")," property"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"were-also-going-to-talk-about-the-implicit-rows"},"we're also going to talk about the ",(0,o.kt)("inlineCode",{parentName:"h3"},"implicit rows")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"for this we are going to need again a div with a class of grid,then we need to style the items")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"So remember with Flexbox we have a row and a column, with the grid we also have rows and columns")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"there's actually another property we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"grid-auto-rows:")))),(0,o.kt)("h3",{id:"now-unlike-flexbox-the-grid-is-multi-dimensional-so-we-can-we-can-use-grid-template-rows-along-with-grid-template-columns"},"Now unlike flexbox the grid is multi-dimensional so we can we can use ",(0,o.kt)("inlineCode",{parentName:"h3"},"grid-template-rows:")," along with 'grid-template-columns:`"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"so-just-to-show-you-that-lets-set-grid-columns"},"So just to show you that let's set grid columns"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"practice-35"},(0,o.kt)("strong",{parentName:"h3"},"Practice 35")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"36-spanning-columns--rows"},"36 Spanning Columns & Rows"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"how-to-take-a-grid-item-and-span-it-across-multiple-rows-and-columns"},"how to take a grid item and span it across multiple rows and columns"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"practice-36"},(0,o.kt)("strong",{parentName:"h3"},"Practice 36")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"37-auto-fit--minmax"},"37 Auto-Fit & Minmax"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"were-going-to-look-at-auto-fit-and-minmax-which-can-make-your-grid-kind-of-responsive"},"we're going to look at ",(0,o.kt)("inlineCode",{parentName:"h3"},"auto-fit and minmax")," which can make your grid kind of responsive."),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"practice-37"},(0,o.kt)("strong",{parentName:"h3"},"Practice 37")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"38-grid-template-areas"},"38 Grid Template Areas"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"were-going-to-get-into-a-property-called-grid-template-areas-which-basically-allows-us-to-visually-map-out-the-alignment-of-our-elements-through-css"},"we're going to get into a property called ",(0,o.kt)("inlineCode",{parentName:"h3"},"grid-template-areas:")," which basically allows us to visually map out the alignment of our elements through CSS"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"practice-38"},(0,o.kt)("strong",{parentName:"h3"},"Practice 38")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"39-media-queries--the-grid"},"39 Media Queries & The Grid"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"were-going-to-take-a-look-at-media-queries-with-the-grid"},"we're going to take a look at media queries with the grid"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"practice-39"},(0,o.kt)("strong",{parentName:"h3"},"Practice 39")),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);