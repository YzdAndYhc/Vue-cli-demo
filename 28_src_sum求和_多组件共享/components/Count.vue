<template>
    <div class="demo">
        <h1>当前总和为:{{sum}}</h1>
        <h4>当前总和为:{{bigSum}}</h4>
        <h4>学习地点：{{school}}  学习人员：{{name}}</h4>
        <h4 style="color:red">下面组件的总人数{{personList.length}}个</h4>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">为奇数再加</button>
        <button @click="incrementWait(n)">等等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
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
            ...mapState(['sum','school','name','personList']),
            /* ************************************************************ */
            // 对象写法
            ...mapGetters({bigSum:'bigSum'}),
             // 数组写法
            // ...mapGetters(['bigSum'])
        },
        methods: {
            /* increment(){
                this.$store.commit('Increment',this.n);
            },
            decrement(){
                this.$store.commit('Decrement',this.n);
            }, */

            /* incrementOdd(){
                this.$store.dispatch('incrementOdd',this.n);
            },
            incrementWait(){
                this.$store.dispatch('incrementWait',this.n);
            }, */

            //借助mapMutations生成对应的方法,方法使用 commint 联系 mutations
            ...mapMutations({increment:'Increment',decrement:'Decrement'}),

            //借助mapActions生成对应的方法,方法使用 dispatch 联系 actions
            // ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'})
            ...mapActions(['incrementOdd','incrementWait'])
        },
    }
</script>

<style scoped>
    button{
        margin-left: 10px;
    }
</style>
