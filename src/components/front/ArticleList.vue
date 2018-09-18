<template>
  <div class="masonry-layout-wrapper">
    <!-- <button @click="getInfoByJSONP()">HI</button> -->
      <!-- {{JsonPData.msg}}
      <router-link :to="{path:'/manage'}">后台管理</router-link>
      <hr> -->
      <div class="masonry-layout" v-loading="postLoading" 
      element-loading-text="loading"
      element-loading-spinner="el-icon-loading">
        <div v-for="item in dataList" :key="item.id" class="masonry-grid post-item">
          <div class="post-item-inner">
            <img class="entry-img" :src="item.mainImg">
            <div class="entry-content">
              <h3 class="post-title">{{item.title}}</h3>
              
              <p class="post-info">BY {{item.author}}，{{$moment(item.time).format('YYYY/MM/DD HH:mm')}} </p>
              <!-- <section>{{item.subtitle}}</section> -->
              <section class="post-subtitle" v-html="item.subtitle"></section>
              <div class="admin-action">
                <router-link v-if="role===2" tag="button" class="el-button el-button--text el-button--small" 
                :to="{path:'EditPost',query:{type:1,id:item._id}}"><i class="el-icon-edit"></i>Edit</router-link>
                <el-button v-if="role===2" type="text" size="mini" @click="delPost(item._id)"><i class="el-icon-delete"></i>Del</el-button>
                <router-link tag="button" class="el-button el-button--text el-button--small more" 
                :to="{path:'articleDetail',query:{id:item._id}}"> More <i class="el-icon-more"></i></router-link>
              </div>
            </div>
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
      postLoading:false,
      pageSize:5,
      currentPage:1,
      total:0,
    }
  },
  mounted:function(){
    this.getData();
    //window.addEventListener('resize',this.styleMasonry)
    window.onresize = _=>{
      this.styleMasonry()
    };
    this.$root.callBackScrollLoad = this.scrollLoad
  },
  beforeDestroy:function(){
    window.onresize = null;
    this.$root.callBackScrollLoad = null
  },
  computed:{
    ScrollTop:function(){
      return this.$root.scrollTop
    },
    role:function(){
      return this.$root.role
    }
  },
  methods:{
    getInfoByJSONP(){
      let url = "http://localhost:3000/littleStar/jsonp/getJSONP"
      $jsonp(url,{id:123},(result)=>{
        console.log(result);
        this.JsonPData = result
      })

    },
    scrollLoad(){
      let ClientH = document.body.clientHeight || document.documentElement.clientHeight; 
      //let ScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let ContentH = document.querySelector('.masonry-layout-wrapper').offsetHeight;
      let headerH = document.querySelector('.page-header').offsetHeight;
      let ContentAll = ClientH + this.ScrollTop - headerH;
      //console.log(ContentH - ContentAll ,this.dataList.length , this.total)
      if(ContentH - ContentAll<=50 && this.dataList.length < this.total && this.canScroll){
        this.currentPage++
        this.getData()
      }
    },
    delPost(id){
     // this.$confirm('确定删除吗？','删除',{
      //  type:'warning'
    //}).then(_=>{
        let param = {
          id:id
        }
        ArticleAPI.delPost(param)
        .then(data =>{
          this.getData();
          this.$message.success('del')
          
        }).catch(err=>{
          if(err.code==2){
            this.$message.error('del error')
          }
        })
      //}).catch(_=>{})
      
    },
    getData(){
      this.canScroll = false
      this.postLoading = true;
      let param = {
        pageSize:this.pageSize,
        currentPage:this.currentPage,
      }
      ArticleAPI.getArticle(param)
      .then(data =>{
        this.total = data.data.total;
        this.preLoadImg(data.data.list)
        .then(result=>{
          if(result.indexOf(false) == -1){
            if(this.currentPage == 1){
              this.dataList = data.data.list;
            }else {
              this.dataList = this.dataList.concat(data.data.list);
            }
            this.$nextTick(_=>{
              this.styleMasonry();
              this.postLoading = false;
              this.canScroll = true
            });
          }
        })
      }).catch(e =>{
       //console.log(e)
        this.canScroll = true
        this.postLoading = false;
      })
    },
    preLoadImg(data){
      let imgArr = [];
      return Promise.all( data.map((post,i)=>{
          imgArr[i] = new Image();
          imgArr[i].src = post.mainImg;
          imgArr[i].loaded = false
          return new Promise((resolve,reject) =>{
            imgArr[i].onload = _=>{ 
              imgArr[i].loaded = true
              //setTimeout(_=>{resolve(imgArr[i].loaded)},1000);
              resolve(imgArr[i].loaded)
            }
            imgArr[i].onerror = _=>{
              imgArr[i].loaded = true
              resolve(imgArr[i].loaded)
            }
          })
        })
      )
    },
    styleMasonry(){
      let posts = document.querySelectorAll('.masonry-grid');
      if(posts && posts.length>0){
        let postW = Math.floor(posts[0].offsetWidth);
        let PW = document.querySelector('.masonry-layout')
        let winCW = PW.offsetWidth; 
        let grid = Math.round(winCW/postW)
        //console.log(winCW,postW,grid)
        //let cellW = parseInt(winCW/grid);
        let arr = []; //记录最矮的一个
        for(let i=0;i<this.dataList.length;i++){
            if(i < grid){ //row 1
              posts[i].style.top = 0;
              posts[i].style.left = postW * i + 'px';
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
              posts[i].style.left = posts[index].style.left  //== style.left(带有px) 相对于其父元素的值
              arr[index] = arr[index] + posts[i].offsetHeight;
              
            }
        }
        let wrapperH = Math.max(...arr)
        PW.style.minHeight = wrapperH + 'px';
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.masonry-layout-wrapper{
  height: 100%;
}
.masonry-layout{
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
}
.masonry-grid{
  position: absolute;
  transition: top,left 0.3s;
  top:0;
  left:0;
}
.entry-content {
  padding: 0 25px;
}
.post-info{
  font-size: 12px;
  margin-bottom: 5px;
}

.post-item{
  float: left;
  /* display: inline-block; */
  padding: 15px 15px 20px;
  width: 33.3%;
  line-height: 30px;
  color: #717171;
  letter-spacing: 0.225px;
  font-size: 14px;
  /* border:1px solid #eee; */
}
.post-subtitle{ 
  margin: 0 auto 30px;
  max-height: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.admin-action{
  text-align: center;
  padding:0 10px; 
  
}

.post-item .post-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  padding: 10px 0;
  position: relative;
  margin-bottom: 15px;
}
.post-item .post-title::after{
  content: '';
  display: block;
  position: absolute;
  width: 40px;
  height: 2px;
  background: #cecece;
  left:50%;
  bottom: 0px;
  transform: translateX(-50%)

}
.post-item-inner img {
  max-width: 100%;
  max-height: 100%;
}
.post-item-inner{
  text-align: center;
  /* word-break: break-all; */
  /* word-wrap: wrap; */
}

</style>
