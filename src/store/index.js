//该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用Vuex插件
Vue.use(Vuex)

//准备actions-用于响应组件中的动作
const actions = {
    // jia:function(context,val){
    //     context.commit('JIA', val)
    // },
    // jian(context, val){
    //     context.commit('JIAN',val)
    // },
    jiaOdd(context, val){
        if(context.state.sum % 2){
            context.commit('JIA',val)
        } 
    },
    jiaWait(context, val){
        setTimeout(()=>{
            context.commit('JIA',val)
        },500)
    }
}

//准备mutations-用于操作数据(state)
const mutations = {
    JIA:function(state, val){
        state.sum += val
    },
    JIAN(state, val){
        state.sum -= val
    }
}

//准备state-用于存储数据
const state = {
    sum:0,//当前的数字
}

//准备一个getters 用于将state里的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

//创建store
const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

//暴露store
export default store