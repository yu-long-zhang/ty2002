import Vue from 'vue'
import outfit from './outfit.vue'
import "./assets/style/reset.css"
import router from './router/outfit'
import Vant from 'vant';
import store from './store/index'
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(outfit)
}).$mount('#app')