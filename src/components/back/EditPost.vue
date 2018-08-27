<template>
  <div class="">
    <router-link :to="{path:'/articleList'}">去前台</router-link>
    <div>
    {{msg}}
    <div ref="editor"></div>
    <p></p>
    <!-- <form action="/littleStar/upload" enctype="multipart/form-data" method="post">
      <input type="file" name="pic">
      <button type="submit">submit</button>
    </form> -->
    <el-button v-on:click="saveContent" size="small">保存内容</el-button>
    </div>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'editPost',
  data () {
    return {
      msg: '编辑',
      editorContent:'',
    }
  },
  mounted:function(){
    let editor = new E(this.$refs.editor);
    editor.customConfig.uploadImgServer = '/littleStar/upload'
    editor.customConfig.withCredentials = true
    editor.customConfig.uploadImgHeaders = {
     "Content-Type":"multipart/form-data; boundary=23156412"
    }
    editor.customConfig.onchange = (html) => {
        this.editorContent = html
    }
    editor.create();
  },
  methods:{
    saveContent(){
      console.log(this.editorContent)
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
