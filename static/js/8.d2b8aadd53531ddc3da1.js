webpackJsonp([8],{JDuy:function(t,s){},nK7t:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n("lC5x"),e=n.n(i),o=n("J0Oq"),a=n.n(o),u=n("d7aC"),r={data:function(){return{infoObj:{},number:"",surplus:"",address:"",parent:"0x3fb26054882A16AA990fecdC608090b853182d89"}},computed:{index:function(){return this.$route.query.index}},methods:{init:function(){var t=this;u.a.getGiftCountFn().then(function(s){console.log(s),t.surplus=s[t.index],console.log(t.surplus)})},submit:function(){0==this.index?this.buyA():this.buyB()},buyA:function(){var t=this,s={from:this.address};this.index;this.surplus<200?(s.value=1e14,this.$GLMethods.buyGiftA(this.parent).send(s,function(s,n){t.$toast(n)})):this.$GLMethods.buyGiftA1(this.parent).send(s,function(s,n){t.$toast(n)})},buyB:function(){var t=this,s={from:this.address};this.surplus<200?(console.log(1212312),s.value=1e14,this.$GLMethods.buyGiftB(this.parent).send(s,function(s,n){t.$toast(n)})):this.$GLMethods.buyGiftB1(this.parent).send(s,function(s,n){t.$toast(n)})},getAccount:function(){var t=this;return a()(e.a.mark(function s(){return e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,u.a.getAccount();case 2:t.address=s.sent;case 3:case"end":return s.stop()}},s,t)}))()}},created:function(){this.getAccount(),this.infoObj=this.$route.query.info,42==this.$route.query.parent.length&&(this.parent=this.$route.query.parent),this.init()}},c={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"details allFlex column"},[n("div",{staticClass:"details-bg"}),t._v(" "),n("div",{staticClass:"main f1"},[n("ul",{staticClass:"main-dialog allFlex column"},[n("li",{staticClass:"allFlex title"},[n("span",{staticClass:"font-Th Wcolor"},[t._v(t._s(t.infoObj.title))]),t._v(" "),n("span",{staticClass:"font-Two Ycolor title-btn"},[t._v("限量150份")])]),t._v(" "),n("li",{staticClass:"font-Tt Ycolor"},[t._v("\n        "+t._s(t.infoObj.number)+t._s(t.infoObj.symbol)+"/份\n      ")]),t._v(" "),n("li",{staticClass:"Gcolor font-Eight"},[t._v(t._s(t.infoObj.text))]),t._v(" "),n("li",{staticClass:"font-Ty Wcolor main-li-btn center",on:{click:t.submit}},[t._v("\n        立即购买\n      ")])])])])},staticRenderFns:[]};var l=n("C7Lr")(r,c,!1,function(t){n("JDuy")},"data-v-68bc7f6d",null);s.default=l.exports}});