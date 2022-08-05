<template>
    <div id="app">
        <div class="container">
            <Category title="食物">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1Z9291TIBZ6-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662273471&t=9b08b21a2c022b951fb00733b38a8e4b" />
            </Category>
            <Category title="游戏" :games="games">
                <ul>
                    <li v-for="(item,index) in games" :key="index">
                        {{item}}
                    </li>
                </ul>
            </Category>
            <Category title="电影">
                <video controls src="http://video.sina.cn/ent/other/2019-09-23/detail-iicezzrq7819572.d.html?vt=4&wm=30490006996980508"></video>
            </Category>
        </div>
    </div>
</template>

<script>
import Category from './components/Category'
    export default {
        name:'App',
        components: {Category},
        data() {
            return {
                foods:['烧烤','牛排','小龙虾','炒饭'],
                games:['CF','CSGO','LOL','ESAS'],
                movies:['[战狼1]','[战狼2]','[战狼3]','[战狼4]'],
            }
        },
    }
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: space-around;
    }
    video,img{
        width: 100%;
    }
</style>