// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElemntUI from 'element-ui'
import moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/config/jsonp.js'
//trim-html
Vue.config.productionTip = false
Vue.use(ElemntUI)

Vue.prototype.$moment = moment
//window.moment = moment
/* eslint-disable no-new */
let VM = new Vue({
  el: '#app',
  data:{
    scrollTop:0,
    callBackScrollLoad:null,
    role:1,
  },  
  mounted:function(){
    window.onscroll = _=>{
      if(this.$route.path === '/articleList'  && this.callBackScrollLoad){
        this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        this.callBackScrollLoad();
      }
    };
    this.checkRole();
    console.log(this.role)
  },
  methods:{
    checkRole(){
      let co = document.cookie.split(';');
      for(let i=0;i<co.length;i++){
        let flag = co[i].trim()
        if(flag.indexOf('littleXislogin=') == 0){
          let re = flag.substring("littleXislogin=".length, flag.length);
          if(re.toString() === "true"){
            this.role = 2 //admin
          }else {
            this.role = 1//reviewer
          }
        }else {
          this.role = 1
        }
      }
    },
  },  
  router,
  components: { App },
  template: '<App/>'
})
