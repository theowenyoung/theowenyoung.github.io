(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/gXk":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ITEM_TYPES=t.createUltimatePagination=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=i(r("q1tI")),c=i(r("17x9")),o=r("nEOd");function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e,t,r){return function(c){var o,i,l,u=e[c.type],s=(i=(o=c).value,l=o.isDisabled,function(){!l&&r&&t!==i&&r(i)});return n.default.createElement(u,a({onClick:s},c))}};t.createUltimatePagination=function(e){var t=e.itemTypeToComponent,r=e.WrapperComponent,i=void 0===r?"div":r,u=function(e){var r=e.currentPage,c=e.totalPages,u=e.boundaryPagesRange,s=e.siblingPagesRange,b=e.hideEllipsis,d=e.hidePreviousAndNextPageLinks,g=e.hideFirstAndLastPageLinks,p=e.onChange,h=e.disabled,f=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),j=(0,o.getPaginationModel)({currentPage:r,totalPages:c,boundaryPagesRange:u,siblingPagesRange:s,hideEllipsis:b,hidePreviousAndNextPageLinks:d,hideFirstAndLastPageLinks:g}),O=l(t,r,p);return n.default.createElement(i,f,j.map((function(e){return O(a({},e,{isDisabled:!!h}))})))};return u.propTypes={currentPage:c.default.number.isRequired,totalPages:c.default.number.isRequired,boundaryPagesRange:c.default.number,siblingPagesRange:c.default.number,hideEllipsis:c.default.bool,hidePreviousAndNextPageLinks:c.default.bool,hideFirstAndLastPageLinks:c.default.bool,onChange:c.default.func,disabled:c.default.bool},u},t.ITEM_TYPES=o.ITEM_TYPES},H8Co:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return ge}));var a=r("wx14"),n=r("q1tI"),c=r("Wbzz"),o=r("9yS4"),i=r("ZdEh"),l=r("izhR"),u=r("qKvR"),s=function(){return Object(u.c)("footer",{css:Object(i.a)({mt:4,pt:3})},"© ",(new Date).getFullYear(),", Powered by"," ",Object(u.c)(l.d,{href:"https://www.gatsbyjs.com"},"Gatsby")," ","Theme by"," ",Object(u.c)(l.d,{href:"https://github.com/theowenyoung/gatsby-theme-timeline"},"Timeline"))},b=r("fwM0"),d=r("2A+t"),g=r("N1om"),p=r.n(g),h=r("TieT"),f=r("33yf"),j=r.n(f),O=r("MXbp"),m=function(){return Object(d.c)(O.b.h4,null,"Tags")},x=function(e){var t=e.basePath,r=e.group;return Object(d.c)(l.a,null,Object(d.c)(m,null),Object(d.c)(l.b,{sx:{mb:3,flexWrap:"wrap"}},r.map((function(e,r){var a=e.fieldValue,n=e.totalCount;return Object(d.c)(h.a,{key:"tag-list-"+r,count:n,to:Object(c.withPrefix)(Object(f.join)(t,"/tags/"+p()(a)))},a)}))))},P=function(){return Object(d.c)(O.b.h4,null,"Links")},v=function(e){var t=e.links;return Object(d.c)(l.a,null,Object(d.c)(P,null),Object(d.c)(O.b.ul,null,t?t.map((function(e,t){var r={};return e.external&&(r.target="_blank",r.rel="noopener noreferrer"),Object(d.c)("li",{key:"links-"+t},Object(d.c)(l.d,Object(a.a)({},r,{href:e.url}),e.name))})):null))},E=r("mLGb"),w=r("Frpm"),S=function(e){var t=e.to,r=e.children;return Object(d.c)(l.d,{as:w.a,to:t,sx:{color:"textMuted",fontStyle:"italic","::before":{content:'"#"'},mr:2}},Object(d.c)("span",null,r))},I=r("Sugf"),_=function(e){var t=e.excerpt;return t?Object(d.c)(O.b.p,{sx:{whiteSpace:"pre-line"}},t):null},y=function(e){var t=e.title,r=e.slug,a=e.date,n=e.excerpt,o=e.tags,i=e.image,u=e.imageAlt,s=e.basePath;return Object(d.c)(l.a,{sx:{borderRadius:"default",overflow:"hidden",wordWrap:"break-word",borderWidth:1,borderStyle:"solid",borderColor:"muted",px:[3,4],pt:3,pb:4}},Object(d.c)(I.a,{post:{image:i,imageAlt:u,excerpt:n}}),t&&Object(d.c)("header",null,Object(d.c)(l.d,{sx:{color:"text"},as:w.a,to:r},Object(d.c)(O.b.h3,{sx:{fontWeight:"normal"}},t))),Object(d.c)(_,e),Object(d.c)("footer",null,o&&o.length>0&&Object(d.c)(O.b.div,{sx:{display:"flex",flexWrap:"wrap",pb:3}},o&&o.map((function(e){return Object(d.c)(S,{to:Object(c.withPrefix)(Object(f.join)(s,"tags/"+p()(e))),key:"tag-"+e},e)}))),Object(d.c)("section",null,Object(d.c)(l.d,{as:w.a,sx:{color:"textMuted"},to:r},a))))},A=function(e){var t=e.slug,r=e.date;return Object(d.c)(l.d,{as:w.a,sx:{color:"textMuted"},to:t},r)},L=r("Epea"),N=function(e){var t=e.href;return Object(d.c)(l.d,{sx:{color:L.a},href:t,target:"_blank",rel:"noopener noreferrer"},"View on Twitter")},T=r("G6MM"),M=r("9eSz"),k=r.n(M),R=function(e){var t=e.name,r=e.screenName,a=e.avatar;return t&&r?Object(d.c)(l.b,null,Object(d.c)(l.d,{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/"+r},(null==a?void 0:a.childImageSharp)&&Object(d.c)(k.a,{fixed:a.childImageSharp.fixed,alt:t+" avatar",css:Object(i.a)({mr:2,mb:0,width:"48px",minWidth:"48px",borderRadius:"full"})})),Object(d.c)(l.d,{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/"+r},Object(d.c)(l.a,{sx:{fontWeight:"bold"}},Object(d.c)(l.e,{sx:{color:"text"}},t)),Object(d.c)(l.e,{sx:{color:"textMuted",fontSize:0}},"@",r))):null},G=function(e){var t=e.to;return Object(d.c)("div",{sx:{flex:1,position:"relative"}},Object(d.c)(l.d,{target:"_blank",rel:"noopener noreferrer",href:t,sx:{position:"absolute",right:0,top:0}},Object(d.c)("svg",{sx:{width:"25px",height:"25px",color:L.a,fill:"currentcolor"},viewBox:"0 0 24 24"},Object(d.c)("g",null,Object(d.c)("path",{d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})))))},K=r("q/Q8"),F=function(){return Object(d.c)("div",null,Object(d.c)("svg",{sx:{width:"14px",fill:"currentcolor"},viewBox:"0 0 24 24"},Object(d.c)("g",null,Object(d.c)("path",{d:"M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"}))))},W=function(e){var t=e.name,r=e.screenName,a=e.avatar;return t&&r?Object(d.c)(l.b,{sx:{alignItems:"center"}},Object(d.c)(l.d,{href:"https://twitter.com/"+r},(null==a?void 0:a.childImageSharp)&&Object(d.c)(k.a,{fixed:a.childImageSharp.fixed,alt:t+" avatar",css:Object(i.a)({mr:2,mb:-2,width:"20px",minWidth:"20px",borderRadius:"full"})})),Object(d.c)(l.d,{sx:{display:"flex",alignItems:"center"},href:"https://twitter.com/"+r},Object(d.c)(l.a,{sx:{fontWeight:"bold"}},Object(d.c)(l.e,{sx:{color:"text",mr:1}},t)),Object(d.c)(l.e,{sx:{color:"textMuted",fontSize:0}},"@",r))):null},q=function(e){var t=e.excerpt,r=e.authorName,a=e.authorScreenName,c=e.authorAvatar,o=e.image,i=e.idStr,u=e.imageAlt,s=e.retweeted,b=e.isQuoteStatus,g=e.quoteBody,p=e.quoteAuthorName,h=e.quoteAuthorScreenName,f=e.quoteAuthorAvatar,j=e.quoteImage,O=Object(T.a)(t),m="";return b&&(m=Object(T.a)(g)),Object(d.c)(n.Fragment,null,s&&Object(d.c)(l.b,{sx:{color:"textMuted",mb:1,fontSize:0,alignItems:"center"}},Object(d.c)(l.b,{sx:{mr:2,mb:-1,width:"48px",justifyContent:"flex-end"}},Object(d.c)(F,null)),Object(d.c)(l.e,null,"Retweeted")),Object(d.c)(l.b,null,Object(d.c)(R,{name:r,screenName:a,avatar:c}),Object(d.c)(G,{to:"https://twitter.com/"+a+"/status/"+i})),Object(d.c)("div",null,Object(d.c)(l.a,{sx:{fontSize:1,py:2,whiteSpace:"pre-line"}},O),Object(d.c)(K.a,{post:{image:o,imageAlt:u,excerpt:t}}),b&&Object(d.c)("div",{sx:{borderRadius:"default",overflow:"hidden",wordWrap:"break-word",borderWidth:1,borderStyle:"solid",borderColor:"muted",mb:2}},Object(d.c)("div",{sx:{p:3}},Object(d.c)(W,{name:p,screenName:h,avatar:f}),Object(d.c)(l.a,{sx:{fontSize:1,pt:2}},m)),Object(d.c)(K.a,{post:{image:j,imageAlt:"quote image",excerpt:g}}))))},Y=function(e){var t=e.excerpt,r=e.authorName,a=e.authorScreenName,n=e.authorAvatar,o=e.image,i=e.slug,u=e.datetime,s=e.idStr,b=e.tags,g=e.retweeted,h=e.isQuoteStatus,j=e.quoteBody,m=e.quoteAuthorName,x=e.quoteAuthorScreenName,P=e.quoteAuthorAvatar,v=e.quoteImage,E=e.basePath,w={excerpt:t,authorName:r,authorScreenName:a,authorAvatar:n,image:o,slug:i,datetime:u,idStr:s,tags:b,retweeted:g,isQuoteStatus:h,quoteBody:j,quoteAuthorName:m,quoteAuthorScreenName:x,quoteAuthorAvatar:P,quoteImage:v};return Object(d.c)(l.a,{sx:{borderRadius:"default",overflow:"hidden",wordWrap:"break-word",borderWidth:1,borderStyle:"solid",borderColor:"muted",px:[3,4],py:4}},Object(d.c)(q,w),Object(d.c)("footer",null,b&&b.length>0&&Object(d.c)(O.b.div,{sx:{display:"flex",flexWrap:"wrap",pb:3}},b&&b.map((function(e){return Object(d.c)(S,{to:Object(c.withPrefix)(Object(f.join)(E,"tags/"+p()(e))),key:"tag-"+e},e)}))),Object(d.c)("section",null,Object(d.c)(A,{slug:i,date:u}),Object(d.c)("span",{sx:{color:"textMuted"}}," · "),Object(d.c)(N,{href:"https://twitter.com/"+a+"/status/"+s}))))},C=function(e){var t,r,a=e.post;return Object(d.c)(l.a,{sx:{py:(null==a||null===(t=a.image)||void 0===t?void 0:t.childImageSharp)?2:0}},(null==a||null===(r=a.image)||void 0===r?void 0:r.childImageSharp)&&Object(d.c)(k.a,{fluid:a.image.childImageSharp.fluid,alt:a.imageAlt?a.imageAlt:a.excerpt,sx:{maxHeight:"lg"},imgStyle:{objectFit:"contain"}}))};function z(e){var t=e.src,r=e.width,a=e.height;return e.isVideo?Object(d.c)(l.a,{sx:{maxWidth:"full"}},Object(d.c)("video",{preload:"auto",controls:!0,autoPlay:!0,muted:!0,sx:{maxHeight:"lg",width:"full"}},Object(d.c)("source",{src:t,type:"video/mp4"}))):Object(d.c)(l.a,{sx:{display:"flex",justifyContent:"center",maxWidth:"full"}},Object(d.c)("video",{preload:"auto",loop:!0,autoPlay:!0,muted:!0,width:r,height:a,sx:{maxWidth:"full"}},Object(d.c)("source",{src:t})))}var V=function(){return Object(d.c)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",sx:{height:"24px",width:"24px"}},Object(d.c)("g",null,Object(d.c)("circle",{fill:"#FF4500",cx:"10",cy:"10",r:"10"}),Object(d.c)("path",{fill:"#FFF",d:"M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"})))},B=function(e){var t=e.subreddit,r=e.authorName,a=e.permalink,n=e.score;return t&&r?Object(d.c)(l.b,{sx:{alignItems:"center",fontSize:0}},Object(d.c)(l.d,{target:"_blank",rel:"noopener noreferrer",sx:{mr:2,mt:2},href:"https://www.reddit.com"+a},Object(d.c)(V,null)),Object(d.c)(l.b,{sx:{alignItems:"center"}},Object(d.c)(l.d,{target:"_blank",rel:"noopener noreferrer",sx:{color:"text"},href:"https://www.reddit.com/r/"+t},"r/"+t),Object(d.c)("span",{sx:{mx:1,color:"textMuted",fontSize:4,mt:-1,fontWidth:"bold"}},"·"),Object(d.c)(l.d,{target:"_blank",rel:"noopener noreferrer",sx:{color:"textMuted"},href:"https://www.reddit.com/u/"+r},""+r),Object(d.c)("span",{sx:{mx:1,color:"textMuted",fontSize:4,mt:-1,fontWidth:"bold"}},"·"),Object(d.c)(O.b.div,{as:"span",sx:{color:"textMuted"}},n+" points"))):null},U=function(e){var t=e.title,r=e.isSelf,a=e.permalink,n=e.url,c=e.postHint;return Object(d.c)(l.d,{sx:{color:"text"},href:r||"image"===c||"hosted:video"===c?"https://www.reddit.com"+a:n,target:"_blank",rel:"noopener noreferrer"},Object(d.c)(O.b.h3,{sx:{fontSize:2,fontWeight:"medium"}},t))},X=function(e){var t=e.datetime,r=e.slug;return Object(d.c)(l.d,{as:w.a,sx:{color:"textMuted"},to:r},t)},D=function(e){var t=e.excerpt;return t?Object(d.c)(O.b.p,{sx:{whiteSpace:"pre-line"}},t):null},H=function(e){var t=e.permalink;return Object(d.c)(l.d,{href:"https://www.reddit.com"+t,target:"_blank",rel:"noopener noreferrer"},"View on Reddit")},Q=function(e){var t=e.title,r=e.isVideo,a=e.excerpt,n=e.tags,o=e.image,i=e.imageAlt,u=e.basePath,s=e.video,b=e.videoHeight,g=e.videoWidth,h=e.permalink,j=e.authorName,m=e.subreddit,x=e.score;return Object(d.c)(l.a,{sx:{borderRadius:"default",overflow:"hidden",wordWrap:"break-word",borderWidth:1,borderStyle:"solid",borderColor:"muted",px:[3,4],pt:3,pb:4}},Object(d.c)(B,{subreddit:m,authorName:j,permalink:h,score:x}),t&&Object(d.c)(U,e),Object(d.c)(C,{post:{image:o,imageAlt:i,excerpt:a}}),s&&Object(d.c)(z,{isVideo:r,src:s,height:b,width:g}),Object(d.c)(D,e),Object(d.c)("footer",null,n&&n.length>0&&Object(d.c)(O.b.div,{sx:{display:"flex",flexWrap:"wrap",pb:3}},n&&n.map((function(e){return Object(d.c)(S,{to:Object(c.withPrefix)(Object(f.join)(u,"tags/"+p()(e))),key:"tag-"+e},e)}))),Object(d.c)("section",null,Object(d.c)(X,e),Object(d.c)("span",{sx:{color:"textMuted"}}," · "),Object(d.c)(H,e))))},J=function(e){return e.__typename===E.b?Object(u.c)(Y,e):e.__typename===E.a?Object(u.c)(Q,e):Object(u.c)(y,e)},Z=function(e){return Object(d.c)(O.b.div,{as:"article",sx:{paddingBottom:5}},Object(d.c)(J,e))},$=r("/gXk");function ee(e,t){var r=e.prefix;return t.disabled||t.isActive?Object(u.c)(l.e,{sx:{fontWeight:t.isActive?"bold":void 0,color:t.isActive?"text":"textMuted"}},t.value):Object(u.c)(l.d,{as:w.a,to:Object(c.withPrefix)(1===t.value?""+r:Object(f.join)(""+r,"page/"+t.value)),sx:{color:"textMuted"}},t.value)}function te(e){return Object(d.c)("nav",{sx:{left:[null,null,0],right:[null,null,0],position:[null,null,"absolute"],pb:4}},Object(d.c)(l.b,{sx:{justifyContent:"center",fontSize:2,"a:nth-of-type(1)":{ml:0},"a:nth-of-type(n+2)":{ml:3},"div:nth-of-type(n)":{ml:3}}},e.children))}function re(e,t){var r=e.prefix;return Object(u.c)(l.d,{disabled:t.disabled,as:w.a,to:Object(c.withPrefix)(1===t.value?""+r:Object(f.join)(r,"page/"+t.value)),sx:{color:"textMuted"}},"«")}function ae(e,t){var r=e.prefix;return Object(u.c)(l.d,{disabled:t.disabled,as:w.a,to:Object(c.withPrefix)(1===t.value?""+r:Object(f.join)(r,"page/"+t.value)),sx:{color:"textMuted"}},"»")}function ne(){return Object(u.c)(l.e,{sx:{color:"textMuted"}},"...")}function ce(e,t){var r=e.prefix;return Object(u.c)(l.d,{disabled:t.disabled,as:w.a,to:r,sx:{color:"textMuted"}},"««")}function oe(e,t){var r=e.prefix;return Object(u.c)(l.d,{disabled:t.disabled,as:w.a,to:Object(c.withPrefix)(1===t.value?""+r:Object(f.join)(r,"page/"+t.value)),sx:{color:"textMuted"}},"»»")}var ie=function(e){var t={PAGE:ee,ELLIPSIS:ne,FIRST_PAGE_LINK:ce,LAST_PAGE_LINK:oe,PREVIOUS_PAGE_LINK:re,NEXT_PAGE_LINK:ae};Object.keys(t).forEach((function(r){t[r]=t[r].bind(null,{prefix:e.prefix})}));var r=$.createUltimatePagination({itemTypeToComponent:t,WrapperComponent:te});return Object(u.c)(r,e)},le=function(e){var t=e.pageType,r=e.tag,a=e.basePath;return"tag"===t?Object(d.c)(O.b.h3,null,Object(d.c)(l.d,{sx:{color:"textMuted"},as:w.a,to:Object(c.withPrefix)(a)},"All posts"),Object(d.c)("span",null," / "),Object(d.c)("span",null,r)):Object(d.c)(O.b.h4,null,"Latest")};var ue=function(e){var t=e.children;return Object(d.c)(O.b.div,{as:"aside",sx:{height:"full"}},Object(d.c)(O.b.div,{sx:{top:4,position:"sticky"}},t))},se=r("7IG/"),be=function(e){var t=e.pageType,r=e.tag,a="Home";return"tag"===t&&(a=r),Object(u.c)(se.a,{title:a})},de=function(e){var t=e.location,r=e.data,n=e.pageContext,i=n.pageType,d=n.tag,g=n.currentPage,h=n.totalPages,f=n.basePath,O=r.allBlogPost.nodes,m=r.site.siteMetadata,P=m.social,E=m.title,w=r.tagsGroup.group;return Object(u.c)(o.a,{basePath:f,location:t,title:E},Object(u.c)(be,{pageType:i,tag:d}),Object(u.c)(le,{pageType:i,tag:d,basePath:f}),Object(u.c)(l.c,{gap:[null,null,3,4],columns:[1,1,"2fr 1fr"]},Object(u.c)("main",null,O.map((function(e,t){return Object(u.c)(Z,Object(a.a)({key:"item-box-"+t,basePath:f},e))})),Object(u.c)(ie,{currentPage:g,totalPages:h,hideFirstAndLastPageLinks:!0,prefix:Object(c.withPrefix)(j.a.join(f,"tag"===i?"tags/"+p()(d):""))})),Object(u.c)(ue,null,Object(u.c)(b.a,{basePath:f}),Object(u.c)(x,{basePath:f,group:w}),Object(u.c)(v,{links:P}))),Object(u.c)(s,null))},ge=(t.default=de,"2595037652")},hQUw:function(e,t,r){"use strict";t.createRange=function(e,t){for(var r=[],a=e;a<=t;a++)r.push(a);return r}},juJD:function(e,t,r){"use strict";t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},nEOd:function(e,t,r){"use strict";var a=r("hQUw"),n=r("po+G");t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var r=Number(e.currentPage);if(isNaN(r))throw new Error("getPaginationModel(): currentPage should be a number");if(r<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(r>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var c=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(c))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(c<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var o=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(o))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(o<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var i=Boolean(e.hidePreviousAndNextPageLinks),l=Boolean(e.hideFirstAndLastPageLinks),u=Boolean(e.hideEllipsis),s=u?0:1,b=[],d=n.createPageFunctionFactory(e);if(l||b.push(n.createFirstPageLink(e)),i||b.push(n.createPreviousPageLink(e)),1+2*s+2*o+2*c>=t){var g=a.createRange(1,t).map(d);b.push.apply(b,g)}else{var p=c,h=a.createRange(1,p).map(d),f=t+1-c,j=t,O=a.createRange(f,j).map(d),m=Math.min(Math.max(r-o,p+s+1),f-s-2*o-1),x=m+2*o,P=a.createRange(m,x).map(d);if(b.push.apply(b,h),!u){var v=m-1,E=(v===p+1?d:n.createFirstEllipsis)(v);b.push(E)}if(b.push.apply(b,P),!u){var w=x+1,S=(w===f-1?d:n.createSecondEllipsis)(w);b.push(S)}b.push.apply(b,O)}return i||b.push(n.createNextPageLink(e)),l||b.push(n.createLastPageLink(e)),b};var c=r("juJD");t.ITEM_TYPES=c.ITEM_TYPES,t.ITEM_KEYS=c.ITEM_KEYS},"po+G":function(e,t,r){"use strict";var a=r("juJD");t.createFirstEllipsis=function(e){return{type:a.ITEM_TYPES.ELLIPSIS,key:a.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:a.ITEM_TYPES.ELLIPSIS,key:a.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:a.ITEM_TYPES.FIRST_PAGE_LINK,key:a.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:a.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:a.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,r=e.totalPages;return{type:a.ITEM_TYPES.NEXT_PAGE_LINK,key:a.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(r,t+1),isActive:t===r}},t.createLastPageLink=function(e){var t=e.currentPage,r=e.totalPages;return{type:a.ITEM_TYPES.LAST_PAGE_LINK,key:a.ITEM_KEYS.LAST_PAGE_LINK,value:r,isActive:t===r}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:a.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-timeline-src-templates-posts-query-js-bcc5761946f89c02969b.js.map