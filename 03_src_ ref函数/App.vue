<template>
<h1>个人信息</h1>
<h1>姓名：{{name}}</h1>
<h1>年龄：{{age}}</h1>
<h1>工作种类：{{job.type}}</h1>
<h1>薪水：{{job.salary}}</h1>
<button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'App',

//   此处只是测试，不考虑响应式
  setup() {
    let name = ref('张三');  // refimpl引用对象
    let age = ref(18);
    let job = ref({
        type:'前端工程师',
        salary:'30K'
    })

    function changeInfo() {
        // name.value = '李四'
        // age.value = 48
        // console.log(job.value); // proxy对象
        job.value.type = '后端工程师'
        job.value.salary = '35K'

        // console.log(name,age);
    }
    // 返回一个对象（常用）
    return {
        name,
        age,
        changeInfo,
        job
    };

    // 返回一个函数（渲染函数）
    // return ()=>{return h('h1','尚硅谷')}
  }
}
</script>

<style>

</style>
