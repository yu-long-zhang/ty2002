import Vue from 'vue'
import VueRouter from 'vue-router'
import Discount from '../views/discount/Discounts'
import Hits from '../views/discount/Hits'
Vue.use(VueRouter)
const routes = [
    {
      path:'/',
      redirect:'/Discount/'
    },
    {
      path:"/Discount",
      component:Discount,
      redirect:'/Discount/Hits',
      children:[
          {
            path:'Hits',
            component:Hits
          },
          
      ]
    }
]

const router = new VueRouter({
    routes
  })
  
export default router