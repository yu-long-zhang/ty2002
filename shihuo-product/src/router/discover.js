import Vue from 'vue'
import VueRouter from 'vue-router'
import Discover from '../views/discover/Discover'
Vue.use(VueRouter)
const routes = [
    {
      path:'/',
      redirect:'/Discover/'
    },
    {
      path:"/Discover",
      component:Discover
    }
]

const router = new VueRouter({
    routes
  })
  
export default router