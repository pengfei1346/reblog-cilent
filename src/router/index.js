import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import articleDetail from'../views/client/article/articleDetail'

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
        // component: () => import('../views/client/article/articleDetail.vue')
        component: articleDetail
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
    }
]

const router = new VueRouter({
    routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router
