import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home'
import p404 from '../components/404'
import nav from '../components/nav'

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active', // 在全局设置激活的link的样式；
  routes: [
    {
      path: '/nav',
      component: nav
    },
    {
      path: '/home',
      component: home
    },
    {
      //  给没有路由的页面，指定404路由。
      path: '*',
      component: p404
    }
  ]
})

export default router
