<template>
<h1>我是根标签</h1>
<h1>姓名：{{name}}</h1>
<h1>年龄：{{age}}</h1>
<h1>性别：{{sex}}</h1>
<button @click="sayHello">vue3配置的方法</button>
<br>
<br>
<button @click="sayHelloo">vue2配置的方法</button>
<br>
<br>
<button @click="test1">vue2中读取vue3的数据、方法</button>
<br>
<br>
<button @click="test2">vue3中读取vue2的数据、方法</button>
</template>

<script>
// import { h } from "vue";
export default {
  name: 'App',
  data() {
    return {
        sex:'男'
    }
  },
  methods: {
    sayHelloo(){
        alert('欢迎学习')
    },
    test1(){
        console.log(this.name);
        console.log(this.sex);
        console.log(this.age);
        this.sayHello()
    }
  },
//   此处只是测试，不考虑响应式
  setup() {
    let name = '张三';
    let age = 18;
    function sayHello() {
        alert(`我叫${name}，我${age}岁，你好啊`);
    };
    function test2(){
        console.log(age);
        console.log(name);
        console.log(sayHello);
        console.log(this.sayHelloo);
        console.log(this.sex);
        
    }
    // 返回一个对象（常用）
    return {
        name,
        age,
        sayHello,
        test2
    };

    // 返回一个函数（渲染函数）
    // return ()=>{return h('h1','尚硅谷')}
  }
}
</script>

<style>

</style>
