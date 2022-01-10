import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/footballareas',
    name: 'FootballAreas',
    component: () => import('../views/FootballAreas.vue')
  },
  {
    path: '/footballclubs/:id',
    name: 'FootballClubs',
    component: () => import('../components/FootballClubs')
  },
  {
    path: '/clubdetail/:id',
    name: 'ClubDetail',
    component: () => import('../components/ClubDetail')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
