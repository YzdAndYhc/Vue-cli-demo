<template>
    <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name:'About',
        beforeDestroy(){
            console.log("我是About的内容 即将销毁")
        },
        mounted(){
            console.log("我是About的内容 挂载完毕")
        }
    }
</script>

<style>

</style>