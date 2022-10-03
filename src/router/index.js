import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Android from '../views/Android/index.vue'
import Enter from "@/views/Enter/index.vue"
import Frontend from "@/views/Frontend/index.vue"
import Footer from "@/views/Footer/index.vue"
import AI from "@/views/AI/index.vue"
import TimeLine from "@/views/TimeLine/index.vue"
import BackEnd from "@/views/BackEnd/index.vue"
import n from "@/components/Navigation.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BackEnd
    },
    {
      path: '/enter',
      name: 'Enter', 
      component: Enter
    },
    {
      path: '/TimeLine',
      name: 'TimeLine', 
      component: TimeLine
    },
    {
      path: '/frontend',
      name: 'Frontend',
      component: Frontend
    },  
    {
      path: '/android',
      name: 'Android',
      component: Android
    },  
    {
      path: '/home',
      name: 'Home',
      component: Home
    },  
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },  
    {
      path: '/ai',
      name: 'AI',
      component: AI
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
