parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"F977":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"qjdW":[function(require,module,exports) {
function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}module.exports=r;
},{}],"tlMJ":[function(require,module,exports) {
function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(t)}function t(n){return"function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?module.exports=t=function(t){return o(t)}:module.exports=t=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},t(n)}module.exports=t;
},{}],"RBd3":[function(require,module,exports) {
function e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}module.exports=e;
},{}],"VojR":[function(require,module,exports) {
var e=require("../helpers/typeof"),r=require("./assertThisInitialized");function t(t,i){return!i||"object"!==e(i)&&"function"!=typeof i?r(t):i}module.exports=t;
},{"../helpers/typeof":"tlMJ","./assertThisInitialized":"RBd3"}],"tv1K":[function(require,module,exports) {
function t(e){return module.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t(e)}module.exports=t;
},{}],"hxEz":[function(require,module,exports) {
function t(o,e){return module.exports=t=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},t(o,e)}module.exports=t;
},{}],"jhNH":[function(require,module,exports) {
var e=require("./setPrototypeOf");function r(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&e(r,t)}module.exports=r;
},{"./setPrototypeOf":"hxEz"}],"alUq":[function(require,module,exports) {
function r(r){if(Array.isArray(r)){for(var e=0,n=new Array(r.length);e<r.length;e++)n[e]=r[e];return n}}module.exports=r;
},{}],"AZzA":[function(require,module,exports) {
function t(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}module.exports=t;
},{}],"OMtq":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to spread non-iterable instance")}module.exports=e;
},{}],"DRof":[function(require,module,exports) {
var r=require("./arrayWithoutHoles"),e=require("./iterableToArray"),a=require("./nonIterableSpread");function o(o){return r(o)||e(o)||a()}module.exports=o;
},{"./arrayWithoutHoles":"alUq","./iterableToArray":"AZzA","./nonIterableSpread":"OMtq"}],"lsuE":[function(require,module,exports) {
function e(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=e;
},{}],"dgxz":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=h(t[e],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o){var i=new b(u(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}
},{}],"loFk":[function(require,module,exports) {
module.exports=require("regenerator-runtime");
},{"regenerator-runtime":"dgxz"}],"IXvi":[function(require,module,exports) {
"use strict";var e=u(require("@babel/runtime/helpers/classCallCheck")),r=u(require("@babel/runtime/helpers/createClass")),t=u(require("@babel/runtime/helpers/possibleConstructorReturn")),n=u(require("@babel/runtime/helpers/getPrototypeOf")),a=u(require("@babel/runtime/helpers/inherits")),o=u(require("@babel/runtime/helpers/toConsumableArray")),l=u(require("@babel/runtime/helpers/defineProperty")),s=u(require("@babel/runtime/regenerator"));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(t,!0).forEach(function(r){(0,l.default)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var c=s.default.mark(q),d=wp.element,f=d.Component,m=d.render,b=d.createElement,h=d.Fragment,g=wp.components,D=g.DropZoneProvider,y=g.DropZone,O=wp.i18n.__,v=wp,w=v.apiFetch,F=wp.data,P=F.registerStore,E=F.withDispatch,_=F.withSelect,A=wp.compose.compose,N=lodash,U=N.find,L=N.forEach,R=N.reject,j=N.uniqueId;function q(e){var r,t,n;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=!0,a.next=3,{type:"UPLOAD_START",uploading:r,file:e};case 3:return(n=new FormData).append("file",e),n.append("action","bp_attachments_media_upload"),r=!1,a.prev=7,a.next=10,S.uploadFile("/buddypress/v1/attachments",n);case 10:return t=a.sent,a.next=13,{type:"UPLOAD_END",uploading:r,uploaded:t};case 13:return a.abrupt("return",S.addFile(t));case 16:return a.prev=16,a.t0=a.catch(7),t={id:j(),name:e.name,error:a.t0.message},a.next=21,{type:"UPLOAD_END",uploading:r,uploaded:t};case 21:return a.abrupt("return",S.traceError(t));case 22:case"end":return a.stop()}},c,null,[[7,16]])}var x={files:[],uploaded:[],errored:[],uploading:!1},S={saveAttachment:q,uploadFile:function(e,r){return{type:"UPLOAD_FILE",path:e,formData:r}},addFile:function(e){return{type:"ADD_FILE",file:e}},traceError:function(e){return{type:"ADD_ERROR",file:e}}};P("bp-attachments",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"ADD_FILE":return p({},e,{files:[].concat((0,o.default)(e.files),[r.file])});case"UPLOAD_START":return p({},e,{uploading:r.uploading,uploaded:[].concat((0,o.default)(e.uploaded),[r.file])});case"ADD_ERROR":return p({},e,{errored:[].concat((0,o.default)(e.errored),[r.file])});case"UPLOAD_END":return p({},e,{uploading:r.uploading,uploaded:R(e.uploaded,["name",r.uploaded.name])})}return e},actions:S,selectors:{isUploading:function(e){return e.uploading},getUploadedFiles:function(e){return e.uploaded},getErroredFiles:function(e){return e.errored},getFiles:function(e){return e.files}},controls:{UPLOAD_FILE:function(e){return w({path:e.path,method:"POST",body:e.formData})}},resolvers:{}});var k=function(o){function l(){return(0,e.default)(this,l),(0,t.default)(this,(0,n.default)(l).apply(this,arguments))}return(0,a.default)(l,o),(0,r.default)(l,[{key:"renderResult",value:function(e){var r=this.props,t=r.files,n=r.errored,a=U(n,{name:e.name});return U(t,{name:e.name})?b("span",{className:"bp-info"},b("span",{className:"bp-uploaded"}),b("span",{className:"screen-reader-text"},O("Uploaded!","bp-attachments"))):a?b("span",{className:"bp-info"},b("span",null,a.error),b("span",{className:"bp-errored"})):b("span",{className:"bp-info"},b("span",{className:"bp-uploading"}),b("span",{className:"screen-reader-text"},O("Uploading...","bp-attachments")))}},{key:"render",value:function(){var e=this,r=this.props,t=r.onFilesDropped,n=r.isUploading,a=r.uploaded,o=r.files,l=r.errored,s="enabled",u=[];return n&&(s="disabled"),u=u.concat(a,o,l),b(h,null,b(D,null,b("div",null,b("h2",null,O("Drop your files in the box below.","bp-attachments")),b(y,{label:O("Drop your files here.","bp-attachments"),onFilesDrop:t,className:s}))),!!u.length&&b("ol",{className:"bp-files-list"},u.map(function(r){return b("li",{key:r.name,className:"row"},b("span",{className:"filename"},r.name),e.renderResult(r))})))}}]),l}(f),C=A([_(function(e){return{isUploading:e("bp-attachments").isUploading(),uploaded:e("bp-attachments").getUploadedFiles(),files:e("bp-attachments").getFiles(),errored:e("bp-attachments").getErroredFiles()}}),E(function(e){return{onFilesDropped:function(r){r.forEach(function(r){e("bp-attachments").saveAttachment(r)})}}})])(k);m(b(C,null),document.querySelector("#bp-media-uploader"));
},{"@babel/runtime/helpers/classCallCheck":"F977","@babel/runtime/helpers/createClass":"qjdW","@babel/runtime/helpers/possibleConstructorReturn":"VojR","@babel/runtime/helpers/getPrototypeOf":"tv1K","@babel/runtime/helpers/inherits":"jhNH","@babel/runtime/helpers/toConsumableArray":"DRof","@babel/runtime/helpers/defineProperty":"lsuE","@babel/runtime/regenerator":"loFk"}]},{},["IXvi"], null)
//# sourceMappingURL=/uploader/index.js.map