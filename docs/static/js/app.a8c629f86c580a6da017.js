webpackJsonp([0],[function(t,e,n){"use strict";function o(t,e,n,o,r,s){if(!t)throw new Error("target element should be assigned.");var i=document.createElement("div");try{if(i.appendChild(t.cloneNode(!0)),1!==t.nodeType)throw new Error("target element is not HTMLElement.")}catch(t){throw new Error("target element is not HTMLElement.")}if(e&&"string"!=typeof e)throw new Error("toast content is not string.");if(n&&-1===["success","warning","info","error"].indexOf(n))throw new Error('toast type should be one of "success, warning, info, error".');if(o=o||4e3,isNaN(Number(o)))throw new Error("toast duration should be number.");if(r&&isNaN(Number(r)))throw new Error("toast top should be number.");if(s&&isNaN(Number(s)))throw new Error("toast left should be number.");var c=document.createElement("div"),a=t.getBoundingClientRect(),u=document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop;c.style.top=(Number(r)||a.top+a.height+l)+"px",c.style.left=(Number(s)||a.left+a.width+u)+"px",c.innerHTML=e,c.className="vue-toast "+n,document.body.appendChild(c),setTimeout(function(){c.className+=" hide",setTimeout(function(){c.parentNode.removeChild(c)},450)},Number(o))}var r=n(5);n.n(r);e.a={install:function(t,e){t.prototype.$toast||(t.prototype.$toast=o)}}},function(t,e,n){function o(t){n(6)}var r=n(7)(n(4),n(8),o,null,null);t.exports=r.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(1),s=n.n(r),i=n(0);o.a.config.productionTip=!1,o.a.use(i.a),new o.a({el:"#app",template:"<App/>",components:{App:s.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",methods:{defaultt:function(){this.$toast(this.$refs.default,"Default","")},info:function(){this.$toast(this.$refs.info,"Information!","info")},success:function(){this.$toast(this.$refs.success,"Wonderful!","success")},warning:function(){this.$toast(this.$refs.warning,"Attention!","warning")},error:function(){this.$toast(this.$refs.error,"Oops!","error")}}}},function(t,e){},function(t,e){},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{ref:"default",staticClass:"default btn",on:{click:t.defaultt}},[t._v("default")]),t._v(" "),n("div",{ref:"info",staticClass:"info btn",on:{click:t.info}},[t._v("info")]),t._v(" "),n("div",{ref:"success",staticClass:"success btn",on:{click:t.success}},[t._v("success")]),t._v(" "),n("div",{ref:"warning",staticClass:"warning btn",on:{click:t.warning}},[t._v("warning")]),t._v(" "),n("div",{ref:"error",staticClass:"error btn",on:{click:t.error}},[t._v("error")])])},staticRenderFns:[]}}],[3]);
//# sourceMappingURL=app.a8c629f86c580a6da017.js.map