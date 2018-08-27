<template>
  <div class="">
      <div v-if="postObj.hasOwnProperty('title')">
        <h3>{{postObj.title}} <router-link :to="{path:'articleList'}"> 回 </router-link></h3>
        <p>{{postObj.time}} {{postObj.author}} {{postObj.count}}</p>
        <section>{{postObj.subtitle}}</section>
        <hr>
        <div v-html="postObj.content"></div>
      </div>
  </div>
</template>

<script>
import ArticleAPI from '../../api/front/index'
export default {
  name: 'ArticleDetail',
  data () {
    return {
      msg: 'ArticleDetail',
      pageId:this.$route.query.id,
      postObj:{

      },
      //postContnt:'',
    }
  },
  mounted: function(){
    this.getData()
  },
  methods:{
    getData(){
      let param = {
        id:this.pageId
      }
      ArticleAPI.getPostDetail(param)
      .then(data => {
        this.postObj = data.data[0];
      }).catch(e=>{})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
