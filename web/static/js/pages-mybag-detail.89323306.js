(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mybag-detail"],{2278:function(t,s,e){"use strict";var i,a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-uni-view",[e("custom",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("明细")])],2),e("v-uni-scroll-view",{staticClass:"bg-white nav solid-bottom",attrs:{"scroll-x":!0,"scroll-with-animation":!0}},[e("v-uni-view",{staticClass:"flex text-center"},[e("v-uni-view",{staticClass:"cu-item flex-sub",class:1==t.TabCur?"text-red cur":"",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.tabSelect(1)}}},[t._v("入账记录")]),e("v-uni-view",{staticClass:"cu-item flex-sub",class:2==t.TabCur?"text-red cur":"",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.tabSelect(2)}}},[t._v("转账明细")]),e("v-uni-view",{staticClass:"cu-item flex-sub",class:3==t.TabCur?"text-red cur":"",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.tabSelect(3)}}},[t._v("支出记录")])],1)],1),t.lists?[e("v-uni-view",{staticClass:"cu-list menu margin-top-sm"},t._l(t.lists,(function(s,i){return e("v-uni-view",{key:i,staticClass:"cu-item",staticStyle:{padding:"10rpx 30rpx"}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(s.src))]),e("v-uni-view",{staticClass:"text-gray text-sm"},[e("v-uni-text",[t._v(t._s(s.add_time))]),e("v-uni-text",{staticClass:"cu-tag round sm",class:s.status.color},[t._v(t._s(s.status.say))])],1)],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-view",{staticClass:"cu-tag round bg-grey sm"},[t._v(t._s(s.ands)+" "+t._s(s.money))])],1)],1)})),1)]:t._e(),t.lists?t._e():[e("abnor",{attrs:{upx:100}})]],2)},n=[];e.d(s,"b",(function(){return a})),e.d(s,"c",(function(){return n})),e.d(s,"a",(function(){return i}))},"46b1":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i={data:function(){return{lists:"",TabCur:1}},onLoad:function(t){this.TabCur=t.id,this.get_lists()},methods:{tabSelect:function(t){this.TabCur=t,this.get_lists()},get_lists:function(){var t=this;this.fq_get("fanqie/mybag/detail",{id:this.TabCur},(function(s){t.lists=s.data}))}}};s.default=i},"6bc5":function(t,s,e){"use strict";e.r(s);var i=e("46b1"),a=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(s,t,(function(){return i[t]}))}(n);s["default"]=a.a},"77a8":function(t,s,e){"use strict";e.r(s);var i=e("2278"),a=e("6bc5");for(var n in a)"default"!==n&&function(t){e.d(s,t,(function(){return a[t]}))}(n);var c,u=e("f0c5"),l=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"839c8976",null,!1,i["a"],c);s["default"]=l.exports}}]);