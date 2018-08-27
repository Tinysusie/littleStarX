<template>
  <div class="">
    {{msg}}
    <x-nav></x-nav>
    <router-view/>
    
  </div>
</template>

<script>
import Nav from '../front/Nav'
export default {
  name: 'home',
  data () {
    return {
      msg: 'HOME'
    }
  },
  components:{
    "x-nav":Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
