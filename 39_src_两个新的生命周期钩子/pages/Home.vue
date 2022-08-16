<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
        <ul class="nav nav-tabs">
            <li>
            <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
            <router-link class="list-group-item " to="/home/message">Message</router-link>
            </li>
        </ul>
        <keep-alive include="News">
          <router-view></router-view>
        </keep-alive>
        </div>
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