// 引入的不再是Vue的构造函数，引入的是一个名称createApp的工厂函数
// 构造函数需要使用new来调用且首字母大写，工厂函数不需要使用new调用
import { createApp } from 'vue'
import App from './App.vue'

/* vue3拆开写法
// 创建应用实例对象——app（类似于vue2中的vm，但app比vm更“轻”）
const app = createApp(App)
// 挂载
app.mount('#app') */

createApp(App).mount('#app')

/* vue2写法
const vm = new Vue({
    render:(h)=>{return h(App)}
})
vm.$mount('#app')
 */