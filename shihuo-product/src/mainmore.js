import Vue from 'vue'
import More from './More.vue'
import "./assets/style/reset.css"
import router from './router/more'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(More)
}).$mount('#app')
