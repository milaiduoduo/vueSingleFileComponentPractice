import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home'
import p404 from '../components/404'
import nav from '../components/nav'
import otherPage from '../components/other'
import about from '../components/about'
import profile from '../components/profile'
import experience from '../components/experience'
import target from '../components/target'

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active', // 在全局设置激活的link的样式；
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/nav',
      component: nav
    },
    {
      path: '/home',
      component: home,
      alias: '/index'
    },
    {
      path: '/about',
      component: about,
      children: [
        {
          path: '',
          component: profile
        },
        {
          path: 'experience',
          component: experience
        },
        {
          path: 'target',
          component: target
        }
      ]
    },
    {
      path: '/other',
      component: otherPage
    },
    {
      path: '/p404',
      component: p404
    }
    // {
    //   path: '*',
    //   component: p404
    // }
    // ,
    // {
    //   path: '*',
    //   // redirect: {path: '/other'},
    //   redirect: (to) => {
    //     console.log(to)
    //     if (to.path === '/123') {
    //       return '/other'
    //     } else {
    //       return '/p404'
    //     }
    //   }
    // }
  ]
})

export default router
