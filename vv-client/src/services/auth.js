import { api } from './api.js'
const endpoint = 'user'

export const authService = {
  login(credentials) {
    return api.post(endpoint + '/login', credentials)
  }
}
