<template>
    <div class="demo">
        <h2>学校姓名:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="sendShoolName">点击发送学校名称</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'实验高中',
                address:'北京'
            }
        },
        methods: {
            sendShoolName(){
                this.$bus.$emit('hello',this.name)
            }
        },
    }
</script>

<style scoped>
    .demo{
        background-color: orange;
    }
</style>