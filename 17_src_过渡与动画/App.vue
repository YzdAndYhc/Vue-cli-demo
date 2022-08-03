<template>
  <div>
    <h2>test</h2>
    <test/>
    <hr>
    <h2>test2</h2>
    <Test2/>
  </div>
</template>

<script>
    import test from './components/test'
    import Test2 from './components/test2'
    export default {
        name:'App',
        components:{test,Test2}
    }
</script>

<style>

</style>