<template>
    <div>
        <h1 @click="showMsg">{{msg}}{{name}}</h1>
    </div>
</template>

<script>
    import {mix} from '../mixin'
    export default {
        name:'School',
        data() {
            return {
                msg:'hello,world!',
                name:'实验高中'
            }
        },
        mixins:[mix]
    }
</script>
