(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{205:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return f}));var r=n(7),c=(n(45),new(n(208).a)({url:"https://myblog-4.ghost.io",key:"0ee43d9c46de91ec1ee921b43b",version:"v3"}));function o(){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.posts.browse({limit:"all",include:"tags,authors"}).catch((function(t){console.log(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.posts.read({slug:e}).catch((function(t){console.log(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},210:function(t,e,n){},214:function(t,e,n){"use strict";n(210)},216:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(45),n(205)),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,Object(c.b)(n.slug);case 3:return r=e.sent,e.abrupt("return",{post:r});case 6:case"end":return e.stop()}}),e)})))()}},l=(n(214),n(27)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v(t._s(t.post.title))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.post.html)}})])}),[],!1,null,"3184dd06",null);e.default=component.exports}}]);