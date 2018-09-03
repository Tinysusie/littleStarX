<template>
  <div class="">
    <!-- <button @click="getInfoByJSONP()">HI</button>
      {{JsonPData.msg}}
      <router-link :to="{path:'/manage'}">后台管理</router-link>
      <hr> -->
      <div class="masonry-layout">
        <div v-for="item in dataList" :key="item.id" class="masonry-grid post-item">
          <div class="post-item-inner">
            
            <img :src="'../../../static/img/'+ Math.round(Math.random()*3+1) +'.jpg'">
            <h3 class="post-title">{{item.title}}</h3>
            <p>{{item.time}} {{item.author}} {{item.count}}</p>
            <section>{{item.subtitle}}</section>
            <router-link :to="{path:'articleDetail',query:{id:item._id}}">MORE...</router-link>
          </div>
          
        </div>
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
    window.addEventListener('resize',this.styleMasonry)
    
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
        id:"kj"
      }
      ArticleAPI.getArticle(param)
      .then(data =>{
        this.dataList = data.data
        this.$nextTick(_=>{
          this.styleMasonry();
        })
      }).catch(e =>{
       //console.log(e)
      })
    },
    styleMasonry(){
      let grid = 3;
      let posts = document.querySelectorAll('.masonry-grid');
      let postW = posts[0].offsetWidth;
      let winCW = document.documentElement.offsetWidth - 40; 
      let cellW = parseInt(winCW/grid);
      let arr = []; //记录最矮的一个
      for(let i=0;i<posts.length;i++){
        if(i < grid){ //row 1
          posts[i].style.top = 0;
          posts[i].style.left = cellW * i + 'px';
          arr.push(posts[i].offsetHeight);
        }else { //row other
          var minH = arr[0];
          var index = 0;
          for(let j = 0;j<arr.length;j++){ //find minH
            if(minH > arr[j]){
              minH = arr[j]
              index = j;
            }
          }
          //console.log(i,index)
          posts[i].style.top = arr[index] + 'px' 
          posts[i].style.left = posts[index].offsetLeft + 'px'  //== style.left(带有px) 相对于其父元素的值
          arr[index] = arr[index] + posts[i].offsetHeight;
          
        }
        
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.masonry-layout{
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
}
.masonry-grid{
  position: absolute;
  transition: all 0.3s;
  top:0;
  left:0;
}
.post-item{
  display: inline-block;
  padding: 15px 10px 20px 10px;
  width: 33.3%;
  line-height: 30px;
  color: #717171;
  letter-spacing: 0.225px;
  font-size: 14px;
  /* border:1px solid #eee; */
}
.post-item .post-title {
  font-size: 16px;
  font-weight: bold;
  color: #444;
  margin: 8px 0;
}
.post-item-inner img {
  max-width: 100%;
  max-height: 100%;
}
.post-item-inner{

}
</style>
