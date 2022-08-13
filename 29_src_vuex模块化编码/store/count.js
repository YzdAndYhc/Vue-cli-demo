export default {
    namespaced:true,
    //用于响应组件中的动作  
    actions:{
        incrementOdd(context,value){
            if(context.state.sum % 2){
                context.commit('Increment',value)
            }
        },
        incrementWait(context,value){
            setTimeout(()=>{
                context.commit('Increment',value)
            },500)
        },
    },
    //用于响应组件中操作数据
    mutations:{
        Increment(state,value){
            // console.log("Increment调用了",state,value)
            state.sum += value
        },
        Decrement(state,value){
            // console.log("Decrement调用了",state,value)
            state.sum -= value
        },
    },
    //用于响应组件中存储数据
    state:{
        sum:0,
        school:'河南',
        name:'yang',
    },
    //用于处理State中的数据
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    },
}