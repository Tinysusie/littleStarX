<template>
  <header class="page-header">
      <h2 class="logo"><img title="logo" src="../../assets/img/logo.png"/></h2>
      <ul class="nav">
        <li><a>HOME</a></li>
        <li><a>PAGE</a></li>
        <li><a>CATG</a></li>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-header {
  padding: 0 20px;
  margin-bottom: 20px;
}
.page-header>.logo{
  text-align: center;
  margin-bottom: 20px;

}
.nav::after{
  content: '';
  display: block;
  clear: both;
}
.nav {
  text-align: center;
  border-top:1px solid #eee;
  border-bottom:1px solid #eee;
}
.nav>li {
  color: #909399;
  display: inline-block;
  padding: 14px 18px;
}
</style>
