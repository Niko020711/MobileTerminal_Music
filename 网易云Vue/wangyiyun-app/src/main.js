import Vue from 'vue'
import App from './App.vue'
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

import store from './store/index.js'
Vue.use(Vant);
import router from './router/router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
