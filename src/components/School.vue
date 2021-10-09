<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{name}}</h2>	
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">Click me</button>
  </div>
</template>

<script>
    const school = {
        name:'School',
        data() {
            return {
                name:"school",
                address:"adress"
            }
        },
        methods: {
            showName(){
                alert(this.name)
                console.info(this)
            }
        },
    }
    export default school
//组件交互相关的代码(数据，方法)
</script>

<style>
/* 组件的样式 */
    .demo{
        background-color: aliceblue;
    }
</style>