// 使用框架 创建服务 nodemon express.js 启动
const express = require('express')

const test = express();

const student = [  
    {name:'张三',age:18},
    {name:'李四',age:19},
    {name:'王五',age:20},
    ]
    

test.all('/student',(request,response)=>{
    response.send(student);
})

test.listen(5000,()=>{
    console.log('正在监听5000 已经启动')
})