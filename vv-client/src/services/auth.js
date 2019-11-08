import api from './api.js'

export const authService = {
  login(credentials) {
    api.post('', credentials)
  }
}
