<template>
  <div>
      <h2>School Name - {{name | mySlice}}</h2>
      <h2>School Address - {{address}}</h2>
      <button @click="helloShow">click me</button>
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
    },
    methods:{
        helloShow(){
            this.hello()
        }
    }
}
</script>
