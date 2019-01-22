import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [createPersistedState()], // 刷新数据丢失
  state: {
    productNumAll: 0,
    goodsCar: {},
    activeBarIndex: 0,
    goodsBuyingAll: [],
  },
  mutations,
  actions,
})
