<template>
  <div>
      <h1>人员列表</h1>
      <h3 style="color:red">Count组件求和为{{sum}}</h3>
      <h3>列表中第一个人的名字是: {{firstPersonName}}</h3>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="add">Add</button>
      <button @click="addWang">Add Wang</button>
      <button @click="addPersonServer">Add Person</button>
      <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState} from 'vuex'
export default {
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
        //...mapState(['personList'])
    },
    methods: {
        add(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('personAbout/ADD_PERSON',personObj)
            this.name=''
        },
        addWang(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('personAbout/addPersonWang',personObj)
            this.name=''
        },
        addPersonServer(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    },
}
</script>

<style>

</style>