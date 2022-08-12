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
        // console.log("Increment调用了",state,value)
        state.sum += value
    },
    Decrement(state,value){
        // console.log("Decrement调用了",state,value)
        state.sum -= value
    },
    Add_Person(state,value){
        console.log("Add_Person调用了",state,value)
        state.personList.unshift(value)
    }
}

//用于响应组件中存储数据
const state = {
    sum:0,
    school:'河南',
    name:'yang',
    personList:[
        {id:'001',name:'张三'}
    ]
}

const getters = {
    bigSum(state){
        return state.sum * 10
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})