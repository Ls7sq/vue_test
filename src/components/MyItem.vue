<template>
    <li>
        <label>
                                                        <!-- 1.click事件 -->
            <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)" /> -->

                                                        <!-- 2.change事件 -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />

            <!-- 👇可以不借助一层层传递数据实现相同功能，但是不推荐，毕竟子级直接修改了props -->
            <!-- <input type="checkbox" v-model="todo.done" /> -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name:"MyItem",
        //声明接受todo对象
        props:['todo'],
        methods:{
            //勾选或者取消勾选
            handleCheck(id){
                //通知App组件将对应的todo对象的done值取翻
                //console.log(this)
                //this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            //删除
            handleDelete(id){
                if(confirm('Are you confirm')){
                    //this.deleteTodo(id)
                    this.$bus.$emit('deleteTodo',id)
                }
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