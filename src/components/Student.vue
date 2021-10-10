<template>
  <div class="student">
      <h2>Student Name - {{name}}</h2>
      <h2>Student Sex - {{sex}}</h2>
      <h2>Current Number - {{number}}</h2>
      <button @click="add">n++</button>
      <button @click="sendStudentName">pass name to App</button>
      <button @click="unbind">Unbind the atguigu event</button>
      <button @click="death">Destroy Student component</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:"zhangsan",
            sex:"M",
            number:0
        }
    },
    methods: {
        add(){
            console.log('n invoke')
            this.number++
        },
        sendStudentName(){
            //触发Student组件实例身上的atguigu事件
            this.$emit('atguigu',this.name,777,888,'checkcheck')
            this.$emit('demo')
        },
        unbind(){
            //this.$off('atguigu')//解绑一个自定义事件
            //this.$off(['atguigu','demo'])//解除多个自定义事件
            this.$off()//解除所有自定义事件
        },
        death(){
            this.$destroy()//销毁了当前Student组件的实例,销毁之后所有Student实例的自定义事件全都不奏效了
        }
    },
}
</script>

<style lang="less">
    .student{
        background-color:pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>