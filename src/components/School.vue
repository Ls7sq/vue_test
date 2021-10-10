<template>
  <div class="school">
      <h2>School Name - {{name}}</h2>
      <h2>School Address - {{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    props:['getSchoolName'],
    data() {
        return {
            name:"NUS12345",
            address:"Singapore"
        }
    },
    methods: {
        subMethod(msgName,data){
            console.log(this)
            console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
        }
    },
    mounted() {
        // this.$bus.$on('hello',(data)=>{
        //     console.log("school component, receive data", data)
        // })

        //消息订阅方法1，用lambda表达式方法，获得this为vc
        
        // this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
        //     console.log(this)
        //     console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
        // })

        //消息订阅方法2，把方法放在methods里
        this.pubId = pubsub.subscribe('hello',this.subMethod)
    },
    beforeDestroy(){
        //this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
    .school{
        background-color: orange;
        padding: 5px;
    }
</style>