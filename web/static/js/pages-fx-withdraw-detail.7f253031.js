(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fx-withdraw-detail"],{2398:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,Items:""}},onLoad:function(){this.getItems()},methods:{getItems:function(){var t=this;this.fq_get("fanqie/fx/withdraw_detail","",(function(s){t.Items=s.data}))}}};s.default=a},5823:function(t,s,e){"use strict";e.r(s);var a=e("2398"),n=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(s,t,(function(){return a[t]}))}(i);s["default"]=n.a},"8e84":function(t,s,e){"use strict";var a,n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-uni-view",[e("custom",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("明细")])],2),t.Items?[e("v-uni-view",{staticClass:"cu-list menu margin-top-sm"},t._l(t.Items,(function(s,a){return e("v-uni-view",{key:a,staticClass:"cu-item",staticStyle:{padding:"10rpx 30rpx"}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(s.src))]),e("v-uni-view",{staticClass:"text-gray text-sm"},[t._v(t._s(s.add_time)),e("v-uni-text",{staticClass:"cu-tag round sm",class:s.status.color},[t._v(t._s(s.status.say))]),s.sxf?e("v-uni-text",{staticClass:"cu-tag round sm"},[t._v("手续费："+t._s(s.sxf))]):t._e()],1)],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-view",{staticClass:"cu-tag round bg-grey sm"},[t._v(t._s(s.ands)+" "+t._s(s.money))])],1)],1)})),1)]:t._e(),t.Items?t._e():[e("abnor",{attrs:{upx:100}})]],2)},i=[];e.d(s,"b",(function(){return n})),e.d(s,"c",(function(){return i})),e.d(s,"a",(function(){return a}))},"9cfb":function(t,s,e){"use strict";e.r(s);var a=e("8e84"),n=e("5823");for(var i in n)"default"!==i&&function(t){e.d(s,t,(function(){return n[t]}))}(i);var u,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"79ba7559",null,!1,a["a"],u);s["default"]=c.exports}}]);