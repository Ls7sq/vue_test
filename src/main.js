/*
  该文件是整个项目的入口文件
*/
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue生产提示
Vue.config.productionTip = false

//创建Vue实例对象----vm
new Vue({
  el:"#app",

  //从1到3依次精简
  //1. render(createElement){
  //   console.log('Render')
  //   return createElement('h1',"hello world")
  // },

  //2. render:(createElement)=>{
  //   console.log('Render')
  //   return createElement('h1',"hello world")
  // },
  
  //3. render:q=>q("h1","helloWorld"),
  // template:`<h1>TEST</h1>`,
  // component:{App}
  
  //完成将App放入容器中的功能
  render: h => h(App),
})
