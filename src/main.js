//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//全部引入ElementUi
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI)

//按需引入
import { Button } from 'element-ui';

Vue.use(Button)
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建Vm
new Vue({
    el:'#app',
    render:h => h(App),
})