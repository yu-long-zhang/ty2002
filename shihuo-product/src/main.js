import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/style/reset.css";
import Swiper from "swiper"

import 'swiper/dist/css/swiper.css'




Vue.config.productionTip = false

new Vue({
  Swiper,
  router,
  store,
  render: h => h(App)
}).$mount('#app')