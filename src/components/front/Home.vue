<template>
  <div class="build-contanier">
    <x-nav></x-nav>
    <div class="page-content">
      <router-view/>
    </div>
    <footer class="page-footer">
      <p>Copyrights © 2018 SUSIE</p>
    </footer>
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
.build-contanier{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.build-contanier>*{
  flex: 1;
}
.build-contanier .page-footer{
  flex: 0 0 70px;
}


.page-footer::after{
  content: '';
  height: 2px;
  position: absolute;
  background: #e1e1e1;
  width: 30px;
  top:0;

}
.page-footer {
  position: relative;
  color: #a1a1a1;
  font-size: 12px;
  text-align: center;
  padding: 30px 0 30px;
}
</style>
