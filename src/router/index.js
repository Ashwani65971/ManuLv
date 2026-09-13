import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/homepage.vue'
import Gallery from '../views/gallery.vue'
import More from '../views/more.vue'

const routes = [
    {
        path: '/',
        component : Home
    },
    {
        path: '/gallery',
        component : Gallery
    },
    {
        path: '/more',
        component : More
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router