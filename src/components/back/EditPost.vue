<template>
  <div class="">
    <!-- <router-link :to="{path:'/articleList'}">去前台</router-link> -->
    <div>
    <h2 class="page-title">{{pageTitle}}</h2>
    <router-link tag="button" class="el-button el-button--text el-button-text" :to="{path:'articleList'}"><i class="el-icon-back"></i></router-link>
    <div class="edit">
      <h3 class="edit-title"><el-input v-model="editorTitle" size="small" placeholder="标题"></el-input></h3>
      <div class="edit-tool" ref="editorTool"></div>
      <div class="edit-content" ref="editor"></div>
      <!-- <form action="/littleStar/upload" enctype="multipart/form-data" method="post">
        <input type="file" multiple="multiple" name="pic1">
        <button type="submit">submit</button>
      </form> -->
      <div class="edit-action"> 
        <el-button v-on:click="saveContent" type="primary" size="small">保存内容</el-button>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import PostAPI from '../../api/front'
import E from 'wangeditor'
export default {
  name: 'editPost',
  data () {
    return {
      msg: '编辑',
      editor:{},
      editorTitle:"",
      editorContent:'',
      pageTitle:this.$route.query.type==1?'编辑':'新增',
      pageType:this.$route.query.type==1?1:0,
      postId:this.$route.query.id?this.$route.query.id:'',
      postDetail:{}
    }
  },
  mounted:function(){
    this.configEditor()
    if(this.$route.query.type==1 && this.$route.query.id){
      this.getDetail(this.$route.query.id)
    }
  },
  methods:{
    configEditor(){
      this.editor = new E(this.$refs.editorTool,this.$refs.editor);
      this.editor.customConfig.uploadImgServer = '/littleStar/upload'
      this.editor.customConfig.uploadFileName = 'pic1';
      this.editor.customConfig.withCredentials = true
      this.editor.customConfig.uploadImgHeaders = { //【头不要设置！！Content-Type: multipart/form-data】formdata 自动设置类型maybe ？
        // 'Accept' : 'multipart/form-data'//
      };
      this.editor.customConfig.onchange = (html) => {
          this.editorContent = html
      }
      this.editor.create();
    },
    getDetail(postId){
      let params = {id:postId}
      PostAPI.getPostDetail(params)
      .then(data =>{
        if(data.data.length==1){
          this.postDetail = data.data[0];
          //console.log(this.editor.$textElem)
          this.editor.txt.html(this.postDetail.content);
          this.editorTitle = this.postDetail.title;
        }
      }).catch(err=>{

      })
    },
    saveContent(){
      this.editorContent = this.editor.txt.html();
      let subTitle = this.editor.txt.text();
      subTitle = subTitle.substring(0,200)+'...'
      //console.log(subTitle)
      let contentImg = [],firSrc = '';
      let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
      contentImg = this.editorContent.match(/<img[^>]+>/g)
      if(contentImg && contentImg.length>0){
        firSrc= contentImg[0].match(srcReg);
      }
      //console.log(firSrc)
      let postObj = {}
      if(this.pageType == 1){
         postObj = {
          id:this.postId,
          title:this.editorTitle,
          subTitle:subTitle,
          content:this.editorContent,
          mainImg:firSrc[1]
        }
        this.updatePost(postObj)
      }else {
         postObj = {
          title:this.editorTitle,
          subTitle:subTitle,
          content:this.editorContent,
          mainImg:firSrc[1]
        }
        this.addPost(postObj)
      }
    },
    addPost(params){
      PostAPI.addPost(params)
      .then(result =>{
        this.$message.success("add success")
        //console.log(result)
      }).catch(err=>{})

    },
    updatePost(params){
      PostAPI.updatePost(params)
      .then(result =>{
        this.$message.success("updatePost success")
      }).catch(err=>{
        if(err.code===3){
          this.$message.error("no ID")
        }else {
          this.$message.error("updatePost error")
        }
      })

    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit>*{
  margin-bottom: 20px;
}
.page-title{
  display: inline-block;
  padding: 15px 0;
}
.edit-tool.w-e-toolbar {
  border:1px solid #dcdfe6;
  padding: 3px 0
}
.edit-content.w-e-text-container{
  height: 500px!important;
  border:1px solid #dcdfe6;
}
</style>
