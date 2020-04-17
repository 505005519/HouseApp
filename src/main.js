import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //自动配置的仓库

import "./assets/styles/reset.css"; //重置样式
import "./assets/fonts/iconfont.css" //引入阿里巴巴 矢量图标css（使用参照示例）

// vant：引入-挂载
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// vant 懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);

// axios 
import axios from "axios";
Vue.prototype.axios=axios;
// qs
import qs from "qs";
Vue.prototype.qs=qs;
Vue.config.productionTip = false;

// 拦截器
import "./utils/utils"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
