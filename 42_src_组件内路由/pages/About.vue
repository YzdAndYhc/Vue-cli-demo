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
        },
        //通过路由规则，进入组件时调用
        beforeRouteEnter(to,from,next){
            if(to.meta.isAuth){
                if(localStorage.getItem('school') === 'hello'){
                    next();
                }else{
                    alert("学校名称不对")
                }
            }else{
                next();
            }
        },
        beforeRouteLeave(to,from,next){
            next();
        }
    }
</script>

<style>

</style>