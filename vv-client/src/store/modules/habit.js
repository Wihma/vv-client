import { habitsService } from '@/services/habits.js'
import { habitService } from '@/services/habit.js'

export const namespaced = true

export const state = {
  habits: [],
  habit: {}
}

export const mutations = {
  SET_HABITS(state, habits) {
    state.habits = habits
  },
  SET_HABIT(state, habit) {
    state.habit = habit
  }
}

export const actions = {
  fetchHabits({ commit, rootGetters }) {
    return habitsService.getHabits(rootGetters['auth/userId']).then(res => {
      commit('SET_HABITS', res.data)
    })
  },
  fetchHabit({ commit, getters }, _id) {
    let habit = getters.getHabitById(_id)
    if (habit) {
      commit('SET_HABIT', habit)
      return habit
    } else {
      return habitService
        .getHabit(_id)
        .then(res => {
          commit('SET_HABIT', res.data)
          return res.data
        })
        .catch()
    }
  },
  create({ commit }, habit) {
    commit('SET_HABIT', habit)
    return habitService
      .create(habit)
      .then(() => {})
      .catch(err => {
        console.log({ err })
      })
  },
  update({ commit }, habit) {
    commit('SET_HABIT', habit)
    return habitService
      .update(habit)
      .then()
      .catch()
  },
  delete({ commit }, habit) {
    commit('SET_HABIT', habit)
    return habitService
      .delete(habit)
      .then()
      .catch()
  }
}

export const getters = {
  getHabitById: state => _id => {
    let habit = state.habits.find(h => h._id === _id)
    return habit
  }
}
