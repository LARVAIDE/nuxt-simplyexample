<template>
  <v-chart :options="options" />
</template>
<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

export default {
  name: "Echarts",
  components: {
    "v-chart": ECharts
  },
  props: {
    chartdata: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      options: {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval: 0
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "分数",
            type: "bar",
            barWidth: "60%",
            data: []
          }
        ],
        animationDuration: 2000
      }
    };
  },
  watch: {
    chartdata: {
      handler(newValue, oldValue) {
        this.options.xAxis[0].data = this.chartdata.countChartsX;
        this.options.series[0].data = this.chartdata.countChartsY;
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.echarts {
  width: 100%;
}
</style>
