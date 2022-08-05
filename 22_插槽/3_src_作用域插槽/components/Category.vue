<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games="games"></slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data() {
            return {
                games:['CF','CSGO','LOL','ESAS'],
            }
        },
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