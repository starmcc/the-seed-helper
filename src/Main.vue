<template>
  <div id="app">
    <el-container class="container" style="height: 100%">
      <el-aside width="150px">
        <el-menu router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="/">主页</el-menu-item>
          <el-menu-item index="17">17层</el-menu-item>
          <el-menu-item index="22">22层</el-menu-item>
          <el-menu-item index="23">23层</el-menu-item>
          <el-menu-item index="24">24层</el-menu-item>
          <el-menu-item index="27">27层</el-menu-item>
          <el-menu-item index="39">39层</el-menu-item>
          <el-menu-item index="42">42层</el-menu-item>
          <el-menu-item index="48">48层</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <p style="font-size: 26px;">{{ $route.meta.title }}</p>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    console.info(this.$route.meta.title)
  }
}
</script>

<style scoped>
.el-menu {
  height: 100%;
}

.el-footer {
  background-color: #545c64;
  color: white;
  text-align: center;
}
</style>