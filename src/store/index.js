import Vue from 'vue';
import Vuex from 'vuex';
// 调取接口
import { getHouseList } from "../apis/apis"
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
     houseList:[], //所有数据
     historyList:[], //历史记录
     city:"定位中"
  },
  mutations: {
    // 获取房子信息列表
    getHouseList(state,data){
       state.houseList=data.data.data;
    },
    // 切换城市（与首页）
    getCurrentCity(state,city){
       state.city=city;
       console.log("vuex:",state.city);
    }
  },
  actions: {
    getHouseList(context){
        // 中午位置  通过vuex来获取异步数据渲染到Home页面； //点击数据已经可获取到index，存入store，
        getHouseList()
        .then( (data)=>{ 
          // console.log(data);
          context.commit("getHouseList",data);
        }).catch( (err)=>{ throw err})
    }
  },
  modules: {
  }
})
