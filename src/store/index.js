/*
 * @文件内容描述: 
 * @编辑人: zml
 * @Date: 2021-03-16 16:22:47
 * @LastEditTime: 2021-03-17 17:19:00
 * @最后编写人: zml
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path:localStorage.getItem('path')
  },
  mutations: {
    setPath(state,val) {
      state.path = val
      localStorage.setItem('path',val)

    }
  },
  actions: {
  },
  modules: {
  }
})
