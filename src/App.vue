<template>
    <div class="container">

      <Category title="Game">
        <ul slot="center">
            <li v-for="(game, index) in games" :key="index">{{game}}</li>
        </ul>
        <div slot="footer" class="foot">
          <a href="">Single mode</a>
          <a href="">Multipalyer mode</a>
        </div>
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
				games:['红色警戒','穿越火线','劲舞团','超级玛丽']
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
