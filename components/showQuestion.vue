<template>
  <el-card class="cardBox">
    <h2 class="title">数学测试</h2>
    <el-col :span="8" v-for="Question in Qlist" :key="Question.key" class="question">
      {{ Question.I }}
      {{ Question.type }}
      {{ Question.O }}
      =____
    </el-col>
  </el-card>
</template>

<script>
export default {
  props: {
    Qlist: Array
  }
};
</script>

<style scope>
.cardBox {
  padding: 20px 20px 80px;
}
.title {
  text-align: center;
  padding: 0;
  margin: 0 0 20px;
}
.question {
  text-align: center;
  padding: 10px;
}
</style>