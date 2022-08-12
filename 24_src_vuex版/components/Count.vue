<template>
    <div class="demo">
        <h1>当前总和为:{{$store.state.sum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">为奇数再加</button>
        <button @click="incrementWait">等等再加</button>
    </div>
</template>

<script>
    export default {
        name:'Count',
        data() {
            return {
                n:1
            }
        },methods: {
            increment(){
                this.$store.commit('Increment',this.n);
            },
            decrement(){
                this.$store.commit('Decrement',this.n);
            },
            incrementOdd(){
                this.$store.dispatch('incrementOdd',this.n);
            },
            incrementWait(){
                this.$store.dispatch('incrementWait',this.n);
            }
        },
    }
</script>

<style scoped>
    button{
        margin-left: 10px;
    }
</style>
