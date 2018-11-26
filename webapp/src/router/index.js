import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: `/home`,
      name: 'home',
      component: () => import('@/pages/home/home')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/home/home')
    },
    {
      path: '/art',
      name: 'art',
      component: () => import('@/pages/article/article')
    }
  ]
})
