<template>
  <div class="">
    <button @click="getInfoByJSONP()">HI</button>
      {{JsonPData.msg}}
      <router-link :to="{path:'/manage'}">后台管理</router-link>
    <div v-for="item in dataList" :key="item.id" >
      <h3>{{item.title}}</h3>
      <p>{{item.time}} {{item.author}} {{item.count}}</p>
      <section>{{item.subtitle}}</section>
      <router-link :to="{path:'articleDetail',query:{id:item.id}}">more...</router-link>
      
    </div>
    
  </div>
</template>

<script>
import ArticleAPI from '../../api/front'
export default {
  name: 'ArticleList',
  data () {
    
    return {
      msg: 'ArticleList',
      dataList:[],
      JsonPData:{},
    }
  },
  mounted:function(){
    this.getData();
  },
  methods:{
    getInfoByJSONP(){
      let url = "http://localhost:3000/littleStar/jsonp/getJSONP"
      $jsonp(url,{id:123},(result)=>{
        console.log(result);
        this.JsonPData = result
      })

    },
    
    getData(){
      let param = {

      }
      ArticleAPI.getArticle(param)
      .then(data =>{
        this.dataList = data.data
      }).catch(e =>{
       //console.log(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
