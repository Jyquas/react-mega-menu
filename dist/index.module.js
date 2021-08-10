import e,{useState as n,useRef as r,useEffect as t}from"react";function a(e){var n={exports:{}};return e(n,n.exports),n.exports}var i="function"==typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,u=i?Symbol.for("react.portal"):60106,c=i?Symbol.for("react.fragment"):60107,l=i?Symbol.for("react.strict_mode"):60108,m=i?Symbol.for("react.profiler"):60114,s=i?Symbol.for("react.provider"):60109,f=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.async_mode"):60111,p=i?Symbol.for("react.concurrent_mode"):60111,b=i?Symbol.for("react.forward_ref"):60112,y=i?Symbol.for("react.suspense"):60113,g=i?Symbol.for("react.suspense_list"):60120,v=i?Symbol.for("react.memo"):60115,h=i?Symbol.for("react.lazy"):60116,M=i?Symbol.for("react.block"):60121,S=i?Symbol.for("react.fundamental"):60117,E=i?Symbol.for("react.responder"):60118,_=i?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case o:switch(e=e.type){case d:case p:case c:case m:case l:case y:return e;default:switch(e=e&&e.$$typeof){case f:case b:case h:case v:case s:return e;default:return n}}case u:return n}}}function k(e){return w(e)===p}var O={AsyncMode:d,ConcurrentMode:p,ContextConsumer:f,ContextProvider:s,Element:o,ForwardRef:b,Fragment:c,Lazy:h,Memo:v,Portal:u,Profiler:m,StrictMode:l,Suspense:y,isAsyncMode:function(e){return k(e)||w(e)===d},isConcurrentMode:k,isContextConsumer:function(e){return w(e)===f},isContextProvider:function(e){return w(e)===s},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},isForwardRef:function(e){return w(e)===b},isFragment:function(e){return w(e)===c},isLazy:function(e){return w(e)===h},isMemo:function(e){return w(e)===v},isPortal:function(e){return w(e)===u},isProfiler:function(e){return w(e)===m},isStrictMode:function(e){return w(e)===l},isSuspense:function(e){return w(e)===y},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===c||e===p||e===m||e===l||e===y||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===s||e.$$typeof===f||e.$$typeof===b||e.$$typeof===S||e.$$typeof===E||e.$$typeof===_||e.$$typeof===M)},typeOf:w},N=a(function(e,n){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,s=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function M(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:var d=e.type;switch(d){case l:case m:case a:case o:case i:case f:return d;default:var y=d&&d.$$typeof;switch(y){case c:case s:case b:case p:case u:return y;default:return n}}case t:return n}}}var S=m,E=c,_=u,w=r,k=s,O=a,N=b,C=p,R=t,T=o,j=i,$=f,P=!1;function x(e){return M(e)===m}n.AsyncMode=l,n.ConcurrentMode=S,n.ContextConsumer=E,n.ContextProvider=_,n.Element=w,n.ForwardRef=k,n.Fragment=O,n.Lazy=N,n.Memo=C,n.Portal=R,n.Profiler=T,n.StrictMode=j,n.Suspense=$,n.isAsyncMode=function(e){return P||(P=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),x(e)||M(e)===l},n.isConcurrentMode=x,n.isContextConsumer=function(e){return M(e)===c},n.isContextProvider=function(e){return M(e)===u},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},n.isForwardRef=function(e){return M(e)===s},n.isFragment=function(e){return M(e)===a},n.isLazy=function(e){return M(e)===b},n.isMemo=function(e){return M(e)===p},n.isPortal=function(e){return M(e)===t},n.isProfiler=function(e){return M(e)===o},n.isStrictMode=function(e){return M(e)===i},n.isSuspense=function(e){return M(e)===f},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===m||e===o||e===i||e===f||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===p||e.$$typeof===u||e.$$typeof===c||e.$$typeof===s||e.$$typeof===g||e.$$typeof===v||e.$$typeof===h||e.$$typeof===y)},n.typeOf=M}()}),C=a(function(e){e.exports="production"===process.env.NODE_ENV?O:N}),R=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;function $(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var P=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var r,t,a=$(e),i=1;i<arguments.length;i++){for(var o in r=Object(arguments[i]))T.call(r,o)&&(a[o]=r[o]);if(R){t=R(r);for(var u=0;u<t.length;u++)j.call(r,t[u])&&(a[t[u]]=r[t[u]])}}return a},x="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",q=function(){};if("production"!==process.env.NODE_ENV){var D=x,I={},F=Function.call.bind(Object.prototype.hasOwnProperty);q=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}}function H(e,n,r,t,a){if("production"!==process.env.NODE_ENV)for(var i in e)if(F(e,i)){var o;try{if("function"!=typeof e[i]){var u=Error((t||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.");throw u.name="Invariant Violation",u}o=e[i](n,i,t,r,null,D)}catch(e){o=e}if(!o||o instanceof Error||q((t||"React class")+": type specification of "+r+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof o+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),o instanceof Error&&!(o.message in I)){I[o.message]=!0;var c=a?a():"";q("Failed "+r+" type: "+o.message+(null!=c?c:""))}}}H.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(I={})};var A=H,L=Function.call.bind(Object.prototype.hasOwnProperty),V=function(){};function W(){return null}function B(){}function K(){}"production"!==process.env.NODE_ENV&&(V=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}),K.resetWarningCache=B;var z=a(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,n){var r="function"==typeof Symbol&&Symbol.iterator,t="<<anonymous>>",a={array:c("array"),bool:c("boolean"),func:c("function"),number:c("number"),object:c("object"),string:c("string"),symbol:c("symbol"),any:u(W),arrayOf:function(e){return u(function(n,r,t,a,i){if("function"!=typeof e)return new o("Property `"+i+"` of component `"+t+"` has invalid PropType notation inside arrayOf.");var u=n[r];if(!Array.isArray(u))return new o("Invalid "+a+" `"+i+"` of type `"+m(u)+"` supplied to `"+t+"`, expected an array.");for(var c=0;c<u.length;c++){var l=e(u,c,t,a,i+"["+c+"]",x);if(l instanceof Error)return l}return null})},element:u(function(n,r,t,a,i){var u=n[r];return e(u)?null:new o("Invalid "+a+" `"+i+"` of type `"+m(u)+"` supplied to `"+t+"`, expected a single ReactElement.")}),elementType:u(function(e,n,r,t,a){var i=e[n];return C.isValidElementType(i)?null:new o("Invalid "+t+" `"+a+"` of type `"+m(i)+"` supplied to `"+r+"`, expected a single ReactElement type.")}),instanceOf:function(e){return u(function(n,r,a,i,u){return n[r]instanceof e?null:new o("Invalid "+i+" `"+u+"` of type `"+((c=n[r]).constructor&&c.constructor.name?c.constructor.name:t)+"` supplied to `"+a+"`, expected instance of `"+(e.name||t)+"`.");var c})},node:u(function(e,n,r,t,a){return l(e[n])?null:new o("Invalid "+t+" `"+a+"` supplied to `"+r+"`, expected a ReactNode.")}),objectOf:function(e){return u(function(n,r,t,a,i){if("function"!=typeof e)return new o("Property `"+i+"` of component `"+t+"` has invalid PropType notation inside objectOf.");var u=n[r],c=m(u);if("object"!==c)return new o("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+t+"`, expected an object.");for(var l in u)if(L(u,l)){var s=e(u,l,t,a,i+"."+l,x);if(s instanceof Error)return s}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&V(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),W;function n(n,r,t,a,u){for(var c=n[r],l=0;l<e.length;l++)if(i(c,e[l]))return null;var m=JSON.stringify(e,function(e,n){return"symbol"===s(n)?String(n):n});return new o("Invalid "+a+" `"+u+"` of value `"+String(c)+"` supplied to `"+t+"`, expected one of "+m+".")}return u(n)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&V("Invalid argument supplied to oneOfType, expected an instance of array."),W;for(var n=0;n<e.length;n++){var r=e[n];if("function"!=typeof r)return V("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+f(r)+" at index "+n+"."),W}return u(function(n,r,t,a,i){for(var u=0;u<e.length;u++)if(null==(0,e[u])(n,r,t,a,i,x))return null;return new o("Invalid "+a+" `"+i+"` supplied to `"+t+"`.")})},shape:function(e){return u(function(n,r,t,a,i){var u=n[r],c=m(u);if("object"!==c)return new o("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+t+"`, expected `object`.");for(var l in e){var s=e[l];if(s){var f=s(u,l,t,a,i+"."+l,x);if(f)return f}}return null})},exact:function(e){return u(function(n,r,t,a,i){var u=n[r],c=m(u);if("object"!==c)return new o("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+t+"`, expected `object`.");var l=P({},n[r],e);for(var s in l){var f=e[s];if(!f)return new o("Invalid "+a+" `"+i+"` key `"+s+"` supplied to `"+t+"`.\nBad object: "+JSON.stringify(n[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=f(u,s,t,a,i+"."+s,x);if(d)return d}return null})}};function i(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}function o(e){this.message=e,this.stack=""}function u(e){function n(n,r,a,i,u,c,l){if(i=i||t,c=c||a,l!==x){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}return null==r[a]?n?new o(null===r[a]?"The "+u+" `"+c+"` is marked as required in `"+i+"`, but its value is `null`.":"The "+u+" `"+c+"` is marked as required in `"+i+"`, but its value is `undefined`."):null:e(r,a,i,u,c)}process;var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function c(e){return u(function(n,r,t,a,i,u){var c=n[r];return m(c)!==e?new o("Invalid "+a+" `"+i+"` of type `"+s(c)+"` supplied to `"+t+"`, expected `"+e+"`."):null})}function l(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(l);if(null===n||e(n))return!0;var t=function(e){var n=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof n)return n}(n);if(!t)return!1;var a,i=t.call(n);if(t!==n.entries){for(;!(a=i.next()).done;)if(!l(a.value))return!1}else for(;!(a=i.next()).done;){var o=a.value;if(o&&!l(o[1]))return!1}return!0;default:return!1}}function m(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||!!n&&("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}(n,e)?"symbol":n}function s(e){if(null==e)return""+e;var n=m(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function f(e){var n=s(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return o.prototype=Error.prototype,a.checkPropTypes=A,a.resetWarningCache=A.resetWarningCache,a.PropTypes=a,a}(C.isElement):function(){function e(e,n,r,t,a,i){if(i!==x){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:K,resetWarningCache:B};return r.PropTypes=r,r}()});function U(){return[].slice.call(arguments).filter(Boolean).join(" ")}var Y=function(n){var r=n.id,t=n.className,a=n.children,i=U("rmm__top-bar",t&&t);return e.createElement("div",{id:r,className:i},a)};Y.defaultProps={id:"top"},Y.propTypes={id:z.string,className:z.string,children:z.node.isRequired};var J=function(n){var r=n.id,t=n.src,a=n.rel,i=n.className,o=n.alt,u=U("rmm__logo",i&&i);return e.createElement("img",{id:r,src:t,className:u,rel:a,alt:o})};J.defaultProps={alt:"",rel:""},J.propTypes={id:z.string.isRequired,src:z.string.isRequired,className:z.string,rel:z.string,alt:z.string};var G=function(n){var r=n.id,t=n.className,a=n.children,i=U("rmm__top-bar-title",t&&t);return e.createElement("h1",{id:r,className:i},a)};G.propTypes={id:z.string,className:z.string,children:z.node.isRequired};var Q=function(n){var r=n.label,t=n.state;return""===t?t="rmm__hamburger--closed":"open"===t&&(t="rmm__hamburger--open"),e.createElement("button",{className:"rmm__hamburger "+t,onClick:n.onClick},e.createElement("div",{className:"rmm_hamburger--slice-container"},e.createElement("span",{className:"rmm_hamburger--slice"}),e.createElement("span",{className:"rmm_hamburger--slice"}),e.createElement("span",{className:"rmm_hamburger--slice"}),e.createElement("span",{className:"rmm_hamburger--slice"})),r&&e.createElement("div",{className:"rmm_hamburger--label-container"},e.createElement("span",{className:"rmm_hamburger--label"},r)))};Q.defaultProps={label:null},Q.propTypes={label:z.string,state:z.oneOf(["","open","closed"]),onClick:z.func};var X=function(n){var r=n.id,t=n.ariaLabel,a=n.activeState,i=n.children,o=U("rmm__nav",a&&"rmm__nav--"+a);return e.createElement("nav",{id:r,className:o,"aria-label":t},i)};X.defaultProps={ariaLabel:"Main Navigation",activeState:""},X.propTypes={id:z.string.isRequired,ariaLabel:z.string.isRequired,activeState:z.oneOf(["","open","closed"]).isRequired,children:z.node.isRequired};var Z=function(n){return e.createElement("ul",{id:n.id,role:"menubar","aria-label":n.ariaLabel,className:"rmm__main-list"},n.children)};Z.defaultProps={ariaLabel:"Main menu"},Z.propTypes={id:z.string.isRequired,children:z.node.isRequired,ariaLabel:z.string.isRequired};var ee=function(n){var r=n.id,t=n.activeState,a=n.children,i=U("rmm__mega-list",t&&"rmm__mega-list--"+t);return e.createElement("ul",{role:"menu",className:i,id:r,"aria-labelledby":r},a)};ee.defaultProps={activeState:""},ee.propTypes={id:z.string.isRequired,activeState:z.oneOf(["open","closed"]).isRequired,children:z.node.isRequired};var ne=function(n){var r=n.id,t=n.role,a=n.className,i=n.children,o=U("rmm__main-nav-item",n.isHeading&&"rmm__main-nav-item--heading",n.isChildren&&"rmm__main-nav-item--children",n.isForward&&"rmm__main-nav-item--forward",a&&a);return e.createElement("li",{id:r,role:t,className:o},i)};ne.defaultProps={role:"none",isHeading:!1,hasChildren:!1,isForward:!1},ne.propTypes={id:z.string.isRequired,role:z.string,isHeading:z.bool,isChildren:z.bool,isForward:z.bool,className:z.string,children:z.node.isRequired};var re=function(n){var r=n.id,t=n.role,a=n.href,i=n.className,o=n.onClick,u=n.onKeyDown,c=n.ariaHaspopup,l=n.ariaControls,m=n.children,s=U("rmm__main-nav-item-link",n.isBack&&"rmm__main-nav-item-link--back",n.isForward&&"rmm__main-nav-item-link--forward",n.isActive&&"rmm__main-nav-item-link--active",i&&i);return e.createElement("a",{id:r,role:t,href:a,className:s,onClick:o,onKeyDown:u,"aria-haspopup":c,"aria-controls":l},m)};re.defaultProps={role:"menuitem",isBack:!1,isForward:!1,isActive:!1},re.propTypes={id:z.string.isRequired,role:z.string,href:z.string.isRequired,isBack:z.bool,isForward:z.bool,isActive:z.bool,className:z.string,onClick:z.func,onKeyDown:z.func,ariaHaspopup:z.string,ariaControls:z.string,children:z.node.isRequired};var te=function(n){var r=n.id,t=n.role,a=n.className,i=n.children,o=U("rmm__nav-item",n.isHeading&&"rmm__nav-item--heading",n.isForward&&"rmm__nav-item--forward",a&&a);return e.createElement("li",{id:r,role:t,className:o},i)};te.defaultProps={role:"none",isHeading:!1,hasChildren:!1,isForward:!1},te.propTypes={id:z.string.isRequired,role:z.string,isHeading:z.bool,isForward:z.bool,className:z.string,children:z.node.isRequired};var ae=function(n){var r=n.id,t=n.role,a=n.href,i=n.className,o=n.onClick,u=n.onKeyDown,c=n.ariaHaspopup,l=n.ariaControls,m=n.children,s=U("rmm__nav-item-link",n.isBack&&"rmm__nav-item-link--back",n.isHeading&&"rmm__nav-item-link--heading",n.isForward&&"rmm__nav-item-link--forward",n.isActive&&"rmm__nav-item-link--active",i&&i);return e.createElement("a",{id:r,role:t,href:a,className:s,onClick:o,onKeyDown:u,"aria-haspopup":c,"aria-controls":l},m)};ae.defaultProps={role:"menuitem",isBack:!1,isHeading:!1,isForward:!1,isActive:!1},ae.propTypes={id:z.string.isRequired,role:z.string,href:z.string.isRequired,isBack:z.bool,isHeading:z.bool,isForward:z.bool,isActive:z.bool,className:z.string,onClick:z.func,onKeyDown:z.func,ariaHaspopup:z.string,ariaControls:z.string,children:z.node.isRequired};var ie=function(n){var r=n.id,t=n.role,a=n.ariaLabelledby,i=n.children,o=U("rmm__nav-list","rmm__nav-list--"+n.activeState,n.isSub&&"rmm__nav-list--sub",n.isSubSub&&"rmm__nav-list--sub-sub",n.isDropdown&&"rmm__nav-list--dropdown");return e.createElement("ul",{id:r,role:t,"aria-labelledby":a,className:o},i)};ie.defaultProps={role:"menubar",isSub:!1,isSubSub:!1,isDropdown:!1,activeState:""},ie.propTypes={id:z.string.isRequired,role:z.string,isSub:z.bool,isSubSub:z.bool,isDropdown:z.bool,activeState:z.oneOf(["","open","closed"]).isRequired,ariaLabelledby:z.string.isRequired,children:z.node.isRequired};var oe=function(n){var r=n.className,t=n.children,a=U("rmm__nav-item-description",r&&r);return e.createElement("p",{className:a},t)};oe.propTypes={className:z.string,children:z.node.isRequired};var ue=function(e){var n=["closed","open"],r="open";if(n.includes(e))switch(e){case n[0]:r=n[1];break;case n[1]:r=n[0];break;default:r=n[0]}return r},ce=function(a){var i=a.logoImage,o=n(""),u=o[0],c=o[1],l=n(""),m=l[0],s=l[1],f=n(""),d=f[0],p=f[1],b=n([]),y=b[0],g=b[1],v=n(!0),h=v[0],M=v[1],S=r(null),E=function(){g([]),s("closed"),p("closed")},_=function(e,n){"open"===e?g([].concat(y,[n])):"closed"===e&&g(y.filter(function(e){return e!==n}))},w=function(e,n){e.preventDefault();var r=ue(m);s(ue(m)),h?_(r,n):y.includes(n)?g([]):g([n])},k=function(e,n){e.preventDefault();var r=ue(d);p(ue(d)),_(r,n)};t(function(){window.innerWidth>=1024?M(!1):M(!0)},[y,h]);var O,N=function(e){27===e.keyCode&&E()},C=function(e){var n=e.charCode||e.keyCode;if(32===n||13===n)return!0};return t(function(){return document.addEventListener("keydown",N,!1),function(){document.removeEventListener("keydown",N,!1)}}),t(function(){var e=function(e){O.current&&!O.current.contains(e.target)&&E()};return document.addEventListener("mousedown",e),document.addEventListener("keydown",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("keydown",e)}},[O=S]),e.createElement("div",{role:"navigation",className:"rmm__root",ref:S},e.createElement(Y,null,i&&e.createElement(J,{id:"menuitem-logo",src:i,alt:"Your brand's logo",rel:"home"}),e.createElement(G,null,"Your Brand Name")),e.createElement(Q,{label:"Menu",state:u,onClick:function(e){return function(e,n){e.preventDefault();var r=ue(u);c(r),_(r,"nav-main"),"open"===u&&E()}(e)}}),e.createElement(X,{id:"site-nav",activeState:u,ariaLabel:"Main Navigation"},e.createElement(Z,{id:"menubar-main",ariaLabel:"Main Menu"},e.createElement(ne,{role:"none",id:"nav-home"},e.createElement(re,{id:"menuitem-home",role:"menuitem",href:"/"},"Home")),e.createElement(ne,{id:"nav-Mega-Menu",role:"none",isChildren:!0},e.createElement(re,{role:"menuitem",id:"menuitem-Mega-Menu",href:"/?page=mega-menu",isForward:!0,isActive:!!y.includes("menu-Mega-Menu"),onClick:function(e){return w(e,"menu-Mega-Menu")},onKeyDown:function(e){return C(e)&&w(e,"menu-Mega-Menu")},ariaHaspopup:"true",ariaControls:"menu-Mega-Menu"},"Mega Menu"),e.createElement(ee,{id:"menu-Mega-Menu",activeState:y.includes("menu-Mega-Menu")?"open":"closed"},e.createElement(te,{id:"nav-Mega-Menu-back",isHeading:!0},e.createElement(ae,{id:"menuitem-Mega-Menu-back",href:"/?page=mega-menu",onClick:function(e){return w(e,"menu-Mega-Menu")},onKeyDown:function(e){return C(e)&&w(e,"menu-Mega-Menu")},ariaControls:"nav-main-Mega-Menu",isBack:!0},"Mega Menu")),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-1",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-1",role:"menuitem",href:"/?page=sub-menu-item-1",isHeading:!0},"Sub menu item 1"),e.createElement(oe,null,"Single line description that accompanies link")),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-2",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-2",role:"menuitem",href:"/?page=sub-menu-item-2",isHeading:!0},"Sub menu item 2"),e.createElement(oe,null,"Double lined small description that accompanies link in the React Mega Menu project")),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-3",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3",role:"menuitem",href:"/?page=sub-menu-item-3",isHeading:!0,isForward:!0,onClick:function(e){return k(e,"menu-Mega-Menu-Sub-menu-item-3")},onKeyDown:function(e){return C(e)&&k(e,"menu-Mega-Menu-Sub-menu-item-3")},ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-3"},"Sub menu item 3"),e.createElement(oe,null,"Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide."),e.createElement(ie,{id:"menu-Mega-Menu-Sub-menu-item-3",role:"menu",isSub:!0,isSubSub:!0,activeState:y.includes("menu-Mega-Menu-Sub-menu-item-3")?"open":"closed",ariaLabelledby:"menuitem-Mega-Menu-Sub-menu-item-3"},e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-3-back",role:"none",isHeading:!0},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3-back",role:"menuitem",href:"/?page=sub-menu-item-3",isBack:!0,onClick:function(e){return k(e,"menu-Mega-Menu-Sub-menu-item-3")},onKeyDown:function(e){return C(e)&&k(e,"menu-Mega-Menu-Sub-menu-item-3")},ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-3"},"Sub menu item 3")),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-3.1",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3.1",role:"menuitem",href:"/?page=sub-menu-item-3.1"},"Sub menu item 3.1"),e.createElement(oe,null,"Single line description that accompanies link")),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-3.2",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3.2",role:"menuitem",href:"/?page=sub-menu-item-3.2"},"Sub menu item 3.2"),e.createElement(oe,null,"Double lined small description that accompanies link in the React Mega Menu project")),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-3.3",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-3.3",role:"menuitem",href:"/?page=sub-menu-item-3.3"},"Sub menu item 3.3"),e.createElement(oe,null,"Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide.")))),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-4",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4",role:"menuitem",href:"/?page=sub-menu-item-4",isHeading:!0,isForward:!0,onClick:function(e){return k(e,"menu-Mega-Menu-Sub-menu-item-4")},onKeyDown:function(e){return C(e)&&k(e,"menu-Mega-Menu-Sub-menu-item-4")},ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-4"},"Sub menu item 4"),e.createElement(oe,null,"Three lined small description that accompanies link in the React Mega Menu project. This maybe too much text? Who's to say, really. We'll leave it to fate to decide."),e.createElement(ie,{id:"menu-Mega-Menu-Sub-menu-item-4",role:"menu",isSub:!0,isSubSub:!0,activeState:y.includes("menu-Mega-Menu-Sub-menu-item-4")?"open":"closed",ariaLabelledby:"menuitem-Mega-Menu-Sub-menu-item-4"},e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-4-back",role:"none",isHeading:!0},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4-back",role:"menuitem",href:"/?page=sub-menu-item-4",isBack:!0,onClick:function(e){return k(e,"menu-Mega-Menu-Sub-menu-item-4")},onKeyDown:function(e){return C(e)&&k(e,"menu-Mega-Menu-Sub-menu-item-4")},ariaHaspopup:"true",ariaControls:"menu-Mega-Menu-Sub-menu-item-4"},"Sub menu item 4")),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-4.1",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.1",role:"menuitem",href:"/?page=sub-menu-item-4.1"},"Sub menu item 4.1")),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-4.2",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.2",role:"menuitem",href:"/?page=sub-menu-item-4.2"},"Sub menu item 4.2")),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-4.3",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.3",role:"menuitem",href:"/?page=sub-menu-item-4.3"},"Sub menu item 4.3")),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-4.4",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.4",role:"menuitem",href:"/?page=sub-menu-item-4.4"},"Sub menu item 4.4")),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-4.5",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.5",role:"menuitem",href:"/?page=sub-menu-item-4.5"},"Sub menu item 4.5")),e.createElement(te,{id:"nav-Mega-Menu-Sub-menu-item-4.6",role:"none"},e.createElement(ae,{id:"menuitem-Mega-Menu-Sub-menu-item-4.6",role:"menuitem",href:"/?page=sub-menu-item-4.6"},"Sub menu item 4.6")))))),e.createElement(ne,{id:"nav-contact",role:"none"},e.createElement(re,{id:"menuitem-contact",role:"menuitem",href:"/?page=contact"},"Contact")))))};ce.defaultProps={logoImage:null},ce.propTypes={logoImage:z.string};export{ce as default};
//# sourceMappingURL=index.module.js.map
