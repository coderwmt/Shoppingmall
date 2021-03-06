import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from "./store/index.js"
import toast from "./components/content/toast/index.js"

Vue.prototype.$bus = new Vue()

Vue.use(toast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
