import App from './App'

// Api函数polyfill（目前为实验版本，如不需要，可删除！）';
// import Polyfill from './polyfill/polyfill';
// Polyfill.init();

// // 全局mixins，用于实现setData等功能，请勿删除！';
// import Mixin from './polyfill/mixins';

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})

//挂载全局异步请求方法
import * as request from '@/utils/request.js'
for(let key in request){
	Vue.prototype[key]=request[key]
}


app.$mount()
import uView from "uview-ui";
Vue.use(uView);
// #endif
import search from "@/components/search/search.vue"
Vue.component('search',search)
// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif