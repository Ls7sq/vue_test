<template>
  <div>
      <h2 @click="showName">School Name - {{name}}</h2>
      <h2>School Address - {{address}}</h2>
      <p>{{x}}</p>
      <p>{{y}}</p>
  </div>
</template>

<script>
import {mixin, mixin2} from '../mixin'
export default {
    name:'School',
    data() {
        return {
            name:"NUS",
            address:"Singapore"
        }
    },
    mixins:[mixin, mixin2]
}
</script>
