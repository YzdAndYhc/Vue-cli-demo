<template>
    <div>
        <ul>
            <!-- <li>消息编号：{{$route.params.id}}</li>
            <li>消息内容：{{$route.params.title}}</li> -->

            <li>消息编号：{{id}}</li>
            <li>消息内容：{{title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Detial',
        props:['id','title'],
        mounted(){
            // console.log(this.$route);
        }
    }
</script>

<style>

</style>