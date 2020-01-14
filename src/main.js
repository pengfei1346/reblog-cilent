import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//js-cookie
import Cookie from 'js-cookie'

//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//normalize css
import 'normalize.css'

Vue.prototype.$cookie = Cookie

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
