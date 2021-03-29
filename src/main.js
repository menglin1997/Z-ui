/*
 * @文件内容描述: 
 * @编辑人: zml
 * @Date: 2021-03-16 16:22:47
 * @LastEditTime: 2021-03-17 17:20:54
 * @最后编写人: zml
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss' // global css
Vue.prototype.$store = store
// 引入Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
