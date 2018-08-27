<template>
  <div class="">
    <div>
      <div ref="editor"></div>
    </div>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'Editor',
  data () {
    return {
      editorContent:'',
    }
  },
  mounted:function(){
    let editor = new E(this.$refs.editor);
    editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
    editor.create();
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
