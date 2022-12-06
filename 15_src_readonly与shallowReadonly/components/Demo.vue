<template>
    <h1>{{sum}}</h1>
    <button @click="sum++">点我加一</button>
	<h1>个人信息</h1>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪水：{{job.j1.salary}}K</h2>
    <button @click="name+='~'">修改名字</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
	import {ref,reactive,toRefs,readonly,shallowReadonly} from 'vue'
	export default {
		name: 'Demo',

		setup(){
			//数据
            let sum = ref(0)
            let person = reactive()({
                name:'张三',
                age:18,
                job:{
                    j1:{
                        salary:'20'
                    }
                }
            })
            
            // person = readonly(person)
            person = shallowReadonly(person) 

			return {
                sum,
                ...toRefs(person)
			}
		}
	}
</script>

