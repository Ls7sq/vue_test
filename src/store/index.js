//该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

import personOptions from './person'

import countOptions from './count'

//使用Vuex插件
Vue.use(Vuex)

//创建store
const store = new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})

//暴露store
export default store