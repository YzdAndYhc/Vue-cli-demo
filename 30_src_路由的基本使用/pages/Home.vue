<template>
    <div>
        <h2>Home组件内容</h2>
    </div>
</template>

<script>
    export default {
        name:'Home',
        beforeDestroy(){
            console.log("我是Home的内容 即将销毁")
        },
        mounted(){
            console.log("我是Home的内容 挂载完毕")
        }
    }
</script>

<style>

</style>