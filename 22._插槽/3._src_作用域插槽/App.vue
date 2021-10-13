<template>
    <div class="container">

      <Category title="Game">
        <template slot-scope="shiqi" slot="chacao">
          <ul>
            <li v-for="(game, index) in shiqi.games" :key="index">{{game}}</li>
          </ul>
          <h4>{{shiqi}}</h4>
        </template>
      </Category>

      <Category title="Game">
        <template slot-scope="{games}" slot="chacao">
          <ol>
              <li v-for="(game, index) in games" :key="index">{{game}}</li>
          </ol>
          <h4>{{games}}</h4>
        </template>
      </Category>

      <Category title="Game">
        <template slot-scope="shiqi" slot="chacao">
          <h4 v-for="(game, index) in shiqi.games" :key="index">{{game}}</h4>
          <h4>{{shiqi.msg}}</h4>
        </template>
      </Category>

    </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
    name:'App',
    components:{Category},
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
