<template>
  <div>
    <Test/>
    <Test2/>
  </div>
</template>

<script>
import Test from './components/test.vue'
import Test2 from './components/test2.vue'


export default {
    name:'App',
    components:{Test,Test2},

}
</script>
