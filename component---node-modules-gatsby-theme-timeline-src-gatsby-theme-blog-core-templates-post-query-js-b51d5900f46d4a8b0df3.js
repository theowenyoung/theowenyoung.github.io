(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},Bpw6:function(t,e,r){"use strict";r.r(e),r.d(e,"query",(function(){return C}));var n=r("q1tI"),o=r.n(n),i=r("9yS4"),c=r("7IG/"),a=r("Wbzz"),u=r("2A+t"),s=r("ZdEh"),f=r("MXbp"),l=r("izhR"),p=r("N1om"),h=r.n(p),d=r("TieT"),v=r("T/ZZ"),y=r("qKvR"),b=function(t){var e=t.previous,r=t.next,n=t.tags,o=t.basePath;return Object(u.c)("footer",{css:Object(s.a)({pt:3,pb:4})},n&&n.length>0&&Object(u.c)(f.b.div,{sx:{display:"flex",flexWrap:"wrap",mb:3,fontSize:2}},n&&n.map((function(t){return Object(u.c)(d.a,{to:Object(a.d)(v(o||"/","tags/"+h()(t))),key:"tag-"+t},t)}))),(e||r)&&Object(u.c)(l.c,{as:"ul",sx:{flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,pt:3,fontSize:2}},Object(u.c)("li",null,e&&Object(u.c)(f.b.a,{as:a.a,to:e.slug,rel:"prev"},"← ",e.title)),Object(u.c)("li",null,r&&Object(u.c)(f.b.a,{as:a.a,to:r.slug,rel:"next"},r.title," →"))))},g=r("fwM0"),m=r("mLGb"),w=r("A2+M"),O=r("Sugf"),j=function(t){return Object(y.c)(f.b.h1,t)},x=r("wx14"),E=function(t){return Object(u.c)(f.b.p,Object(x.a)({sx:{color:"textMuted",mb:2}},t))},L=function(t){return Object(u.c)("article",null,Object(u.c)("header",null,Object(u.c)(E,null,t.date),Object(u.c)(O.a,{post:t}),Object(u.c)(j,{sx:{mb:4}},t.title)),Object(u.c)("section",{sx:{fontSize:2}},Object(u.c)(w.MDXRenderer,null,t.body)))},P=r("zLVn"),S=r("o0o1"),k=r.n(S),I=r("g6dt"),_=r.n(I);function A(){return(A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var R=!("undefined"==typeof window||!window.document||!window.document.createElement);function T(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}function D(t){var e=Object(n.useRef)();return function(t,e){if(T(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(e,r[o])||!T(t[r[o]],e[r[o]]))return!1;return!0}(t,e.current)||(e.current=t),e.current}function M(t){return"object"==typeof t?A({},t):t}function N(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void r(s)}a.done?e(u):Promise.resolve(u).then(n,o)}R&&_()("https://platform.twitter.com/widgets.js","twttr");function G(t,e,r,o){var i=Object(n.useState)(null),c=i[0],a=i[1],u=Object(n.useRef)(null);if(!R)return{ref:u,error:c};var s=[t,D(e),D(r)];return Object(n.useEffect)((function(){a(null);var n,i,c=!1;if(u.current){var s=function(){var n,i=(n=k.a.mark((function n(){var i,s;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u&&u.current){n.next=2;break}return n.abrupt("return");case 2:return(i=document.createElement("div")).setAttribute("twdiv","yes"),u.current.appendChild(i),n.prev=5,n.next=8,new Promise((function(t,e){var r=function(){return e(new Error("Could not load remote twitter widgets js"))};_.a.ready("twttr",{success:function(){var e=window.twttr;e&&e.widgets||r(),t(e.widgets)},error:r})}));case 8:return s=n.sent,n.next=11,s[t](M(e),i,M(r));case 11:if(n.sent||c){n.next=14;break}throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");case 14:n.next=21;break;case 16:return n.prev=16,n.t0=n.catch(5),console.error(n.t0),a(n.t0),n.abrupt("return");case 21:if(u&&u.current){n.next=23;break}return n.abrupt("return");case 23:if(!c){n.next=26;break}return i&&i.remove(),n.abrupt("return");case 26:o&&o();case 27:case"end":return n.stop()}}),n,null,[[5,16]])})),function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function c(t){N(i,r,o,c,a,"next",t)}function a(t){N(i,r,o,c,a,"throw",t)}c(void 0)}))});return function(){return i.apply(this,arguments)}}();n=u.current,i="twdiv",n&&n.querySelectorAll("*").forEach((function(t){t.hasAttribute(i)&&t.remove()})),s()}return function(){c=!0}}),s),{ref:u,error:c}}var F=function(t){var e=t.tweetId,r=t.options,n=t.onLoad,i=t.renderError,c=G("createTweet",e,r,n),a=c.ref,u=c.error;return o.a.createElement("div",{ref:a},u&&i&&i(u))},X=function(t){var e=t.idStr;Object(P.a)(t,["idStr"]);return Object(u.c)(F,{tweetId:e,renderError:function(t){return Object(u.c)(l.a,null,""+t)},options:{dnt:!0}})},q=function(t){return t.__typename===m.a?Object(y.c)(X,t):Object(y.c)(L,t)},z=function(t){var e,r,n,o,a,u=t.data,s=u.blogPost,f=u.previous,l=u.next,p=u.site.siteMetadata.title,h=t.location,d=s,v=(null==d||null===(e=d.fields)||void 0===e?void 0:e.basePath)||"/";return Object(y.c)(i.a,{basePath:v,location:h,title:p,type:"detail"},Object(y.c)(c.a,{title:d.title,description:d.excerpt,imageSource:d.socialImage?null===(r=d.socialImage)||void 0===r||null===(n=r.childImageSharp)||void 0===n?void 0:n.fluid.src:null===(o=d.image)||void 0===o||null===(a=o.childImageSharp)||void 0===a?void 0:a.fluid.src,imageAlt:d.imageAlt}),Object(y.c)("main",null,Object(y.c)(q,d),Object(y.c)(b,{previous:f,next:l,tags:d.tags,basePath:v})),Object(y.c)("aside",null,Object(y.c)(g.a,null)))},C=(e.default=z,"1674795350")},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),i=r("ZhPi"),c=r("Bnag");t.exports=function(t){return n(t)||o(t)||i(t)||c()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),i=r("lSNA"),c=r("8OQS");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=r("q1tI"),f=r("7ljp").mdx,l=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,i=c(t,["scope","children"]),a=l(e),p=s.useMemo((function(){if(!r)return null;var t=u({React:s,mdx:f},a),e=Object.keys(t),i=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,e]);return s.createElement(p,u({},i))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},g6dt:function(t,e,r){var n,o,i;o=[],void 0===(i="function"==typeof(n=function(){var t=function(){},e={},r={},n={};function o(t,e){if(t){var o=n[t];if(r[t]=e,o)for(;o.length;)o[0](t,e),o.splice(0,1)}}function i(e,r){e.call&&(e={success:e}),r.length?(e.error||t)(r):(e.success||t)(e)}function c(e,r,n,o){var i,a,u=document,s=n.async,f=(n.numRetries||0)+1,l=n.before||t,p=e.replace(/[\?|#].*$/,""),h=e.replace(/^(css|img)!/,"");o=o||0,/(^css!|\.css$)/.test(p)?((a=u.createElement("link")).rel="stylesheet",a.href=h,(i="hideFocus"in a)&&a.relList&&(i=0,a.rel="preload",a.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p)?(a=u.createElement("img")).src=h:((a=u.createElement("script")).src=e,a.async=void 0===s||s),a.onload=a.onerror=a.onbeforeload=function(t){var u=t.type[0];if(i)try{a.sheet.cssText.length||(u="e")}catch(s){18!=s.code&&(u="e")}if("e"==u){if((o+=1)<f)return c(e,r,n,o)}else if("preload"==a.rel&&"style"==a.as)return a.rel="stylesheet";r(e,u,t.defaultPrevented)},!1!==l(e,a)&&u.head.appendChild(a)}function a(t,r,n){var a,u;if(r&&r.trim&&(a=r),u=(a?n:r)||{},a){if(a in e)throw"LoadJS";e[a]=!0}function s(e,r){!function(t,e,r){var n,o,i=(t=t.push?t:[t]).length,a=i,u=[];for(n=function(t,r,n){if("e"==r&&u.push(t),"b"==r){if(!n)return;u.push(t)}--i||e(u)},o=0;o<a;o++)c(t[o],n,r)}(t,(function(t){i(u,t),e&&i({success:e,error:r},t),o(a,t)}),u)}if(u.returnPromise)return new Promise(s);s()}return a.ready=function(t,e){return function(t,e){t=t.push?t:[t];var o,i,c,a=[],u=t.length,s=u;for(o=function(t,r){r.length&&a.push(t),--s||e(a)};u--;)i=t[u],(c=r[i])?o(i,c):(n[i]=n[i]||[]).push(o)}(t,(function(t){i(e,t)})),a},a.done=function(t){o(t,[])},a.reset=function(){e={},r={},n={}},a.isDefined=function(t){return t in e},a})?n.apply(e,o):n)||(t.exports=i)},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function a(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(P){a=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),c=new x(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=w(c,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f={};function l(){}function p(){}function h(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(E([])));y&&y!==e&&r.call(y,o)&&(d=y);var b=h.prototype=l.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function m(t,e){var n;this._invoke=function(o,i){function c(){return new e((function(n,c){!function n(o,i,c,a){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,a)}))}a(u.arg)}(o,i,n,c)}))}return n=n?n.then(c,c):c()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=b.constructor=h,h.constructor=p,p.displayName=a(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new m(u(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(b),a(b,c,"Generator"),b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function i(e,r,c){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,r){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return r&&n(i,r.prototype),i},i.apply(null,arguments)}t.exports=i}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-timeline-src-gatsby-theme-blog-core-templates-post-query-js-b51d5900f46d4a8b0df3.js.map