webpackJsonp([2],{"/TYz":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("0Lk8"),n=i("rGQh"),o=!1;var s=function(t){o||i("2c2i")},l=i("VU/8")(e.a,n.a,!1,s,"data-v-2a183b29",null);l.options.__file="pages/index.vue",a.default=l.exports},"/Yip":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("transition",{attrs:{name:"slide-fade"}},[t.loading?t._e():i("section",{key:"content",staticClass:"list-card"},[i("div",{staticClass:"icon link-icon",attrs:{title:"Back"},on:{click:function(a){t.$emit("close")}}},[i("icon",{attrs:{scale:"1",name:"arrow-left"}})],1),i("div",{staticClass:"form-content"},[i("h2",{staticClass:"subtitle"},[t._v(t._s(t.title))]),i("form",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],class:{invalid:!t.validateEmail(),valid:t.validateEmail()},attrs:{type:"text",placeholder:"Email",required:""},domProps:{value:t.login.email},on:{input:function(a){a.target.composing||t.$set(t.login,"email",a.target.value)}}}),"Sign Up"===t.title&&t.validateEmail()?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.login.name,expression:"login.name"}],class:{invalid:!t.validateUser(),valid:t.validateUser()},attrs:{placeholder:"Username",type:"text",required:""},domProps:{value:t.login.name},on:{input:function(a){a.target.composing||t.$set(t.login,"name",a.target.value)}}})]):t._e(),t.validateEmail()&&t.validateUser()?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],class:{invalid:!t.validatePass(),valid:t.validatePass()},attrs:{placeholder:"Password",type:"password",required:""},domProps:{value:t.login.password},on:{input:function(a){a.target.composing||t.$set(t.login,"password",a.target.value)}}})]):t._e()]),t.authDetails?i("div",{staticClass:"links"},[i("a",{staticClass:"button--grey",on:{click:function(a){t.authRequest("Login"==t.title?"login":"signup")}}},[t._v("\n             "+t._s(t.button)+"\n           ")])]):t._e()])]),t.loading?i("div",{staticClass:"loading-context"},[i("circle-anim"),i("h2",{staticClass:"subtitle"},[t._v("Loading..")])],1):t._e()])};e._withStripped=!0;var n={render:e,staticRenderFns:[]};a.a=n},"0F3X":function(t,a,i){(t.exports=i("FZ+f")(!1)).push([t.i,".container[data-v-bf10a6c2]{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title[data-v-bf10a6c2]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-bf10a6c2]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.list-card[data-v-bf10a6c2]{position:relative;min-width:325px;max-width:350px;background:#f8f8f8;width:40%;height:325px;display:-webkit-box;display:-ms-flexbox;display:flex;padding:50px 25px;margin:25px auto;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1)}.list-card header[data-v-bf10a6c2]{padding-bottom:5px;border-right:1px solid rgba(0,0,0,.25)}.list-card[data-v-bf10a6c2]:hover{-webkit-box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.links[data-v-bf10a6c2]{padding-top:15px}.slide-fade-enter-active[data-v-bf10a6c2]{-webkit-transition:all .3s ease;transition:all .3s ease}.slide-fade-leave-active[data-v-bf10a6c2]{-webkit-transition:all .3s cubic-bezier(1,.5,.8,1);transition:all .3s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-bf10a6c2],.slide-fade-leave-to[data-v-bf10a6c2]{-webkit-transform:translateX(400px);transform:translateX(400px);opacity:0}.loading-context[data-v-bf10a6c2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:fixed;z-index:10}.close-icon[data-v-bf10a6c2]{top:10px;right:10px}.link-icon[data-v-bf10a6c2]{left:10px;top:10px}.stats-icon[data-v-bf10a6c2]{left:70px;top:10px}.edit-icon[data-v-bf10a6c2]{left:40px;top:10px}.icon[data-v-bf10a6c2]{line-height:0;position:absolute;color:#35495e;cursor:pointer}input[type=password][data-v-bf10a6c2],input[type=text][data-v-bf10a6c2]{width:100%;padding:15px;margin:5px 0 22px;display:inline-block;border:none;font-size:inherit;background:#e1e1e1;-webkit-transition:background .8s ease;transition:background .8s ease}input.valid[data-v-bf10a6c2]{border-bottom:2px solid #90ee90}input.invalid[data-v-bf10a6c2]{background:#f75}.list-card[data-v-bf10a6c2]{width:500px;max-width:80%;margin:auto;height:auto;max-height:90vh;padding:25px}.form-content[data-v-bf10a6c2]{width:80%;padding:20px;margin:auto}.list-card[data-v-bf10a6c2]:hover{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}",""])},"0Lk8":function(t,a,i){"use strict";var e=i("4dZq");a.a={components:{Form:e.a},data:function(){return{title:"Baby Namer",description:"Crowd source the name of your future love spawn.",toggle:!1,formData:{button:"",title:""}}},methods:{toggleForm:function(){this.toggle=!this.toggle},login:function(){console.log("login"),this.formData.button="Login",this.formData.title="Login",this.toggleForm()},signup:function(){console.log("signup"),this.formData.button="Confirm",this.formData.title="Sign Up",this.toggleForm()}}}},"2c2i":function(t,a,i){var e=i("QGBg");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("2169a832",e,!1,{sourceMap:!1})},"4dZq":function(t,a,i){"use strict";var e=i("HFXG"),n=i("/Yip"),o=!1;var s=function(t){o||i("VhM9")},l=i("VU/8")(e.a,n.a,!1,s,"data-v-bf10a6c2",null);l.options.__file="components/Form.vue",a.a=l.exports},HFXG:function(t,a,i){"use strict";a.a={props:{title:String,button:String},resource:"Auth",data:function(){return{login:{email:"",name:"",password:""},loading:!1}},computed:{authDetails:function(){return this.validateEmail()&&this.validatePass()},authJSON:function(){return{username:this.login.name,email:this.login.email,password:this.login.password}}},methods:{toggleLoading:function(){this.loading=!this.loading},authRequest:function(t){var a=this;this.toggleLoading(),this.$getResource(t,this.authJSON).then(function(t){return a.$router.push({path:"/profile?u="+t.id})}).then(this.toggleLoading).catch(function(t){a.$router.push({path:"/400"})})},validateEmail:function(){return null!==this.login.email.match(/^[\w\.]+@\w+\.\w+/)},validateUser:function(){return"Login"==this.title||this.login.name&&this.login.name.length>6&&this.login.name.length<25},validatePass:function(){return this.login.password.length>6&&this.login.password.length<25}}}},QGBg:function(t,a,i){(t.exports=i("FZ+f")(!1)).push([t.i,".container[data-v-2a183b29]{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title[data-v-2a183b29]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-2a183b29]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.list-card[data-v-2a183b29]{position:relative;min-width:325px;max-width:350px;background:#f8f8f8;width:40%;height:325px;display:-webkit-box;display:-ms-flexbox;display:flex;padding:50px 25px;margin:25px auto;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1)}.list-card header[data-v-2a183b29]{padding-bottom:5px;border-right:1px solid rgba(0,0,0,.25)}.list-card[data-v-2a183b29]:hover{-webkit-box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.links[data-v-2a183b29]{padding-top:15px}.container-content[data-v-2a183b29]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:90%;margin:0 auto}.title-content[data-v-2a183b29]{width:50%;margin:auto}.title[data-v-2a183b29]{font-size:80px}.iphone-container[data-v-2a183b29]{max-height:100vh;width:40%;margin:auto}.iphone-container img[data-v-2a183b29]{-o-object-fit:cover;object-fit:cover;width:auto;height:80vh}.button--green[data-v-2a183b29],.button--grey[data-v-2a183b29]{margin:0 10px}@media only screen and (max-width:700px){.title[data-v-2a183b29]{font-size:50px}.subtitle[data-v-2a183b29]{font-size:24px}.container-content[data-v-2a183b29]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.title-content[data-v-2a183b29]{width:90%}.iphone-container[data-v-2a183b29]{width:90%;margin:10px auto}.iphone-container img[data-v-2a183b29]{height:60vh}}",""])},VhM9:function(t,a,i){var e=i("0F3X");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("0b5bf81f",e,!1,{sourceMap:!1})},rGQh:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("main",{staticClass:"container"},[t.toggle?i("Form",{attrs:{title:t.formData.title,button:t.formData.button},on:{close:function(a){t.toggleForm()}}}):t._e(),t.toggle?t._e():i("section",{staticClass:"container-content"},[t._m(0),i("div",{staticClass:"title-content"},[i("h1",{staticClass:"title"},[t._v("\n           "+t._s(t.title)+"\n         ")]),i("h2",{staticClass:"subtitle"},[t._v("\n           "+t._s(t.description)+"\n         ")]),i("div",{staticClass:"links"},[i("a",{staticClass:"button--green",on:{click:t.login}},[t._v("Login\n           ")]),i("a",{staticClass:"button--grey",on:{click:t.signup}},[t._v("Sign Up\n           ")])])])])],1)};e._withStripped=!0;var n={render:e,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("figure",{staticClass:"iphone-container"},[a("img",{attrs:{src:"/images/iphone_iphone6_mockup.png"}})])}]};a.a=n}});