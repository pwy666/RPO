webpackJsonp([10],{"1//v":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("lC5x"),a=i.n(n),e=i("J0Oq"),l=i.n(e),o=i("d7aC"),r={data:function(){return{show:!1,burnObj:{},navArr:["我的汽车","我的配件"],checkArr:[],listArr:[{title:"配件礼包1",text:"文字介绍"},{title:"配件礼包2",text:"文字介绍"},{title:"配件礼包3",text:"文字介绍"}],tableData:[{title:"A级赛车",text:"文字介绍"}],address:"",index:0,number:""}},filters:{gradeFn:function(t){var s="";switch(t){case"0":s="A";break;case"1":s="C";break;case"2":s="E";break;case"3":s="S"}return s}},methods:{toStart:function(t,s,i){var n=this;console.log(s);var a={from:this.address};t?this.$GLMethods.unminer(s).send(a,function(t,s){s&&n.$toast("success"),n.initList()}):this.$GLMethods.miner(s).send(a,function(t,s){s&&n.$toast("success")})},toShow:function(t){this.burnObj=t,this.show=!0},toBurning:function(){var t=this;if(this.number>this.burnObj.totalspeed)this.$toast("燃烧数量不得大于"+this.burnObj.totalspeed);else if(this.number%1==0){var s={from:this.address};this.$GLMethods.burning(this.burnObj.carid,this.number).send(s,function(s,i){t.show=!1,t.number="",i&&(t.initList(),t.$toast("success"))})}else this.$toast("只允许输入整数")},toBuy:function(t){this.$emit("dailogShow",t)},initList:function(){var t=this;this.$GLMethods.getUserCars(this.address).call({},function(s,i){console.log(i),i&&(t.tableData=i)})},getAccount:function(){var t=this;return l()(a.a.mark(function s(){return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,o.a.getAccount();case 2:t.address=s.sent,t.initList();case 4:case"end":return s.stop()}},s,t)}))()}},created:function(){this.getAccount()}},c={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"list"},[n("ul",{staticClass:" list-title allFlex"},t._l(t.navArr,function(s,i){return n("li",{key:"nav"+i,staticClass:"font-Ts",class:t.index==i?"active active"+i:"Wcolor",on:{click:function(s){t.index=i}}},[t._v("\n      "+t._s(s)+"\n    ")])}),0),t._v(" "),0==t.index?n("div",t._l(t.tableData,function(s,i){return n("ul",{key:"list"+i,staticClass:" allFlex border column",class:s.sellstatus?"list-bg-ul":"list-bg"},[n("li",{staticClass:"allFlex"},[n("div",{staticClass:"list-left"},[n("img",{attrs:{src:t.$imgArr[s.model_car],alt:""}})]),t._v(" "),n("div",{staticClass:"allFlex list-right f1 column"},[n("div",[n("span",{staticClass:"font-Ty Wcolor"},[t._v(t._s(t._f("gradeFn")(s.grade))+"级赛车")])]),t._v(" "),n("div",{staticClass:"Gcolor font-Six "},[t._v("轮胎数："+t._s(s.tyre))]),t._v(" "),n("div",{staticClass:"Gcolor font-Six "},[t._v("尾翼数："+t._s(s.tail))]),t._v(" "),n("div",{staticClass:"Gcolor font-Six "},[t._v("氮气数："+t._s(s.nitrogen))]),t._v(" "),n("div",{staticClass:"Gcolor font-Six "},[t._v("引擎数："+t._s(s.engine))]),t._v(" "),n("div",{staticClass:"Gcolor font-Six "},[t._v("\n            基础速度："+t._s(s.totalspeed)+"公里/小时\n          ")]),t._v(" "),n("div",{staticClass:"Gcolor font-Six "},[t._v("\n            燃烧速度："+t._s(s.burning_spped)+"公里/小时\n          ")])])]),t._v(" "),s.sellstatus?t._e():n("li",{staticClass:"Wcolor buy-btn  center allFlex"},[n("span",{staticClass:"undo-btn",on:{click:function(i){return t.toStart(s.miner,s.carid,s.sellstatus)}}},[t._v(t._s(s.miner?"结束":"挖矿"))]),t._v(" "),n("span",{staticClass:"sell-btn",on:{click:function(i){return t.toShow(s)}}},[t._v("燃烧")])]),t._v(" "),s.miner?n("li",{staticClass:"list-text font-Eight Ycolor"},[t._v("挖矿中")]):t._e(),t._v(" "),s.sellstatus?n("li",{staticClass:"list-text font-Eight Ycolor"},[t._v("\n        出售中\n      ")]):t._e()])}),0):n("div",t._l(t.tableData,function(s,i){return n("div",{key:"parts"+i,staticClass:"parts-bg allFlex border "},[n("div",{staticClass:"list-left"},[n("img",{attrs:{src:t.$imgArr[s.model_car],alt:""}})]),t._v(" "),n("div",{staticClass:"allFlex list-right f1 column"},[n("p",{staticClass:"font-Ts Wcolor"},[t._v(t._s(t._f("gradeFn")(s.grade))+"级配件")]),t._v(" "),n("p",{staticClass:"font-Ty Gcolor "},[t._v(t._s(s.totalspeed)+"公里/小时")])])])}),0),t._v(" "),t.show?n("div",{staticClass:"box ",on:{click:function(s){s.stopPropagation(),t.show=!t.show}}},[n("ul",{staticClass:"dialog positionAll allFlex column",on:{click:function(t){t.stopPropagation()}}},[n("li",{staticClass:"center font-Ty Wcolor"},[t._v("加速燃烧")]),t._v(" "),n("li",{staticClass:"border dialog-ipt"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"Wcolor ",attrs:{type:"number",placeholder:"输入数量"},domProps:{value:t.number},on:{input:function(s){s.target.composing||(t.number=s.target.value)}}})]),t._v(" "),n("li",{staticClass:"dialog-btn Wcolor font-Ty center",on:{click:t.toBurning}},[t._v("\n        确定\n      ")]),t._v(" "),n("li",{staticClass:"close-btn",on:{click:function(s){s.stopPropagation(),t.show=!t.show}}},[n("img",{staticClass:"close",attrs:{src:i("q6r7"),alt:""}})])])]):t._e()])},staticRenderFns:[]};var u=i("C7Lr")(r,c,!1,function(t){i("h9za")},"data-v-42bd22ba",null);s.default=u.exports},h9za:function(t,s){}});