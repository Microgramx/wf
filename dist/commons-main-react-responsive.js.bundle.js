/*! For license information please see commons-main-react-responsive.js.bundle.js.LICENSE.txt */
(self.webpackChunkiBomma=self.webpackChunkiBomma||[]).push([[463],{7988:function(e,t,n){var r;"undefined"!=typeof self&&self,e.exports=(r=n(6540),function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";function r(e,t){return u(e)||c(e,t)||a(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}function u(e){if(Array.isArray(e))return e}var s=n(1),f=n.n(s),l=n(8),p=n.n(l),y=n(2),d=n(10),m=n.n(d),v=n(3),b=n(6),h=function(e){return e.query||Object(v.a)(e)},g=function(e){if(!e)return null;var t=Object.keys(e);return 0===t.length?null:t.reduce((function(t,n){return t[Object(y.a)(n)]=e[n],t}),{})},O=function(){var e=f.a.useRef(!1);return f.a.useEffect((function(){e.current=!0}),[]),e.current},w=function(e){var t=f.a.useContext(b.a),n=function(){return g(e)||g(t)},o=r(f.a.useState(n),2),a=o[0],i=o[1];return f.a.useEffect((function(){var e=n();m()(a,e)||i(e)}),[e,t]),a},x=function(e){var t=function(){return h(e)},n=r(f.a.useState(t),2),o=n[0],a=n[1];return f.a.useEffect((function(){var e=t();o!==e&&a(e)}),[e]),o},j=function(e,t){var n=function(){return p()(e,t||{},!!t)},o=r(f.a.useState(n),2),a=o[0],i=o[1],c=O();return f.a.useEffect((function(){return c&&i(n()),function(){a.dispose()}}),[e,t]),a},S=function(e){var t=r(f.a.useState(e.matches),2),n=t[0],o=t[1];return f.a.useEffect((function(){var t=function(){o(e.matches)};return e.addListener(t),t(),function(){e.removeListener(t)}}),[e]),n},P=function(e,t,n){var r=w(t),o=x(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var a=j(o,r),i=S(a),c=O();return f.a.useEffect((function(){c&&n&&n(i)}),[i]),i};t.a=P},function(e,t){e.exports=r},function(e,t,n){"use strict";function r(e){return"-"+e.toLowerCase()}function o(e){if(c.hasOwnProperty(e))return c[e];var t=e.replace(a,r);return c[e]=i.test(t)?"-"+t:t}var a=/[A-Z]/g,i=/^ms-/,c={};t.a=o},function(e,t,n){"use strict";var r=n(2),o=n(11),a=function(e){return"not ".concat(e)},i=function(e,t){var n=Object(r.a)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?a(n):"(".concat(n,": ").concat(t,")")},c=function(e){return e.join(" and ")},u=function(e){var t=[];return Object.keys(o.a.all).forEach((function(n){var r=e[n];null!=r&&t.push(i(n,r))})),c(t)};t.a=u},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(1),o=n.n(r).a.createContext();t.a=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(17),a=n(3),i=n(6);n.d(t,"default",(function(){return o.a})),n.d(t,"useMediaQuery",(function(){return r.a})),n.d(t,"toQuery",(function(){return a.a})),n.d(t,"Context",(function(){return i.a}))},function(e,t,n){"use strict";function r(e,t,n){function r(e){f&&f.addListener(e)}function o(e){f&&f.removeListener(e)}function c(e){s.matches=e.matches,s.media=e.media}function u(){f&&f.removeListener(c)}var s=this;if(i&&!n){var f=i.call(window,e);this.matches=f.matches,this.media=f.media,f.addListener(c)}else this.matches=a(e,t),this.media=e;this.addListener=r,this.removeListener=o,this.dispose=u}function o(e,t,n){return new r(e,t,n)}var a=n(9).match,i="undefined"!=typeof window?window.matchMedia:null;e.exports=o},function(e,t,n){"use strict";function r(e,t){return o(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,u=t[n];if(!u)return!1;switch(n){case"orientation":case"scan":return u.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=c(o),u=c(u);break;case"resolution":o=i(o),u=i(u);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=a(o),u=a(u);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,u=parseInt(u,10)||0}switch(r){case"min":return u>=o;case"max":return u<=o;default:return u===o}}));return o&&!n||!o&&n}))}function o(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(u),n=t[1],r=t[2],o=t[3]||"",a={};return a.inverse=!!n&&"not"===n.toLowerCase(),a.type=r?r.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map((function(e){var t=e.match(s),n=t[1].toLowerCase().match(f);return{modifier:n[1],feature:n[2],value:t[2]}})),a}))}function a(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function i(e){var t=parseFloat(e);switch(String(e).match(p)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(l)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=r,t.parse=o;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,s=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,l=/(em|rem|px|cm|mm|in|pt|pc)?$/,p=/(dpi|dpcm|dppx)?$/},function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var a=0;a<o;a++){var i=n[a];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}e.exports=r},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(12),c=n.n(i),u=c.a.oneOfType([c.a.string,c.a.number]),s={orientation:c.a.oneOf(["portrait","landscape"]),scan:c.a.oneOf(["progressive","interlace"]),aspectRatio:c.a.string,deviceAspectRatio:c.a.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:c.a.bool,colorIndex:c.a.bool,monochrome:c.a.bool,resolution:u},f=o({minAspectRatio:c.a.string,maxAspectRatio:c.a.string,minDeviceAspectRatio:c.a.string,maxDeviceAspectRatio:c.a.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:c.a.number,maxColor:c.a.number,minColorIndex:c.a.number,maxColorIndex:c.a.number,minMonochrome:c.a.number,maxMonochrome:c.a.number,minResolution:u,maxResolution:u},s),l={all:c.a.bool,grid:c.a.bool,aural:c.a.bool,braille:c.a.bool,handheld:c.a.bool,print:c.a.bool,projection:c.a.bool,screen:c.a.bool,tty:c.a.bool,tv:c.a.bool,embossed:c.a.bool},p=o(o({},l),f);s.type=Object.keys(l),t.a={all:p,types:l,matchers:s,features:f}},function(e,t,n){var r=n(4);e.exports=n(14)(r.isElement,!0)},function(e,t,n){"use strict";!function(){function e(e){return"string"==typeof e||"function"==typeof e||e===g||e===P||e===w||e===O||e===I||e===k||"object"==typeof e&&null!==e&&(e.$$typeof===A||e.$$typeof===C||e.$$typeof===x||e.$$typeof===j||e.$$typeof===E||e.$$typeof===R||e.$$typeof===T||e.$$typeof===_||e.$$typeof===$)}function n(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case b:var n=e.type;switch(n){case S:case P:case g:case w:case O:case I:return n;default:var r=n&&n.$$typeof;switch(r){case j:case E:case A:case C:case x:return r;default:return t}}case h:return t}}}function r(e){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),o(e)||n(e)===S}function o(e){return n(e)===P}function a(e){return n(e)===j}function i(e){return n(e)===x}function c(e){return"object"==typeof e&&null!==e&&e.$$typeof===b}function u(e){return n(e)===E}function s(e){return n(e)===g}function f(e){return n(e)===A}function l(e){return n(e)===C}function p(e){return n(e)===h}function y(e){return n(e)===w}function d(e){return n(e)===O}function m(e){return n(e)===I}var v="function"==typeof Symbol&&Symbol.for,b=v?Symbol.for("react.element"):60103,h=v?Symbol.for("react.portal"):60106,g=v?Symbol.for("react.fragment"):60107,O=v?Symbol.for("react.strict_mode"):60108,w=v?Symbol.for("react.profiler"):60114,x=v?Symbol.for("react.provider"):60109,j=v?Symbol.for("react.context"):60110,S=v?Symbol.for("react.async_mode"):60111,P=v?Symbol.for("react.concurrent_mode"):60111,E=v?Symbol.for("react.forward_ref"):60112,I=v?Symbol.for("react.suspense"):60113,k=v?Symbol.for("react.suspense_list"):60120,C=v?Symbol.for("react.memo"):60115,A=v?Symbol.for("react.lazy"):60116,$=v?Symbol.for("react.block"):60121,R=v?Symbol.for("react.fundamental"):60117,T=v?Symbol.for("react.responder"):60118,_=v?Symbol.for("react.scope"):60119,L=S,M=P,D=j,W=x,F=b,N=E,q=g,H=A,z=C,V=h,B=w,U=O,Y=I,J=!1;t.AsyncMode=L,t.ConcurrentMode=M,t.ContextConsumer=D,t.ContextProvider=W,t.Element=F,t.ForwardRef=N,t.Fragment=q,t.Lazy=H,t.Memo=z,t.Portal=V,t.Profiler=B,t.StrictMode=U,t.Suspense=Y,t.isAsyncMode=r,t.isConcurrentMode=o,t.isContextConsumer=a,t.isContextProvider=i,t.isElement=c,t.isForwardRef=u,t.isFragment=s,t.isLazy=f,t.isMemo=l,t.isPortal=p,t.isProfiler=y,t.isStrictMode=d,t.isSuspense=m,t.isValidElementType=e,t.typeOf=n}()},function(e,t,n){"use strict";function r(){return null}var o=n(4),a=n(15),i=n(5),c=n(16),u=Function.call.bind(Object.prototype.hasOwnProperty),s=function(){};s=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){function n(e){var t=e&&(I&&e[I]||e[k]);if("function"==typeof t)return t}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function l(e){this.message=e,this.stack=""}function p(e){function n(n,a,c,u,f,p,y){if(u=u||C,p=p||c,y!==i){if(t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("undefined"!=typeof console){var m=u+":"+c;!r[m]&&o<3&&(s("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,o++)}}return null==a[c]?n?new l(null===a[c]?"The "+f+" `"+p+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+f+" `"+p+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(a,c,u,f,p)}var r={},o=0,a=n.bind(null,!1);return a.isRequired=n.bind(null,!0),a}function y(e){function t(t,n,r,o,a,i){var c=t[n];return j(c)!==e?new l("Invalid "+o+" `"+a+"` of type `"+S(c)+"` supplied to `"+r+"`, expected `"+e+"`."):null}return p(t)}function d(e){function t(t,n,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var c=t[n];if(!Array.isArray(c))return new l("Invalid "+o+" `"+a+"` of type `"+j(c)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<c.length;u++){var s=e(c,u,r,o,a+"["+u+"]",i);if(s instanceof Error)return s}return null}return p(t)}function m(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||C;return new l("Invalid "+o+" `"+a+"` of type `"+E(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return p(t)}function v(e){function t(t,n,r,o,a){for(var i=t[n],c=0;c<e.length;c++)if(f(i,e[c]))return null;var u=JSON.stringify(e,(function(e,t){return"symbol"===S(t)?String(t):t}));return new l("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+r+"`, expected one of "+u+".")}return Array.isArray(e)?p(t):(s(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)}function b(e){function t(t,n,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],s=j(c);if("object"!==s)return new l("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var f in c)if(u(c,f)){var p=e(c,f,r,o,a+"."+f,i);if(p instanceof Error)return p}return null}return p(t)}function h(e){function t(t,n,r,o,a){for(var c=0;c<e.length;c++)if(null==(0,e[c])(t,n,r,o,a,i))return null;return new l("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return s("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+P(o)+" at index "+n+"."),r}return p(t)}function g(e){function t(t,n,r,o,a){var c=t[n],u=j(c);if("object"!==u)return new l("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var p=f(c,s,r,o,a+"."+s,i);if(p)return p}}return null}return p(t)}function O(e){function t(t,n,r,o,c){var u=t[n],s=j(u);if("object"!==s)return new l("Invalid "+o+" `"+c+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var f=a({},t[n],e);for(var p in f){var y=e[p];if(!y)return new l("Invalid "+o+" `"+c+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=y(u,p,r,o,c+"."+p,i);if(d)return d}return null}return p(t)}function w(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(w);if(null===t||e(t))return!0;var r=n(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!w(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!w(i[1]))return!1}return!0;default:return!1}}function x(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function j(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":x(t,e)?"symbol":t}function S(e){if(null==e)return""+e;var t=j(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function P(e){var t=S(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function E(e){return e.constructor&&e.constructor.name?e.constructor.name:C}var I="function"==typeof Symbol&&Symbol.iterator,k="@@iterator",C="<<anonymous>>",A={array:y("array"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:p(r),arrayOf:d,element:function(){function t(t,n,r,o,a){var i=t[n];return e(i)?null:new l("Invalid "+o+" `"+a+"` of type `"+j(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return p(t)}(),elementType:function(){function e(e,t,n,r,a){var i=e[t];return o.isValidElementType(i)?null:new l("Invalid "+r+" `"+a+"` of type `"+j(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")}return p(e)}(),instanceOf:m,node:function(){function e(e,t,n,r,o){return w(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return p(e)}(),objectOf:b,oneOf:v,oneOfType:h,shape:g,exact:O};return l.prototype=Error.prototype,A.checkPropTypes=c,A.resetWarningCache=c.resetWarningCache,A.PropTypes=A,A}},function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,c,u=r(e),s=1;s<arguments.length;s++){for(var f in n=Object(arguments[s]))a.call(n,f)&&(u[f]=n[f]);if(o){c=o(n);for(var l=0;l<c.length;l++)i.call(n,c[l])&&(u[c[l]]=n[c[l]])}}return u}},function(e,t,n){"use strict";function r(e,t,n,r,u){for(var s in e)if(c(e,s)){var f;try{if("function"!=typeof e[s]){var l=Error((r||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw l.name="Invariant Violation",l}f=e[s](t,s,r,n,null,a)}catch(e){f=e}if(!f||f instanceof Error||o((r||"React class")+": type specification of "+n+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof f+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),f instanceof Error&&!(f.message in i)){i[f.message]=!0;var p=u?u():"";o("Failed "+n+" type: "+f.message+(null!=p?p:""))}}}var o=function(){},a=n(5),i={},c=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},r.resetWarningCache=function(){i={}},e.exports=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=o(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function o(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function a(e){var t=e.children,n=e.device,o=e.onChange,a=r(e,["children","device","onChange"]),c=Object(i.a)(a,n,o);return"function"==typeof t?t(c):c?t:null}t.a=a;var i=n(0)}]))}}]);
//# sourceMappingURL=commons-main-react-responsive.js.bundle.js.map