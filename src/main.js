import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Custom Styles */
import CustomStyles from './assets/css/styles.css'
Vue.use(CustomStyles);

/* BootstrapVue */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import BootstrapVueCss from '../node_modules/bootstrap/dist/css/bootstrap.css'
import BootstrapVueCss1 from '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue,IconsPlugin,BootstrapVueCss,BootstrapVueCss1)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
