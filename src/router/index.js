import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import ProductList from '@/components/product/ProductList'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/login',
      name: '登陆',
      component: Login
    },
    {
      path: '/productlist',
      name: '产品列表',
      component: ProductList
    },
    {
      path: '/aboutus',
      name: '关于我们',
      component: AboutUs
    }
  ]
})
