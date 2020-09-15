import Vue from 'vue'
import Discount from './Discount.vue'
import "./assets/style/reset.css"
import router from './router/discount'
import store from './store/discounts'
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(Discount)
}).$mount('#app')
