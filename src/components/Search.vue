<template>
    <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>
        <button @click="searchUsers">Search</button>
    </div>
    </section>
</template>

<script>
    export default {
        name:'Search',
        data() {
            return {
                keyWord:''
            }
        },
        methods: {
            searchUsers(){
                this.$bus.$emit('getUsers',{isLoading:true,errMsg:'',users:[],isFrist:false})

                this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response => {
                        // console.log('请求成功了',response.data.items)
                        this.$bus.$emit('getUsers',{isLoading:false,errMsg:'',users:response.data.items})
                    },
                    error => {
                        this.$bus.$emit('getUsers',{isLoading:false,errMsg:error.message,users:[]})
                    }
                 )
            }
        },
    }
</script>