<template>
    <div id="app">
        <div class="container">
            <Category title="游戏">
                <template scope="hello">
                    <ul>
                        <li v-for="(item,index) in hello.games" :key="index">
                            {{item}}
                        </li>
                    </ul>
                </template>
            </Category>

            <Category title="游戏">
                <template slot-scope="{games}">
                    <ol>
                        <li v-for="(item,index) in games" :key="index">
                            {{item}}
                        </li>
                    </ol>
                </template>
            </Category>

            <Category title="游戏">
                <!-- <template scope="games">
                    <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
                </template> -->
                <template slot-scope="{games}">
                    <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
                </template>
            </Category>
        </div>
    </div>
</template>

<script>
import Category from './components/Category'
    export default {
        name:'App',
        components: {Category},
    }
</script>

<style scoped>
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }
</style>