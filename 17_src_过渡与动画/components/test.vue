<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">你好！</h1>
        </transition>
        <hr>
        <transition-group name="test" appear>
            <h1 v-show="!isShow" key="1">我来了！</h1>
            <h1 v-show="isShow" key="2"> 我走了！</h1>
        </transition-group>
    </div>
</template>

<script>
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
    .test-enter-active{
        animation: cartoon 1s;
    }
    .test-leave-active{
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