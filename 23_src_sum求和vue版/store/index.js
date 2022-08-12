//该文件用于Vuex创建store

//引入vuex
import Vuex from 'vuex'
//引入Vue
import Vue from 'vue'

//应用Vuex插件
Vue.use(Vuex)
//用于响应组件中的动作
const actions = {}

//用于响应组件中操作数据
const mutations = {}

//用于响应组件中存储数据
const state = {}

export default new Vuex.Store({
    actions,
    mutations,
    state
})