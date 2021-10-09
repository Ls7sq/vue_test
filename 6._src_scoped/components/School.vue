<template>
  <div class="demo">
      <h2 class="title">School Name - {{name}}</h2>
      <h2>School Address - {{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:"NUS12345",
            address:"Singapore"
        }
    }
}
</script>

<style scoped>
    .demo{
        background-color: orange;
    }
</style>