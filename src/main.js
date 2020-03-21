import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/global.css'

//引入全局过滤器
import * as filters from './filters' // global filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//引入prototypes
import * as prototypes from './utils/prototypes' // global filters
Object.keys(prototypes).forEach(key => {
  Vue.prototype[key] = prototypes[key]
})

import request from './utils/request'
Vue.prototype.$xhr = request

//js-cookie
import Cookie from 'js-cookie'

//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//normalize css
import 'normalize.css'
import service from "./utils/request";

Vue.prototype.$cookie = Cookie

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
