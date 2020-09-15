import Vue from 'vue'
import VueRouter from 'vue-router'
import More from '../views/more/More'
Vue.use(VueRouter)
const routes = [
    {
      path:'/',
      redirect:'/More/'
    },
    {
      path:"/More",
      component:More
    }
]

const router = new VueRouter({
    routes
  })
  
export default router