<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入姓名" v-model="name"/>
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的</button>
        <button @click="addPersonAuto">自动添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
        <h3>列表第一个人的姓名{{fristName}}</h3>
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
               return this.$store.state.PersonAbout.personList
            },
            sum(){
               return this.$store.state.CountAbout.sum
            },
            fristName(){
               return this.$store.getters['PersonAbout/fristName']
            }
            // ...mapState(['personList'])
        },
        methods:{
            add(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.commit('PersonAbout/Add_Person',personObj)
                this.name = ''
            },
            addWang(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.dispatch('PersonAbout/addWang',personObj)
                this.name = ''
            },
            addPersonAuto(){
                this.$store.dispatch('PersonAbout/addPersonServer')
            }
        }
    }
</script>