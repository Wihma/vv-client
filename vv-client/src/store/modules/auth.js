import { authService } from '@/services/auth.js'
import axios from 'axios'
export const namespaced = true
export const state = {
  user: null
}
export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
    axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
  },
  CLEAR_USER_DATA(state) {
    state.user = null
    localStorage.removeItem('user')
    location.reload()
  }
}
export const actions = {
  login({ commit }, credentials) {
    return authService
      .login(credentials)
      .then(res => {
        commit('SET_USER_DATA', res.data)
      })
      .catch(err => {
        return Promise.reject(err)

        // here I should call an Http status code helper that depending on the status code gives the appropriate notification to the user.
      })
  },
  logout({ commit }) {
    commit('CLEAR_USER_DATA')
  }
}
export const getters = {
  loggedIn(state) {
    return !!state.user
  }
}
