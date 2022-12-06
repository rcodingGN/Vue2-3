<template>
    <h1>{{x}}</h1>
    <button @click="x++">点我加一</button>
	<h1>个人信息</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪水：{{person.job.j1.salary}}K</h2>
    <button @click="person.name+='~'">修改名字</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
	import {ref,reactive,toRef,toRefs,shallowReactive,shallowRef} from 'vue'
	export default {
		name: 'Demo',

		setup(){
			//数据
            // let person = shallowReactive({}) 只考虑对象第一层的数据
            let person = shallowRef({
                name:'张三',
                age:18,
                job:{
                    j1:{
                        salary:'20'
                    }
                }
            })
            /* 只处理基本数据类型的响应式, 不进行对象的响应式处理
            let x = shallowRef({
                y:0
            })
             */
            let x = ref(0)
            

			return {
                x,
                person
			}
		}
	}
</script>

