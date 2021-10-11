<template>
    <ul class="todo-main">
      <transition-group name="todo" :appear='true'>
        <MyItem 
        :key="todoObj.id" 
         v-for="todoObj in todos" 
         :todo="todoObj" 
         />
      </transition-group>
    </ul>
</template>

<script>
    import MyItem from './MyItem.vue'
    export default {
        name:"MyList",
        components:{MyItem},
        data() {
          return {
            
          }
        },
        //接收来自App的传入，出现在MyList这个组件的实例对象vc身上，在vc身上的东西，上面👆模版可直接用
        props:['todos']
    }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  .todo-enter-active{
        animation: atguigu 1s;
    }

  .todo-leave-active{
        animation: atguigu 1s reverse;
    }

  @keyframes atguigu {
        from{
            transform: translate(100%);
        }
        to{
            transform: translate(0px);
        }
    }
</style>