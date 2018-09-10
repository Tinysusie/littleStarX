<template>
  <div id="app">
    <router-view/>
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
    methods: {

    }
  }

</script>

<style scoped>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 60px;
}
a {
  cursor: pointer;
  color: #42b983;
}
 

</style>
