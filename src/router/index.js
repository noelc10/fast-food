import { createRouter, createWebHistory } from '@ionic/vue-router'

const routes = [
  {
    path: '',
    redirect: '/login'
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
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ('@/views/LoginPage.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import ('@/views/HomePage.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import ('@/views/profile/ProfilePage.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import ('@/views/products/ProductsPage.vue')
  },
  {
    path: '/products/:id',
    name: 'product-details',
    component: () => import ('@/views/products/ProductDetailsPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
