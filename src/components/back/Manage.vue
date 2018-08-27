<template>
  <div class="">
    <back-nav></back-nav>
    <router-view />
  </div>
</template>

<script>
import BackNav from '../back/Menu'
export default {
  name: 'back',
  data () {
    return {
      msg: 'MANAGE'
    }
  },
  components:{
    "back-nav":BackNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
