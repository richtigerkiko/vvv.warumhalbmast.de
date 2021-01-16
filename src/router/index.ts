import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Round from '@/components/training/Round.vue'
import Training from '@/views/Training.vue'
import TrainingSettings from '@/components/training/Settings.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/training',
    name: 'training',
    component: Training,
    children: [
      {
        path: 'settings',
        name: 'settings',
        component: TrainingSettings
      },
      {
        path: 'round',
        name: 'round',
        component: Round
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
