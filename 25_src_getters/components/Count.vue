<template>
    <div class="demo">
        <h1>当前总和为:{{sum}}</h1>
        <h4>当前总和为:{{bigSum}}</h4>
        <h4>学习地点：{{school}}  学习人员：{{name}}</h4>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name:'Count',
        data() {
            return {
                n:1
            }
        },
        computed: {
            // 程序员亲自去写方法
            /* sum(){
                return this.$store.state.sum
            },
            bigSum(){
                return this.$store.getters.bigSum
            }, */
            //借助mapState生成计算属性
            ...mapState(['sum','school','name']),
            /* ************************************************************ */
            // 对象写法
            ...mapGetters({bigSum:'bigSum'}),
             // 数组写法
            // ...mapGetters(['bigSum'])
        },
        methods: {
            increment(){
                this.$store.commit('Increment',this.n);
            },
            decrement(){
                this.$store.commit('Decrement',this.n);
            },
        },
    }
</script>

<style scoped>
    button{
        margin-left: 10px;
    }
</style>
