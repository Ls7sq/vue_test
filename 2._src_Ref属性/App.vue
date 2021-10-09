<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">Please click me</button>
    <School ref="sch" />

  </div>
</template>

<script>
//引入School组件
import School from './components/School.vue'

export default {
    name:'App',
    components:{School},
    data() {
      return {
        msg:"Welcome"
      }
    },
    methods:{
      showDOM(){

        console.log(this.$refs)
        console.log("Current this")
        console.log(this)

        console.log("DOM h1: ")
        console.log(this.$refs.title)//真实的DOM元素

        console.log("DOM button: ")
        console.log(this.$refs.btn)//真实的DOM元素

        console.log("VueComponent: ")
        console.log(this.$refs.sch)//School组件的实例对象(vc)
      }
    }
}
</script>
