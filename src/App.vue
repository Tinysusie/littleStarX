<template>
  <div id="app">
    <router-view/>
    <div class="scroll-top" title="向上" :class="{fade:ScrollTop<10}" @click="scrollToTop"><i class="el-icon-caret-top"></i></div>
  </div>
</template>

<script>
  import 'reset-css';
  export default {
    name: 'App',
    data() {
      return {

      }
    },
    computed:{
      ScrollTop:function(){
        return this.$root.scrollTop
      }
    },
    methods: {
      scrollToTop(){
        setTimeout(_=>{ 
          let bodyTop = document.body.scrollTop || document.documentElement.scrollTop;
          let step = 30;
          var stepMiles = Math.floor(bodyTop/step); //bodyTop 递减 所以有减速的效果
          var nextMiles = bodyTop - stepMiles;
            //console.log(stepMiles,bodyTop,nextMiles,bodyTop - nextMiles)
          if(bodyTop - nextMiles>0){
            window.scrollTo(0,nextMiles);
            this.scrollToTop();
          }else {
            window.scrollTo(0,0);
          }
        },1);
      }
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 60px;
}
.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 10px;
  opacity: 1;
  transition: all 0.3s ease-in;
  cursor: pointer;
  color: #999;
}
.scroll-top:hover{
  color:#44525f;
}
.scroll-top.fade{
  opacity: 0;
  transition: all 0.3s ease-in;
}
.scroll-top>i{
  font-size: 28px;
}
a {
  cursor: pointer;
  color: #42b983;
}
 

</style>
