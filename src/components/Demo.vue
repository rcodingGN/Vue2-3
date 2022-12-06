<template>
	<h1>当前求和：{{sum}}</h1>
    <button @click="sum++">点我加一</button>
    <br><hr>
    <h2>当前的信息为：{{msg}}</h2>
    <button @click="msg+='!'">点我修改信息</button>
    <br><hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪水：{{person.job.j1.salary}}K</h2>
    <button @click="person.name+='~'">修改名字</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
	import {ref,watch,reactive} from 'vue'
	export default {
		name: 'Demo',

        // vue2写法
        // watch: {
        //     // 简写
        //     // sum(newValue,oldValue){
        //     //     console.log('sum发生变化',newValue,oldValue);
        //     // }
        //     // 完整写法
        //     // sum:{
        //     //     immediate:true, // 立即执行
        //     //     deep:true, // 深层监视
        //     //     handler(newValue,oldValue){
        //     //          console.log('sum发生变化',newValue,oldValue);
        //     //     }
        //     // }
        // },
		setup(){
			//数据
			let sum = ref(0)
            let msg = ref('你好啊')
            let person = reactive({
                name:'张三',
                age:18,
                job:{
                    j1:{
                        salary:'20'
                    }
                }
            })
            // 情况一：监视ref定义的一个响应式数据
            /* watch(sum,(newValue,oldValue)=>{
                console.log('sum发生变化',newValue,oldValue);
            },{immediate:true}); */

            // 情况二：监视ref定义的多个响应式数据
            /* watch([sum,msg],(newValue,oldValue)=>{
                console.log('sum或msg发生变化',newValue,oldValue);
            },{immediate:true}); */
            
           /* 
               情况三：监视reactive所定义的一个响应式数据
               注意：1、此处无法正确获得oldValue
                    2、强制开启了深度监视（deep配置无效）
           
           */
            /* watch(person,(newValue,oldValue)=>{
                console.log('person发生变化',newValue,oldValue);
            },{deep:false})  // 此处deep配置无效*/
            // 情况四：监视reactive所定义的一个响应式数据中的某个属性
            /* watch(()=>person.name,(newValue,oldValue)=>{
                console.log('person.name发生变化',newValue,oldValue);
            }) */

            // 情况五：监视reactive所定义的一个响应式数据中的某些属性
            /* watch(()=>person.age,()=>person.name,(newValue,oldValue)=>{
                console.log('person的name或age发生变化',newValue,oldValue);
            })  */

            // 特殊情况
            /* watch(()=>person.job,(newValue,oldValue)=>{
                console.log('person.job发生变化',newValue,oldValue);
            },{deep:true}) // 此处由于监视的是reactive所定义的对象中的某个属性，所以deep配置生效*/
			//返回一个对象（常用）
			return {
				sum,
                msg,
                person
                
                
			
			}
		}
	}
</script>

