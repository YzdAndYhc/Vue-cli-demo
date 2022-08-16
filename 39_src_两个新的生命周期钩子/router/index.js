//用于配置路由规则
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detial from '../pages/Detial'

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detial',
                            component:Detial,
                            //props 第一种写法  将对象中的所有值以KEY-VALUE的形式传递
                            // props:{a:1,b:2}

                            //第二种写法 将该路由组件获取的所有**params**参数，以props传递
                            // props:true  

                            //第三种写法 值为函数
                            /* props:($route)=>{
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title,
                                }
                            } */
                            props({ query }){                 
                                return { ...query }       
                            }
                        }
                    ]
                }
            ]
        },
    ]
})