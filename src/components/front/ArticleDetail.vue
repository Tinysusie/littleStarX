<template>
  <div class="post-page">
      <div v-if="postObj.hasOwnProperty('title')" class="post-body">
        <h2 class="post-title">{{postObj.title}}</h2>
          <router-link tag="button" class="el-button el-button--text el-button-text" :to="{path:'articleList'}"><i class="el-icon-back"></i></router-link>
        <p class="post-info">BY {{postObj.author}}，{{$moment(postObj.time).format('YYYY/MM/DD HH:mm')}}，{{postObj.count}}</p>
        
        <!-- <section class="post-subtitle">{{postObj.subtitle}}</section> -->
       
        <p class="post-content" v-html="postObj.content"></p>
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
.post-body{
  text-align: center;
  max-width: 770PX;
  margin: 0 auto;
  color: #717171;
  font-size: 13px;
}
.post-body>*{
  margin-bottom: 15px;
}
.post-page .post-title{
  display: inline-block;
  font-weight: bold;
  color: #333;
  font-size: 18px;
}
.post-info{
  font-size:12px; 
}
.post-content {
  text-align: left;
  line-height: 32px;
}
</style>
