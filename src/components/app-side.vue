<template>
  <el-menu router :default-active="$route.path" :default-openeds="['1', '3']">
    <el-submenu index="1">
      <template slot="title" ><i class="el-icon-edit-outline"></i>Study</template>
      <el-menu-item-group>
<!--        <template slot="title" >知识</template>-->
        <el-submenu  index="1-1">
          <template slot="title">Vue基础</template>
          <el-menu-item index="/vuebase/hello">hello</el-menu-item>
          <el-menu-item index="/vuebase/on">on</el-menu-item>
        </el-submenu>
        <el-submenu  index="1-2">
          <template slot="title">面试题</template>
          <el-menu-item index="1-2-1">1</el-menu-item>
        </el-submenu>
        <el-submenu  index="1-3">
          <template slot="title">EL</template>
          <el-menu-item index="1-3-1">1</el-menu-item>
        </el-submenu>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-food"></i>Life</template>
      <el-menu-item-group>
<!--        <template slot="title">生活</template>-->
        <el-menu-item index="2-1">计划</el-menu-item>
        <el-submenu index="2-2">
          <template  slot="title">照片</template>
          <el-menu-item index="2-2-1">旅游</el-menu-item>
          <el-menu-item index="2-2-2">自拍</el-menu-item>
        </el-submenu>
        <el-submenu index="2-3">
          <template  slot="title">电影</template>
          <el-menu-item index="2-3-1">科幻</el-menu-item>
          <el-menu-item index="2-3-2">动作</el-menu-item>
        </el-submenu>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-monitor"></i>Work</template>
      <el-menu-item-group>
        <el-menu-item index="3-1">技能</el-menu-item>
        <el-menu-item index="3-2">总结</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="3-3">
        <template slot="title">APP</template>
        <el-menu-item index="3-3-1">印象</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
        name: "app-side"
    }
</script>

<style scoped>
  .no_point{
    list-style: none;
  }
</style>
