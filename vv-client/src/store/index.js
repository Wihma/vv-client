import Vue from 'vue'
import Vuex from 'vuex'

// modules
import * as auth from './modules/auth.js'
import * as habit from './modules/habit'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    habit
  },
  state: {},
  mutations: {},
  actions: {}
})
