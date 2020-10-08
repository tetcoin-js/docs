(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),i=(n(0),n(168)),o={title:"TypeScript user generated"},s={unversionedId:"api/start/typescript.user",id:"api/start/typescript.user",isDocsHomePage:!1,title:"TypeScript user generated",description:"In the previous section we looked at the TypeScript definitions that are available and are generated from both the chain and definitions. Here we will expand upon the use of the infrastructure created to define types as part of the @polkadot/types library and see how to use them to generate your own definitions and chain types.",source:"@site/docs/api/start/typescript.user.md",slug:"/api/start/typescript.user",permalink:"/docs/api/start/typescript.user",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/typescript.user.md",version:"current",sidebar:"reference",previous:{title:"TypeScript interfaces",permalink:"/docs/api/start/typescript"},next:{title:"Overview",permalink:"/docs/api/cookbook"}},p=[{value:"Definitions",id:"definitions",children:[]},{value:"Chain modules",id:"chain-modules",children:[]},{value:"Example of actual use",id:"example-of-actual-use",children:[]},{value:"And that&#39;s a wrap",id:"and-thats-a-wrap",children:[]}],c={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the previous section we looked at the TypeScript definitions that are available and are generated from both the chain and definitions. Here we will expand upon the use of the infrastructure created to define types as part of the ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/types")," library and see how to use them to generate your own definitions and chain types."),Object(i.b)("h2",{id:"definitions"},"Definitions"),Object(i.b)("p",null,"A large part of the type definitions are defined not as classes, but rather as structures from which type definitions are extracted and that can be used as-is to let the API know how to decode a type. By now you should be familiar with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/types.extend"}),"type extensions")," and the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/types.extend#field-ordering"}),"rules around fields"),", but effectively the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polkadot-js/api/tree/master/packages/types/src/interfaces"}),"types library does exactly the same"),"."),Object(i.b)("p",null,"To create TypeScript-aware definitions and keep your files in a single place, you can follow the same approach. Assuming you have a package named ",Object(i.b)("inlineCode",{parentName:"p"},"@MeInc/stuff")," where you have the definitions in an ",Object(i.b)("inlineCode",{parentName:"p"},"stuff/interfaces")," folder. Each sub-folder would indicate a runtime module, e.g."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"stuff/interfaces/<module>/definitions.ts")," for each module (",Object(i.b)("inlineCode",{parentName:"li"},"types.ts")," & ",Object(i.b)("inlineCode",{parentName:"li"},"index.ts")," will be generated)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"stuff/interfaces/definitions.ts")," importing all sub-definitions`")),Object(i.b)("p",null,"With this structure setup, you can generate TypeScript definitions."),Object(i.b)("p",null,"In the root of your project (with the ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/typegen")," package installed), you can run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn polkadot-types-from-defs --input ./stuff/interfaces --package @MeInc/stuff/interfaces")," which will create ",Object(i.b)("inlineCode",{parentName:"p"},"types.ts")," and ",Object(i.b)("inlineCode",{parentName:"p"},"index.ts")," files with the generated types. You can use these in exactly the same way as you would use your types from ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/types/interfaces"),"."),Object(i.b)("h2",{id:"chain-modules"},"Chain modules"),Object(i.b)("p",null,"In the same way as the type library provides defaults from a substrate-base chain, you can also, directly from the chain's metadata, generate a complete ",Object(i.b)("inlineCode",{parentName:"p"},"api.{consts,query}.*")," definition for your specific chain. The command will create 2 files, ",Object(i.b)("inlineCode",{parentName:"p"},"{consts, query}.types.ts")," which you can either use to augment the TypeScript definitions, or replace those in ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/api/*")," with your versions (copy, TypeScript replacement or browser/node aliasing)."),Object(i.b)("p",null,"In the root of your project, you can run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn polkadot-types-from-chain --endpoint wss://<url> --output ./stuff")," and it will create the required output. (Here you can specify an optional ",Object(i.b)("inlineCode",{parentName:"p"},"--package @MeInc/stuff")," to read definitions for the targeted output folder with the specified package name.)"),Object(i.b)("h2",{id:"example-of-actual-use"},"Example of actual use"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../examples/promise/typegen"}),"TypeScript augmentation example")," example provides a full real-world example of these scripts in action. Additionally it shows all the configurations from a TypeScript as well as an in-use perspective, showing how the types and interfaces are fully augmented based on the provided metadata."),Object(i.b)("h2",{id:"and-thats-a-wrap"},"And that's a wrap"),Object(i.b)("p",null,"This brings us to the end of our overview and jump through the API. While the documentation is still very much an ever evolving item, we can encourage you to try out what you have learned with some ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../examples/promise"}),"examples"),". As we ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start#help-us-help-others"}),"indicated right at the start of this journey"),", if there are areas for improvement, let us know."))}l.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,b=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);