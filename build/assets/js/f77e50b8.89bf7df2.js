"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[8286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(n),p=o,h=m["".concat(c,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:7},l="Create Elements",i={unversionedId:"3 Javascript/document-object-model-docs/create-elements",id:"3 Javascript/document-object-model-docs/create-elements",title:"Create Elements",description:"So we know how to select elements, navigate to related elements, and manipulate them. Now let's look at how to create elements. With JavaScript, we can create any DOM element we want and then insert it into the document.",source:"@site/docs/3 Javascript/06-document-object-model-docs/07-create-elements.md",sourceDirName:"3 Javascript/06-document-object-model-docs",slug:"/3 Javascript/document-object-model-docs/create-elements",permalink:"/fundamentals/3 Javascript/document-object-model-docs/create-elements",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Traversing The DOM - Nodes",permalink:"/fundamentals/3 Javascript/document-object-model-docs/traversing-the-dom-nodes"},next:{title:"Create Item - innerHTML vs createElement()",permalink:"/fundamentals/3 Javascript/document-object-model-docs/create-item-innerHTML-vs-createElement"}},c={},d=[{value:"document.createElement()",id:"documentcreateelement",level:3},{value:"document.createTextNode()",id:"documentcreatetextnode",level:3},{value:"Inserting Elements into the Document",id:"inserting-elements-into-the-document",level:3}],s={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-elements"},"Create Elements"),(0,o.kt)("p",null,"So we know how to select elements, navigate to related elements, and manipulate them. Now let's look at how to create elements. With JavaScript, we can create any DOM element we want and then insert it into the document."),(0,o.kt)("p",null,"In many cases, you'll want to create a new element and then insert it into the document on some kind of event. For instance, when we build the final functionality of our shopping list, we're going to want to create a new list item when we click on the ",(0,o.kt)("em",{parentName:"p"},"Add Item")," button."),(0,o.kt)("p",null,"We will learn about events soon, but right now, I just want to focus on creating elements via JavaScript."),(0,o.kt)("h3",{id:"documentcreateelement"},"document.createElement()"),(0,o.kt)("p",null,"This is the main method we'll use to create elements. It takes one argument, which is the tag name of the element we want to create. Let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const div = document.createElement('div')\n\nconsole.log(div)\n// <div></div>\n")),(0,o.kt)("p",null,"If you do a ",(0,o.kt)("inlineCode",{parentName:"p"},"console.dir(div)"),", you'll see a ton of properties as well as methods in the prototype chain."),(0,o.kt)("p",null,"We can add any attributes we want to our new ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Add a class\ndiv.className = 'my-element'\n\n// Add an id\ndiv.id = 'my-element'\n\n// Add an attribute\ndiv.setAttribute('title', 'My Element')\n")),(0,o.kt)("h3",{id:"documentcreatetextnode"},"document.createTextNode()"),(0,o.kt)("p",null,"If we want to add text, we could technically do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"div.innerText = 'Hello World'\n")),(0,o.kt)("p",null,"However, using ",(0,o.kt)("inlineCode",{parentName:"p"},"innerText")," is not the best way to do this when creating a new element. It is really meant to get and change the text of an already existing element."),(0,o.kt)("p",null,"It's better to create a new text node with ",(0,o.kt)("inlineCode",{parentName:"p"},"document.createTextNode()")," and then append it to the element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create a text node\nconst text = document.createTextNode('Hello World')\n\n// Add the text node to the div\ndiv.appendChild(text)\n")),(0,o.kt)("p",null,"Now if you log the div, you'll see"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<div class='my-element' id='my-element' title='My Element'>\n  Hello World\n</div>\n")),(0,o.kt)("h3",{id:"inserting-elements-into-the-document"},"Inserting Elements into the Document"),(0,o.kt)("p",null,"Just like we used ",(0,o.kt)("inlineCode",{parentName:"p"},"appendChild()")," to add the text node, we can use it to add it to the document."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.body.appendChild(div)\n")),(0,o.kt)("p",null,"That will place it in the body tag as the last element. We can target any element in the document and insert it into another element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.querySelector('ul').appendChild(div)\n")))}u.isMDXComponent=!0}}]);