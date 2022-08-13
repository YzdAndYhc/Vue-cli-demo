<template>
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <router-link :to="{
                    name:'xiangqing',
                    path:'/home/message/detial',
                    params:{
                        id:msg.id,
                        title:msg.title
                    }
                }">
                    {{msg.title}}
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
    }
</script>

<style>

</style>