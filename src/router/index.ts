import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/function/PageListView.vue')
    },
    {
      path: '/function/add',
      component: () => import('../views/function/AddView.vue')
    }
  ]
})

export default router
