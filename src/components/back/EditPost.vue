<template>
  <div class="">
    <router-link :to="{path:'/articleList'}">去前台</router-link>
    <div>
    {{msg}}
    <h3><el-input v-model="editorTitle" placeholder="标题"></el-input></h3>
    <div ref="editor"></div>
    <p></p>
    <form action="/littleStar/upload" enctype="multipart/form-data" method="post">
      <input type="file" multiple="multiple" name="pic1">
      <button type="submit">submit</button>
    </form>
    <el-button v-on:click="saveContent" size="small">保存内容</el-button>
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
      editorTitle:"",
      editorContent:'',
    }
  },
  mounted:function(){
    let editor = new E(this.$refs.editor);
    editor.customConfig.uploadImgServer = '/littleStar/upload'
    editor.customConfig.uploadFileName = 'pic1';
    editor.customConfig.withCredentials = true
    editor.customConfig.uploadImgHeaders = { //【头不要设置！！Content-Type: multipart/form-data】formdata 自动设置类型maybe ？
       // 'Accept' : 'multipart/form-data'//
    };
    editor.customConfig.onchange = (html) => {
        this.editorContent = html
    }
    editor.create();
  },
  methods:{
    saveContent(){
      let contentImg = [],firSrc = '';
      let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
      contentImg = this.editorContent.match(/<img[^>]+>/g)
      if(contentImg.length>0){
        firSrc= contentImg[0].match(srcReg);
      }
      //console.log(firSrc)
      let postObj = {
        title:this.editorTitle,
        content:this.editorContent,
        mainImg:firSrc[1]
      }
      PostAPI.addPost(postObj)
      .then(result =>{
        this.$message.success("add success")
        //console.log(result)
      }).catch(err=>{})
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
