(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dangjianxuexi/add-or-update"],{1642:function(e,n,i){"use strict";i.r(n);var t=i("b8c9"),r=i("49c6");for(var a in r)"default"!==a&&function(e){i.d(n,e,(function(){return r[e]}))}(a);i("1c99");var u,o=i("f0c5"),c=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"a10113a6",null,!1,t["a"],u);n["default"]=c.exports},"1c99":function(e,n,i){"use strict";var t=i("e23e"),r=i.n(t);r.a},"49c6":function(e,n,i){"use strict";i.r(n);var t=i("74d0"),r=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(n,e,(function(){return t[e]}))}(a);n["default"]=r.a},"6b01":function(e,n,i){"use strict";(function(e){i("3409");t(i("66fd"));var n=t(i("1642"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},"74d0":function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,i,t,r,a,u){try{var o=e[a](u),c=o.value}catch(s){return void i(s)}o.done?n(c):Promise.resolve(c).then(t,r)}function u(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var u=e.apply(n,i);function o(e){a(u,t,r,o,c,"next",e)}function c(e){a(u,t,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("4f3d"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{cross:"",ruleForm:{ziliaobianhao:this.getUUID(),ziliaomingcheng:"",zhishifenlei:"",ziliaojianjie:"",tupian:"",xiangguanshipin:"",faburiqi:""},zhishifenleiOptions:[],zhishifenleiIndex:0,user:{},ro:{ziliaobianhao:!1,ziliaomingcheng:!1,zhishifenlei:!1,ziliaojianjie:!1,tupian:!1,xiangguanshipin:!1,faburiqi:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var i=this;return u(t.default.mark((function r(){var a,u,o,c;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i.ruleForm.faburiqi=i.$utils.getCurDate(),a=e.getStorageSync("nowTable"),r.next=4,i.$api.session(a);case 4:return u=r.sent,i.user=u.data,r.next=8,i.$api.option("zhishifenlei","zhishifenlei",{});case 8:if(u=r.sent,i.zhishifenleiOptions=u.data,i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=18;break}return i.ruleForm.id=n.id,r.next=16,i.$api.info("dangjianxuexi",i.ruleForm.id);case 16:u=r.sent,i.ruleForm=u.data;case 18:if(i.cross=n.cross,!n.cross){r.next=70;break}o=e.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 22:if((r.t1=r.t0()).done){r.next=70;break}if(c=r.t1.value,"ziliaobianhao"!=c){r.next=28;break}return i.ruleForm.ziliaobianhao=o[c],i.ro.ziliaobianhao=!0,r.abrupt("continue",22);case 28:if("ziliaomingcheng"!=c){r.next=32;break}return i.ruleForm.ziliaomingcheng=o[c],i.ro.ziliaomingcheng=!0,r.abrupt("continue",22);case 32:if("zhishifenlei"!=c){r.next=36;break}return i.ruleForm.zhishifenlei=o[c],i.ro.zhishifenlei=!0,r.abrupt("continue",22);case 36:if("ziliaojianjie"!=c){r.next=40;break}return i.ruleForm.ziliaojianjie=o[c],i.ro.ziliaojianjie=!0,r.abrupt("continue",22);case 40:if("tupian"!=c){r.next=44;break}return i.ruleForm.tupian=o[c],i.ro.tupian=!0,r.abrupt("continue",22);case 44:if("xiangguanshipin"!=c){r.next=48;break}return i.ruleForm.xiangguanshipin=o[c],i.ro.xiangguanshipin=!0,r.abrupt("continue",22);case 48:if("faburiqi"!=c){r.next=52;break}return i.ruleForm.faburiqi=o[c],i.ro.faburiqi=!0,r.abrupt("continue",22);case 52:if("thumbsupnum"!=c){r.next=56;break}return i.ruleForm.thumbsupnum=o[c],i.ro.thumbsupnum=!0,r.abrupt("continue",22);case 56:if("crazilynum"!=c){r.next=60;break}return i.ruleForm.crazilynum=o[c],i.ro.crazilynum=!0,r.abrupt("continue",22);case 60:if("clicktime"!=c){r.next=64;break}return i.ruleForm.clicktime=o[c],i.ro.clicktime=!0,r.abrupt("continue",22);case 64:if("clicknum"!=c){r.next=68;break}return i.ruleForm.clicknum=o[c],i.ro.clicknum=!0,r.abrupt("continue",22);case 68:r.next=22;break;case 70:i.styleChange();case 71:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(e){this.ruleForm.faburiqi=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},zhishifenleiChange:function(e){this.zhishifenleiIndex=e.target.value,this.ruleForm.zhishifenlei=this.zhishifenleiOptions[this.zhishifenleiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},xiangguanshipinTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.xiangguanshipin="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function i(){var r,a,u,o,c,s,l,f,m,d;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n.ruleForm.ziliaobianhao){i.next=3;break}return n.$utils.msg("资料编号不能为空"),i.abrupt("return");case 3:if(n.ruleForm.ziliaomingcheng){i.next=6;break}return n.$utils.msg("资料名称不能为空"),i.abrupt("return");case 6:if(!n.ruleForm.thumbsupnum||n.$validate.isIntNumer(n.ruleForm.thumbsupnum)){i.next=9;break}return n.$utils.msg("赞应输入整数"),i.abrupt("return");case 9:if(!n.ruleForm.crazilynum||n.$validate.isIntNumer(n.ruleForm.crazilynum)){i.next=12;break}return n.$utils.msg("踩应输入整数"),i.abrupt("return");case 12:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){i.next=15;break}return n.$utils.msg("点击次数应输入整数"),i.abrupt("return");case 15:if(!n.cross){i.next=31;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){i.next=31;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){i.next=27;break}for(l in s)l==o&&(s[l]=c);return f=e.getStorageSync("crossTable"),i.next=25,n.$api.update("".concat(f),s);case 25:i.next=31;break;case 27:r=Number(e.getStorageSync("userid")),a=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 31:if(!a||!r){i.next=53;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=a,m={page:1,limit:10,crossuserid:r,crossrefid:a},i.next=37,n.$api.list("dangjianxuexi",m);case 37:if(d=i.sent,!(d.data.total>=u)){i.next=43;break}return n.$utils.msg(e.getStorageSync("tips")),i.abrupt("return",!1);case 43:if(!n.ruleForm.id){i.next=48;break}return i.next=46,n.$api.update("dangjianxuexi",n.ruleForm);case 46:i.next=50;break;case 48:return i.next=50,n.$api.add("dangjianxuexi",n.ruleForm);case 50:n.$utils.msgBack("提交成功");case 51:i.next=61;break;case 53:if(!n.ruleForm.id){i.next=58;break}return i.next=56,n.$api.update("dangjianxuexi",n.ruleForm);case 56:i.next=60;break;case 58:return i.next=60,n.$api.add("dangjianxuexi",n.ruleForm);case 60:n.$utils.msgBack("提交成功");case 61:case"end":return i.stop()}}),i)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,i("543d")["default"])},b8c9:function(e,n,i){"use strict";i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"4f3d"))}},r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},e23e:function(e,n,i){}},[["6b01","common/runtime","common/vendor"]]]);