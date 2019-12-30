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
    component: () => import('../views/articles.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
