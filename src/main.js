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
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
