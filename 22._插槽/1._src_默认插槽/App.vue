<template>
    <div class="container">
      <Category title="Food">
        <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      </Category>
      <Category title="Game">
        <ul>
            <li v-for="(game, index) in games" :key="index">{{game}}</li>
        </ul>
      </Category>

      <Category title="Films">
        <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
    name:'App',
    components:{Category},
    data() {
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
      }
    },
    methods: {
    },
}
</script>

<style lang="css">
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>
