<template>
    <div class="container">
      <Category title="Food">
        <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        <a slot="footer" href="http://youtube.com">Click me to link</a>
      </Category>
      <Category title="Game">
        <ul slot="center">
            <li v-for="(game, index) in games" :key="index">{{game}}</li>
        </ul>
        <div slot="footer" class="foot">
          <a href="">Single mode</a>
          <a href="">Multipalyer mode</a>
        </div>
      </Category>

      <Category title="Films">
        <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <template v-slot:footer>
         <div class="foot">
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
          </div>
          <h4>welcome</h4>
        </template>

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
  .container, .foot, h4{
    display: flex;
    justify-content: space-around;
  }
</style>
