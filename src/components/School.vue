<template>
  <div class="school">
      <h2>School Name - {{name}}</h2>
      <h2>School Address - {{address}}</h2>
      <button @click="sendSchoolName">pass name to App</button>
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
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    },
}
</script>

<style scoped>
    .school{
        background-color: orange;
        padding: 5px;
    }
</style>