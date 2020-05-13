import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import ProductList from '@/components/product/ProductList'
import Product from '@/components/product/Product'
import AboutUs from '@/components/AboutUs'
import test from '@/components/product/xuanfu'
import PreviewFile from '@/components/file/PreviewFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // {
    //   path: '/hello',
    //   name: 'Hello',
    //   component: HelloWorld
    // },
    {
      path: '/login',
      name: '登陆',
      component: Login
    },
    {
      path: '/product',
      name: '产品',
      component: Product
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
    },
    {
      path: '/test',
      name: '音乐播放器',
      component: test
    },
    {
      path: '/filepreview',
      name: '文件预览',
      component: PreviewFile
    }
  ]
})
