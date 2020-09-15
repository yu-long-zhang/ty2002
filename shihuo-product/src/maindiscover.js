import Vue from 'vue'
import Discover from './Discover.vue'
import "./assets/style/reset.css"
import router from './router/discover'
import store from './store/discovers'
import Vant from 'vant';
import 'vant/lib/index.css';
//轮播图
import Swiper from "swiper"
import 'swiper/dist/css/swiper.css'

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(Discover)
}).$mount('#app')
