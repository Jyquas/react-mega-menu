!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):(e||self).reactMegaMenu=n(e.react)}(this,function(e){function n(e){var n={exports:{}};return e(n,n.exports),n.exports}var r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,m=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,S=r?Symbol.for("react.responder"):60118,M=r?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:switch(e=e.type){case l:case m:case o:case u:case a:case d:return e;default:switch(e=e&&e.$$typeof){case c:case f:case y:case b:case s:return e;default:return n}}case i:return n}}}function w(e){return _(e)===m}var k={AsyncMode:l,ConcurrentMode:m,ContextConsumer:c,ContextProvider:s,Element:t,ForwardRef:f,Fragment:o,Lazy:y,Memo:b,Portal:i,Profiler:u,StrictMode:a,Suspense:d,isAsyncMode:function(e){return w(e)||_(e)===l},isConcurrentMode:w,isContextConsumer:function(e){return _(e)===c},isContextProvider:function(e){return _(e)===s},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},isForwardRef:function(e){return _(e)===f},isFragment:function(e){return _(e)===o},isLazy:function(e){return _(e)===y},isMemo:function(e){return _(e)===b},isPortal:function(e){return _(e)===i},isProfiler:function(e){return _(e)===u},isStrictMode:function(e){return _(e)===a},isSuspense:function(e){return _(e)===d},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===o||e===m||e===u||e===a||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===b||e.$$typeof===s||e.$$typeof===c||e.$$typeof===f||e.$$typeof===g||e.$$typeof===S||e.$$typeof===M||e.$$typeof===v)},typeOf:_},O=n(function(e,n){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:var d=e.type;switch(d){case c:case l:case i:case a:case o:case f:return d;default:var y=d&&d.$$typeof;switch(y){case s:case m:case b:case p:case u:return y;default:return n}}case t:return n}}}var M=l,_=s,w=u,k=r,O=m,C=i,N=b,E=p,R=t,j=a,T=o,$=f,x=!1;function P(e){return S(e)===l}n.AsyncMode=c,n.ConcurrentMode=M,n.ContextConsumer=_,n.ContextProvider=w,n.Element=k,n.ForwardRef=O,n.Fragment=C,n.Lazy=N,n.Memo=E,n.Portal=R,n.Profiler=j,n.StrictMode=T,n.Suspense=$,n.isAsyncMode=function(e){return x||(x=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),P(e)||S(e)===c},n.isConcurrentMode=P,n.isContextConsumer=function(e){return S(e)===s},n.isContextProvider=function(e){return S(e)===u},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},n.isForwardRef=function(e){return S(e)===m},n.isFragment=function(e){return S(e)===i},n.isLazy=function(e){return S(e)===b},n.isMemo=function(e){return S(e)===p},n.isPortal=function(e){return S(e)===t},n.isProfiler=function(e){return S(e)===a},n.isStrictMode=function(e){return S(e)===o},n.isSuspense=function(e){return S(e)===f},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===a||e===o||e===f||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===p||e.$$typeof===u||e.$$typeof===s||e.$$typeof===m||e.$$typeof===h||e.$$typeof===v||e.$$typeof===g||e.$$typeof===y)},n.typeOf=S}()}),C=n(function(e){e.exports="production"===process.env.NODE_ENV?k:O}),N=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;function j(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var T=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var r,t,i=j(e),o=1;o<arguments.length;o++){for(var a in r=Object(arguments[o]))E.call(r,a)&&(i[a]=r[a]);if(N){t=N(r);for(var u=0;u<t.length;u++)R.call(r,t[u])&&(i[t[u]]=r[t[u]])}}return i},$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",x=function(){};if("production"!==process.env.NODE_ENV){var P=$,q={},D=Function.call.bind(Object.prototype.hasOwnProperty);x=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}}function F(e,n,r,t,i){if("production"!==process.env.NODE_ENV)for(var o in e)if(D(e,o)){var a;try{if("function"!=typeof e[o]){var u=Error((t||"React class")+": "+r+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.");throw u.name="Invariant Violation",u}a=e[o](n,o,t,r,null,P)}catch(e){a=e}if(!a||a instanceof Error||x((t||"React class")+": type specification of "+r+" `"+o+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in q)){q[a.message]=!0;var s=i?i():"";x("Failed "+r+" type: "+a.message+(null!=s?s:""))}}}F.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(q={})};var H=F,I=Function.call.bind(Object.prototype.hasOwnProperty),A=function(){};function L(){return null}function V(){}function W(){}"production"!==process.env.NODE_ENV&&(A=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}),W.resetWarningCache=V;var B=n(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,n){var r="function"==typeof Symbol&&Symbol.iterator,t="<<anonymous>>",i={array:s("array"),bool:s("boolean"),func:s("function"),number:s("number"),object:s("object"),string:s("string"),symbol:s("symbol"),any:u(L),arrayOf:function(e){return u(function(n,r,t,i,o){if("function"!=typeof e)return new a("Property `"+o+"` of component `"+t+"` has invalid PropType notation inside arrayOf.");var u=n[r];if(!Array.isArray(u))return new a("Invalid "+i+" `"+o+"` of type `"+l(u)+"` supplied to `"+t+"`, expected an array.");for(var s=0;s<u.length;s++){var c=e(u,s,t,i,o+"["+s+"]",$);if(c instanceof Error)return c}return null})},element:u(function(n,r,t,i,o){var u=n[r];return e(u)?null:new a("Invalid "+i+" `"+o+"` of type `"+l(u)+"` supplied to `"+t+"`, expected a single ReactElement.")}),elementType:u(function(e,n,r,t,i){var o=e[n];return C.isValidElementType(o)?null:new a("Invalid "+t+" `"+i+"` of type `"+l(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")}),instanceOf:function(e){return u(function(n,r,i,o,u){return n[r]instanceof e?null:new a("Invalid "+o+" `"+u+"` of type `"+((s=n[r]).constructor&&s.constructor.name?s.constructor.name:t)+"` supplied to `"+i+"`, expected instance of `"+(e.name||t)+"`.");var s})},node:u(function(e,n,r,t,i){return c(e[n])?null:new a("Invalid "+t+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")}),objectOf:function(e){return u(function(n,r,t,i,o){if("function"!=typeof e)return new a("Property `"+o+"` of component `"+t+"` has invalid PropType notation inside objectOf.");var u=n[r],s=l(u);if("object"!==s)return new a("Invalid "+i+" `"+o+"` of type `"+s+"` supplied to `"+t+"`, expected an object.");for(var c in u)if(I(u,c)){var m=e(u,c,t,i,o+"."+c,$);if(m instanceof Error)return m}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&A(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),L;function n(n,r,t,i,u){for(var s=n[r],c=0;c<e.length;c++)if(o(s,e[c]))return null;var l=JSON.stringify(e,function(e,n){return"symbol"===m(n)?String(n):n});return new a("Invalid "+i+" `"+u+"` of value `"+String(s)+"` supplied to `"+t+"`, expected one of "+l+".")}return u(n)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&A("Invalid argument supplied to oneOfType, expected an instance of array."),L;for(var n=0;n<e.length;n++){var r=e[n];if("function"!=typeof r)return A("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+f(r)+" at index "+n+"."),L}return u(function(n,r,t,i,o){for(var u=0;u<e.length;u++)if(null==(0,e[u])(n,r,t,i,o,$))return null;return new a("Invalid "+i+" `"+o+"` supplied to `"+t+"`.")})},shape:function(e){return u(function(n,r,t,i,o){var u=n[r],s=l(u);if("object"!==s)return new a("Invalid "+i+" `"+o+"` of type `"+s+"` supplied to `"+t+"`, expected `object`.");for(var c in e){var m=e[c];if(m){var f=m(u,c,t,i,o+"."+c,$);if(f)return f}}return null})},exact:function(e){return u(function(n,r,t,i,o){var u=n[r],s=l(u);if("object"!==s)return new a("Invalid "+i+" `"+o+"` of type `"+s+"` supplied to `"+t+"`, expected `object`.");var c=T({},n[r],e);for(var m in c){var f=e[m];if(!f)return new a("Invalid "+i+" `"+o+"` key `"+m+"` supplied to `"+t+"`.\nBad object: "+JSON.stringify(n[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=f(u,m,t,i,o+"."+m,$);if(d)return d}return null})}};function o(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}function a(e){this.message=e,this.stack=""}function u(e){function n(n,r,i,o,u,s,c){if(o=o||t,s=s||i,c!==$){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}return null==r[i]?n?new a(null===r[i]?"The "+u+" `"+s+"` is marked as required in `"+o+"`, but its value is `null`.":"The "+u+" `"+s+"` is marked as required in `"+o+"`, but its value is `undefined`."):null:e(r,i,o,u,s)}process;var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function s(e){return u(function(n,r,t,i,o,u){var s=n[r];return l(s)!==e?new a("Invalid "+i+" `"+o+"` of type `"+m(s)+"` supplied to `"+t+"`, expected `"+e+"`."):null})}function c(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(c);if(null===n||e(n))return!0;var t=function(e){var n=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof n)return n}(n);if(!t)return!1;var i,o=t.call(n);if(t!==n.entries){for(;!(i=o.next()).done;)if(!c(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!c(a[1]))return!1}return!0;default:return!1}}function l(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||!!n&&("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}(n,e)?"symbol":n}function m(e){if(null==e)return""+e;var n=l(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function f(e){var n=m(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return a.prototype=Error.prototype,i.checkPropTypes=H,i.resetWarningCache=H.resetWarningCache,i.PropTypes=i,i}(C.isElement):function(){function e(e,n,r,t,i,o){if(o!==$){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:W,resetWarningCache:V};return r.PropTypes=r,r}()});function K(){return[].slice.call(arguments).filter(Boolean).join(" ")}var z=function(e){var n=e.id,r=e.className,t=e.children,i=K("rmm__top-bar",r&&r);return h("div",{id:n,className:i},t)};z.defaultProps={id:"top"},z.propTypes={id:B.string,className:B.string,children:B.node.isRequired};var U=function(e){var n=e.id,r=e.className,t=e.children,i=K("rmm__top-bar-title",r&&r);return h("h1",{id:n,className:i},t)};U.propTypes={id:B.string,className:B.string,children:B.node.isRequired};var J=function(e){var n=e.label,r=e.state;return""===r?r="rmm__hamburger--closed":"open"===r&&(r="rmm__hamburger--open"),h("button",{className:"rmm__hamburger "+r,onClick:e.onClick},h("div",{className:"rmm_hamburger--slice-container"},h("span",{className:"rmm_hamburger--slice"}),h("span",{className:"rmm_hamburger--slice"}),h("span",{className:"rmm_hamburger--slice"}),h("span",{className:"rmm_hamburger--slice"})),n&&h("div",{className:"rmm_hamburger--label-container"},h("span",{className:"rmm_hamburger--label"},n)))};J.defaultProps={label:null},J.propTypes={label:B.string,state:B.oneOf(["","open","closed"]),onClick:B.func};var Y=function(e){var n=e.id,r=e.ariaLabel,t=e.activeState,i=e.children,o=K("rmm__nav",t&&"rmm__nav--"+t);return h("nav",{id:n,className:o,"aria-label":r},i)};Y.defaultProps={ariaLabel:"Main Navigation",activeState:""},Y.propTypes={id:B.string.isRequired,ariaLabel:B.string.isRequired,activeState:B.oneOf(["","open","closed"]).isRequired,children:B.node.isRequired};var G=function(e){return h("ul",{id:e.id,role:"menubar","aria-label":e.ariaLabel,className:"rmm__main-list"},e.children)};G.defaultProps={ariaLabel:"Main menu"},G.propTypes={id:B.string.isRequired,children:B.node.isRequired,ariaLabel:B.string.isRequired};var Q=function(e){var n=e.id,r=e.activeState,t=e.children,i=K("rmm__mega-list",r&&"rmm__mega-list--"+r);return h("ul",{role:"menu",className:i,id:n,"aria-labelledby":n},t)};Q.defaultProps={activeState:""},Q.propTypes={id:B.string.isRequired,activeState:B.oneOf(["open","closed"]).isRequired,children:B.node.isRequired};var X=function(e){var n=e.id,r=e.role,t=e.className,i=e.children,o=K("rmm__main-nav-item",e.isHeading&&"rmm__main-nav-item--heading",e.isChildren&&"rmm__main-nav-item--children",e.isForward&&"rmm__main-nav-item--forward",t&&t);return h("li",{id:n,role:r,className:o},i)};X.defaultProps={role:"none",isHeading:!1,hasChildren:!1,isForward:!1},X.propTypes={id:B.string.isRequired,role:B.string,isHeading:B.bool,isChildren:B.bool,isForward:B.bool,className:B.string,children:B.node.isRequired};var Z=function(e){var n=e.id,r=e.role,t=e.href,i=e.className,o=e.onClick,a=e.onKeyDown,u=e.ariaHaspopup,s=e.ariaControls,c=e.children,l=K("rmm__main-nav-item-link",e.isBack&&"rmm__main-nav-item-link--back",e.isForward&&"rmm__main-nav-item-link--forward",e.isActive&&"rmm__main-nav-item-link--active",i&&i);return h("a",{id:n,role:r,href:t,className:l,onClick:o,onKeyDown:a,"aria-haspopup":u,"aria-controls":s},c)};Z.defaultProps={role:"menuitem",isBack:!1,isForward:!1,isActive:!1},Z.propTypes={id:B.string.isRequired,role:B.string,href:B.string.isRequired,isBack:B.bool,isForward:B.bool,isActive:B.bool,className:B.string,onClick:B.func,onKeyDown:B.func,ariaHaspopup:B.string,ariaControls:B.string,children:B.node.isRequired};var ee=function(e){var n=e.id,r=e.role,t=e.className,i=e.children,o=K("rmm__nav-item",e.isHeading&&"rmm__nav-item--heading",e.isForward&&"rmm__nav-item--forward",t&&t);return h("li",{id:n,role:r,className:o},i)};ee.defaultProps={role:"none",isHeading:!1,hasChildren:!1,isForward:!1},ee.propTypes={id:B.string.isRequired,role:B.string,isHeading:B.bool,isForward:B.bool,className:B.string,children:B.node.isRequired};var ne=function(e){var n=e.id,r=e.role,t=e.href,i=e.className,o=e.onClick,a=e.onKeyDown,u=e.ariaHaspopup,s=e.ariaControls,c=e.children,l=K("rmm__nav-item-link",e.isBack&&"rmm__nav-item-link--back",e.isHeading&&"rmm__nav-item-link--heading",e.isForward&&"rmm__nav-item-link--forward",e.isActive&&"rmm__nav-item-link--active",i&&i);return h("a",{id:n,role:r,href:t,className:l,onClick:o,onKeyDown:a,"aria-haspopup":u,"aria-controls":s},c)};ne.defaultProps={role:"menuitem",isBack:!1,isHeading:!1,isForward:!1,isActive:!1},ne.propTypes={id:B.string.isRequired,role:B.string,href:B.string.isRequired,isBack:B.bool,isHeading:B.bool,isForward:B.bool,isActive:B.bool,className:B.string,onClick:B.func,onKeyDown:B.func,ariaHaspopup:B.string,ariaControls:B.string,children:B.node.isRequired};var re=function(e){var n=e.id,r=e.role,t=e.ariaLabelledby,i=e.children,o=K("rmm__nav-list","rmm__nav-list--"+e.activeState,e.isSub&&"rmm__nav-list--sub",e.isSubSub&&"rmm__nav-list--sub-sub",e.isDropdown&&"rmm__nav-list--dropdown");return h("ul",{id:n,role:r,"aria-labelledby":t,className:o},i)};re.defaultProps={role:"menubar",isSub:!1,isSubSub:!1,isDropdown:!1,activeState:""},re.propTypes={id:B.string.isRequired,role:B.string,isSub:B.bool,isSubSub:B.bool,isDropdown:B.bool,activeState:B.oneOf(["","open","closed"]).isRequired,ariaLabelledby:B.string.isRequired,children:B.node.isRequired};var te=function(e){var n=e.className,r=e.children,t=K("rmm__nav-item-description",n&&n);return h("p",{className:t},r)};te.propTypes={className:B.string,children:B.node.isRequired};var ie=function(e){var n=["closed","open"],r="open";if(n.includes(e))switch(e){case n[0]:r=n[1];break;case n[1]:r=n[0];break;default:r=n[0]}return r};return function(){var n=e.useState(""),r=n[0],t=n[1],i=e.useState(""),o=i[0],a=i[1],u=e.useState(""),s=u[0],c=u[1],l=e.useState([]),m=l[0],f=l[1],d=e.useState(!0),p=d[0],b=d[1],y=e.useRef(null),v=function(){f([]),a("closed"),c("closed")},g=function(e,n){"open"===e?f([].concat(m,[n])):"closed"===e&&f(m.filter(function(e){return e!==n}))},S=function(e,n){e.preventDefault();var r=ie(o);a(ie(o)),p?g(r,n):m.includes(n)?f([]):f([n])},M=function(e,n){e.preventDefault();var r=ie(s);c(ie(s)),g(r,n)};e.useEffect(function(){window.innerWidth>=1024?b(!1):b(!0)},[m,p]);var _,w=function(e){27===e.keyCode&&v()},k=function(e){var n=e.charCode||e.keyCode;if(32===n||13===n)return!0};return e.useEffect(function(){return document.addEventListener("keydown",w,!1),function(){document.removeEventListener("keydown",w,!1)}}),e.useEffect(function(){var e=function(e){_.current&&!_.current.contains(e.target)&&v()};return document.addEventListener("mousedown",e),document.addEventListener("keydown",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("keydown",e)}},[_=y]),h("div",{role:"navigation",className:"rmm__root",ref:y},h(z,null,h(U,null,"Your Brand Name")),h(J,{label:"Menu",state:r,onClick:function(e){return function(e,n){e.preventDefault();var i=ie(r);t(i),g(i,"nav-main"),"open"===r&&v()}(e)}}),h(Y,{id:"site-nav",activeState:r,ariaLabel:"Main Navigation"},h(G,{id:"menubar-main",ariaLabel:"Main Menu"},h(X,{role:"none",id:"nav-home"},h(Z,{id:"menuitem-home",role:"menuitem",href:"/"},"Home")),h(X,{id:"nav-Mega-Menu",role:"none",isChildren:!0},h(Z,{role:"menuitem",id:"menuitem-Mega-Menu",href:"/?page=mega-menu",isForward:!0,isActive:!!m.includes("menu-Mega-Menu"),onClick:function(e){return S(e,"menu-Mega-Menu")},onKeyDown:function(e){return k(e)&&S(e,"menu-Mega-Menu")},ariaHaspopup:"true",ariaControls:"menu-Mega-Menu"},"Mega Menu"),h(Q,{id:"menu-Mega-Menu",activeState:m.includes("menu-Mega-Menu")?"open":"closed"},h(ee,{id:"nav-Mega-Menu-back",isHeading:!0},h(ne,{id:"menuitem-Mega-Menu-back",href:"/?page=mega-menu",onClick:function(e){return S(e,"menu-Mega-Menu")},onKeyDown:function(e){return k(e)&&S(e,"menu-Mega-Menu")},ariaControls:"nav-main-Mega-Menu",isBack:!0},"Mega Menu")),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-1",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-1",role:"menuitem",href:"/?page=sub-menu-item-1",isHeading:!0},"Sub menu item 1"),h(te,null,"Single line description that accompanies link")),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-2",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-2",role:"menuitem",href:"/?page=sub-menu-item-2",isHeading:!0},"Sub menu item 2"),h(te,null,"Double lined small description that accompanies link in the React Mega Menu project")),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-3",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-3",role:"menuitem",href:"/?page=sub-menu-item-3",isHeading:!0,isForward:!0,onClick:function(e){return M(e,"menu-Mega-Menu-Sub-menu-item-3")},onKeyDown:function(e){return k(e)&&M(e,"menu-Mega-Menu-Sub-menu-item-3")},ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-3"},"Sub menu item 3"),h(te,null,"Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide."),h(re,{id:"menu-Mega-Menu-Sub-menu-item-3",role:"menu",isSub:!0,isSubSub:!0,activeState:m.includes("menu-Mega-Menu-Sub-menu-item-3")?"open":"closed",ariaLabelledby:"menuitem-Mega-Menu-Sub-menu-item-3"},h(ee,{id:"nav-Mega-Menu-Sub-menu-item-3-back",role:"none",isHeading:!0},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-3-back",role:"menuitem",href:"/?page=sub-menu-item-3",isBack:!0,onClick:function(e){return M(e,"menu-Mega-Menu-Sub-menu-item-3")},onKeyDown:function(e){return k(e)&&M(e,"menu-Mega-Menu-Sub-menu-item-3")},ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-3"},"Sub menu item 3")),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-3.1",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-3.1",role:"menuitem",href:"/?page=sub-menu-item-3.1"},"Sub menu item 3.1"),h(te,null,"Single line description that accompanies link")),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-3.2",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-3.2",role:"menuitem",href:"/?page=sub-menu-item-3.2"},"Sub menu item 3.2"),h(te,null,"Double lined small description that accompanies link in the React Mega Menu project")),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-3.3",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-3.3",role:"menuitem",href:"/?page=sub-menu-item-3.3"},"Sub menu item 3.3"),h(te,null,"Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide.")))),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-4",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-4",role:"menuitem",href:"/?page=sub-menu-item-4",isHeading:!0,isForward:!0,onClick:function(e){return M(e,"menu-Mega-Menu-Sub-menu-item-4")},onKeyDown:function(e){return k(e)&&M(e,"menu-Mega-Menu-Sub-menu-item-4")},ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-4"},"Sub menu item 4"),h(te,null,"Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide."),h(re,{id:"menu-Mega-Menu-Sub-menu-item-4",role:"menu",isSub:!0,isSubSub:!0,activeState:m.includes("menu-Mega-Menu-Sub-menu-item-4")?"open":"closed",ariaLabelledby:"menuitem-Mega-Menu-Sub-menu-item-4"},h(ee,{id:"nav-Mega-Menu-Sub-menu-item-4-back",role:"none",isHeading:!0},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-4-back",role:"menuitem",href:"/?page=sub-menu-item-4",isBack:!0,onClick:function(e){return M(e,"menu-Mega-Menu-Sub-menu-item-4")},onKeyDown:function(e){return k(e)&&M(e,"menu-Mega-Menu-Sub-menu-item-4")},ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-4"},"Sub menu item 4")),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-4.1",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-4.1",role:"menuitem",href:"/?page=sub-menu-item-4.1"},"Sub menu item 4.1")),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-4.2",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-4.2",role:"menuitem",href:"/?page=sub-menu-item-4.2"},"Sub menu item 4.2")),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-4.3",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-4.3",role:"menuitem",href:"/?page=sub-menu-item-4.3"},"Sub menu item 4.3")),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-4.4",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-4.4",role:"menuitem",href:"/?page=sub-menu-item-4.4"},"Sub menu item 4.4")),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-4.5",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-4.5",role:"menuitem",href:"/?page=sub-menu-item-4.5"},"Sub menu item 4.5")),h(ee,{id:"nav-Mega-Menu-Sub-menu-item-4.6",role:"none"},h(ne,{id:"menuitem-Mega-Menu-Sub-menu-item-4.6",role:"menuitem",href:"/?page=sub-menu-item-4.6"},"Sub menu item 4.6")))))),h(X,{id:"nav-contact",role:"none"},h(Z,{id:"menuitem-contact",role:"menuitem",href:"/?page=contact"},"Contact")))))}});
//# sourceMappingURL=index.umd.js.map
