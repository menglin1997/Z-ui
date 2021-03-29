/*
 * @文件内容描述: 路由
 * @编辑人: zml
 * @Date: 2021-03-16 16:22:47
 * @LastEditTime: 2021-03-17 17:19:26
 * @最后编写人: zml
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import store from '../store/index'
import Layout from '@/Layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { title: '首页'}
    }]
  },
  {
    path: '/service',
    component: Layout,
    redirect: '/policyService',
    children: [{
      path: '/policyService',
      name: 'PolicyService',
      component:() => import('@/views/PolicyService/index'),
      meta: { title: '政策服务'}
    }]
  },
  {
    path: '/Agency',
    component: Layout,
    redirect: '/AgencyService',
    children: [{
      path: '/AgencyService',
      name: 'AgencyService',
      component:() => import('@/views/AgencyService/index'),
      meta: { title: '机构服务'}
    }]
  },
  {
    path: '/Others',
    component: Layout,
    redirect: '/Other',
    children: [{
      path: '/Other',
      name: 'Other',
      component:() => import('@/views/Other/index'),
      meta: { title: '其他咨询'}
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
    meta: { title: '登录'}
  },
  {
    path: '/register',
    component: () => import('@/views/Login/register'),
    meta: { title: '注册'}
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // ...
  console.log(to,from)
  // localStorage.setItem('path',to.path)
  store.commit('setPath',to.path)
  console.log(store)
  next()
})

export default router
