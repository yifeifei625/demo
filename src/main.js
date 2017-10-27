import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import request from './utils/request'
import * as filters from './filters'

Vue.config.productionTip = false

Vue.prototype.$http = request

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import {
  Select
} from 'element-ui'
Vue.use(Select)
// Message组件引入
import Message from 'element-ui/lib/message'
Vue.prototype.$message = Message
// Notification组件引入
import Notification from 'element-ui/lib/notification'
Vue.prototype.$notify = Notification

// 路由跳转之前操作
// router.beforeEach((to, from, next) => {
//   console.log('to----');
//   console.log(to);
//   console.log('from----');
//   console.log(from);
//   next();
// })

router.afterEach(route => {
  // console.log(route);
  document.title = route.meta.title
})

sync(store, router)

new Vue({
  el: '#app',
  store,
  router,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})
