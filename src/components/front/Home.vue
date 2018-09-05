<template>
  <div class="">
    <x-nav></x-nav>
    <div class="page-content">
      <router-view/>
    </div>
    
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
