<template>
  <el-container class="container">
    <Aside />
    <el-main class="main">
      <Header />
      <nuxt class="card" />
    </el-main>
  </el-container>
</template>

<script>
import Aside from "./aside";
import Header from "./header";
export default {
  components: {
    Aside,
    Header
  }
};
</script>

<style>
body {
  margin: 0;
}

.container {
  width: inherit;
  height: inherit;
}

.main {
  height: 100vh;
  padding: 0;
  background-color: #f0f2f5;
  margin-left: 199px;
}

.el-card {
  margin: 20px;
}
</style>


