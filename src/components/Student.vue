<template>
  <div class="student">
      <h2>Student Name - {{name}}</h2>
      <h2>Student Sex - {{sex}}</h2>
      <button @click="sendStudentName">pass name to App</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:"zhangsan",
            sex:"M"
        }
    },
    methods: {
        sendStudentName(){
            //触发Student组件实例身上的atguigu事件
            this.$emit('atguigu',this.name,777,888,'checkcheck')
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