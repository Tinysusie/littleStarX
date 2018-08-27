import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import Home from '@/components/front/Home'
import ArticleList from '@/components/front/ArticleList'
import ArticleDetail from '@/components/front/ArticleDetail'

import Manage from '@/components/back/Manage'
import EditPost from '@/components/back/EditPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/manage',
      name: 'Manage',
      component: Manage,
      redirect:"/EditPost",
      children:[
        {
          path:'/EditPost',
          name:'EditPost',
          component:EditPost,
        }
      ]
    },{
      path: '/home',
      name: 'Home',
      redirect:"/articleList",
      component: Home,
      children:[
        {
          path:'/articleList',
          name:'ArticleList',
          component:ArticleList,
        },{
          path:'/articleDetail',
          name:'ArticleDetail',
          component:ArticleDetail,
        }
      ]
    }
  ]
})
