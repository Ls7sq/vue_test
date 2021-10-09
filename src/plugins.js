export default {
    install(Vue){
        //全局过滤器
        Vue.filter('mySlice', function(value){
            return value.slice(0,4)
        })
        //全局指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时(一上来)
            bind(element, binding){
                element.value = binding.value
            },
            inserted(element,binding){
                element.focus()
            } ,
            updated(element,binding){
                element.value=binding.value
            }
        })

        //定义mixin
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
            },
        })

        //Vue原型添加一个方法
        Vue.prototype.hello = ()=>{alert('Hello')}
    }
}

