<template>
    <div class="demo">
        <h2 class="ziti">学生姓名{{name}}</h2>
        <h2>学生性别{{sex}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'Student',
        data() {
            return {
                name:'杨自东',
                sex:'男'
            }
        },
        mounted() {
            // this.$bus.$on('hello',(data)=>{
            //     console.log('我是学生组件@',data)
            // })
            //订阅
            const pubsubid = pubsub.subscribe('hello',(msgName,msgValue)=>{
                console.log("有人发布"+msgName+"消息，内容是："+msgValue)
            })
        },
        beforeCreate() {
            //取消订阅
            pubsub.unsubscribe(this.pubsubid)
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
