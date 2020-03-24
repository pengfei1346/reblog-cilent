import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue')
    },
    {
        path: '/articles',
        name: 'articles',
        component: () => import('../views/client/article/articleList.vue')
    },
    {
        path: '/articles/:id',
        name: 'articleDetail',
        component: () => import('../views/client/article/articleDetail.vue')
    },
    {
        path: '/timeline',
        component: () => import('../views/client/timeLine')
    },
    {
        path: '/archive',
        component: () => import('../views/client/archive')
    },
    {
        path: '/collections',
        component: () => import('../views/client/collections')
    },
    {
        path: '/leavingMessage',
        component: () => import('../views/client/leavingMessage')
    },
    {
        path: '/about',
        component: () => import('../views/client/about')
    },

    // admin page
    {
        path: '/admin/write',
        component: () => import('../views/admin/write/index.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
