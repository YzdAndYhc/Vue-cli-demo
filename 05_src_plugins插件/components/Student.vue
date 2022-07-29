<template>
    <div>
        <h1>{{msg}}{{name | mySlice}}</h1>
        <input type="text" v-fbind:value="name">
        <button @click="show">点我Hello</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                msg:'hello,world!',
                name:'杨自东123'
            }
        },
        methods: {
            show(){
                this.hello()
            }
        },
    }
</script>
