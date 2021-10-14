import axios from 'axios'
import { nanoid } from 'nanoid'

export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('Wang')===0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加必须为Wang')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response=>{
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error=>{
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state, personObj){
            state.personList.unshift(personObj)
        }        
    },
    state:{
        personList:[{id:'001',name:"zhangsan"}]        
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    },    
}