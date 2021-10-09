<template>
  <div>
      <h1 v-text="msg"></h1>
      <h2>Student Name - {{name}}</h2>
      <h2>Student Sex - {{sex}}</h2>
      <h2>Student Age - {{myAge}}</h2>
      <button @click="updateAge">Age + 1</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            msg:'I am from NTU',
            myAge: this.age
        }
    },
    methods:{
        updateAge(){
            this.myAge++
        }
    },
    //简单声明接收
    //props:['name','sex','age']
    
    //接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }

    //接收的同时对数据: 进行类型限制 + 默认值的指定 + 必要性的限制
    props:{
        name:{
            type:String,//类型为字符串
            required:true//是必要的
        },
        age:{
            type:Number,
            default:10//默认值
        },
        sex:{
            type:String,
            required:true
        },
    }
}
</script>
