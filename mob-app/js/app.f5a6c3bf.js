(function(e){function t(t){for(var r,i,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/mob-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"11bf":function(e,t,a){"use strict";var r=a("bea1"),s=a.n(r);s.a},"6e90":function(e,t,a){"use strict";var r=a("9a8e"),s=a.n(r);s.a},9700:function(e,t,a){"use strict";var r=a("afab"),s=a.n(r);s.a},"9a8e":function(e,t,a){},afab:function(e,t,a){},bea1:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("router-view")],1)],1)},n=[],i=r["a"].extend({name:"App"}),o=i,c=(a("e1c5"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),f=a("a75b"),p=Object(c["a"])(o,s,n,!1,null,"bd3f474a",null),m=p.exports;u()(p,{VApp:d["a"],VContent:f["a"]});var v=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"align-start greetings-container",class:[1==e.step?"greetings-bg-1":"",4==e.step?"greetings-bg-2":""],attrs:{"fill-height":""}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("v-row",[a("v-col",{staticClass:"d-flex justify-center"},[a("h3",{staticClass:"text-center greetings-h3"},[e._v(e._s(e.currentTitle))])])],1),a("v-row",[a("v-col",[a("v-window",{model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[a("v-window-item",{attrs:{value:1}},[a("div",{staticClass:"caption grey--text text--darken-1 text-center"},[e._v("Bring your media to the next level!")]),a("v-row",{staticClass:"justify-center"},[a("v-col",{staticClass:"col-sm-4 col-md-4 col-lg-3 col-xl-2 d-flex justify-space-around"},[a("v-btn",{staticClass:"no-hover-btn text-capitalize",attrs:{rounded:"",color:"third",elevation:"0",height:"48px"},on:{click:function(t){return e.setStep(2)}}},[e._v("Sign Up")]),a("v-btn",{staticClass:"no-focus-btn",attrs:{color:"primary",elevation:"0",fab:"",small:"",height:"48px",width:"48px",title:"Sign In"},on:{click:function(t){return e.setStep(3)}}},[a("v-icon",[e._v("mdi-arrow-right")])],1)],1)],1)],1),a("v-window-item",{attrs:{value:2}},[a("SignUp",{on:{setStep:function(t){return e.setStep(3)}}})],1),a("v-window-item",{attrs:{value:3}},[a("SignIn",{on:{setStep:function(t){return e.setStep(2)}}})],1),a("v-window-item",{staticClass:"container fill-height",attrs:{value:4}},[a("v-container",[a("v-row",[a("v-col",{staticClass:"d-flex justify-center pt-12"},[e.user.id>0?a("v-btn",{staticClass:"no-focus-btn text-capitalize",attrs:{to:"/home",color:"primary"}},[e._v("Get Started")]):e._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},b=[],w=(a("b0c0"),a("d4ec")),g=a("bee2"),y=a("99de"),x=a("7e84"),O=a("262e"),j=a("9ab4"),k=a("60a3"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{staticClass:"justify-center"},[a("v-col",{staticClass:"col-sm-4 col-md-4 col-lg-3 col-xl-2"},[a("div",{staticClass:"d-flex flex-column white sign-up-block"},[a("ValidationObserver",{ref:"obs",staticClass:"d-flex flex-column",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid,s=t.validated,n=t.passes;t.validate;return[a("ValidationProvider",{ref:"name",attrs:{name:"name",rules:"required|max:16"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,s=t.valid;return[a("v-text-field",{attrs:{height:"36px",counter:16,label:"Full name",type:"text",filled:"",rounded:"",dense:"",success:s,"error-messages":r,required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})]}}],null,!0)}),a("ValidationProvider",{ref:"email",attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,s=t.valid;return[a("v-text-field",{staticClass:"v-input-custom",attrs:{height:"36px",label:"Email",type:"email",success:s,"error-messages":r.concat(e.customEmailErrors),required:"",filled:"",rounded:"",dense:""},on:{keyup:function(t){return e.validateEmailUnique()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}],null,!0)}),a("ValidationProvider",{ref:"password",attrs:{name:"password",rules:{required:!0,min:8,regex:/^(.*)[A-Z]{2}(.*)[-?#$%&=]{1}(.*)$/}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,s=t.valid;return[a("v-text-field",{ref:"passwordField",staticClass:"v-input-custom",attrs:{height:"36px",label:"Password",counter:"",success:s,"error-messages":r,required:"",filled:"",rounded:"",dense:"","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})]}}],null,!0)}),a("ValidationProvider",{ref:"password",attrs:{name:"password",rules:{required:!0,is:e.password}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,s=t.valid;return[a("v-text-field",{staticClass:"v-input-custom",attrs:{height:"36px",label:"Repeat password",success:s,"error-messages":r,required:"",filled:"",rounded:"",dense:"","append-icon":e.showConfirmPassword?"mdi-eye":"mdi-eye-off",type:e.showConfirmPassword?"text":"password"},on:{"click:append":function(t){e.showConfirmPassword=!e.showConfirmPassword}},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})]}}],null,!0)}),a("v-btn",{staticClass:"no-hover-btn text-capitalize",attrs:{rounded:"",color:"primary",elevation:"0",disabled:r||!s,height:"48px"},on:{click:function(t){return n(e.submit)}}},[e._v("Sign Up")])]}}])})],1)])],1),a("v-row",[a("v-col",[a("div",{staticClass:"main-color text-center"},[e._v(" Already have an account? "),a("br"),a("a",{staticClass:"underline",on:{click:function(t){return e.$emit("setStep")}}},[e._v("Sign In")])])])],1)],1)},P=[],C=(a("7db0"),a("d3b7"),a("25f0"),a("7bb1")),_=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Guest",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"guest@example.com",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";Object(w["a"])(this,e),this.password="",this.id=t,this.name=a,this.email=r,this.role=s,this.password=n},E=a("3452"),V=a.n(E),T=function(e){function t(){var e;return Object(w["a"])(this,t),e=Object(y["a"])(this,Object(x["a"])(t).apply(this,arguments)),e.name="",e.email="",e.password="",e.confirmPassword="",e.showPassword=!1,e.showConfirmPassword=!1,e.keyUpTimer=0,e.customEmailErrors=[],e}return Object(O["a"])(t,e),Object(g["a"])(t,[{key:"submit",value:function(){var e=1,t=new _(Math.floor(2+1e4*Math.random()),this.name,this.email,e,V.a.HmacSHA1(this.password,"best-ever-key").toString());this.validateEmailUnique(),this.$store.dispatch("CreateNewUser",t)}},{key:"validateEmailUnique",value:function(){var e=this;clearTimeout(this.keyUpTimer),this.keyUpTimer=setTimeout((function(){var t=e.$store.getters.getFakeData;t.find((function(t){return t.email===e.email}))?e.customEmailErrors.push("This email already exists"):e.customEmailErrors.pop()}),300)}}]),t}(k["b"]);T=Object(j["a"])([Object(k["a"])({components:{ValidationObserver:C["a"],ValidationProvider:C["b"]},mounted:function(){}})],T);var U=T,$=U,q=(a("fc05"),a("8336")),D=a("62ad"),F=a("0fd9"),I=a("8654"),A=Object(c["a"])($,S,P,!1,null,"271cccde",null),H=A.exports;u()(A,{VBtn:q["a"],VCol:D["a"],VRow:F["a"],VTextField:I["a"]});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{staticClass:"justify-center"},[a("v-col",{staticClass:"col-sm-4 col-md-4 col-lg-3 col-xl-2"},[a("div",{staticClass:"white sign-in-block"},[a("ValidationObserver",{ref:"form",staticClass:"d-flex flex-column",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid,s=t.validated,n=t.passes;t.validate;return[a("ValidationProvider",{ref:"email",attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,s=t.valid;return[a("v-text-field",{attrs:{height:"36px",label:"Email",type:"email",success:s,required:"",filled:"",rounded:"",dense:"","error-messages":r.concat(e.customEmailErrors)},on:{keyup:function(t){return e.validateEmailUnique()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}],null,!0)}),a("ValidationProvider",{ref:"password",attrs:{name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,s=t.valid;return[a("v-text-field",{ref:"passwordField",staticClass:"v-input-custom",attrs:{height:"36px",label:"Password",filled:"",rounded:"",dense:"","error-messages":r.concat(e.customPasswordErrors),"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",success:s,required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})]}}],null,!0)}),a("v-btn",{staticClass:"no-hover-btn text-capitalize",attrs:{rounded:"",color:"primary",elevation:"0",height:"48px",disabled:r||!s},on:{click:function(t){return n(e.submit)}}},[e._v("Sign In")])]}}])})],1)])],1),a("v-row",[a("v-col",[a("div",{staticClass:"primary--text text-center"},[e._v(" Don’t have an account yet? "),a("br"),a("a",{staticClass:"underline",on:{click:function(t){return e.$emit("setStep")}}},[e._v("Sign Up")])])])],1)],1)},R=[],z=function(e){function t(){var e;return Object(w["a"])(this,t),e=Object(y["a"])(this,Object(x["a"])(t).apply(this,arguments)),e.email="",e.password="",e.showPassword=!1,e.customEmailErrors=[],e.customPasswordErrors=[],e.keyUpTimer=0,e}return Object(O["a"])(t,e),Object(g["a"])(t,[{key:"submit",value:function(){var e=this,t=this.$store.getters.getFakeData,a=t.find((function(t){return t.email===e.email}));a?a.password===V.a.HmacSHA1(this.password,"best-ever-key").toString()?(this.$store.dispatch("SetUser",a),this.$store.dispatch("SetStep",4)):(this.customPasswordErrors.push("Wrong auth pair. Have you forgot your password?"),setTimeout((function(){var t=e.$refs.passwordField;e.password="",t.reset(),e.customPasswordErrors.pop()}),2e3)):(this.customEmailErrors.push("There is no account with this email yet. Try to sign up"),setTimeout((function(){var t=e.$refs.form;e.email="",e.password="",t.reset(),e.customEmailErrors.pop()}),2e3))}},{key:"validateEmailUnique",value:function(){}}]),t}(k["b"]);z=Object(j["a"])([Object(k["a"])({components:{ValidationObserver:C["a"],ValidationProvider:C["b"]}})],z);var B=z,W=B,G=(a("11bf"),Object(c["a"])(W,M,R,!1,null,"6cf44e83",null)),J=G.exports;u()(G,{VBtn:q["a"],VCol:D["a"],VRow:F["a"],VTextField:I["a"]});var N=a("bc3a"),Z=a.n(N),K=function(e){function t(){return Object(w["a"])(this,t),Object(y["a"])(this,Object(x["a"])(t).apply(this,arguments))}return Object(O["a"])(t,e),Object(g["a"])(t,[{key:"setStep",value:function(e){this.$store.dispatch("SetStep",e)}},{key:"currentTitle",get:function(){switch(this.step){case 1:return"Ready for a great User experience?";case 2:return"Sign Up";case 3:return"Sign In";default:return"Hello, ".concat(this.user.name)}}},{key:"step",get:function(){return this.$store.getters.getStep}},{key:"user",get:function(){return this.$store.getters.getUser}}]),t}(k["b"]);K=Object(j["a"])([Object(k["a"])({components:{SignUp:H,SignIn:J},created:function(){var e=this;Z.a.get("/fake-data.json").then((function(t){e.$store.dispatch("SetFakeData",t.data.users)}))}})],K);var L=K,Q=L,X=(a("9700"),a("a523")),Y=a("132d"),ee=a("f665"),te=a("1e6c"),ae=Object(c["a"])(Q,h,b,!1,null,"07db158e",null),re=ae.exports;u()(ae,{VBtn:q["a"],VCol:D["a"],VContainer:X["a"],VIcon:Y["a"],VRow:F["a"],VWindow:ee["a"],VWindowItem:te["a"]});var se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"fill-height"},[a("v-row",[a("v-col",[a("span",{staticClass:"calm"},[e._v("The best ever app...")])])],1)],1)},ne=[],ie=function(e){function t(){return Object(w["a"])(this,t),Object(y["a"])(this,Object(x["a"])(t).apply(this,arguments))}return Object(O["a"])(t,e),t}(k["b"]);ie=Object(j["a"])([k["a"]],ie);var oe=ie,ce=oe,le=(a("6e90"),Object(c["a"])(ce,se,ne,!1,null,"b04cbd72",null)),ue=le.exports;u()(le,{VCol:D["a"],VContainer:X["a"],VRow:F["a"]}),r["a"].use(v["a"]);var de=[{path:"/",name:"greetings",component:re},{path:"/home",name:"homepage",component:ue}],fe=new v["a"]({base:"/mob-app/",mode:"history",routes:de}),pe=fe,me=(a("99af"),a("2909")),ve=a("2f62");r["a"].use(ve["a"]);var he=new ve["a"].Store({state:{step:1,user:new _,fakeData:{}},mutations:{setStep:function(e,t){e.step=t},setUser:function(e,t){e.user=t},setFakeData:function(e,t){e.fakeData=t},updateFakeData:function(e,t){e.fakeData=[].concat(Object(me["a"])(e.fakeData),[t])}},actions:{SetStep:function(e,t){e.commit("setStep",t)},SetUser:function(e,t){e.commit("setUser",t)},SetFakeData:function(e,t){e.commit("setFakeData",t)},CreateNewUser:function(e,t){e.commit("updateFakeData",t),e.commit("setUser",t),e.commit("setStep",4)}},modules:{},getters:{getStep:function(e){return e.step},getUser:function(e){return e.user},getFakeData:function(e){return e.fakeData}}}),be=a("f309");r["a"].use(be["a"]);var we=new be["a"]({theme:{themes:{light:{primary:"#1E1A3E",secondary:"#b0bec5",third:"#ffffff",accent:"#8c9eff",error:"#b71c1c",info:"#707070"}},options:{customProperties:!0}}}),ge=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),ye=a("4c93");function xe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(a),!0).forEach((function(t){Object(ge["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):xe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}Object(C["c"])("required",Oe({},ye["g"],{message:"This field is required"})),Object(C["c"])("max",Oe({},ye["d"],{message:"This field must be {length} characters or less"})),Object(C["c"])("min",Oe({},ye["e"],{message:"This field must be {length} characters at least"})),Object(C["c"])("email",Oe({},ye["b"],{message:"This field must be a valid email"})),Object(C["c"])("digits",Oe({},ye["a"],{message:"This field must have at least {length} digits"})),Object(C["c"])("regex",Oe({},ye["f"],{message:'This field must have at least 2 capital symbols and one of these specials "-?#$%&="'})),Object(C["c"])("is",Oe({},ye["c"],{message:"Passwords must be the same"})),r["a"].config.productionTip=!1,new r["a"]({router:pe,store:he,vuetify:we,render:function(e){return e(m)}}).$mount("#app")},ce36:function(e,t,a){},e1c5:function(e,t,a){"use strict";var r=a("ce36"),s=a.n(r);s.a},f25d:function(e,t,a){},fc05:function(e,t,a){"use strict";var r=a("f25d"),s=a.n(r);s.a}});
//# sourceMappingURL=app.f5a6c3bf.js.map