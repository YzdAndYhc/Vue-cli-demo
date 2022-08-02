<template>
    <div class="school">
        <h2>学校姓名:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="sendShoolName">发送学校名称</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        props:['shoolName'],
        data() {
            return {
                name:'实验高中',
                address:'北京'
            }
        },
        methods: {
            sendShoolName(){
                this.shoolName(this.name)
            }
        },
    }
</script>

<style scoped>
    .school{
        background-color: orange;
    }
</style>