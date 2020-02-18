import Vue from 'vue'
import Vuex from 'vuex'

//添加国际化支持
import i18n from "config/i18n"
//添加store
import store from "./store"
//添加vue - lazyload
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
//引用antd.css
import "ant-design-vue/dist/antd.css";
Vue.use(Vuex)

import { Row, Col, Select, DatePicker, Input, Button, Form, Table, Pagination } from "ant-design-vue";
[Row, Col, Select, DatePicker, Button, Input, Form, Table, Pagination].forEach(e => {
  Vue.use(e);
});

Vue.use(VueLazyload)
//添加router
import router from "./route"


new Vue({
  i18n,
  store,
  router,
  el: "#app",
  render: h => {
    return h(App)
  }
})
