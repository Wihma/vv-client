import { authService } from '@/services/auth.js'
export const namespaced = true
export const state = {
  user: null
}
export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData
  }
}
export const actions = {
  login({ commit }, credentials) {
    authService
      .login(credentials)
      .then(res => {
        console.log({ res })
        commit('SET_USER_DATA')
      })
      .catch(err => {
        console.error(err)
      })
  }
}
export const getters = {
  loggedIn(state) {
    return !!state.user
  }
}
