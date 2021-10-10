<template>
  <div class="app">
    <h1>{{msg}}, Student name is {{studentName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现 子组件给父组件传递数据 -->
    <School :getSchoolName="getSchoolName" /><hr>
    
    <!-- v-on在谁身上就是给谁绑定事件 -->
    <!-- 给student这个组件的实例对象vc身上绑定了一个自定义事件叫atguigu，如果以后有触发到了这个事件那么getStudentName函数会被调用 -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现 子组件给父组件传递数据 第一招(使用 @ 或者 v-on)-->
    <Student v-on:atguigu="getStudentName" />
    <!-- <Student @atguigu.once ="getStudentName" /> -->
    
    <!-- 绑定事件第二招 -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现 子组件给父组件传递数据 第二招(使用 ref)-->
    <Student ref="student" @click.native='show'/>
  </div>
</template>

<script>
//引入School组件
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
    name:'App',
    components:{Student, School},
    data() {
      return {
        msg:"hello",
        studentName:''
      }
    },
    methods: {
      getSchoolName(name){
        console.log('App收到学校名字：', name)
      },
      getStudentName(name,...params){
        console.log('demo invoke',name,JSON.stringify(params))
        this.studentName = name
      },
      m1(){
        console.log('m1 invoke')
      },
      show(){
        alert("原生事件,直接把click事件给到Student组件的模版的div 根元素")
      }
    },
    mounted() {
      setTimeout(() => {
        // this.$refs.student.$once('atguigu',this.getStudentName) 绑定自定义事件 一次性使用
          this.$refs.student.$on('atguigu',this.getStudentName)
      }, 3000);
      this.$refs.student.$on('demo',this.m1)
    },
}
</script>

<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>