<template>
  <div>
    <Student name='李四' sex='男' :age='18'/>
    <Student name='王五' sex='男' :age='19'/>
    <Student name='马六' sex='女' :age='20'/>
  </div>
</template>

<script>
    //引入Shool组件
    import Student from './components/Student'

    export default {
        name:'App',
        components: { Student },
    }
</script>

<style>

</style>