(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-info"],{"33e7":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{id:0,news:"",backUrl:"/pages/user/index",CustomBar:this.CustomBar,pid:0}},onLoad:function(t){this.id=t.id,this.get_Item(),t.pid&&(this.pid=t.pid)},methods:{get_Item:function(){var t=this;this.fq_get("fanqie/news/detail",{id:this.id},(function(n){t.news=n.data}))},onSub:function(){uni.navigateTo({url:"/pages/shop/apply?pid="+this.pid})}}};n.default=i},"5d03":function(t,n,e){"use strict";e.r(n);var i=e("9255"),a=e("bc30");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("7ad9");var s,u=e("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6935f3e5",null,!1,i["a"],s);n["default"]=r.exports},"7ad9":function(t,n,e){"use strict";var i=e("87ec"),a=e.n(i);a.a},"87ec":function(t,n,e){var i=e("ef9f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("6e0f641e",i,!0,{sourceMap:!1,shadowMode:!1})},9255:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("custom",{staticClass:"cu-bar fixed",attrs:{bgColor:"bg-white",backUrl:t.backUrl,isBack:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("入住介绍")])],2),e("v-uni-view",{staticClass:"bg-white padding",style:[{"margin-top":t.CustomBar+"px"}]},[e("v-uni-rich-text",{attrs:{nodes:t.news.content}})],1),e("v-uni-view",{staticClass:"cu-tabbar-height"}),e("v-uni-view",{staticClass:"cu-bar bg-white tabbar foot"},[e("v-uni-view",{staticClass:"bg-orange submit",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onSub()}}},[t._v("同意以上条款，去申请")])],1)],1)},o=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},bc30:function(t,n,e){"use strict";e.r(n);var i=e("33e7"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},ef9f:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"uni-page-body[data-v-6935f3e5]{background-color:#fff}body.?%PAGE?%[data-v-6935f3e5]{background-color:#fff}",""]),t.exports=n}}]);