//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建一个路由器
const router = new VueRouter({
    routes: [
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            //props第一种写法：值为对象，该对象中的key-value都会以props的形式传给Detail组件
                            //props:{}

                            //props第二种写法：值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            //props:true

                            //props第三种写法：值为函数
                            // props($route){
                            //     return {id:$route.query.id, title:$route.query.title}
                            // }

                            //结构赋值
                            // props({query:{id,title}}){
                            //     return {id, title}
                            // }
                            props({query}){
                                return {id: query.id, title: query.title}
                            }
                        },
                        
                    ]
                }
            ]
        },
    ]
})

//全局前置路由守卫——初始化的时候调用，每次路由切换之前被调用
router.beforeEach((to, from, next)=>{
    console.log(to,from)
    if(to.name === 'xinwen' || to.path === '/home/message'){
        if(localStorage.getItem('school')==='atguigu'){
            next()
        }else{
            alert("没有权限看啊")
        }
    }else {
        next()
    }
    
})

//暴露一个路由器
export default router