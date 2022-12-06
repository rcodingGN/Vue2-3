<template>
  <div class="app">
    <h3>我是App组件(祖)，{{car.name}}--{{car.price}}</h3>
  </div>

  <Child/>
</template>

<script>
import Child from './components/Child.vue'
import { reactive,provide } from "vue";
export default {
    name:'App',
    components:{
        Child
    },
    setup() {
        let car = reactive({
            name:'奔驰',
            price:40,
        })
        provide('car',car) // 给自己的后代组件传递数据

        return {
            car
        }
    }
}
</script>

<style>
.app{
    background-color: gray;
    padding: 10px;
}
</style>