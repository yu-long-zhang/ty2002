import Vue from 'vue'
import VueRouter from 'vue-router'
import Outfit from '../views/outfit/Outfit'
Vue.use(VueRouter)
const routes = [
    {
      path:'/',
      redirect:'/outfit/'
    },
    {
      path:"/outfit",
      component:Outfit,
    }
]

const router = new VueRouter({
    routes
  })
  
export default router