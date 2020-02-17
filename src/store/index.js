import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)


let debug = process.env.NODE_ENV != 'production'


let dataStore = new Vuex.Store({
  modules: {
    user
  },
  strict: debug
})

export default dataStore
