(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fx-friend"],{d845:function(t,e,s){"use strict";s.r(e);var a=s("e603"),n=s("f55d9");for(var i in n)"default"!==i&&function(t){s.d(e,t,(function(){return n[t]}))}(i);var u,c=s("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"15bd4041",null,!1,a["a"],u);e["default"]=r.exports},e603:function(t,e,s){"use strict";var a,n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",[s("custom",{attrs:{bgColor:"bg-white",isBack:!0}},[s("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),s("template",{attrs:{slot:"content"},slot:"content"},[t._v("列表")])],2),s("v-uni-scroll-view",{staticClass:"bg-white nav fixed ",style:[{top:t.CustomBars+"px"}],attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},[s("v-uni-view",{staticClass:"flex text-center"},t._l(t.nav,(function(e,a){return s("v-uni-view",{key:a,staticClass:"cu-item flex-sub",class:a==t.TabCur?"text-orange cur":"",attrs:{"data-id":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(e))])})),1)],1),s("v-uni-view",{staticClass:"nav"},[s("v-uni-view",{staticClass:"cu-item"})],1),t.Items?[s("v-uni-view",{staticClass:"cu-list menu-avatar"},t._l(t.Items,(function(e,a){return s("v-uni-view",{key:a,staticClass:"cu-item"},[s("v-uni-view",{staticClass:"cu-avatar round lg",style:"background-image:url("+e.avatar+");"}),s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.nickname))]),s("v-uni-view",{staticClass:"text-gray text-sm"},[t._v(t._s(e.province)+" "+t._s(1==e.sex?"男":"女")+" "+t._s(e.add_time))])],1),s("v-uni-view",{staticClass:"action",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.onMsg(e.id)}}},[s("v-uni-view",{staticClass:"text-grey text-xxl"},[s("v-uni-text",{staticClass:"cuIcon-message"})],1)],1)],1)})),1)]:t._e(),t.Items?t._e():[s("abnor",{attrs:{upx:100}})]],2)},i=[];s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return i})),s.d(e,"a",(function(){return a}))},f55d9:function(t,e,s){"use strict";s.r(e);var a=s("ff98"),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,(function(){return a[t]}))}(i);e["default"]=n.a},ff98:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{StatusBar:this.StatusBar,CustomBars:0,TabCur:0,scrollLeft:0,nav:["我的一级","我的二级"],Items:""}},onLoad:function(){this.CustomBars=this.CustomBar;var t=uni.getStorageSync("fxconfig");this.nav[0]=t["p_one_name"],this.nav[1]=t["p_two_name"],this.getItems()},methods:{onMsg:function(t){uni.navigateTo({url:"/pages/fx/sendmsg?uid="+t})},tabSelect:function(e){this.TabCur=e.currentTarget.dataset.id,this.scrollLeft=60*(this.TabCur-1),t("log",this.scrollLeft," at pages/fx/friend.vue:70"),this.getItems()},getItems:function(){var t=this;this.fq_get("fanqie/fx/friend",{id:this.TabCur},(function(e){t.Items=e.data}))}}};e.default=s}).call(this,s("0de9")["log"])}}]);