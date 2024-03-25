import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditFormView from '@/views/EditFormView.vue'
import CategorieAdventureView from '@/views/CategorieAdventureView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin-dashboard',
      name: 'adminDashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/add-activity',
      name: 'addactivity',
      component: AddFormView,
      meta: { requiresAuth: true }
    },
     {
       path: '/edit-activity',
       name: 'editactivity',
       component: EditFormView,
       meta: { requiresAuth: true }
     },
     {
      path: '/categorie-adventure',
      name: 'categorieadventure',
      component: CategorieAdventureView,
     
    },
     {
       path: '/contact',
       name: 'contact',
       component: ContactFormView,
     },
  ]
})

export default router
