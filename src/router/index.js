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
import documentMenu from '../components/documentMenu'
import document from '../components/document'
import documentContent from '../components/documentContent'

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active', // 在全局设置激活的link的样式；
  // 经过测试在vue2.5.2版本里，滚动条的位置在前进后退时，已经被浏览器(谷歌)记录，并不需要写
  // 下面的函数。
  // scrollBehavior(to, from, savePosition){
  //   if (savePosition) {
  //     return savePosition
  //   } else {
  //     return {x: 0, y: 0}
  //   }
  // },
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
          name: 'about',
          component: profile
        },
        {
          // 让子路由，路由嵌套但路径不嵌套，只需要加上/。
          // 加上/， url变成 localhost/experience
          // 不加/， url为 localhost/about/experience
          // 同时 要使用 name属性，同时在nav.vue，的<router-link to>要变成<router-link :to="{name:'about'}">
          path: '/experience',
          name: 'experience',
          component: experience
        },
        {
          path: '/target',
          name: 'target',
          component: target
        }
      ]
    },
    {
      path: '/document',
      component: document,
      children: [
        {
          path: '',
          components: {
            default: documentContent,
            slider: documentMenu
          }
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
    },
    {
      path: '*',
      component: p404
    }
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
