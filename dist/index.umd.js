!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):(e||self).reactMegaMenu=n(e.react)}(this,function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=/*#__PURE__*/n(e);function r(e){var n={exports:{}};return e(n,n.exports),n.exports}var a="function"==typeof Symbol&&Symbol.for,i=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,u=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,s=a?Symbol.for("react.profiler"):60114,c=a?Symbol.for("react.provider"):60109,m=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.async_mode"):60111,f=a?Symbol.for("react.concurrent_mode"):60111,p=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,y=a?Symbol.for("react.suspense_list"):60120,g=a?Symbol.for("react.memo"):60115,v=a?Symbol.for("react.lazy"):60116,h=a?Symbol.for("react.block"):60121,S=a?Symbol.for("react.fundamental"):60117,M=a?Symbol.for("react.responder"):60118,E=a?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case i:switch(e=e.type){case d:case f:case u:case s:case l:case b:return e;default:switch(e=e&&e.$$typeof){case m:case p:case v:case g:case c:return e;default:return n}}case o:return n}}}function w(e){return _(e)===f}var k={AsyncMode:d,ConcurrentMode:f,ContextConsumer:m,ContextProvider:c,Element:i,ForwardRef:p,Fragment:u,Lazy:v,Memo:g,Portal:o,Profiler:s,StrictMode:l,Suspense:b,isAsyncMode:function(e){return w(e)||_(e)===d},isConcurrentMode:w,isContextConsumer:function(e){return _(e)===m},isContextProvider:function(e){return _(e)===c},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},isForwardRef:function(e){return _(e)===p},isFragment:function(e){return _(e)===u},isLazy:function(e){return _(e)===v},isMemo:function(e){return _(e)===g},isPortal:function(e){return _(e)===o},isProfiler:function(e){return _(e)===s},isStrictMode:function(e){return _(e)===l},isSuspense:function(e){return _(e)===b},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===u||e===f||e===s||e===l||e===b||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===g||e.$$typeof===c||e.$$typeof===m||e.$$typeof===p||e.$$typeof===S||e.$$typeof===M||e.$$typeof===E||e.$$typeof===h)},typeOf:_},N=r(function(e,n){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:var f=e.type;switch(f){case s:case c:case a:case o:case i:case d:return f;default:var y=f&&f.$$typeof;switch(y){case l:case m:case b:case p:case u:return y;default:return n}}case r:return n}}}var M=c,E=l,_=u,w=t,k=m,N=a,O=b,C=p,T=r,R=o,j=i,$=d,x=!1;function P(e){return S(e)===c}n.AsyncMode=s,n.ConcurrentMode=M,n.ContextConsumer=E,n.ContextProvider=_,n.Element=w,n.ForwardRef=k,n.Fragment=N,n.Lazy=O,n.Memo=C,n.Portal=T,n.Profiler=R,n.StrictMode=j,n.Suspense=$,n.isAsyncMode=function(e){return x||(x=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),P(e)||S(e)===s},n.isConcurrentMode=P,n.isContextConsumer=function(e){return S(e)===l},n.isContextProvider=function(e){return S(e)===u},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},n.isForwardRef=function(e){return S(e)===m},n.isFragment=function(e){return S(e)===a},n.isLazy=function(e){return S(e)===b},n.isMemo=function(e){return S(e)===p},n.isPortal=function(e){return S(e)===r},n.isProfiler=function(e){return S(e)===o},n.isStrictMode=function(e){return S(e)===i},n.isSuspense=function(e){return S(e)===d},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===c||e===o||e===i||e===d||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===p||e.$$typeof===u||e.$$typeof===l||e.$$typeof===m||e.$$typeof===g||e.$$typeof===v||e.$$typeof===h||e.$$typeof===y)},n.typeOf=S}()}),O=r(function(e){e.exports="production"===process.env.NODE_ENV?k:N}),C=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;function j(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var $=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;var r=Object.getOwnPropertyNames(n).map(function(e){return n[e]});if("0123456789"!==r.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,r,a=j(e),i=1;i<arguments.length;i++){for(var o in t=Object(arguments[i]))T.call(t,o)&&(a[o]=t[o]);if(C){r=C(t);for(var u=0;u<r.length;u++)R.call(t,r[u])&&(a[r[u]]=t[r[u]])}}return a},x=Function.call.bind(Object.prototype.hasOwnProperty),P="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",q=x,D=function(){};if("production"!==process.env.NODE_ENV){var I=P,H={},F=q;D=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}}function A(e,n,t,r,a){if("production"!==process.env.NODE_ENV)for(var i in e)if(F(e,i)){var o;try{if("function"!=typeof e[i]){var u=Error((r||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}o=e[i](n,i,r,t,null,I)}catch(e){o=e}if(!o||o instanceof Error||D((r||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof o+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),o instanceof Error&&!(o.message in H)){H[o.message]=!0;var l=a?a():"";D("Failed "+t+" type: "+o.message+(null!=l?l:""))}}}A.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(H={})};var L=A,V=function(){};function W(){return null}function B(){}function K(){}"production"!==process.env.NODE_ENV&&(V=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}),K.resetWarningCache=B;var z=r(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,n){var t="function"==typeof Symbol&&Symbol.iterator,r="<<anonymous>>",a={array:l("array"),bigint:l("bigint"),bool:l("boolean"),func:l("function"),number:l("number"),object:l("object"),string:l("string"),symbol:l("symbol"),any:u(W),arrayOf:function(e){return u(function(n,t,r,a,i){if("function"!=typeof e)return new o("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=n[t];if(!Array.isArray(u))return new o("Invalid "+a+" `"+i+"` of type `"+m(u)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<u.length;l++){var s=e(u,l,r,a,i+"["+l+"]",P);if(s instanceof Error)return s}return null})},element:u(function(n,t,r,a,i){var u=n[t];return e(u)?null:new o("Invalid "+a+" `"+i+"` of type `"+m(u)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:u(function(e,n,t,r,a){var i=e[n];return O.isValidElementType(i)?null:new o("Invalid "+r+" `"+a+"` of type `"+m(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(e){return u(function(n,t,a,i,u){return n[t]instanceof e?null:new o("Invalid "+i+" `"+u+"` of type `"+((l=n[t]).constructor&&l.constructor.name?l.constructor.name:r)+"` supplied to `"+a+"`, expected instance of `"+(e.name||r)+"`.");var l})},node:u(function(e,n,t,r,a){return c(e[n])?null:new o("Invalid "+r+" `"+a+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(e){return u(function(n,t,r,a,i){if("function"!=typeof e)return new o("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=n[t],l=m(u);if("object"!==l)return new o("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var s in u)if(q(u,s)){var c=e(u,s,r,a,i+"."+s,P);if(c instanceof Error)return c}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&V(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),W;function n(n,t,r,a,u){for(var l=n[t],s=0;s<e.length;s++)if(i(l,e[s]))return null;var c=JSON.stringify(e,function(e,n){return"symbol"===d(n)?String(n):n});return new o("Invalid "+a+" `"+u+"` of value `"+String(l)+"` supplied to `"+r+"`, expected one of "+c+".")}return u(n)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&V("Invalid argument supplied to oneOfType, expected an instance of array."),W;for(var n=0;n<e.length;n++){var t=e[n];if("function"!=typeof t)return V("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+f(t)+" at index "+n+"."),W}return u(function(n,t,r,a,i){for(var u=[],l=0;l<e.length;l++){var s=(0,e[l])(n,t,r,a,i,P);if(null==s)return null;s.data&&q(s.data,"expectedType")&&u.push(s.data.expectedType)}return new o("Invalid "+a+" `"+i+"` supplied to `"+r+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")})},shape:function(e){return u(function(n,t,r,a,i){var u=n[t],l=m(u);if("object"!==l)return new o("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var f=e[c];if("function"!=typeof f)return s(r,a,i,c,d(f));var p=f(u,c,r,a,i+"."+c,P);if(p)return p}return null})},exact:function(e){return u(function(n,t,r,a,i){var u=n[t],l=m(u);if("object"!==l)return new o("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var c=$({},n[t],e);for(var f in c){var p=e[f];if(q(e,f)&&"function"!=typeof p)return s(r,a,i,f,d(p));if(!p)return new o("Invalid "+a+" `"+i+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(n[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var b=p(u,f,r,a,i+"."+f,P);if(b)return b}return null})}};function i(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}function o(e,n){this.message=e,this.data=n&&"object"==typeof n?n:{},this.stack=""}function u(e){function n(n,t,a,i,u,l,s){if(i=i||r,l=l||a,s!==P){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}return null==t[a]?n?new o(null===t[a]?"The "+u+" `"+l+"` is marked as required in `"+i+"`, but its value is `null`.":"The "+u+" `"+l+"` is marked as required in `"+i+"`, but its value is `undefined`."):null:e(t,a,i,u,l)}process;var t=n.bind(null,!1);return t.isRequired=n.bind(null,!0),t}function l(e){return u(function(n,t,r,a,i,u){var l=n[t];return m(l)!==e?new o("Invalid "+a+" `"+i+"` of type `"+d(l)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null})}function s(e,n,t,r,a){return new o((e||"React class")+": "+n+" type `"+t+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function c(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(c);if(null===n||e(n))return!0;var r=function(e){var n=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof n)return n}(n);if(!r)return!1;var a,i=r.call(n);if(r!==n.entries){for(;!(a=i.next()).done;)if(!c(a.value))return!1}else for(;!(a=i.next()).done;){var o=a.value;if(o&&!c(o[1]))return!1}return!0;default:return!1}}function m(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||!!n&&("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}(n,e)?"symbol":n}function d(e){if(null==e)return""+e;var n=m(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function f(e){var n=d(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return o.prototype=Error.prototype,a.checkPropTypes=L,a.resetWarningCache=L.resetWarningCache,a.PropTypes=a,a}(O.isElement):function(){function e(e,n,t,r,a,i){if(i!==P){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:K,resetWarningCache:B};return t.PropTypes=t,t}()});function U(){return[].slice.call(arguments).filter(Boolean).join(" ")}const Y=e=>{let{id:n,className:r,children:a}=e;const i=U("rmm__top-bar",r&&r);/*#__PURE__*/return t.default.createElement("div",{id:n,className:i},a)};Y.defaultProps={id:"top"},Y.propTypes={id:z.string,className:z.string,children:z.node.isRequired};const J=e=>{let{id:n,src:r,rel:a,className:i,alt:o}=e;const u=U("rmm__logo",i&&i);/*#__PURE__*/return t.default.createElement("img",{id:n,src:r,className:u,rel:a,alt:o})};J.defaultProps={alt:"",rel:""},J.propTypes={id:z.string.isRequired,src:z.string.isRequired,className:z.string,rel:z.string,alt:z.string};const G=e=>{let{id:n,className:r,children:a}=e;const i=U("rmm__top-bar-title",r&&r);/*#__PURE__*/return t.default.createElement("h1",{id:n,className:i},a)};G.propTypes={id:z.string,className:z.string,children:z.node.isRequired};const Q=e=>{let{label:n,state:r,onClick:a}=e;return""===r?r="rmm__hamburger--closed":"open"===r&&(r="rmm__hamburger--open"),/*#__PURE__*/t.default.createElement("button",{className:`rmm__hamburger ${r}`,onClick:a},/*#__PURE__*/t.default.createElement("div",{className:"rmm_hamburger--slice-container"},/*#__PURE__*/t.default.createElement("span",{className:"rmm_hamburger--slice"}),/*#__PURE__*/t.default.createElement("span",{className:"rmm_hamburger--slice"}),/*#__PURE__*/t.default.createElement("span",{className:"rmm_hamburger--slice"}),/*#__PURE__*/t.default.createElement("span",{className:"rmm_hamburger--slice"})),n&&/*#__PURE__*/t.default.createElement("div",{className:"rmm_hamburger--label-container"},/*#__PURE__*/t.default.createElement("span",{className:"rmm_hamburger--label"},n)))};Q.defaultProps={label:null},Q.propTypes={label:z.string,state:z.oneOf(["","open","closed"]),onClick:z.func};const X=e=>{let{id:n,ariaLabel:r,activeState:a,children:i}=e;const o=U("rmm__nav",a&&`rmm__nav--${a}`);/*#__PURE__*/return t.default.createElement("nav",{id:n,className:o,"aria-label":r},i)};X.defaultProps={ariaLabel:"Main Navigation",activeState:""},X.propTypes={id:z.string.isRequired,ariaLabel:z.string.isRequired,activeState:z.oneOf(["","open","closed"]).isRequired,children:z.node.isRequired};const Z=e=>{let{id:n,children:r,ariaLabel:a}=e;/*#__PURE__*/return t.default.createElement("ul",{id:n,role:"menubar","aria-label":a,className:"rmm__main-list"},r)};Z.defaultProps={ariaLabel:"Main menu"},Z.propTypes={id:z.string.isRequired,children:z.node.isRequired,ariaLabel:z.string.isRequired};const ee=e=>{let{id:n,activeState:r,children:a}=e;const i=U("rmm__mega-list",r&&`rmm__mega-list--${r}`);/*#__PURE__*/return t.default.createElement("ul",{role:"menu",className:i,id:n,"aria-labelledby":n},a)};ee.defaultProps={activeState:""},ee.propTypes={id:z.string.isRequired,activeState:z.oneOf(["open","closed"]).isRequired,children:z.node.isRequired};const ne=e=>{let{id:n,role:r,isHeading:a,isChildren:i,isForward:o,className:u,children:l}=e;const s=U("rmm__main-nav-item",a&&"rmm__main-nav-item--heading",i&&"rmm__main-nav-item--children",o&&"rmm__main-nav-item--forward",u&&u);/*#__PURE__*/return t.default.createElement("li",{id:n,role:r,className:s},l)};ne.defaultProps={role:"none",isHeading:!1,hasChildren:!1,isForward:!1},ne.propTypes={id:z.string.isRequired,role:z.string,isHeading:z.bool,isChildren:z.bool,isForward:z.bool,className:z.string,children:z.node.isRequired};const te=e=>{let{id:n,role:r,href:a,isBack:i,isForward:o,isActive:u,className:l,onClick:s,onKeyDown:c,ariaHaspopup:m,ariaControls:d,children:f}=e;const p=U("rmm__main-nav-item-link",i&&"rmm__main-nav-item-link--back",o&&"rmm__main-nav-item-link--forward",u&&"rmm__main-nav-item-link--active",l&&l);/*#__PURE__*/return t.default.createElement("a",{id:n,role:r,href:a,className:p,onClick:s,onKeyDown:c,"aria-haspopup":m,"aria-controls":d},f)};te.defaultProps={role:"menuitem",isBack:!1,isForward:!1,isActive:!1},te.propTypes={id:z.string.isRequired,role:z.string,href:z.string.isRequired,isBack:z.bool,isForward:z.bool,isActive:z.bool,className:z.string,onClick:z.func,onKeyDown:z.func,ariaHaspopup:z.string,ariaControls:z.string,children:z.node.isRequired};const re=e=>{let{id:n,role:r,isHeading:a,isForward:i,className:o,children:u}=e;const l=U("rmm__nav-item",a&&"rmm__nav-item--heading",i&&"rmm__nav-item--forward",o&&o);/*#__PURE__*/return t.default.createElement("li",{id:n,role:r,className:l},u)};re.defaultProps={role:"none",isHeading:!1,hasChildren:!1,isForward:!1},re.propTypes={id:z.string.isRequired,role:z.string,isHeading:z.bool,isForward:z.bool,className:z.string,children:z.node.isRequired};const ae=e=>{let{id:n,role:r,href:a,isBack:i,isHeading:o,isForward:u,isActive:l,className:s,onClick:c,onKeyDown:m,ariaHaspopup:d,ariaControls:f,children:p}=e;const b=U("rmm__nav-item-link",i&&"rmm__nav-item-link--back",o&&"rmm__nav-item-link--heading",u&&"rmm__nav-item-link--forward",l&&"rmm__nav-item-link--active",s&&s);/*#__PURE__*/return t.default.createElement("a",{id:n,role:r,href:a,className:b,onClick:c,onKeyDown:m,"aria-haspopup":d,"aria-controls":f},p)};ae.defaultProps={role:"menuitem",isBack:!1,isHeading:!1,isForward:!1,isActive:!1},ae.propTypes={id:z.string.isRequired,role:z.string,href:z.string.isRequired,isBack:z.bool,isHeading:z.bool,isForward:z.bool,isActive:z.bool,className:z.string,onClick:z.func,onKeyDown:z.func,ariaHaspopup:z.string,ariaControls:z.string,children:z.node.isRequired};const ie=e=>{let{id:n,role:r,isSub:a,isSubSub:i,isDropdown:o,activeState:u,ariaLabelledby:l,children:s}=e;const c=U("rmm__nav-list",`rmm__nav-list--${u}`,a&&"rmm__nav-list--sub",i&&"rmm__nav-list--sub-sub",o&&"rmm__nav-list--dropdown");/*#__PURE__*/return t.default.createElement("ul",{id:n,role:r,"aria-labelledby":l,className:c},s)};ie.defaultProps={role:"menubar",isSub:!1,isSubSub:!1,isDropdown:!1,activeState:""},ie.propTypes={id:z.string.isRequired,role:z.string,isSub:z.bool,isSubSub:z.bool,isDropdown:z.bool,activeState:z.oneOf(["","open","closed"]).isRequired,ariaLabelledby:z.string.isRequired,children:z.node.isRequired};const oe=e=>{let{className:n,children:r}=e;const a=U("rmm__nav-item-description",n&&n);/*#__PURE__*/return t.default.createElement("p",{className:a},r)};oe.propTypes={className:z.string,children:z.node.isRequired};const ue=e=>{const n=["closed","open"];let t="open";return n.includes(e)&&(t=e===n[0]?n[1]:n[0]),t},le=n=>{let{logoImage:r}=n;const[a,i]=e.useState(""),[o,u]=e.useState(""),[l,s]=e.useState(""),[c,m]=e.useState([]),[d,f]=e.useState(!0),p=e.useRef(null),b=()=>{m([]),u("closed"),s("closed")},y=(e,n)=>{"open"===e?m([...c,n]):"closed"===e&&m(c.filter(e=>e!==n))},g=(e,n)=>{e.preventDefault();const t=ue(o);u(ue(o)),d?y(t,n):c.includes(n)?m([]):m([n])},v=(e,n)=>{e.preventDefault();const t=ue(l);s(ue(l)),y(t,n)};e.useEffect(()=>{window.innerWidth>=1024?f(!1):f(!0)},[c,d]);const h=e=>{27===e.keyCode&&b()},S=e=>{const n=e.charCode||e.keyCode;if(32===n||13===n)return!0};var M;return e.useEffect(()=>(document.addEventListener("keydown",h,!1),()=>{document.removeEventListener("keydown",h,!1)})),e.useEffect(()=>{const e=e=>{M.current&&!M.current.contains(e.target)&&b()};return document.addEventListener("mousedown",e),document.addEventListener("keydown",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",e)}},[M=p]),/*#__PURE__*/t.default.createElement("div",{role:"navigation",className:"rmm__root",ref:p},/*#__PURE__*/t.default.createElement(Y,null,r&&/*#__PURE__*/t.default.createElement(J,{id:"menuitem-logo",src:r,alt:"Your brand's logo",rel:"home"}),/*#__PURE__*/t.default.createElement(G,null,"Your Brand Name")),/*#__PURE__*/t.default.createElement(Q,{label:"Menu",state:a,onClick:e=>((e,n)=>{e.preventDefault();const t=ue(a);i(t),y(t,"nav-main"),"open"===a&&b()})(e)}),/*#__PURE__*/t.default.createElement(X,{id:"site-nav",activeState:a,ariaLabel:"Main Navigation"},/*#__PURE__*/t.default.createElement(Z,{id:"menubar-main",ariaLabel:"Main Menu"},/*#__PURE__*/t.default.createElement(ne,{role:"none",id:"nav-home"},/*#__PURE__*/t.default.createElement(te,{id:"menuitem-home",role:"menuitem",href:"/"},"Home")),/*#__PURE__*/t.default.createElement(ne,{id:"nav-Mega-Menu",role:"none",isChildren:!0},/*#__PURE__*/t.default.createElement(te,{role:"menuitem",id:"menuitem-Mega-Menu",href:"/?page=mega-menu",isForward:!0,isActive:!!c.includes("menu-Mega-Menu"),onClick:e=>g(e,"menu-Mega-Menu"),onKeyDown:e=>S(e)&&g(e,"menu-Mega-Menu"),ariaHaspopup:"true",ariaControls:"menu-Mega-Menu"},"Mega Menu"),/*#__PURE__*/t.default.createElement(ee,{id:"menu-Mega-Menu",activeState:c.includes("menu-Mega-Menu")?"open":"closed"},/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-back",isHeading:!0},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-back",href:"/?page=mega-menu",onClick:e=>g(e,"menu-Mega-Menu"),onKeyDown:e=>S(e)&&g(e,"menu-Mega-Menu"),ariaControls:"nav-main-Mega-Menu",isBack:!0},"Mega Menu")),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-1",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-1",role:"menuitem",href:"/?page=sub-menu-item-1",isHeading:!0},"Sub menu item 1"),/*#__PURE__*/t.default.createElement(oe,null,"Single line description that accompanies link")),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-2",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-2",role:"menuitem",href:"/?page=sub-menu-item-2",isHeading:!0},"Sub menu item 2"),/*#__PURE__*/t.default.createElement(oe,null,"Double lined small description that accompanies link in the React Mega Menu project")),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-3",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3",role:"menuitem",href:"/?page=sub-menu-item-3",isHeading:!0,isForward:!0,onClick:e=>v(e,"menu-Mega-Menu-Sub-menu-item-3"),onKeyDown:e=>S(e)&&v(e,"menu-Mega-Menu-Sub-menu-item-3"),ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-3"},"Sub menu item 3"),/*#__PURE__*/t.default.createElement(oe,null,"Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who‘s to say, really. We‘ll leave it to fate to decide."),/*#__PURE__*/t.default.createElement(ie,{id:"menu-Mega-Menu-Sub-menu-item-3",role:"menu",isSub:!0,isSubSub:!0,activeState:c.includes("menu-Mega-Menu-Sub-menu-item-3")?"open":"closed",ariaLabelledby:"menuitem-Mega-Menu-Sub-menu-item-3"},/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-3-back",role:"none",isHeading:!0},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3-back",role:"menuitem",href:"/?page=sub-menu-item-3",isBack:!0,onClick:e=>v(e,"menu-Mega-Menu-Sub-menu-item-3"),onKeyDown:e=>S(e)&&v(e,"menu-Mega-Menu-Sub-menu-item-3"),ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-3"},"Sub menu item 3")),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-3.1",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3.1",role:"menuitem",href:"/?page=sub-menu-item-3.1"},"Sub menu item 3.1"),/*#__PURE__*/t.default.createElement(oe,null,"Single line description that accompanies link")),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-3.2",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3.2",role:"menuitem",href:"/?page=sub-menu-item-3.2"},"Sub menu item 3.2"),/*#__PURE__*/t.default.createElement(oe,null,"Double lined small description that accompanies link in the React Mega Menu project")),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-3.3",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3.3",role:"menuitem",href:"/?page=sub-menu-item-3.3"},"Sub menu item 3.3"),/*#__PURE__*/t.default.createElement(oe,null,"Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who‘s to say, really. We‘ll leave it to fate to decide.")))),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4",role:"menuitem",href:"/?page=sub-menu-item-4",isHeading:!0,isForward:!0,onClick:e=>v(e,"menu-Mega-Menu-Sub-menu-item-4"),onKeyDown:e=>S(e)&&v(e,"menu-Mega-Menu-Sub-menu-item-4"),ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-4"},"Sub menu item 4"),/*#__PURE__*/t.default.createElement(oe,null,"Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who&lsqio;s to say, really. We‘ll leave it to fate to decide."),/*#__PURE__*/t.default.createElement(ie,{id:"menu-Mega-Menu-Sub-menu-item-4",role:"menu",isSub:!0,isSubSub:!0,activeState:c.includes("menu-Mega-Menu-Sub-menu-item-4")?"open":"closed",ariaLabelledby:"menuitem-Mega-Menu-Sub-menu-item-4"},/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4-back",role:"none",isHeading:!0},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4-back",role:"menuitem",href:"/?page=sub-menu-item-4",isBack:!0,onClick:e=>v(e,"menu-Mega-Menu-Sub-menu-item-4"),onKeyDown:e=>S(e)&&v(e,"menu-Mega-Menu-Sub-menu-item-4"),ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-4"},"Sub menu item 4")),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4.1",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.1",role:"menuitem",href:"/?page=sub-menu-item-4.1"},"Sub menu item 4.1")),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4.2",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.2",role:"menuitem",href:"/?page=sub-menu-item-4.2"},"Sub menu item 4.2")),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4.3",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.3",role:"menuitem",href:"/?page=sub-menu-item-4.3"},"Sub menu item 4.3")),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4.4",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.4",role:"menuitem",href:"/?page=sub-menu-item-4.4"},"Sub menu item 4.4")),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4.5",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.5",role:"menuitem",href:"/?page=sub-menu-item-4.5"},"Sub menu item 4.5")),/*#__PURE__*/t.default.createElement(re,{id:"nav-Mega-Menu-Sub-menu-item-4.6",role:"none"},/*#__PURE__*/t.default.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.6",role:"menuitem",href:"/?page=sub-menu-item-4.6"},"Sub menu item 4.6")))))),/*#__PURE__*/t.default.createElement(ne,{id:"nav-contact",role:"none"},/*#__PURE__*/t.default.createElement(te,{id:"menuitem-contact",role:"menuitem",href:"/?page=contact"},"Contact")))))};return le.defaultProps={logoImage:null},le.propTypes={logoImage:z.string},le});
//# sourceMappingURL=index.umd.js.map
