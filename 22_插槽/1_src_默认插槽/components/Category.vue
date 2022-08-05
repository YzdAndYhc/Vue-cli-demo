<template>
    <div class="category">
        <h3>{{title}}</h3>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title']
    }
</script>

<style lang="css" scoped>
    .category{
        background-color: aliceblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: aqua;
    }
</style>