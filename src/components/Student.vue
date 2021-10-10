<template>
  <div class="student">
      <h2>Student Name - {{name}}</h2>
      <h2>Student Sex - {{sex}}</h2>
      <button @click="sendStudentName">Send Student name to School component</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:"zhangsan",
            sex:"M",
        }
    },
    methods: {
        sendStudentName(){
            //Student触发x身上的hello事件，接下来Student传递一个参数666去回调在School里的函数
            this.$bus.$emit('hello',this.name)
        }
    },
    mounted() {
        //console.log("student",this.x)
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