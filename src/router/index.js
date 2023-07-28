import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
