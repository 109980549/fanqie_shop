(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-detail"],{4987:function(t,e,n){"use strict";n.r(e);var a=n("f8fc"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},5024:function(t,e,n){var a=n("637e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("015887c6",a,!0,{sourceMap:!1,shadowMode:!1})},"637e":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-960215ea]{background-color:#fff}body.?%PAGE?%[data-v-960215ea]{background-color:#fff}",""]),t.exports=e},7115:function(t,e,n){"use strict";n.r(e);var a=n("8b4a"),i=n("4987");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("bf14");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"960215ea",null,!1,a["a"],s);e["default"]=u.exports},"8b4a":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("custom",{staticClass:"fixed",attrs:{bgColor:"bg-white",isBack:!0}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v("资讯详情")])],2),n("v-uni-view",{staticClass:"padding dashed-bottom text-center text-bold"},[t._v(t._s(t.news.title))]),n("v-uni-view",{staticClass:"bg-white padding"},[n("v-uni-rich-text",{attrs:{nodes:t.news.content}})],1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},bf14:function(t,e,n){"use strict";var a=n("5024"),i=n.n(a);i.a},f8fc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{id:0,news:"",backUrl:"/pages/user/index",CustomBar:this.CustomBar}},onLoad:function(t){this.id=t.id,this.get_Item()},methods:{get_Item:function(){var t=this;this.fq_get("fanqie/news/detail",{id:this.id},(function(e){t.news=e.data}))}}};e.default=a}}]);