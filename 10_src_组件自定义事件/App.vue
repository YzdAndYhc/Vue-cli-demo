<template>
  <div class="app">
    <h2>{{msg}}{{studentName}}</h2>
    <hr>
    <School :shoolName="shoolName"/>
    <hr>

    <!-- 组件绑定自定义事件 方法一使用@|v-on -->
    <!-- <Student @diyFunction.once="studentName"/> -->
    <!-- <Student @diyFunction="studentName" @demo="testOne"/> -->

    <!-- 组件绑定自定义事件 方法二使用ref -->
    <Student ref="studentRef" @click.native="show"/>
  </div>
</template>
<script>
    //引入Shool组件
    import Student from './components/Student'
    import School from './components/School'

    export default {
        name:'App',
        components: { Student,School },
        data() {
          return {
            msg:"你好阿!",
            studentName:""
          }
        },
        methods: {
          shoolName(name){
            console.log('app收到了学校名',name)
          },
          // studentName(name,...params){
          //   console.log('app收到了学生名',name,params)
          // },
          testOne(){
            console.log("test事件被触发了")
          },
          show(){
            alert("hello")
          }
        },
        mounted() {
          this.$refs.studentRef.$on('diyFunction',(name,...params)=>{
            //箭头函数 的 this寻找外层
            this.studentName = name
          })
          // this.$refs.studentRef.$on('diyFunction',this.studentName)
          // 只触发一次
          // this.$refs.studentRef.$once('diyFunction',this.studentName)
        },
    }
</script>

<style>
  .app{
    background-color: aqua;
  }
</style>