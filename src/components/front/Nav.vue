<template>
  <header class="page-header">
      <div class="header-logo">
        <div class="left"></div>
        <h2 class="logo">
          <a class="logo-text">LITTLESTAR</a>
            <!-- <img title="logo" src="../../assets/img/logo.png"/> -->
          </h2>
        <div class="right">
          <el-button @click="toLogin" title="登录" type="danger" size="small" circle ><i class="el-icon-location"></i></el-button>
           <router-link title="Post" v-if="this.$root.role===2" tag="button" class="el-button el-button--danger el-button--small is-circle" 
              :to="{path:'EditPost',query:{type:0}}"><i class="el-icon-edit"></i></router-link>
        </div>
      </div>
      
      <ul class="nav">
        <li><a>HOME</a></li>
        <li><a>PAGE</a></li>
        <li><a>CATG</a></li>
        <li><a>ABOUT ME</a></li>
      </ul>
  </header>
</template>

<script>
export default {
  name: 'xnav',
  data () {
    return {
      msg: '菜单 | 菜单'
    }
  },
  methods:{
    toLogin(){
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-header {
  padding: 0 20px 30px 0;
}
.header-logo{
  display: flex;
  align-items:center;
  margin-bottom: 50px;
}
.logo-text{
  font-size: 32px;
  font-weight: 1000;
  color: black;
}
.header-logo .logo{
  text-align: center;
  height: 27px;

}
.header-logo>*{
  flex: 1;
}
.header-logo .left{
  text-align: left;
}
.header-logo .right{
  text-align: right;
}
.nav{
  display: flex;
  justify-content: center;
  border-top:1px solid #eee;
  border-bottom:1px solid #eee;
}
/* .nav::after{
  content: '';
  display: block;
  clear: both;
}
.nav {
  text-align: center;
  border-top:1px solid #eee;
  border-bottom:1px solid #eee;
} */
.nav>li {
  color: #717171;
  font-size: 13px;
  padding: 14px 18px;
}
</style>
