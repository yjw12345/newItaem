import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Android from '../views/IAndroid/index.vue'
import Enter from "@/views/Enter/index.vue"
import Frontend from "@/views/Frontend/index.vue"
import AI from "@/views/AI/index.vue"
import TimeLine from "@/views/TimeLine/index.vue"
import BackEnd from "@/views/BackEnd/index.vue"
import Home2 from "@/views/Home2/index.vue"


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            component: Home2
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
            path: '/backend',
            name: 'BackEnd',
            component: BackEnd
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
            path: '/ai',
            name: 'AI',
            component: AI
        },
    ]
})

export default router