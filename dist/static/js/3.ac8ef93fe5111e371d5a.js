webpackJsonp([3],{1253:function(t,e,o){var a=o(978);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(773)("779eb5f8",a,!0)},1262:function(t,e,o){t.exports=o.p+"static/img/bg_login.7285dd8.jpg"},1282:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"type",style:{background:"url("+t.bgUrl+")"},attrs:{id:"app"}},[a("Row",{staticClass:"bg",style:{background:"url("+t.bgUrl+")"}},[a("Col",{attrs:{xs:16,offset:"4"}},[a("Card",{staticStyle:{margin:"100px auto","max-width":"600px","padding-top":"20px","text-align":"left"}},[t.token?a("div",[a("Steps",{staticStyle:{"padding-left":"70px","padding-bottom":"10px","text-align":"left"},attrs:{current:2,size:"small"}},[a("Step",{attrs:{title:"基本信息"}}),t._v(" "),a("Step",{attrs:{title:"邮箱激活"}}),t._v(" "),a("Step",{attrs:{title:"信息登记"}})],1),t._v(" "),a("Form",{ref:"formCustom",attrs:{model:t.formCustom,rules:t.ruleCustom,"label-width":110}},[a("Form-item",{attrs:{label:"类型",prop:"typeId"}},[a("Radio-group",{model:{value:t.formCustom.typeId,callback:function(e){t.$set(t.formCustom,"typeId",e)},expression:"formCustom.typeId"}},[a("Radio",{attrs:{label:"2"}},[t._v("企业")]),t._v(" "),a("Radio",{attrs:{label:"1",disabled:""}},[t._v("个人")])],1)],1),t._v(" "),a("small",{staticClass:"help"},[t._v("需与当地政府颁发的商业许可证或企业注册证上的企业名称完全一致，信息审核成功后，企业名称不可修改")]),t._v(" "),a("Form-item",{attrs:{label:"企业名称",prop:"company"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formCustom.company,callback:function(e){t.$set(t.formCustom,"company",e)},expression:"formCustom.company"}})],1),t._v(" "),a("small",{staticClass:"help"},[t._v("标示即为公司英文简称")]),t._v(" "),a("Form-item",{attrs:{label:"标示",prop:"mark"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formCustom.mark,callback:function(e){t.$set(t.formCustom,"mark",e)},expression:"formCustom.mark"}})],1),t._v(" "),a("small",{staticClass:"help"},[t._v("请输入15位营业执照号或18位的统一社会信用代码")]),t._v(" "),a("Form-item",{attrs:{label:"营业执照注册号",prop:"companyId"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formCustom.companyId,callback:function(e){t.$set(t.formCustom,"companyId",e)},expression:"formCustom.companyId"}})],1),t._v(" "),a("Form-item",{attrs:{label:"管理员姓名",prop:"userName"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formCustom.userName,callback:function(e){t.$set(t.formCustom,"userName",e)},expression:"formCustom.userName"}})],1),t._v(" "),a("Form-item",{attrs:{label:"管理员身份证号",prop:"idCard"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formCustom.idCard,callback:function(e){t.$set(t.formCustom,"idCard",e)},expression:"formCustom.idCard"}})],1),t._v(" "),a("Form-item",{attrs:{label:"管理员手机号",prop:"phone"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formCustom.phone,callback:function(e){t.$set(t.formCustom,"phone",e)},expression:"formCustom.phone"}})],1),t._v(" "),a("Form-item",[a("Button",{attrs:{type:"primary",long:"",loading:t.loading},on:{click:function(e){t.handleSubmit("formCustom")}}},[t._v("提交\n            ")])],1)],1)],1):t._e(),t._v(" "),t.token?t._e():a("div",[a("Steps",{staticStyle:{"padding-left":"70px","padding-bottom":"10px"},attrs:{current:1,status:"error",size:"small"}},[a("Step",{attrs:{title:"基本信息"}}),t._v(" "),a("Step",{attrs:{title:"邮箱激活"}}),t._v(" "),a("Step",{attrs:{title:"信息登记"}})],1),t._v(" "),a("h3",{staticStyle:{color:"#ed3f14","text-align":"center"}},[a("p",[t._v("链接过期或失效"),a("a",{attrs:{href:"register.html"}},[t._v(" 重新发送邮件")])])])],1),t._v(" "),a("small",{staticStyle:{display:"block","text-align":"center","line-height":"30px"}},[a("img",{staticStyle:{"vertical-align":"top"},attrs:{src:o(367),height:"30",alt:""}}),a("span",[t._v("Copyright by Artiely ,All rights reserved")])])])],1)],1)],1)},staticRenderFns:[]}},780:function(t,e,o){function a(t){o(1253)}var r=o(52)(o(961),o(1282),a,"data-v-87ce2992",null);t.exports=r.exports},956:function(t,e,o){"use strict";function a(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),o=window.location.search.substr(1).match(e),a=window.location.search,r=window.location.href,s=r.indexOf("?");return""===a&&(o=r.substr(s+1).match(e)),null!=o?unescape(o[2]):null}e.a=a},961:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(368),r=o.n(a),s=o(956),n=o(1262),i=o.n(n);e.default={name:"type",data:function(){var t=function(t,e,o){15!==e.toString().length&&18!==e.toString().length?o(new Error("请输入正确的营业执照注册号")):o()};return{token:!0,loading:!1,bgUrl:i.a,formCustom:{typeId:2,company:"",mark:"",companyId:"",userName:"",idCard:"",sex:"1",phone:""},ruleCustom:{company:[{required:!0,message:"企业名称不能为空",trigger:"blur"}],mark:[{required:!0,message:"标示不能为空",trigger:"blur"},{message:"标示只支持字母",trigger:"blur",pattern:/^[A-Za-z]$/}],companyId:[{required:!0,message:"营业执照注册号不能为空",trigger:"blur"},{validator:t,trigger:"blur"}],userName:[{required:!0,message:"管理员名称不能为空",trigger:"blur"}],idCard:[{required:!0,message:"身份证号不能为空",trigger:"blur"},{message:"身份证号格式不正确",trigger:"blur",pattern:/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/}],phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{message:"手机号格式不正确",len:11,trigger:"blur",pattern:/^[1][3,4,5,7,8][0-9]{9}$/}]}}},methods:{handleSubmit:function(t){var e=this;this.loading=!0,this.$refs[t].validate(function(t){if(t){var a={account_type:e.formCustom.typeId,company_name:e.formCustom.company,business_license_number:e.formCustom.companyId,personName:e.formCustom.userName,personSex:e.formCustom.idCard.substring(16,1)%2?"1":"0",idCard:e.formCustom.idCard,telephone:e.formCustom.phone,promotionTableName:o.i(s.a)("promotionTableName")||"",promotionTableId:o.i(s.a)("promotionTableId")||"",email:o.i(s.a)("e")||""};e.$api.postUserInfo(a).then(function(t){if(e.loading=!1,0===t.code){e.$Message.success("提交成功!");var o=window.location.href;o=""===window.location.search?window.location.href:o.split(window.location.search)[0],o=o.replace("type.html","login.html"),window.location.href=o}else alert(r()(t))}).catch(function(t){e.loading=!1,console.error("哎哟~！",t)})}else e.loading=!1,e.$Message.error("表单验证失败!")})},checkToken:function(){var t=this,e={token:o.i(s.a)("token")||"",e:o.i(s.a)("e")||"",p:o.i(s.a)("p")||""};this.$api.checkToken(e).then(function(e){0===e.code&&("1"===e.state?t.token=!0:t.token=!1)})},save:function(){}},created:function(){this.checkToken()}}},978:function(t,e,o){e=t.exports=o(772)(!0),e.push([t.i,"body[data-v-87ce2992],html[data-v-87ce2992]{position:absolute;height:100%;width:100%}#app[data-v-87ce2992]{width:100%;height:100%;overflow:scroll}.help[data-v-87ce2992]{display:block;text-align:left;font-size:12px;color:#9ea7b4}","",{version:3,sources:["D:/Users/Administrator/Desktop/workspace/vue-admin-artiely/vue-admin/src/components/pages/Register.vue"],names:[],mappings:"AACA,4CAEE,kBAAmB,AACnB,YAAa,AACb,UAAY,CACb,AACD,sBACE,WAAY,AACZ,YAAa,AACb,eAAiB,CAClB,AACD,uBACE,cAAe,AACf,gBAAiB,AACjB,eAAgB,AAChB,aAAe,CAChB",file:"Register.vue",sourcesContent:["\nhtml[data-v-87ce2992],\nbody[data-v-87ce2992] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n#app[data-v-87ce2992] {\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n}\n.help[data-v-87ce2992] {\n  display: block;\n  text-align: left;\n  font-size: 12px;\n  color: #9ea7b4;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=3.ac8ef93fe5111e371d5a.js.map