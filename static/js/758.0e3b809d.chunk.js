"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[758],{758:function(e,r,t){t.r(r);var n=t(885),a=t(791),c=t(739),s=t(731),i=t(335),u=t(184);r.default=function(){var e,r,t=(0,c.UO)().movieId,o=(0,a.useState)(null),p=(0,n.Z)(o,2),l=p[0],h=p[1],d=null!==(e=null===(r=(0,c.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";if((0,a.useEffect)((function(){(0,i.Y5)(t).then(h)}),[t]),!l)return null;var f=l.poster_path,v=l.title,x=l.popularity,m=l.overview,g=l.genres;return(0,u.jsxs)("main",{children:[(0,u.jsx)(s.rU,{to:d,children:"Go back"}),(0,u.jsx)("h1",{children:v}),(0,u.jsxs)("p",{children:["User Score: ",Math.round("".concat(x)),"%"]}),(0,u.jsx)("h2",{children:"Overview"}),(0,u.jsx)("p",{children:m}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("ul",{children:g.map((function(e){var r=e.name,t=e.id;return g?(0,u.jsx)("li",{children:r},t):"no genre"}))}),(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:f?"https://image.tmdb.org/t/p/w500".concat(f):"https://via.placeholder.com/250x200",alt:""})}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(s.rU,{to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(c.j3,{})})]})}},335:function(e,r,t){t.d(r,{Ai:function(){return v},Hx:function(){return d},Ny:function(){return i},Y5:function(){return o},uV:function(){return l}});var n=t(861),a=t(757),c=t.n(a),s=t(44);function i(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=35e417e69f137291206951efd172c8b1");case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=35e417e69f137291206951efd172c8b1"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=35e417e69f137291206951efd172c8b1"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=35e417e69f137291206951efd172c8b1&language=en-US&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=35e417e69f137291206951efd172c8b1&query=".concat(r,"&language=en-US&page=1&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=758.0e3b809d.chunk.js.map