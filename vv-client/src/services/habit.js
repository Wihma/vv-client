import { api } from '@/services/api.js'
import store from '../store/index.js'

const endpoint = 'habit'

export const habitService = {
  getHabit(_id) {
    return api.get(endpoint, { params: { _id: _id } })
  },
  create(habit) {
    return api.post(endpoint, {
      userId: store.getters['auth/userId'],
      habit: habit
    })
  },
  update(habit) {
    return api.put(endpoint, {
      userId: store.getters['auth/userId'],
      habit: habit
    })
  },
  delete(_id) {
    return api.delete(endpoint, {
      params: {
        userId: store.getters['auth/userId'],
        _id: _id
      }
    })
  },
  completed(_id, completed) {
    return api.post(endpoint + '/completed', {
      userId: store.getters['auth/userId'],
      _id,
      completed
    })
  }
}
