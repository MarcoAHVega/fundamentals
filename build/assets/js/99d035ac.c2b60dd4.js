"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[2218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},s=Object.keys(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),h=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=h(e.components);return l.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=h(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||c[d]||s;return n?l.createElement(m,o(o({ref:t},u),{},{components:n})):l.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[p]="string"==typeof e?e:a,o[1]=r;for(var h=2;h<s;h++)o[h]=n[h];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var l=n(7462),a=(n(7294),n(3905));const s={sidebar_position:3},o="3. How to add CSS",r={unversionedId:"2 CSS Crash Course/Section-1/How to add CSS",id:"2 CSS Crash Course/Section-1/How to add CSS",title:"3. How to add CSS",description:"there are three different ways to add styles to an html document",source:"@site/docs/2 CSS Crash Course/Section-1/3-How to add CSS.md",sourceDirName:"2 CSS Crash Course/Section-1",slug:"/2 CSS Crash Course/Section-1/How to add CSS",permalink:"/fundamentals/2 CSS Crash Course/Section-1/How to add CSS",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. What is CSS?",permalink:"/fundamentals/2 CSS Crash Course/Section-1/What is CSS"},next:{title:"2 CSS SELECTORS",permalink:"/fundamentals/category/2-css-selectors"}},i={},h=[{value:"there are three different ways to add styles to an html document",id:"there-are-three-different-ways-to-add-styles-to-an-html-document",level:3},{value:"inline styles",id:"inline-styles",level:3},{value:"using an internal style sheet",id:"using-an-internal-style-sheet",level:3},{value:"CSS Rule Syntax",id:"css-rule-syntax",level:3},{value:"external style sheet",id:"external-style-sheet",level:3}],u={toc:h},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3-how-to-add-css"},"3. How to add CSS"),(0,a.kt)("h3",{id:"there-are-three-different-ways-to-add-styles-to-an-html-document"},"there are three different ways to add styles to an html document"),(0,a.kt)("p",null,"let's begin with an example for our first task let's learn how to apply an orange color to the text we see in the browser"),(0,a.kt)("p",null,"now you might be surprised but there are three different ways to add styles to an\nhtml document"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"inline styles")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"internal style sheet")),(0,a.kt)("p",null,"and finally ",(0,a.kt)("inlineCode",{parentName:"p"},"external style sheet")),(0,a.kt)("p",null,"let's understand each of them starting\nwith inline styles"),(0,a.kt)("h3",{id:"inline-styles"},"inline styles"),(0,a.kt)("p",null,"inline styles are css declarations that\naffect a single html element"),(0,a.kt)("p",null,"to use inline styles we add the style\nattribute to the relevant element"),(0,a.kt)("p",null,"to apply an orange color to the h1 tag\nwe add ",(0,a.kt)("inlineCode",{parentName:"p"},"the style attribute")," and this is equal to what i mentioned as\na css declaration a few seconds ago"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"a css declaration is a pair of property and its value")),(0,a.kt)("p",null,"for our example the property is color\nand the value is orange we separate them with a colon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<h1 style="color: orange">CSS Crash Course</h1>\n')),(0,a.kt)("p",null,"if we now save the file and refresh the browser\nyou can see the text is now in orange"),(0,a.kt)("p",null,"looks pretty simple right\nwell let me tell you"),(0,a.kt)("p",null,"although adding inline styles is pretty straight forward whenever possible you should avoid it"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"unfortunately applying inline styles is the opposite of css best practices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"first it is very difficult to maintain"))),(0,a.kt)("p",null,"suppose you have the style on 10\ndifferent elements and there is a request to change orange to blue color"),(0,a.kt)("p",null,"you then have to edit the code in 10 different places"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the second reason is that with inline styles you are mixing html content with presentational code which is more difficult to read and understand")),(0,a.kt)("p",null,"separating them makes it easier for\nmaintenance"),(0,a.kt)("p",null,"well if it is bad why are we learning it\nwell"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"it does have some use case")),(0,a.kt)("p",null,"which you would come across in more complex applications"),(0,a.kt)("p",null,"for example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"styling html templates")),(0,a.kt)("p",null,"for ",(0,a.kt)("inlineCode",{parentName:"p"},"emails")),(0,a.kt)("p",null,"and perhaps ",(0,a.kt)("inlineCode",{parentName:"p"},"styling content in a content management system")),(0,a.kt)("p",null,"now these are pretty advanced from a beginner's point of view so you don't\nhave to worry about the use cases right now"),(0,a.kt)("p",null,"all you have to make sure is you\nunderstand how to apply inline styles"),(0,a.kt)("p",null,"style attribute property\nvalue"),(0,a.kt)("h3",{id:"using-an-internal-style-sheet"},"using an internal style sheet"),(0,a.kt)("p",null,"all right the second way to add css is\nby using an internal style sheet"),(0,a.kt)("p",null,"an internal style sheet is defined\ninside a pair of style html element within the head section of the document"),(0,a.kt)("p",null,"so opening tag style and closing tag within the style block we can specify\ncss rules that get applied to the html elements"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,a.kt)("h3",{id:"css-rule-syntax"},"CSS Rule Syntax"),(0,a.kt)("p",null,"which brings us to the syntax of a css rule"),(0,a.kt)("p",null,"a css rule consists of a selector and a declaration block"),(0,a.kt)("p",null,"the selector points to the html element you want to style"),(0,a.kt)("p",null,"the declaration block contains one or\nmore style declarations separated by semicolons"),(0,a.kt)("p",null,"each declaration has a property and a value"),(0,a.kt)("p",null,"what you're seeing is the css rule we need to write within the style tag to\ncolor the h1 text in orange"),(0,a.kt)("p",null,"here each one is the selector and the\ndeclaration block is within curly braces"),(0,a.kt)("p",null,"we specify the property which is color\nand its value which is orange separated by a colon"),(0,a.kt)("p",null,"so back in vs code within the style tags h1\nproperty is color and the value is orange"),(0,a.kt)("p",null,"and let me format the code alt shift f is a keyboard shortcut"),(0,a.kt)("p",null,"if you now remove the inline style"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,a.kt)("p",null,"and refresh the browser\nyou can see the h1 tag is still orange colored"),(0,a.kt)("p",null,"the inline style sheet is working as\nexpected"),(0,a.kt)("p",null,"what is happening here is the selector\neach one selects all h1 tags in a document"),(0,a.kt)("p",null,"we just have the one element so the element is selected"),(0,a.kt)("p",null,"to this element the style specified is\napplied which is orange color in our case"),(0,a.kt)("p",null,"if we add a second h1 tag another h1 element"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,a.kt)("p",null,"refresh you can see this is an orange as well"),(0,a.kt)("p",null,"hopefully this css rule makes sense now"),(0,a.kt)("p",null,"now what you should know is that inline style sheet is also not the recommended approach to adding styles to an html\ndocument"),(0,a.kt)("p",null,"they can be useful if you just have one web page\nor perhaps if you're working with a content management system where you're blocked from modifying\nexternal css files"),(0,a.kt)("p",null,"but for websites which contain more than\none web page an internal style sheet becomes less efficient"),(0,a.kt)("p",null,"if you have to apply a uniform style to multiple html pages you have to edit the\nstyle section in multiple files"),(0,a.kt)("p",null,"maintenance would be difficult"),(0,a.kt)("h3",{id:"external-style-sheet"},"external style sheet"),(0,a.kt)("p",null,"which brings us to the third and final way to add css which is external style\nsheet"),(0,a.kt)("p",null,"an external style sheet contains css in a separate file with a dot css extension"),(0,a.kt)("p",null,"and the html page must include a reference to the external style sheet\ninside the head section with a link html element"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"let me show how it works first we create a new file called\nstyles.css")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the dot css extension is very important\nand styles is sort of the convention as the file name"))),(0,a.kt)("p",null,"now all we have to do is move the css rule from the style block\nand put it inside the styles.css file"),(0,a.kt)("p",null,"so h1 curly braces color set to orange\nand a semicolon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,a.kt)("p",null,"once we have the styles in place we link this file with the html document"),(0,a.kt)("p",null,"for that within the head section we add a link tag"),(0,a.kt)("p",null,"and on this tag we add two attributes relation is equal to stylesheet\nand href which points to the css file so styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,a.kt)("p",null,"if you now save both the files and head back to the browser\nrefresh"),(0,a.kt)("p",null,"and you should still see the text in orange color"),(0,a.kt)("p",null,"let me change orange to blue to make sure it's working"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,a.kt)("p",null,"refresh and you can see the text is now in blue so this is the external style sheet\napproach"),(0,a.kt)("p",null,"let me tell you this approach is the most common and useful method of adding\ncss to a document"),(0,a.kt)("p",null,"you can link a single css file to\nmultiple web pages styling all of them with the same css style sheet"),(0,a.kt)("p",null,"so we can add a new about.html\ncopy paste all the content from index.html\nchange the text to about css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,a.kt)("p",null,"open the file in the browser and you should still see blue colored h1 tag\nso from one file you can control the styles of your entire website\nso these are the three ways to add css to an html document"))}c.isMDXComponent=!0}}]);