"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[3366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},i="Running the App on a Device",p={unversionedId:"6 React Native Expo CLI/Section 1: Introduction and Setup/4 Running App on Device",id:"6 React Native Expo CLI/Section 1: Introduction and Setup/4 Running App on Device",title:"Running the App on a Device",description:"- Now that we have learned how to generate a new Expo project and gained an understanding of the project's different files and folders, it's time to run our application.",source:"@site/docs/6 React Native Expo CLI/Section 1: Introduction and Setup/4 Running App on Device.md",sourceDirName:"6 React Native Expo CLI/Section 1: Introduction and Setup",slug:"/6 React Native Expo CLI/Section 1: Introduction and Setup/4 Running App on Device",permalink:"/fundamentals/6 React Native Expo CLI/Section 1: Introduction and Setup/4 Running App on Device",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Hello World",permalink:"/fundamentals/6 React Native Expo CLI/Section 1: Introduction and Setup/3 Hello World"},next:{title:"Running the App on an iOS Simulator",permalink:"/fundamentals/6 React Native Expo CLI/Section 1: Introduction and Setup/5 Running App on iPhone Simulator"}},l={},c=[{value:"Steps to Run the App on a Real Device",id:"steps-to-run-the-app-on-a-real-device",level:3}],u={toc:c},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-the-app-on-a-device"},"Running the App on a Device"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now that we have learned how to generate a new Expo project and gained an understanding of the project's different files and folders, it's time to run our application.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There are several methods available for running the app on different devices:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"iOS device")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Android device")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"iOS simulator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Android emulator")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"We will focus on running the app on a real device."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I will be demonstrating the process on an iPhone, but I will also provide instructions for running the app on an Android device."))),(0,r.kt)("h3",{id:"steps-to-run-the-app-on-a-real-device"},"Steps to Run the App on a Real Device"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Navigate to the project folder and run the command ",(0,r.kt)("inlineCode",{parentName:"strong"},"npm start")," .")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This will generate a QR code which we will use shortly."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Download the Expo Go app on your device.")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can find it on the App Store for iPhones or the Play Store for Android devices."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Ensure that both your computer and the mobile device are connected to the same Wi-Fi network."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"On your iPhone, open the Camera app and scan the QR code displayed in the terminal.")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"If you have an Android device, use the QR code scanner within the Expo Go app.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After a few seconds, you should see the Hello World app running on your device."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The device screen may be mirrored on your computer screen."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"To test the app"),", go back to ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js"),' and change the text to "Hello World".'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Save the file, and you will notice the change reflected on your device almost instantly.")))))}s.isMDXComponent=!0}}]);