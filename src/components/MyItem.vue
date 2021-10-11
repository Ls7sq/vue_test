<template>
    <li>
        <label>
                                                        <!-- 1.click事件 -->
            <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)" /> -->

                                                        <!-- 2.change事件 -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />

            <!-- 👇可以不借助一层层传递数据实现相同功能，但是不推荐，毕竟子级直接修改了props -->
            <!-- <input type="checkbox" v-model="todo.done" /> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
                v-show="todo.isEdit" 
                type="text" 
                :value="todo.title"
                @blur="handleBlur(todo,$event)"
                ref="inputTitle"
            >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">Edit</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:"MyItem",
        //声明接受todo对象
        props:['todo'],
        methods:{
            //勾选或者取消勾选
            handleCheck(id){
                //通知App组件将对应的todo对象的done值取反
                //console.log(this)
                //this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            //删除
            handleDelete(id){
                if(confirm('Are you confirm')){
                    //this.deleteTodo(id)
                    //this.$bus.$emit('deleteTodo',id)
                    pubsub.publish('deleteTodo',id)
                }
            },
            //编辑
            handleEdit(todo){
                // todo.isEdit = true
                if (todo.hasOwnProperty('isEdit')) {
                    todo.isEdit = true
                }else{
                    //todo身上没有isEdit给他添加这个属性并赋予true
                    this.$set(todo,'isEdit',true)
                }
                this.$nextTick(function(){
                    this.$refs.inputTitle.focus()  
                })
            },
            //失去焦点回调(真正执行修改逻辑)
            handleBlur(todo,e){
                this.todo.isEdit = false
                //console.log(e.target.value)
                if (!e.target.value.trim()) {
                    return alert('输入不为空')
                }
                this.$bus.$emit('updateTodo',todo.id, e.target.value)
            }
        }
    }
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
    li:hover{
        background-color: #ddd;
    }

    li:hover button{
        display: block;
    }
</style>