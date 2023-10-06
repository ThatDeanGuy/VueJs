import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SplashScreen',
      component: () => import('../views/SplashScreen.view.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../views/SplashScreen.view.vue')
    }
  ]
})

export default router
