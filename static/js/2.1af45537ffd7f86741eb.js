webpackJsonp([2],{"+S5a":function(t,i,a){t.exports=a.p+"static/img/team.0264e48.png"},JVLr:function(t,i,a){t.exports=a.p+"static/img/staking.3e4ff79.png"},Nm3v:function(t,i,a){t.exports=a.p+"static/img/bidding.7179e5a.png"},a6aL:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("lC5x"),n=a.n(e),l=a("J0Oq"),s=a.n(l),c=a("d7aC"),r=a("gyMJ"),o={data:function(){return{arr:[{title:"我的汽车",path:"/myCar",img:a("Nm3v")},{title:"收益",path:"/myBalance",img:a("ki8x")},{title:"团队",path:"/myTeam",img:a("+S5a"),btn:"详情"},{title:"分享",path:"/myShare",img:a("yMUZ"),btn:"详情"},{title:"Staking",path:"/staking",img:a("JVLr"),btn:"详情"}],ethBalance:"",rpoBalance:"",address:""}},filters:{balance:function(t){t.tostring(),t.length}},methods:{filterPrice:function(t,i){var a=c.a.numberUtil(t,i);return Number(a).toFixed(6)},getBalance:function(){var t=this;this.$GLMethods.balanceOf(this.address).call({},function(i,a){i&&t.$toast.error("请求失败"),a&&(t.rpoBalance=a)})},getAccount:function(){var t=this;return s()(n.a.mark(function i(){return n.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,c.a.getAccount();case 2:t.address=i.sent,console.log(r.b),r.b.eth.getBalance(t.address).then(function(i){i&&(t.ethBalance=i)}),t.getBalance();case 6:case"end":return i.stop()}},i,t)}))()},filterBalance:function(t,i){var a="",e=(t+="").length-i;if(e>0)for(var n=0;n<t.length;n++)n===e&&(a+="."),n>e&&"0"==t[n]||(a+=t[n]);else for(var l=0;l<e;l++)"0";return a}},created:function(){console.log(this.filterBalance(12345678,10)),this.getAccount()}},g={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"account"},[e("div",{staticClass:"balance allFlex column"},[e("p",{staticClass:"Wcolor font-Eight center"},[t._v("当前账户余额")]),t._v(" "),e("ul",{staticClass:"Wcolor allFlex"},[e("li",{staticClass:"allFlex column"},[e("span",{staticClass:"font-Eight"},[t._v("ETH")]),t._v(" "),e("span",{staticClass:"font-Eight"},[t._v(t._s(t.filterPrice(t.ethBalance,18)))])]),t._v(" "),e("li",{staticClass:"allFlex column",staticStyle:{textAlign:"right"}},[e("span",{staticClass:"font-Eight"},[t._v("RPO")]),t._v(" "),e("span",{staticClass:"font-Eight"},[t._v(t._s(t.filterPrice(t.rpoBalance,6)))])])])]),t._v(" "),e("ul",{staticClass:"padding"},t._l(t.arr,function(i,n){return e("router-link",{key:"list"+n,staticClass:"border allFlex list-bg",attrs:{to:i.path}},[e("img",{staticClass:"list-pic",attrs:{src:i.img,alt:""}}),t._v(" "),e("span",{staticClass:"Wcolor font-Ts f1 list-title"},[t._v(t._s(i.title))]),t._v(" "),e("img",{staticClass:"right-pic",attrs:{src:a("dKys"),alt:""}})])}),1)])},staticRenderFns:[]};var u=a("C7Lr")(o,g,!1,function(t){a("uzc8")},"data-v-2446067c",null);i.default=u.exports},dKys:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAfCAYAAADqUJ2JAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVBODVGQjdEMkQ5MzExRUI4RkQ4ODQwRUU0NjJFOURGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVBODVGQjdFMkQ5MzExRUI4RkQ4ODQwRUU0NjJFOURGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUE4NUZCN0IyRDkzMTFFQjhGRDg4NDBFRTQ2MkU5REYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUE4NUZCN0MyRDkzMTFFQjhGRDg4NDBFRTQ2MkU5REYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5+2N7cAAABlklEQVR42qyUTSuEURTH78wgLGZWPgMLEoWyYhZeismClBEWSslXkPAVJAsWiBJFqCnyshOKBQs+w2yMxRDG4390piad+9xzy6lfz3TP7dc8z3mJxBee6owxG6ARnIFxkDXKyM3W/j6jLGkBFaAXnIMa4xkkavpzVs+yhK/oQTgn2YmPjEST4FXItfrISHQHukJkB6BaI6K4Bj3gTbjTAY5dsmjJ7yvQZ5F1gn2urFNkuFokexfu0uvv2WRR4Yxkw+BTyPWzrEwjojgEgyGydRDTiIqyNPgWciM8ETGNiGIXjIXIVhKLzxGNiGILTFhy1MzzWhHFJpi25GZ8REbb2a4YBcuW3JJWlOZyS7EG5jSiIS6zdG8bTGFDBi5Riitmk1BbFFzfKMWjUC7kjnivF1wfOwl2QiQ0Ol+uqiV591QKklOWfLjK386SKuHeBRiwSUpFbSBjkVzyjsq7GrKZl3xcyN/wP8lrOns1REJbMacdkQbh/BF0ayVF0b0goeq9+A4tdegtVyTDkqzv9EeCIPiXNfIjwAABQlY31LMR3QAAAABJRU5ErkJggg=="},ki8x:function(t,i,a){t.exports=a.p+"static/img/income.79846c2.png"},uzc8:function(t,i){},yMUZ:function(t,i,a){t.exports=a.p+"static/img/share.c88fde1.png"}});