<template>
  <div>
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader @addTodo="addTodo" />
          <MyList :todos="todos" />
          <MyFooter :todos="todos" @chechAllTodo='chechAllTodo' @clearAllTodo='clearAllTodo'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
//引入School组件
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyList from './components/MyList.vue'

export default {
    name:'App',
    components:{MyHeader,MyFooter,MyList},
    data() {
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || []
          // {id:'001',title:"chouyan",done:true},
      }
    },
    methods:{
      //添加一个todo
      addTodo(todoObj){
        this.todos.unshift(todoObj)
      },
      //勾选或者取消一个todo
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if (todo.id === id) {
            todo.done = !todo.done            
          }
        })
      },
      //更新一个todo
      updateTodo(id, title){
        this.todos.forEach((todo)=>{
          if (todo.id === id) {
            todo.title = title            
          }
        })
      },
      //删除一个todo
      deleteTodo(_,id){
        this.todos = this.todos.filter( todo => todo.id !== id)
      },
      //全选或者取消全选
      chechAllTodo(done){
        this.todos.forEach(todo=>todo.done=done)
      },
      //清除所有已完成的todo
      clearAllTodo(){
        this.todos = this.todos.filter(todo=>{
          return !todo.done
        })
      }
    },
    watch: {
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value))
        }
      }
    },
    mounted() {
      this.$bus.$on('checkTodo',this.checkTodo)
      //this.$bus.$on('deleteTodo',this.deleteTodo)
      this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo)

      this.$bus.$on('updateTodo',this.updateTodo)
    },
    beforeDestroy(){
      //this.$bus.$off(['checkTodo','deleteTodo'])
      this.$bus.$off('checkTodo')
      this.$bus.$off('updateTodo')
      pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-edit{
    color: #fff;
    background-color: #72d3e4;
    border: 1px solid #6cb7df;
    margin-right: 5px;
  }
  .btn-edit:hover {
    color: #fff;
    background-color: #48bace;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>