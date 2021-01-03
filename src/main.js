import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueTailwind from 'vue-tailwind'
import router from './router'

Vue.use(VueTailwind, {})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
