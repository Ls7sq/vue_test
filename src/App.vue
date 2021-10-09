<template>
  <div>
    <Student name='zhangsan' sex='M'/>
    <hr>
    <Student name="lisi" :age='20' sex="F"/>
    <hr>
    <Student name="wanglaowu" :age='55' sex="M" />
  </div>
</template>

<script>
//引入School组件
import Student from './components/Student.vue'

export default {
    name:'App',
    components:{Student},
}
</script>
