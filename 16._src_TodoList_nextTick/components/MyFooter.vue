<template>
    <div v-show="total" class="todo-footer">
        <label>
          <!-- 此时的计算元素isAll只有getter，checkbox的是否checked的属性由isAll返回的布尔值决定 -->
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->

          <!-- 用v-model绑定 isAll 这样点击checkbox就会有setter的功能参与进来，计算属性不可再用单一的getter简写形式-->
          <!-- 要用计算属性的完整写法。这时候也能省略checkAll的methods了 -->
             <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{doneTotal}} </span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:"MyFooter",
        props:['todos'],
        computed:{
          total(){
            return this.todos.length
          },
          doneTotal(){
            return this.todos.reduce((pre, todo)=> pre+( todo.done ? 1 : 0),0)
          },
          // isAll(){
          //   return this.doneTotal===this.total && this.total>0
          // }
          isAll:{
            get(){
              return this.doneTotal===this.total && this.total>0
            },
            set(value){
              //console.log(value) 
              this.$emit('chechAllTodo',value)
            }
          }
        },
        methods: {
          // checkAll(e){
          //   this.chechAllTodo(e.target.checked)
          // }
          clearAll(){
            if (confirm('Are you sure?')) {
              this.$emit('clearAllTodo')              
            }
          }
        },
    }
</script>

<style scoped>
/*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>