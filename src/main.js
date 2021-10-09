/*
  该文件是整个项目的入口文件
*/
//引入Vue
import Vue from 'vue/dist/vue'
//引入App组件，它是所有组件的父组件
//import App from './App.vue'
//关闭vue生产提示
Vue.config.productionTip = false

//创建Vue实例对象----vm
new Vue({
  el:"#app",
  template:`<h1>Test</h1>`
  //完成将App放入容器中的功能
  //render: h => h(App),
})
