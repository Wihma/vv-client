import Vue from 'vue'
import Vuex from 'vuex'

// modules
import * as auth from './modules/auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth
  },
  state: {},
  mutations: {},
  actions: {}
})
