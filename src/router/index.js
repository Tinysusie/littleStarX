import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Manage from '@/components/back/Manage'

import Home from '@/components/front/Home'
import ArticleList from '@/components/front/ArticleList'
import ArticleDetail from '@/components/front/ArticleDetail'

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
      component: Manage
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
          path:'/ArticleDetail',
          name:'ArticleDetail',
          component:ArticleDetail,
        }
      ]
    }
  ]
})
