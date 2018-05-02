import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home'
import p404 from '../components/404'

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '*',
      component: p404
    }
  ]
})

export default router
