import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import shouye from '../views/home/shouye/shouye'
import tuijian from '../views/home/shouye/tuijian/tuijian'
import quanbu from '../views/home/shouye/tuijian/quanbu/quanbu'
import xiangqing from '../views/xiangqing/xiangqing'
import lanqiu from '../views/home/shouye/lanqiu/lanqiu'
import paobu from '../views/home/shouye/paobu/paobu'
import jianshen from '../views/home/shouye/jianshen/jianshen'
import chaoliu from '../views/home/shouye/chaoliu/chaoliu'
import dptj from '../views/home/shouye/tuijian/dptj/dptj'
import ycjx from '../views/home/shouye/tuijian/ycjx/ycjx'
import yhsw from '../views/home/shouye/tuijian/yhsw/yhsw'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/xiangqing',
      component:xiangqing
    },
    {
      path:'/home',
      component:Home,
      redirect:'/home/shouye',
      children:[
        {
          path:'/home/shouye',
          component:shouye,
          redirect:'/home/shouye/tuijian',
          children:[
            {
              path:'tuijian',
              component:tuijian,
              redirect:'/home/shouye/tuijian/quanbu',
              children:[
                {
                  path:'quanbu',
                  component:quanbu
                },
                {
                  path:'dptj',
                  component:dptj
                },
                {
                  path:'ycjx',
                  component:ycjx
                },
                {
                  path:'yhsw',
                  component:yhsw
                }
              ]
            },
            {
              path:'lanqiu',
              component:lanqiu
            },
            {
              path:'paobu',
              component:paobu
            },
            {
              path:'jianshen',
              component:jianshen
            },
            {
              path:'chaoliu',
              component:chaoliu
            },
          ]
        }
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router
