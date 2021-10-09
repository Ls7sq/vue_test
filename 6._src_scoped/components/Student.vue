<template>
  <div class="demo">
      <h2 class="title">Student Name - {{name}}</h2>
      <h2 class="atguigu">Student Sex - {{sex}}</h2>
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
    }
}
</script>

<style lang="less">
    .demo{
        background-color:pink;
        .atguigu{
            font-size: 50px;
        }
    }
</style>