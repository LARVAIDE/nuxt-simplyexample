<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-card>
          <i class="el-icon-top" style="color: #F56C6C; font-weight: 900; font-size: 36px"></i>
          <span class="title">提升最快</span>
          <span class="content">{{ gettercharts.countChartsX[4] }}</span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <i class="el-icon-bottom" style="color: #67C23A; font-weight: 900; font-size: 36px"></i>
          <span class="title">有所下降</span>
          <span class="content">{{ gettercharts.countChartsX[9] }}</span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <i class="el-icon-medal-1" style="color: #ffed00; font-weight: 900; font-size: 36px"></i>
          <span class="title">本次冠军</span>
          <span class="content">第一组</span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <i class="el-icon-thumb" style="color: #909399; font-weight: 900; font-size: 36px"></i>
          <span class="title">尚需努力</span>
          <span class="content">第四组</span>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="chartsBox">
      <Charts :chartdata="gettercharts" />
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import Charts from "~/components/charts";

export default {
  layout: "index",
  middleware: "auth",
  components: {
    Charts
  },
  head() {
    return {
      title: "成绩管理",
      meta: [
        {
          hid: "achievement",
          name: "achievement",
          content: "achievement page"
        }
      ]
    };
  },
  data() {
    return {};
  },
  fetch() {
    axios.get(`/api/getAchievement`).then(res => {
      this.$store.commit("charts/CHARTS_GETDATA", res.data);
    });
  },
  computed: {
    ...mapGetters("charts", ["gettercharts"])
  }
};
</script>

<style scoped>
.chartsBox {
  margin-top: 10px;
}

.title {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 16px;
  color: #606266;
}

.content {
  font-size: 26px;
  color: #303133;
}
</style>

