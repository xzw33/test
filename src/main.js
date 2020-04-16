import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import Router from './router/router'
import ElementUI from 'element-ui'
import Store from './store'
//css
import 'element-ui/lib/theme-chalk/index.css'
import './css/style.css'

Vue.config.productionTip = false
Vue.use(ElementUI);



new Vue({
  render: h => h(App),
  router: Router,
  store: Store,
}).$mount('#app')
