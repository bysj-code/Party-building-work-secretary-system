(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xuexidongtai/add-or-update"],{"43cd":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,i,u){try{var o=e[i](u),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function o(e){i(u,r,a,o,c,"next",e)}function c(e){i(u,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("4f3d"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{cross:"",ruleForm:{biaoti:"",tupian:"",neirong:"",shipin:"",xiangqing:""},user:{},ro:{biaoti:!1,tupian:!1,neirong:!1,shipin:!1,xiangqing:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var n=this;return u(r.default.mark((function a(){var i,u,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,n.$api.session(i);case 3:if(u=a.sent,n.user=u.data,n.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(n.ruleForm.refid=t.refid,n.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return n.ruleForm.id=t.id,a.next=11,n.$api.info("xuexidongtai",n.ruleForm.id);case 11:u=a.sent,n.ruleForm=u.data;case 13:if(n.cross=t.cross,!t.cross){a.next=41;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 17:if((a.t1=a.t0()).done){a.next=41;break}if(c=a.t1.value,"biaoti"!=c){a.next=23;break}return n.ruleForm.biaoti=o[c],n.ro.biaoti=!0,a.abrupt("continue",17);case 23:if("tupian"!=c){a.next=27;break}return n.ruleForm.tupian=o[c],n.ro.tupian=!0,a.abrupt("continue",17);case 27:if("neirong"!=c){a.next=31;break}return n.ruleForm.neirong=o[c],n.ro.neirong=!0,a.abrupt("continue",17);case 31:if("shipin"!=c){a.next=35;break}return n.ruleForm.shipin=o[c],n.ro.shipin=!0,a.abrupt("continue",17);case 35:if("xiangqing"!=c){a.next=39;break}return n.ruleForm.xiangqing=o[c],n.ro.xiangqing=!0,a.abrupt("continue",17);case 39:a.next=17;break;case 41:n.styleChange();case 42:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},shipinTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.shipin="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return u(r.default.mark((function n(){var a,i,u,o,c,s,f,l,d,p;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.cross){n.next=16;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){n.next=16;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){n.next=12;break}for(f in s)f==o&&(s[f]=c);return l=e.getStorageSync("crossTable"),n.next=10,t.$api.update("".concat(l),s);case 10:n.next=16;break;case 12:a=Number(e.getStorageSync("userid")),i=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!a){n.next=38;break}return t.ruleForm.crossuserid=a,t.ruleForm.crossrefid=i,d={page:1,limit:10,crossuserid:a,crossrefid:i},n.next=22,t.$api.list("xuexidongtai",d);case 22:if(p=n.sent,!(p.data.total>=u)){n.next=28;break}return t.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 28:if(!t.ruleForm.id){n.next=33;break}return n.next=31,t.$api.update("xuexidongtai",t.ruleForm);case 31:n.next=35;break;case 33:return n.next=35,t.$api.add("xuexidongtai",t.ruleForm);case 35:t.$utils.msgBack("提交成功");case 36:n.next=46;break;case 38:if(!t.ruleForm.id){n.next=43;break}return n.next=41,t.$api.update("xuexidongtai",t.ruleForm);case 41:n.next=45;break;case 43:return n.next=45,t.$api.add("xuexidongtai",t.ruleForm);case 45:t.$utils.msgBack("提交成功");case 46:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},"54c6":function(e,t,n){"use strict";n.r(t);var r=n("43cd"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},8825:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},b073:function(e,t,n){"use strict";n.r(t);var r=n("8825"),a=n("54c6");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("f9bc");var u,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"6ad4493f",null,!1,r["a"],u);t["default"]=c.exports},c7d0:function(e,t,n){"use strict";(function(e){n("3409");r(n("66fd"));var t=r(n("b073"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},d502:function(e,t,n){},f9bc:function(e,t,n){"use strict";var r=n("d502"),a=n.n(r);a.a}},[["c7d0","common/runtime","common/vendor"]]]);