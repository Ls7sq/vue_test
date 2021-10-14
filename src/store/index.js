//该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用Vuex插件
Vue.use(Vuex)

//求和相关配置
const countOptions={
    namespaced:true,
    actions:{
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
    },
    mutations:{
        JIA:function(state, val){
            state.sum += val
        },
        JIAN(state, val){
            state.sum -= val
        }        
    },
    state:{
        sum:0,//当前的数字
        school:'NUS',
        subject:'Vue',        
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }        
    },
}

//人员管理相关配置
const personOptions={
    namespaced:true,
    actions:{},
    mutations:{
        ADD_PERSON(state, personObj){
            state.personList.unshift(personObj)
        }        
    },
    state:{
        personList:[{id:'001',name:"zhangsan"}]        
    },
    getters:{},
}


//创建store
const store = new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})

//暴露store
export default store