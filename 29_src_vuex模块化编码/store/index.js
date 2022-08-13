//该文件用于Vuex创建store

//引入vuex
import Vuex from 'vuex'
//引入Vue
import Vue from 'vue'

import PersonAbout  from './person'
import CountAbout  from './count'

//应用Vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        CountAbout:CountAbout,
        PersonAbout:PersonAbout
    }
})