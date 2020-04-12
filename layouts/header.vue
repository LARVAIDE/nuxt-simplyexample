<template>
  <el-header class="header">
    <el-dropdown class="dropdown" @command="logoutClick()">
      <i class="el-icon-setting"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-user">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  methods: {
    logoutClick() {
      console.log("ss");
      sessionStorage.removeItem("token");
      this.$router.push("/");
    }
  }
};
</script>

<style>
.header {
  height: 50px !important;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 15px 20px;
  background-color: #fff;
}

.dropdown {
  float: right;
}
</style>