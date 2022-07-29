<template>
    <div>
        <h1 @click="showMsg">{{msg}}{{name}}</h1>
    </div>
</template>

<script>
    import {mix} from '../mixin'
    export default {
        name:'Student',
        data() {
            return {
                msg:'hello,world!',
                name:'杨自东'
            }
        },
        mixins:[mix]
    }
</script>
