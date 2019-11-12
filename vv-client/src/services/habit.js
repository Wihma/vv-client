import { api } from '@/services/api.js'

const endpoint = 'habit'

export const habitService = {
  getHabit(_id) {
    return api.get(endpoint, { params: { _id: _id } })
  }
}
