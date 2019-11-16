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
  },
  COMPLETE_HABIT(state, payload) {
    state.habits.indexOf(
      state.habits.find(h => {
        if (h._id === payload._id) {
          h.completed.habitCompleted.push(payload.habitCompleted)
          h.completed.lastDateCompleted = payload.habitCompleted.stop
        }
        return
      })
    )
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
  delete({ commit }, _id) {
    commit('SET_HABIT', {})
    return habitService
      .delete(_id)
      .then()
      .catch()
  },
  //todays habit
  completeHabit({ commit }, payload) {
    // service to complete habit
    commit('COMPLETE_HABIT', payload)
  }
}

export const getters = {
  getHabitById: state => _id => {
    let habit = state.habits.find(h => h._id === _id)
    return habit
  },
  activeHabits: state => {
    return state.habits.filter(h => h.active === true)
  },
  archivedHabits: state => {
    return state.habits.filter(h => h.active === false)
  },
  habitsToday: state => {
    let d = new Date()
    let todayStamp = new Date().setHours(0, 0, 0, 0)
    let weekday = d.getDay()

    let todaysHabits = state.habits
    // get active habits
    todaysHabits = todaysHabits.filter(habit => habit.active === true)

    // get habits scheduled for today
    todaysHabits = todaysHabits.filter(habit =>
      habit.selectedWeekdays.find(habWeekday => {
        return parseInt(habWeekday) === weekday
      })
    )

    // check if habit has been completed today
    todaysHabits = todaysHabits.filter(habit => {
      if (habit.completed.lastDateCompleted) {
        if (
          new Date(habit.completed.lastDateCompleted).setHours(0, 0, 0, 0) >=
          todayStamp
        ) {
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    })
    todaysHabits.sort(function(a, b) {
      return a.time > b.time
    })

    return todaysHabits
  }
}
