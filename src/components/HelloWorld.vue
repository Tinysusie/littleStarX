<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in hello" :key="item" v-on:click="fetchFn(item)" >
        <a>{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import MYAPI from '../../src/api/login.js' 
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HTTP',
      hello:[
        "helloPost","helloGet","helloForm"
      ],
    }
  },
  methods:{
    fetchFn(type){
      if(type == "helloPost"){
        MYAPI.helloPost().then(data =>{}).catch(e =>{})
      }else if(type == "helloGet"){
        MYAPI.helloGet().then(data =>{}).catch(e =>{})
      } else {
        //MYAPI.helloForm().then(data =>{}).catch(e =>{})
        MYAPI.getUser().then(data =>{}).catch(e =>{})
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
