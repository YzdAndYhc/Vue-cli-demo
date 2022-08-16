// 使用框架 创建服务 nodemon express.js 启动
const express = require('express')
const history = require('connect-history-api-fallback');

const app = express();

app.use(history())
app.use(express.static(__dirname +'/static'))

const student = [  
    {name:'张三',age:18},
    {name:'李四',age:19},
    {name:'王五',age:20},
    ]
    

app.all('/student',(req,res)=>{
    response.send(student);
})

app.listen(5005,()=>{
    console.log('正在监听5005 已经启动')
})