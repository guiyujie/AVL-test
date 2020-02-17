import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
//添加国际化支持
import i18n from "config/i18n"
//添加store
import store from "./store"
//添加vue - lazyload
import VueLazyload from 'vue-lazyload'
import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueRouter);
Vue.use(VueLazyload)
//添加router
import routes from "./route"

const router = new VueRouter({
  routes
})


new Vue({
  i18n,
  store,
  router,
  el: "#app",
  render: h => {
    return h(App)
  }
})
