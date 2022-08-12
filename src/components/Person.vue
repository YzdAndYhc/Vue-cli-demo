<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入姓名" v-model="name"/>
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
        <h4 style="color:red">上面组件的总和为{{sum}}</h4>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
// import { mapState } from 'vuex'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            personList(){
               return this.$store.state.personList
            },
            sum(){
               return this.$store.state.sum
            }
            // ...mapState(['personList'])
        },
        methods:{
            add(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.commit('Add_Person',personObj)
                this.name = ''
            }
        }
    }
</script>