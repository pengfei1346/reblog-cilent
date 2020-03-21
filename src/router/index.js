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
    component: () => import('../views/article/articleList.vue')
  },
  {
    path: '/articles/:id',
    name: 'articleDetail',
    component: () => import('../views/article/articleDetail.vue')
  },
  {
    path: '/write',
    component: () => import('../views/write/index.vue')
  },
  {
    path: '/timeline',
    component: () => import('../views/timeLine')
  },
  {
    path: '/archive',
    component: () => import('../views/archive')
  },
  {
    path: '/collections',
    component: () => import('../views/collections')
  },
  {
    path: '/leavingMessage',
    component: () => import('../views/leavingMessage')
  },
  {
    path: '/about',
    component: () => import('../views/about')
  }
]

const router = new VueRouter({
  routes
})

export default router
