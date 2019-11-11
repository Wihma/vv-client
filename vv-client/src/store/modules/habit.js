import { habitsService } from '@/services/habits.js'
// import { getters } from './auth'

export const namespaced = true

export const state = {
  habits: [],
  habit: {}
}

export const mutations = {
  SET_HABITS(state, habits) {
    state.habits = habits
  }
}

export const actions = {
  fetchHabits({ commit, rootGetters }) {
    return habitsService.getHabits(rootGetters['auth/userId']).then(res => {
      commit('SET_HABITS', res.data)
    })
  }
}

export const getters = {}
