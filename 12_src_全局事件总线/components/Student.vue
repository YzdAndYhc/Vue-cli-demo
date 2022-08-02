<template>
    <div class="demo">
        <h2 class="ziti">学生姓名{{name}}</h2>
        <h2>学生性别{{sex}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'杨自东',
                sex:'男'
            }
        },
        mounted() {
            this.$bus.$on('hello',(data)=>{
                console.log('我是学生组件@',data)
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        }
    }
</script>

<style lang="less" scoped>
    .demo{
        background-color: blue;
        .ziti{
            font-size: 40px;
        }
    }
</style>
