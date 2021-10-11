<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'App',
    methods: {
      getStudents(){
        axios.get('http://localhost:8080/students')
             .then(response=>{
               console.log('Successful', response.data)
             },error=>{
               console.log('Failed', error.message)
             })
      }
    },
}
</script>
