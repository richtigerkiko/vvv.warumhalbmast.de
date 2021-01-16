import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Round from '@/views/Round.vue'
import Training from '@/views/Training.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/round',
    name: 'round',
    component: Round
  },
  {
    path: '/training',
    name: 'training',
    component: Training
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
