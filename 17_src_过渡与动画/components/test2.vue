<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition appear
         name="animate__animated animate__bounce" 
         enter-active-class="animate__swing"
         leave-active-class="animate__backOutUp"
        >
            <h1 v-show="isShow">你好！</h1>
        </transition>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name:'test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: aquamarine;
    }
    .hello-enter-active{
        animation: cartoon 1s;
    }
    .hello-leave-active{
        animation: cartoon 1s reverse;
    }
    @keyframes cartoon{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>