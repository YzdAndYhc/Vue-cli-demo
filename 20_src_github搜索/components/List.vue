<template>
    <div class="row">
        <h1 v-show="info.isFrist">欢迎使用搜索！</h1>
        <h1 v-show="info.isLoading">正在查询中！</h1>
        <h1 v-show="info.errMsg">{{info.errMsg}}</h1>

        <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'List',
        data() {
            return {
                info:{
                    isFrist:true,
                    isLoading:false,
                    errMsg:'',
                    users:[],
                }
            }
        },
        mounted() {
            this.$bus.$on('getUsers',(dataObj)=>{
                // console.log('我是List组件收到了',users)
                this.info = {...this.info,...dataObj}
            })
        },
    }
</script>

<style scoped>
    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }
</style>