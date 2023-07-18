"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[3174],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:17},i="Conditional rendering",s={unversionedId:"4 React 18/17 conditional rendering",id:"4 React 18/17 conditional rendering",title:"Conditional rendering",description:"two common ways to conditionally render in react",source:"@site/docs/4 React 18/17 conditional rendering.md",sourceDirName:"4 React 18",slug:"/4 React 18/17 conditional rendering",permalink:"/fundamentals/4 React 18/17 conditional rendering",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Parent and child component communication",permalink:"/fundamentals/4 React 18/16 parent and child  communication"},next:{title:"List rendering",permalink:"/fundamentals/4 React 18/18 list rendering"}},l={},c=[{value:"two common ways to conditionally render in react",id:"two-common-ways-to-conditionally-render-in-react",level:3},{value:"using the ternary operator",id:"using-the-ternary-operator",level:3},{value:"using the short circuit operator approach",id:"using-the-short-circuit-operator-approach",level:3}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conditional-rendering"},"Conditional rendering"),(0,o.kt)("h3",{id:"two-common-ways-to-conditionally-render-in-react"},"two common ways to conditionally render in react"),(0,o.kt)("p",null,"let's now move on to the next important\ntopic which is two common ways to conditionally render in react"),(0,o.kt)("p",null,"when you're building react applications\nyou may often need to show or hide some html based on a certain condition"),(0,o.kt)("p",null,"luckily conditional rendering in react works the same way conditions work in\njavascript"),(0,o.kt)("p",null,"let's look at two common ways to conditionally render in react"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in the components folder i'm going to create a new file called ",(0,o.kt)("inlineCode",{parentName:"li"},"UserGreeting.js"))),(0,o.kt)("p",null,"within the file i'm going to create a\nsimple component"),(0,o.kt)("p",null,"and within the component i'm going to define a new constant\nconst isLoggedIn is equal to false"),(0,o.kt)("p",null,"for the jsx i'm going to add a message\nthat says welcome"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const UserGreeting = () => {\n  const isLoggedIn = false\n  return <div>Welcome</div>\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"now what i want is for the message to be conditionally rendered\nbased on the value of isLoggedIn")),(0,o.kt)("p",null,"if i am logged in the message welcome vishwas should be displayed"),(0,o.kt)("p",null,"and if i am not logged in the message welcome guest\nshould be displayed"),(0,o.kt)("h3",{id:"using-the-ternary-operator"},"using the ternary operator"),(0,o.kt)("p",null,"the first way to achieve that is using the ternary operator"),(0,o.kt)("p",null,"so after welcome we add a pair of curly braces to evaluate the javascript expression"),(0,o.kt)("p",null,"the expression is to check if is logged in is true or false"),(0,o.kt)("p",null,"if it is true append vishwas"),(0,o.kt)("p",null,"else append guest"),(0,o.kt)("p",null,"let's save this file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const UserGreeting = () => {\n  const isLoggedIn = false\n  return <div>Welcome {isLoggedIn ? 'Vishwas' : 'Guest'}</div>\n}\n")),(0,o.kt)("p",null,"include it in app component, so user greeting\nimport it at the top"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import './App.css'\nimport { UserGreeting } from './components/UserGreeting'\n// import { ParentComponent } from './components/ParentComponent'\n// import { ClickHandler } from './components/ClickHandler'\n// import { Greet } from './components/Greet'\n// import { Message } from './components/Message'\n\nfunction App() {\n  return (\n    <div className='App'>\n      {/* <Greet name='Bruce' heroName='Batman' />\n      <Greet name='Clark' heroName='Superman'>\n        <button>Action</button>\n      </Greet>\n      <Greet name='Diana' heroName='Wonder Woman'>\n        <p>This is children props</p>\n      </Greet> */}\n      {/* <Message /> */}\n      {/* <ClickHandler /> */}\n      {/* <ParentComponent /> */}\n      <UserGreeting />\n    </div>\n  )\n}\n\nexport default App\n")),(0,o.kt)("p",null,"and head back to the browser\nyou can see that the message welcome guest is displayed and that is because he's logged in is set to false"),(0,o.kt)("p",null,"change it to true"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const UserGreeting = () => {\n  const isLoggedIn = true\n  return <div>Welcome {isLoggedIn ? 'Vishwas' : 'Guest'}</div>\n}\n")),(0,o.kt)("p",null,"and the message welcome vishwas is\ndisplayed"),(0,o.kt)("h3",{id:"using-the-short-circuit-operator-approach"},"using the short circuit operator approach"),(0,o.kt)("p",null,"all right the final approach is ",(0,o.kt)("inlineCode",{parentName:"p"},"the short circuit operator approach")),(0,o.kt)("p",null,"and this approach is just a specific case of the ternary operator approach"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"when you want to render either something or nothing you make use of the short circuit operator")),(0,o.kt)("p",null,"for example right now we return either welcome vishwas or welcome guest based\non the value of is logged in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"now let's say if the user is logged in i want to display welcome vishwas and if the user is not logged in i want to render just welcome on the screen")),(0,o.kt)("p",null,"so based on is logged in render either\nwelcome vishwas or nothing"),(0,o.kt)("p",null,"to do that, within curly braces we write is logged in ampersand ampersand\nvishwas"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const UserGreeting = () => {\n  const isLoggedIn = true\n  return <div>Welcome {isLoggedIn && 'Vishwas'}</div>\n}\n")),(0,o.kt)("p",null,"so what happens here is the expression evaluates the left hand side of the\noperator, is logged in"),(0,o.kt)("p",null,"if it is true it also evaluates the\nright hand side which in our case is jsx that will be rendered in the browser"),(0,o.kt)("p",null,"however if at all the left hand side evaluates to false the right hand side\nwill never be evaluated as it doesn't affect the final value of the whole expression"),(0,o.kt)("p",null,"so if is logged in is set to true you can see in the browser welcome\nvishwas is displayed"),(0,o.kt)("p",null,"i change it to false"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const UserGreeting = () => {\n  const isLoggedIn = false\n  return <div>Welcome {isLoggedIn && 'Vishwas'}</div>\n}\n")),(0,o.kt)("p",null,"only welcome is displayed as you can see if you know javascript\nconditional rendering is pretty straightforward"))}u.isMDXComponent=!0}}]);