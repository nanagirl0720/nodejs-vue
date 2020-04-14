<template>
  <el-container class="el-container">
    <el-header class="el-header"><Header></Header></el-header><!--引入<app-header></app-header>会报注册组件不正确-->
    <el-container class="el-container">
      <el-aside class="el-aside" width="200px"><Aside></Aside></el-aside>
      <el-container class="el-container">
        <el-main class="el-main"><router-view></router-view></el-main>
        <el-footer class="el-footer"><Footer></Footer></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
    import Header from "@/components/app-header"
    import Aside from "@/components/app-side"
    import Footer from "@/components/app-footer"
    import Hello from "@/page/vuebase/Hello"
    export default  {
        name: "app-view",
        components: { Header,Aside, Footer,Hello}
    }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    line-height: 40px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
