import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Custom Styles */
import CustomStyles from './assets/css/styles.css'
Vue.use(CustomStyles);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
