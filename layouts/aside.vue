<template>
  <el-aside width="200px" class="aside">
    <el-menu
      :default-active="this.defaultactive"
      class="el-menu-vertical-demo"
      background-color="#24292e"
      text-color="#fff"
      active-text-color="#409eff"
    >
      <nuxt-link to="/Question">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">试题管理</span>
        </el-menu-item>
      </nuxt-link>
      <nuxt-link to="/achievement">
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">成绩管理</span>
        </el-menu-item>
      </nuxt-link>
      <nuxt-link to="/user">
        <el-menu-item index="4">
          <i class="el-icon-user"></i>
          <span slot="title">角色管理</span>
        </el-menu-item>
      </nuxt-link>
      <nuxt-link to="/weather">
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">天气预报</span>
        </el-menu-item>
      </nuxt-link>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      defaultactive: "1"
    };
  },
  created() {
    this.$router.push("/Question");
  }
};
</script>

<style>
a {
  text-decoration: none;
}

.aside {
  position: fixed;
  top: 0;
  left: 0;
}

.el-menu {
  height: 100vh;
}
</style>