<template>
  <div>
      <h2>Student Name - {{name}}</h2>
      <h2>Student Sex - {{sex}}</h2>
      <input type="text" v-fbind:value="name">
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
