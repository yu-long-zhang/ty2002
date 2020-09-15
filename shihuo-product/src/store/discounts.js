import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      discountsList:[],
  },
  mutations: {
      setDiscountsList(state,states){
          state.discountsList.push(...states)
      },
      //清空数组
      setDiscountListOne(state){
          let len = state.discountsList.length;
          state.discountsList.splice(0,len);
      }
  },
  actions: {
  },
  modules: {
  }
})
