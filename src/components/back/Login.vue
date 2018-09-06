<template>
<div class="login-page">
  <div class="login-block">
    <el-form :model="form" :rules="rules"  ref="loginForm">
       <el-form-item  prop="name">
        <el-input type="text" v-model="form.name" auto-complete="off" placeholder="昵称"></el-input>
      </el-form-item>
       <el-form-item  prop="pass">
        <el-input type="password" v-model="form.pass" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
    </el-form>
    <div class="action"><el-button class="login-btn" type="danger" @click="submitForm()">登录</el-button></div>
  </div>

</div>
</template>

<script>
import loginAPI from '../../api/front/index.js'
export default {
  name: 'login',
  data () {
    return {
      msg: 'login...',
      form:{
        name:"",
        pass:"",
      },
      rules:{
          name: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
      }
    }
  },
  methods:{
    submitForm(){
      this.$refs.loginForm.validate(vaild =>{
        if(vaild) {
          let param = {
            name:this.form.name,
            pass:this.form.pass
          }
          loginAPI.login(param)
          .then(data =>{
              this.$router.push({path:'/home'});
          }).catch(err=>{
              // if(err.code===2){ //在全局控制那
              //   this.$message.error("pwd error")
              // }
          })
        }else {

        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-page {
    height: 100%;
    background: #1F2D3D;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
}
.login-block{
    width: 400px;
    margin: 0 auto;
    padding: 60px 40px 50px;
    background: #fff;
    border-radius: 6px;
}
.login-block .el-form{
  margin-bottom: 50px;
}
.login-page .action{
  text-align: center;
}
.login-page .login-btn{
  width: 100%;
}
</style>
