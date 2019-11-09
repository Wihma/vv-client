import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('auth/SET_USER_DATA', userData)
      this.$router.push({ name: 'habits' })
    }
    axios.interceptors.response.use(
      response => response,
      err => {
        if (err.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(err)
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
