import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import ('../views/LoginPage.vue')
  },
  {
    path: '/home',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/order',
    component: () => import ('../views/OrderPage.vue')
  },
  {
    path: '/notifications',
    redirect: '/home'
  },
  {
    path: '/store-locator',
    redirect: '/home'
  },
  {
    path: '/faqs',
    redirect: '/home'
  },
  {
    path: '/my-orders',
    redirect: '/home'
  },
  {
    path: '/my-account',
    redirect: '/home'
  },
  {
    path: '/my-favorites',
    redirect: '/home'
  },
  {
    path: '/order-tracker',
    redirect: '/home'
  },
  {
    path: '/order-history',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
