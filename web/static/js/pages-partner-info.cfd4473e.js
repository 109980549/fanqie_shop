(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-partner-info"],{"4e0f":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,"uni-page-body[data-v-bdcdd416]{background-color:#fff}body.?%PAGE?%[data-v-bdcdd416]{background-color:#fff}",""]),t.exports=n},"736b":function(t,n,a){"use strict";a.r(n);var e=a("9e16"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},"88ac":function(t,n,a){"use strict";var e,i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("custom",{staticClass:"cu-bar fixed",attrs:{bgColor:"bg-white",backUrl:t.backUrl,isBack:!0}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v("合伙人申请")])],2),a("v-uni-view",{staticClass:"bg-white padding",style:[{"margin-top":t.CustomBar+"px"}]},[a("v-uni-rich-text",{attrs:{nodes:t.news.content}})],1),a("v-uni-view",{staticClass:"cu-tabbar-height"}),a("v-uni-view",{staticClass:"cu-bar bg-white tabbar foot"},[a("v-uni-view",{staticClass:"bg-orange submit",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onSub()}}},[t._v("同意以上条款，去申请")])],1)],1)},o=[];a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}))},9935:function(t,n,a){"use strict";a.r(n);var e=a("88ac"),i=a("736b");for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("bc69");var r,u=a("f0c5"),c=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"bdcdd416",null,!1,e["a"],r);n["default"]=c.exports},"9e16":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{id:0,news:"",backUrl:"/pages/user/index",CustomBar:this.CustomBar}},onLoad:function(t){this.id=t.id,this.get_Item()},methods:{get_Item:function(){var t=this;this.fq_get("fanqie/news/detail",{id:this.id},(function(n){t.news=n.data}))},onSub:function(){uni.navigateTo({url:"/pages/partner/apply"})}}};n.default=e},bc69:function(t,n,a){"use strict";var e=a("e57a"),i=a.n(e);i.a},e57a:function(t,n,a){var e=a("4e0f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("77c25b31",e,!0,{sourceMap:!1,shadowMode:!1})}}]);