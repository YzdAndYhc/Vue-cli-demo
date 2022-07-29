<template>
    <div>
        <h1>{{msg}}</h1>
        <p>姓名{{name}}</p>
        <p>性别{{sex}}</p>
        <p>年龄{{myAge}}</p>
        <button @click="addAge">点击年龄+1</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                msg:'hello,world!',
                myAge:this.age
            }
        },
        methods: {
            addAge(){
                this.myAge++
            }
        },
        // props:['name','sex','age'] //简单声明
        
        // props:{
        //     name:String,
        //     sex:String,
        //     age:Number
        // }

        props:{
            name:{
                typeof:String, //指定类型
                required:true  //必要的属性
            },
            sex:{
                typeof:String,
                required:true
            },
            age:{
                typeof:Number,
                default:18
            }
        }
    }
</script>
