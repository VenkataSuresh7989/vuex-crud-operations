import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName:"Venkat A Suresh",
    password:''
  },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    products,
  },
});
