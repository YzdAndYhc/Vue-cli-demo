import axios from "axios"
import { nanoid } from "nanoid"

export default {
    namespaced:true,
    //用于响应组件中的动作  
    actions:{
        addWang(context,value){
            if(value.name.indexOf('王')==0){
                context.commit('Add_Person',value)
            }else{
                alert("添加的人必须姓王！")
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('Add_Person',{id:nanoid(),name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    //用于响应组件中操作数据
    mutations:{
        Add_Person(state,value){
            state.personList.unshift(value)
        }
    },
    //用于响应组件中存储数据
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    //用于处理State中的数据
    getters:{
        fristName(state){
            return state.personList[0].name
        }
    },
}