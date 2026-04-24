import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      component: () => import('@/views/home.vue')
    },
    {
      path:'/config',
      component: () => import('@/views/config.vue')
    }
  ]
})
export default router