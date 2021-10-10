<template>
  <div class="student">
      <h2>Student Name - {{name}}</h2>
      <h2>Student Sex - {{sex}}</h2>
      <button @click="sendStudentName">Send Student name to School component</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
            // this.$bus.$emit('hello',this.name)
            pubsub.publish('hello',666)
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