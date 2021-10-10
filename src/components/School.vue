<template>
  <div class="school">
      <h2>School Name - {{name}}</h2>
      <h2>School Address - {{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    props:['getSchoolName'],
    data() {
        return {
            name:"NUS12345",
            address:"Singapore"
        }
    },
    mounted() {
        //console.log("school",this.x)
        
        //School给x绑定了一个事件叫做hello,School自身有个函数作为该hello事件如果被触发时，调用在School里的函数
        //该函数还接受一个参数data
        this.$bus.$on('hello',(data)=>{
            console.log("school component, receive data", data)
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    }
}
</script>

<style scoped>
    .school{
        background-color: orange;
        padding: 5px;
    }
</style>