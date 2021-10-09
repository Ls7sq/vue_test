<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生名称：{{name}}</h2>	
    <h2>学生地址：{{address}}</h2>
  </div>
</template>

<script>
    const student = {
        name:'Student',
        data() {
            return {
                name:"student",
                address:"adress"
            }
        }
    }
    export default student
//组件交互相关的代码(数据，方法)
</script>
