import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../../src/App.vue'
import Dashboard from '../components/Dashboard.vue'
import Login  from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import AddProduct from '../components/AddProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/app',
    name: 'app',
    component: App
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/add',
    name: 'AddProduct',
    component: AddProduct
  },    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
