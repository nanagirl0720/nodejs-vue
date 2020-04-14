<template>
  <div class="footer-box">
    <i class=""></i>&nbsp;
    <span class="footer-text">{{appName}}
  &nbsp;版本号：<el-tag size="mini">{{version}}</el-tag>
    </span>
  </div>
</template>

<script>
    export default {
        name: "app-footer",
        data(){
            return{
                appName: 'pxn',
                version: '@CopyRight'
            }
        }
    }
</script>

<style scoped>
  .footer-text{
    font-size: small;
  }
</style>
