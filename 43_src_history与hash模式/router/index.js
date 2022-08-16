//用于配置路由规则
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detial from '../pages/Detial'

//创建并暴露一个路由器
const router =  new VueRouter({
    mode:'history',
    // mode:'hash',
    routes:[
        {
            path:'/about',
            component:About,
            meta:{isAuth:true,title:'About'}
        },
        {
            path:'/home',
            component:Home,
            meta:{title:'Home'},
            children:[
                {
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'News'},
                    //独享路由守卫
                    /* beforeEnter(to,from,next){
                        if(to.meta.isAuth){
                            if(localStorage.getItem('school') === 'hello'){
                                next();
                            }else{
                                alert("学校名称不对")
                            }
                        }else{
                            next();
                        }
                    } */
                },
                {
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'Message'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detial',
                            component:Detial,
                            meta:{isAuth:true,title:'Detial'},
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
//前置路由守卫
/* router.beforeEach((to,from,next)=>{
    // 通过路径指定拦截
    // if(to.path === '/home/news' || to.path === '/home/message'){
    // 通过属性配置统一拦截
    if(to.meta.isAuth){
        if(localStorage.getItem('school') === 'hello'){
            next();
        }else{
            alert("学校名称不对")
        }
    }else{
        next();
    }
}) */
//后置路由守卫
router.afterEach((to,from)=>{
    document.title = to.meta.title || 'Hello World!'
})
export default router