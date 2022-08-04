<template>
    <button @click="getStudentInfo">学生数据</button>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'App',
        methods: {
            getStudentInfo(){
                axios.get('http://localhost:8080/hello/student').then(
                    response => {
                        console.log('请求成功',response.data)
                    },
                    error => {
                        console.log('请求失败',error.message)
                    }
                )
            }
        },
    }
</script>

<style>

</style>