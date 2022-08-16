<template>
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <router-link :to="{
                    name:'xiangqing',
                    path:'/home/message/detial',
                    query:{
                        id:msg.id,
                        title:msg.title
                    }
                }">
                    {{msg.title}}
                    <button @click="pushShow(msg)">push查看</button>
                    <button @click="replaceShow(msg)">replace查看</button>
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div> 
</template>

<script>
    export default {
        name:'Message',
        data() {
            return {
                messageList:[
                    {id:'001',title:'AAA'},
                    {id:'002',title:'BBB'},
                    {id:'003',title:'CCC'},
                ]
            }
        },
        methods: {
            pushShow(msg){
                this.$router.push({
                    name:'xiangqing',
                    path:'/home/message/detial',
                    query:{
                        id:msg.id,
                        title:msg.title
                    }
                })
            },
            replaceShow(msg){
                this.$router.replace({
                    name:'xiangqing',
                    path:'/home/message/detial',
                    query:{
                        id:msg.id,
                        title:msg.title
                    }
                })
            }
        },
    }
</script>

<style>

</style>