<template>
    <input type="text" v-model="keyWord">
    <h3>{{keyWord}}</h3>
</template>

<script>
import { ref, customRef } from 'vue'
export default {
    name: 'App',
    setup() {
        // 自定义一个ref名为：myRef
        function myRef(value) {
            let timer
            return customRef((track, trigger) => {
                return {
                    get() {
                        console.log(`有人从mtRef容器中读取数据了，我把${value}传递给他`);
                        track() // 通知Vue追踪修改后的数据
                        return value
                    },
                    set(newValue) {
                        console.log(`有人把mtRef容器中数据修改为：${newValue}`);
                        clearTimeout(timer)
                        timer = setTimeout(() => {
                            value = newValue;
                            trigger() // 通知vue重新解析模板
                        }, 500);
                    }
                }
            })
        }
        // let keyWord = ref('hello') // 使用Vue提供的ref
        let keyWord = myRef('hello') // 使用程序员自定义的ref

        return {
            keyWord
        }
    }

}
</script>

