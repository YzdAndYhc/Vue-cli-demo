<template>
  <div>
    <Student/>
    <hr>
    <School/>
  </div>
</template>

<script>
    //引入Shool组件
    import Student from './components/Student'
    import School from './components/School'

    export default {
        name:'App',
        components: { Student,School },
    }
</script>