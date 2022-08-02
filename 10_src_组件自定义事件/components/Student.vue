<template>
    <div class="student">
        <h2>学生姓名{{name}}</h2>
        <h2>学生性别{{sex}}</h2>
        <button @click="sendStudentName">发送学生名称</button>
        <button @click="uBing">解除绑定事件</button>
        <button @click="death">销毁vc组件</button>
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
        methods: {
            sendStudentName(){
                this.$emit('diyFunction',this.name,666,777,888)
                // this.$emit('demo')
            },
            uBing(){
                this.$off('diyFunction') //解除单个事件
                // this.$off(['diyFunction','demo']) //解除多个事件
                // this.$off() //解除所有事件
            },
            death(){
                //vc销毁后 自定义事件失效
                this.$destroy()
            }
        },
    }
</script>

<style lang="less" scoped>
    .student{
        background-color: blue;
        .ziti{
            font-size: 40px;
        }
    }
</style>
