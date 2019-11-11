import { api } from '@/services/api.js'

const endpoint = 'habits'

export const habitsService = {
  getHabits(userId) {
    return api.get(endpoint, { params: { _id: userId } })
  }
}
