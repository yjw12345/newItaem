import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Enter from "@/views/Enter/index.vue"
import Frontend from "@/views/Frontend/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home', 
      component: Enter
    },
    {
      path: '/frontend',
      name: 'Frontend',
      component: Frontend
    },  
    // {
    //   path: '/create',
    //   name: 'Create',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/Create/index.vue')
    // }
  ]
})

export default router
