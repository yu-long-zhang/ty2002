import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeList:{
      tuijian:[]
    },
    itemList:{
      xiangqing:[]
    },
    outlist:{
      Outfit:[]
    },
    swiper:{
      img:{
        a:"http://shihuo.hupucdn.com/appHome/201901/0720/18cffc61c52a5ce61173479619bbaa6e.png?imageView2/2/w/750/h/380/interlace/1",
        b:"http://shihuo.hupucdn.com/appHome/201901/0909/246bc13aad8b60058a81d242512e983f.png?imageView2/2/w/750/h/380/interlace/1",
        c:"http://shihuo.hupucdn.com/appHome/201901/0810/e3e9e3e19c8ac46b699f554b3aca7538.jpg?imageView2/2/w/750/h/380/interlace/1",
        d:"http://shihuo.hupucdn.com/appHome/201901/1010/5480e24dc886bde3fd4c599d22330d65.png?imageView2/2/w/750/h/380/interlace/1",
        e:"http://shihuo.hupucdn.com/appHome/201901/0500/d63108ffbf581d59f8d3552e346b8258.jpg?imageView2/2/w/750/h/380/interlace/1",
      },
      height:'190px'
    }
  },
  mutations: {
    setHomeList(state,states){
      state.homeList.tuijian.push(...states)
    },
    setMenu(state,status){
      state.showMenu = status;
    },
    List(state,states){
      state.itemList.xiangqing.push(...states)
    },
    fitlist(state,states){
      state.outlist.Outfit.push(...states)  
    },
    listNull(state){
      let len = state.itemList.xiangqing.length;
      state.itemList.xiangqing.splice(0,len)
    }
  },
  actions: {
  },
  modules: {
  }
})
