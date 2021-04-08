import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import JSPDF from 'jspdf'

Vue.use(BootstrapVue)

Vue.use(JSPDF)

Vue.config.productionTip = false

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
