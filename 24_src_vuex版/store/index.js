//该文件用于Vuex创建store

//引入vuex
import Vuex from 'vuex'
//引入Vue
import Vue from 'vue'

//应用Vuex插件
Vue.use(Vuex)
//用于响应组件中的动作
const actions = {
    // increment(context,value){
    //     // console.log("actions调用了",context,value)
    //     context.commit('Increment',value)
    // },
    // decrement(context,value){
    //     context.commit('Decrement',value)
    // },
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
}

//用于响应组件中操作数据
const mutations = {
    Increment(state,value){
        // console.log("mutations调用了",state,value)
        state.sum += value
    },
    Decrement(state,value){
        // console.log("mutations调用了",state,value)
        state.sum -= value
    }
}

//用于响应组件中存储数据
const state = {
    sum:0,
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})