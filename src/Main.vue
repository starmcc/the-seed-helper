<template>
  <div id="app">
    <el-container class="container" style="height: 100%">
      <el-aside width="120px">
        <el-menu router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="/">主页</el-menu-item>
          <el-menu-item :index="item.num.toString()" v-for="(item, index) in layersData" :key="index">{{ item.num + '层'
          }}</el-menu-item>
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
import LayersData from '@/commons/js/LayersData'
export default {
  name: 'App',
  data: () => ({
    layersData: LayersData
  }),
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