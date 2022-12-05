<template>
    <h1>个人信息</h1>
    <h1 v-show="person.name">姓名：{{person.name}}</h1>
    <h1>年龄：{{person.age}}</h1>
    <h1 v-show="person.sex">性别：{{person.sex}}</h1>
    <h1>工作种类：{{person.job.type}}</h1>
    <h1>薪水：{{person.job.salary}}</h1>
    <h1>测试：{{person.job.a.b.c}}</h1>
    <h1>测试爱好：{{person.hobby}}</h1>
    <button @click="changeInfo">修改信息</button>
    <button @click="addSex">添加一个sex属性</button>
    <button @click="deleteName">删除一个name属性</button>
</template>

<script>
import { reactive } from "vue";
export default {
    name: 'App',

    //   此处只是测试，不考虑响应式
    setup() {
        // 数据
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                type: '前端工程师',
                salary: '30K',
                a: {
                    b: {
                        c: 1
                    }
                }
            },
            hobby:['抽烟','喝酒']
        })
    //    方法
        function changeInfo() {
            // name.value = '李四'
            // age.value = 48
            // console.log(job.value); // ref定义的   proxy对象
            /* ref定义的需要使用.value  
           job.value.type = '后端工程师'
            job.value.salary = '35K' */

            // console.log(job);  // reactive定义的  proxy对象
            // reactive定义的 不需要.value 可以直接取值
            person.job.type = '后端工程师'
            person.job.salary = '35K'
            person.job.a.b.c = 999
            person.hobby[0] = '学习'


            // console.log(name,age);
        }
        function addSex() {
            person.sex = '男'
        }
        function deleteName() {
            delete person.name
        }

        // 返回一个对象（常用）
        return {
            person,
            changeInfo,
            addSex,
            deleteName
            
        };

        // 返回一个函数（渲染函数）
        // return ()=>{return h('h1','尚硅谷')}
    }
}
</script>

<style>
</style>
