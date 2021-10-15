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
            component:About,
            meta:{isAuth:true, title:'AboutPage'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'HomePage'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true, title:'NewsPage'},
                    // beforeEnter: (to, from, next) => {
                    //         if(to.meta.isAuth){//判断是否需要鉴权
                    //             if(localStorage.getItem('school')==='atguigu'){
                    //             next()
                    //         }else{
                    //         alert("没有权限看啊")
                    //         }
                    //     }else {
                    //         next()
                    //     }
                    // }
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'MessagePage'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            meta:{isAuth:false, title:'DetailsPage'},
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

// //全局前置路由守卫——初始化的时候调用，每次路由切换之前被调用
// router.beforeEach((to, from, next)=>{
//     console.log('前置路由守卫',to,from)

//     if(to.meta.isAuth){//判断是否需要鉴权
//         if(localStorage.getItem('school')==='atguigu'){
//             next()
//         }else{
//             alert("没有权限看啊")
//         }
//     }else {
//         next()
//     }
// })

//全局后置路由守卫——初始化的时候调用，每次路由切换之后被调用
router.afterEach((to, from)=>{
    console.log('后置路由守卫',to,from)
    document.title = to.meta.title || 'Ls7'
})

//暴露一个路由器
export default router