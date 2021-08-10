import e,{useState as n,useRef as t,useEffect as r}from"react";function a(e){var n={exports:{}};return e(n,n.exports),n.exports}var i="function"==typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,u=i?Symbol.for("react.portal"):60106,l=i?Symbol.for("react.fragment"):60107,s=i?Symbol.for("react.strict_mode"):60108,c=i?Symbol.for("react.profiler"):60114,m=i?Symbol.for("react.provider"):60109,d=i?Symbol.for("react.context"):60110,p=i?Symbol.for("react.async_mode"):60111,f=i?Symbol.for("react.concurrent_mode"):60111,b=i?Symbol.for("react.forward_ref"):60112,y=i?Symbol.for("react.suspense"):60113,g=i?Symbol.for("react.suspense_list"):60120,v=i?Symbol.for("react.memo"):60115,h=i?Symbol.for("react.lazy"):60116,M=i?Symbol.for("react.block"):60121,S=i?Symbol.for("react.fundamental"):60117,E=i?Symbol.for("react.responder"):60118,_=i?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case o:switch(e=e.type){case p:case f:case l:case c:case s:case y:return e;default:switch(e=e&&e.$$typeof){case d:case b:case h:case v:case m:return e;default:return n}}case u:return n}}}function k(e){return w(e)===f}var O={AsyncMode:p,ConcurrentMode:f,ContextConsumer:d,ContextProvider:m,Element:o,ForwardRef:b,Fragment:l,Lazy:h,Memo:v,Portal:u,Profiler:c,StrictMode:s,Suspense:y,isAsyncMode:function(e){return k(e)||w(e)===p},isConcurrentMode:k,isContextConsumer:function(e){return w(e)===d},isContextProvider:function(e){return w(e)===m},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},isForwardRef:function(e){return w(e)===b},isFragment:function(e){return w(e)===l},isLazy:function(e){return w(e)===h},isMemo:function(e){return w(e)===v},isPortal:function(e){return w(e)===u},isProfiler:function(e){return w(e)===c},isStrictMode:function(e){return w(e)===s},isSuspense:function(e){return w(e)===y},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===l||e===f||e===c||e===s||e===y||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===m||e.$$typeof===d||e.$$typeof===b||e.$$typeof===S||e.$$typeof===E||e.$$typeof===_||e.$$typeof===M)},typeOf:w},N=a(function(e,n){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function M(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:var p=e.type;switch(p){case s:case c:case a:case o:case i:case d:return p;default:var y=p&&p.$$typeof;switch(y){case l:case m:case b:case f:case u:return y;default:return n}}case r:return n}}}var S=c,E=l,_=u,w=t,k=m,O=a,N=b,C=f,R=r,$=o,T=i,j=d,P=!1;function x(e){return M(e)===c}n.AsyncMode=s,n.ConcurrentMode=S,n.ContextConsumer=E,n.ContextProvider=_,n.Element=w,n.ForwardRef=k,n.Fragment=O,n.Lazy=N,n.Memo=C,n.Portal=R,n.Profiler=$,n.StrictMode=T,n.Suspense=j,n.isAsyncMode=function(e){return P||(P=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),x(e)||M(e)===s},n.isConcurrentMode=x,n.isContextConsumer=function(e){return M(e)===l},n.isContextProvider=function(e){return M(e)===u},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},n.isForwardRef=function(e){return M(e)===m},n.isFragment=function(e){return M(e)===a},n.isLazy=function(e){return M(e)===b},n.isMemo=function(e){return M(e)===f},n.isPortal=function(e){return M(e)===r},n.isProfiler=function(e){return M(e)===o},n.isStrictMode=function(e){return M(e)===i},n.isSuspense=function(e){return M(e)===d},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===c||e===o||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===f||e.$$typeof===u||e.$$typeof===l||e.$$typeof===m||e.$$typeof===g||e.$$typeof===v||e.$$typeof===h||e.$$typeof===y)},n.typeOf=M}()}),C=a(function(e){e.exports="production"===process.env.NODE_ENV?O:N}),R=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;function j(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var P=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,r,a=j(e),i=1;i<arguments.length;i++){for(var o in t=Object(arguments[i]))$.call(t,o)&&(a[o]=t[o]);if(R){r=R(t);for(var u=0;u<r.length;u++)T.call(t,r[u])&&(a[r[u]]=t[r[u]])}}return a},x="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",q=function(){};if("production"!==process.env.NODE_ENV){var D=x,I={},F=Function.call.bind(Object.prototype.hasOwnProperty);q=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}}function H(e,n,t,r,a){if("production"!==process.env.NODE_ENV)for(var i in e)if(F(e,i)){var o;try{if("function"!=typeof e[i]){var u=Error((r||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.");throw u.name="Invariant Violation",u}o=e[i](n,i,r,t,null,D)}catch(e){o=e}if(!o||o instanceof Error||q((r||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof o+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),o instanceof Error&&!(o.message in I)){I[o.message]=!0;var l=a?a():"";q("Failed "+t+" type: "+o.message+(null!=l?l:""))}}}H.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(I={})};var A=H,L=Function.call.bind(Object.prototype.hasOwnProperty),V=function(){};function W(){return null}function B(){}function K(){}"production"!==process.env.NODE_ENV&&(V=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}),K.resetWarningCache=B;var z=a(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,n){var t="function"==typeof Symbol&&Symbol.iterator,r="<<anonymous>>",a={array:l("array"),bool:l("boolean"),func:l("function"),number:l("number"),object:l("object"),string:l("string"),symbol:l("symbol"),any:u(W),arrayOf:function(e){return u(function(n,t,r,a,i){if("function"!=typeof e)return new o("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=n[t];if(!Array.isArray(u))return new o("Invalid "+a+" `"+i+"` of type `"+c(u)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<u.length;l++){var s=e(u,l,r,a,i+"["+l+"]",x);if(s instanceof Error)return s}return null})},element:u(function(n,t,r,a,i){var u=n[t];return e(u)?null:new o("Invalid "+a+" `"+i+"` of type `"+c(u)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:u(function(e,n,t,r,a){var i=e[n];return C.isValidElementType(i)?null:new o("Invalid "+r+" `"+a+"` of type `"+c(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(e){return u(function(n,t,a,i,u){return n[t]instanceof e?null:new o("Invalid "+i+" `"+u+"` of type `"+((l=n[t]).constructor&&l.constructor.name?l.constructor.name:r)+"` supplied to `"+a+"`, expected instance of `"+(e.name||r)+"`.");var l})},node:u(function(e,n,t,r,a){return s(e[n])?null:new o("Invalid "+r+" `"+a+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(e){return u(function(n,t,r,a,i){if("function"!=typeof e)return new o("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=n[t],l=c(u);if("object"!==l)return new o("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var s in u)if(L(u,s)){var m=e(u,s,r,a,i+"."+s,x);if(m instanceof Error)return m}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&V(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),W;function n(n,t,r,a,u){for(var l=n[t],s=0;s<e.length;s++)if(i(l,e[s]))return null;var c=JSON.stringify(e,function(e,n){return"symbol"===m(n)?String(n):n});return new o("Invalid "+a+" `"+u+"` of value `"+String(l)+"` supplied to `"+r+"`, expected one of "+c+".")}return u(n)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&V("Invalid argument supplied to oneOfType, expected an instance of array."),W;for(var n=0;n<e.length;n++){var t=e[n];if("function"!=typeof t)return V("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(t)+" at index "+n+"."),W}return u(function(n,t,r,a,i){for(var u=0;u<e.length;u++)if(null==(0,e[u])(n,t,r,a,i,x))return null;return new o("Invalid "+a+" `"+i+"` supplied to `"+r+"`.")})},shape:function(e){return u(function(n,t,r,a,i){var u=n[t],l=c(u);if("object"!==l)return new o("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var m=e[s];if(m){var d=m(u,s,r,a,i+"."+s,x);if(d)return d}}return null})},exact:function(e){return u(function(n,t,r,a,i){var u=n[t],l=c(u);if("object"!==l)return new o("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var s=P({},n[t],e);for(var m in s){var d=e[m];if(!d)return new o("Invalid "+a+" `"+i+"` key `"+m+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(n[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var p=d(u,m,r,a,i+"."+m,x);if(p)return p}return null})}};function i(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}function o(e){this.message=e,this.stack=""}function u(e){function n(n,t,a,i,u,l,s){if(i=i||r,l=l||a,s!==x){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}return null==t[a]?n?new o(null===t[a]?"The "+u+" `"+l+"` is marked as required in `"+i+"`, but its value is `null`.":"The "+u+" `"+l+"` is marked as required in `"+i+"`, but its value is `undefined`."):null:e(t,a,i,u,l)}process;var t=n.bind(null,!1);return t.isRequired=n.bind(null,!0),t}function l(e){return u(function(n,t,r,a,i,u){var l=n[t];return c(l)!==e?new o("Invalid "+a+" `"+i+"` of type `"+m(l)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function s(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(s);if(null===n||e(n))return!0;var r=function(e){var n=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof n)return n}(n);if(!r)return!1;var a,i=r.call(n);if(r!==n.entries){for(;!(a=i.next()).done;)if(!s(a.value))return!1}else for(;!(a=i.next()).done;){var o=a.value;if(o&&!s(o[1]))return!1}return!0;default:return!1}}function c(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||!!n&&("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}(n,e)?"symbol":n}function m(e){if(null==e)return""+e;var n=c(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function d(e){var n=m(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return o.prototype=Error.prototype,a.checkPropTypes=A,a.resetWarningCache=A.resetWarningCache,a.PropTypes=a,a}(C.isElement):function(){function e(e,n,t,r,a,i){if(i!==x){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:K,resetWarningCache:B};return t.PropTypes=t,t}()});function U(...e){return e.filter(Boolean).join(" ")}const Y=({id:n,className:t,children:r})=>{const a=U("rmm__top-bar",t&&t);return e.createElement("div",{id:n,className:a},r)};Y.defaultProps={id:"top"},Y.propTypes={id:z.string,className:z.string,children:z.node.isRequired};const J=({id:n,src:t,rel:r,className:a,alt:i})=>{const o=U("rmm__logo",a&&a);return e.createElement("img",{id:n,src:t,className:o,rel:r,alt:i})};J.defaultProps={alt:"",rel:""},J.propTypes={id:z.string.isRequired,src:z.string.isRequired,className:z.string,rel:z.string,alt:z.string};const G=({id:n,className:t,children:r})=>{const a=U("rmm__top-bar-title",t&&t);return e.createElement("h1",{id:n,className:a},r)};G.propTypes={id:z.string,className:z.string,children:z.node.isRequired};const Q=({label:n,state:t,onClick:r})=>(""===t?t="rmm__hamburger--closed":"open"===t&&(t="rmm__hamburger--open"),e.createElement("button",{className:`rmm__hamburger ${t}`,onClick:r},e.createElement("div",{className:"rmm_hamburger--slice-container"},e.createElement("span",{className:"rmm_hamburger--slice"}),e.createElement("span",{className:"rmm_hamburger--slice"}),e.createElement("span",{className:"rmm_hamburger--slice"}),e.createElement("span",{className:"rmm_hamburger--slice"})),n&&e.createElement("div",{className:"rmm_hamburger--label-container"},e.createElement("span",{className:"rmm_hamburger--label"},n))));Q.defaultProps={label:null},Q.propTypes={label:z.string,state:z.oneOf(["","open","closed"]),onClick:z.func};const X=({id:n,ariaLabel:t,activeState:r,children:a})=>{const i=U("rmm__nav",r&&`rmm__nav--${r}`);return e.createElement("nav",{id:n,className:i,"aria-label":t},a)};X.defaultProps={ariaLabel:"Main Navigation",activeState:""},X.propTypes={id:z.string.isRequired,ariaLabel:z.string.isRequired,activeState:z.oneOf(["","open","closed"]).isRequired,children:z.node.isRequired};const Z=({id:n,children:t,ariaLabel:r})=>e.createElement("ul",{id:n,role:"menubar","aria-label":r,className:"rmm__main-list"},t);Z.defaultProps={ariaLabel:"Main menu"},Z.propTypes={id:z.string.isRequired,children:z.node.isRequired,ariaLabel:z.string.isRequired};const ee=({id:n,activeState:t,children:r})=>{const a=U("rmm__mega-list",t&&`rmm__mega-list--${t}`);return e.createElement("ul",{role:"menu",className:a,id:n,"aria-labelledby":n},r)};ee.defaultProps={activeState:""},ee.propTypes={id:z.string.isRequired,activeState:z.oneOf(["open","closed"]).isRequired,children:z.node.isRequired};const ne=({id:n,role:t,isHeading:r,isChildren:a,isForward:i,className:o,children:u})=>{const l=U("rmm__main-nav-item",r&&"rmm__main-nav-item--heading",a&&"rmm__main-nav-item--children",i&&"rmm__main-nav-item--forward",o&&o);return e.createElement("li",{id:n,role:t,className:l},u)};ne.defaultProps={role:"none",isHeading:!1,hasChildren:!1,isForward:!1},ne.propTypes={id:z.string.isRequired,role:z.string,isHeading:z.bool,isChildren:z.bool,isForward:z.bool,className:z.string,children:z.node.isRequired};const te=({id:n,role:t,href:r,isBack:a,isForward:i,isActive:o,className:u,onClick:l,onKeyDown:s,ariaHaspopup:c,ariaControls:m,children:d})=>{const p=U("rmm__main-nav-item-link",a&&"rmm__main-nav-item-link--back",i&&"rmm__main-nav-item-link--forward",o&&"rmm__main-nav-item-link--active",u&&u);return e.createElement("a",{id:n,role:t,href:r,className:p,onClick:l,onKeyDown:s,"aria-haspopup":c,"aria-controls":m},d)};te.defaultProps={role:"menuitem",isBack:!1,isForward:!1,isActive:!1},te.propTypes={id:z.string.isRequired,role:z.string,href:z.string.isRequired,isBack:z.bool,isForward:z.bool,isActive:z.bool,className:z.string,onClick:z.func,onKeyDown:z.func,ariaHaspopup:z.string,ariaControls:z.string,children:z.node.isRequired};const re=({id:n,role:t,isHeading:r,isForward:a,className:i,children:o})=>{const u=U("rmm__nav-item",r&&"rmm__nav-item--heading",a&&"rmm__nav-item--forward",i&&i);return e.createElement("li",{id:n,role:t,className:u},o)};re.defaultProps={role:"none",isHeading:!1,hasChildren:!1,isForward:!1},re.propTypes={id:z.string.isRequired,role:z.string,isHeading:z.bool,isForward:z.bool,className:z.string,children:z.node.isRequired};const ae=({id:n,role:t,href:r,isBack:a,isHeading:i,isForward:o,isActive:u,className:l,onClick:s,onKeyDown:c,ariaHaspopup:m,ariaControls:d,children:p})=>{const f=U("rmm__nav-item-link",a&&"rmm__nav-item-link--back",i&&"rmm__nav-item-link--heading",o&&"rmm__nav-item-link--forward",u&&"rmm__nav-item-link--active",l&&l);return e.createElement("a",{id:n,role:t,href:r,className:f,onClick:s,onKeyDown:c,"aria-haspopup":m,"aria-controls":d},p)};ae.defaultProps={role:"menuitem",isBack:!1,isHeading:!1,isForward:!1,isActive:!1},ae.propTypes={id:z.string.isRequired,role:z.string,href:z.string.isRequired,isBack:z.bool,isHeading:z.bool,isForward:z.bool,isActive:z.bool,className:z.string,onClick:z.func,onKeyDown:z.func,ariaHaspopup:z.string,ariaControls:z.string,children:z.node.isRequired};const ie=({id:n,role:t,isSub:r,isSubSub:a,isDropdown:i,activeState:o,ariaLabelledby:u,children:l})=>{const s=U("rmm__nav-list",`rmm__nav-list--${o}`,r&&"rmm__nav-list--sub",a&&"rmm__nav-list--sub-sub",i&&"rmm__nav-list--dropdown");return e.createElement("ul",{id:n,role:t,"aria-labelledby":u,className:s},l)};ie.defaultProps={role:"menubar",isSub:!1,isSubSub:!1,isDropdown:!1,activeState:""},ie.propTypes={id:z.string.isRequired,role:z.string,isSub:z.bool,isSubSub:z.bool,isDropdown:z.bool,activeState:z.oneOf(["","open","closed"]).isRequired,ariaLabelledby:z.string.isRequired,children:z.node.isRequired};const oe=({className:n,children:t})=>{const r=U("rmm__nav-item-description",n&&n);return e.createElement("p",{className:r},t)};oe.propTypes={className:z.string,children:z.node.isRequired};const ue=e=>{const n=["closed","open"];let t="open";if(n.includes(e))switch(e){case n[0]:t=n[1];break;case n[1]:t=n[0];break;default:t=n[0]}return t},le=({logoImage:a})=>{const[i,o]=n(""),[u,l]=n(""),[s,c]=n(""),[m,d]=n([]),[p,f]=n(!0),b=t(null),y=()=>{d([]),l("closed"),c("closed")},g=(e,n)=>{"open"===e?d([...m,n]):"closed"===e&&d(m.filter(e=>e!==n))},v=(e,n)=>{e.preventDefault();const t=ue(u);l(ue(u)),p?g(t,n):m.includes(n)?d([]):d([n])},h=(e,n)=>{e.preventDefault();const t=ue(s);c(ue(s)),g(t,n)};r(()=>{window.innerWidth>=1024?f(!1):f(!0)},[m,p]);const M=e=>{27===e.keyCode&&y()},S=e=>{const n=e.charCode||e.keyCode;if(32===n||13===n)return!0};var E;return r(()=>(document.addEventListener("keydown",M,!1),()=>{document.removeEventListener("keydown",M,!1)})),r(()=>{const e=e=>{E.current&&!E.current.contains(e.target)&&y()};return document.addEventListener("mousedown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",e)}},[E=b]),e.createElement("div",{role:"navigation",className:"rmm__root",ref:b},e.createElement(Y,null,a&&e.createElement(J,{id:"menuitem-logo",src:a,alt:"Your brand's logo",rel:"home"}),e.createElement(G,null,"Your Brand Name")),e.createElement(Q,{label:"Menu",state:i,onClick:e=>((e,n)=>{e.preventDefault();const t=ue(i);o(t),g(t,"nav-main"),"open"===i&&y()})(e)}),e.createElement(X,{id:"site-nav",activeState:i,ariaLabel:"Main Navigation"},e.createElement(Z,{id:"menubar-main",ariaLabel:"Main Menu"},e.createElement(ne,{role:"none",id:"nav-home"},e.createElement(te,{id:"menuitem-home",role:"menuitem",href:"/"},"Home")),e.createElement(ne,{id:"nav-Mega-Menu",role:"none",isChildren:!0},e.createElement(te,{role:"menuitem",id:"menuitem-Mega-Menu",href:"/?page=mega-menu",isForward:!0,isActive:!!m.includes("menu-Mega-Menu"),onClick:e=>v(e,"menu-Mega-Menu"),onKeyDown:e=>S(e)&&v(e,"menu-Mega-Menu"),ariaHaspopup:"true",ariaControls:"menu-Mega-Menu"},"Mega Menu"),e.createElement(ee,{id:"menu-Mega-Menu",activeState:m.includes("menu-Mega-Menu")?"open":"closed"},e.createElement(re,{id:"nav-Mega-Menu-back",isHeading:!0},e.createElement(ae,{id:"menuitem-Mega-Menu-back",href:"/?page=mega-menu",onClick:e=>v(e,"menu-Mega-Menu"),onKeyDown:e=>S(e)&&v(e,"menu-Mega-Menu"),ariaControls:"nav-main-Mega-Menu",isBack:!0},"Mega Menu")),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-1",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-1",role:"menuitem",href:"/?page=sub-menu-item-1",isHeading:!0},"Sub menu item 1"),e.createElement(oe,null,"Single line description that accompanies link")),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-2",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-2",role:"menuitem",href:"/?page=sub-menu-item-2",isHeading:!0},"Sub menu item 2"),e.createElement(oe,null,"Double lined small description that accompanies link in the React Mega Menu project")),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-3",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3",role:"menuitem",href:"/?page=sub-menu-item-3",isHeading:!0,isForward:!0,onClick:e=>h(e,"menu-Mega-Menu-Sub-menu-item-3"),onKeyDown:e=>S(e)&&h(e,"menu-Mega-Menu-Sub-menu-item-3"),ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-3"},"Sub menu item 3"),e.createElement(oe,null,"Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide."),e.createElement(ie,{id:"menu-Mega-Menu-Sub-menu-item-3",role:"menu",isSub:!0,isSubSub:!0,activeState:m.includes("menu-Mega-Menu-Sub-menu-item-3")?"open":"closed",ariaLabelledby:"menuitem-Mega-Menu-Sub-menu-item-3"},e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-3-back",role:"none",isHeading:!0},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3-back",role:"menuitem",href:"/?page=sub-menu-item-3",isBack:!0,onClick:e=>h(e,"menu-Mega-Menu-Sub-menu-item-3"),onKeyDown:e=>S(e)&&h(e,"menu-Mega-Menu-Sub-menu-item-3"),ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-3"},"Sub menu item 3")),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-3.1",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3.1",role:"menuitem",href:"/?page=sub-menu-item-3.1"},"Sub menu item 3.1"),e.createElement(oe,null,"Single line description that accompanies link")),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-3.2",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3.2",role:"menuitem",href:"/?page=sub-menu-item-3.2"},"Sub menu item 3.2"),e.createElement(oe,null,"Double lined small description that accompanies link in the React Mega Menu project")),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-3.3",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3.3",role:"menuitem",href:"/?page=sub-menu-item-3.3"},"Sub menu item 3.3"),e.createElement(oe,null,"Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide.")))),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4",role:"menuitem",href:"/?page=sub-menu-item-4",isHeading:!0,isForward:!0,onClick:e=>h(e,"menu-Mega-Menu-Sub-menu-item-4"),onKeyDown:e=>S(e)&&h(e,"menu-Mega-Menu-Sub-menu-item-4"),ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-4"},"Sub menu item 4"),e.createElement(oe,null,"Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide."),e.createElement(ie,{id:"menu-Mega-Menu-Sub-menu-item-4",role:"menu",isSub:!0,isSubSub:!0,activeState:m.includes("menu-Mega-Menu-Sub-menu-item-4")?"open":"closed",ariaLabelledby:"menuitem-Mega-Menu-Sub-menu-item-4"},e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4-back",role:"none",isHeading:!0},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4-back",role:"menuitem",href:"/?page=sub-menu-item-4",isBack:!0,onClick:e=>h(e,"menu-Mega-Menu-Sub-menu-item-4"),onKeyDown:e=>S(e)&&h(e,"menu-Mega-Menu-Sub-menu-item-4"),ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-4"},"Sub menu item 4")),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4.1",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.1",role:"menuitem",href:"/?page=sub-menu-item-4.1"},"Sub menu item 4.1")),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4.2",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.2",role:"menuitem",href:"/?page=sub-menu-item-4.2"},"Sub menu item 4.2")),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4.3",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.3",role:"menuitem",href:"/?page=sub-menu-item-4.3"},"Sub menu item 4.3")),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4.4",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.4",role:"menuitem",href:"/?page=sub-menu-item-4.4"},"Sub menu item 4.4")),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4.5",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.5",role:"menuitem",href:"/?page=sub-menu-item-4.5"},"Sub menu item 4.5")),e.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4.6",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.6",role:"menuitem",href:"/?page=sub-menu-item-4.6"},"Sub menu item 4.6")))))),e.createElement(ne,{id:"nav-contact",role:"none"},e.createElement(te,{id:"menuitem-contact",role:"menuitem",href:"/?page=contact"},"Contact")))))};le.defaultProps={logoImage:null},le.propTypes={logoImage:z.string};export{le as default};
//# sourceMappingURL=index.modern.js.map
