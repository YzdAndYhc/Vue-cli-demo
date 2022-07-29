<template>
  <div>
    <h2 v-text="msg" ref="msg"></h2>
    <button @click="showDom" ref="btn">点击我输出DOM元素</button>
    <Shool ref="vc"/>
  </div>
</template>

<script>
    //引入Shool组件
    import Shool from './components/Shool'

    export default {
        name:'App',
        components: { Shool },
        data() {
          return {
            msg:'欢迎学习Vue'
          }
        },
        methods:{
          showDom(){
            console.log(this.$refs)
          }
        }
    }
</script>

<style>

</style>