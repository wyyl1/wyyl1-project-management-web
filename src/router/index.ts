import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'functionList',
      component: () => import('../views/function/PageListView.vue')
    },
    {
      path: '/w',
      name: 'wyyl1',
      component: () => import('../wyyl1/Index.vue')
    }
  ]
})

export default router
