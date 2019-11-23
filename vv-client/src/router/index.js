import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Habits from '@/views/Habits.vue'
import Habit from '@/views/Habit.vue'
import NewHabit from '@/views/NewHabit.vue'
import store from '@/store/index.js'
import HabitsToday from '@/views/HabitsToday.vue'
import Settings from '@/views/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path: '/habits',
    name: 'habits',
    component: Habits,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/habit/:id',
    name: 'habit',
    component: Habit,
    props: true,
    meta: {
      requireAuth: true
    },
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch('habit/fetchHabit', routeTo.params.id)
        .then(habit => {
          // coherce selectedWeekdays into number for it to work with select dropdown
          habit.selectedWeekdays = habit.selectedWeekdays.map(d => Number(d))
          routeTo.params.habit = habit
          next()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  {
    path: '/new-habit/',
    name: 'new-habit',
    component: NewHabit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/habits-today',
    name: 'habits-today',
    component: HabitsToday,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')
  if (to.matched.some(rec => rec.meta.requireAuth) && !loggedIn) {
    next('/')
  } else if (to.matched.some(rec => !rec.meta.requireAuth && loggedIn)) {
    next('/habits')
  } else {
    next()
  }
})

export default router
