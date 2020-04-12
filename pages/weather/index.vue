<template>
  <el-card>
    <el-table :data="getterweatherList" border v-loading="loading">
      <el-table-column prop="date" label="日期" width="110px"></el-table-column>
      <el-table-column prop="week" label="星期" width="50px"></el-table-column>
      <el-table-column prop="dayweather" label="日间天气"></el-table-column>
      <el-table-column prop="nightweather" label="晚间天气"></el-table-column>
      <el-table-column prop="daytemp" label="日间气温"></el-table-column>
      <el-table-column prop="nighttemp" label="晚间气温"></el-table-column>
      <el-table-column prop="daywind" label="日间风向"></el-table-column>
      <el-table-column prop="nightwind" label="晚间风向"></el-table-column>
      <el-table-column prop="daypower" label="日间风力"></el-table-column>
      <el-table-column prop="nightpower" label="晚间风力"></el-table-column>
    </el-table>
    <el-row>
      <el-col class="info-row">
        <i v-if="getteraddress.length" class="el-icon-location-information"></i>
        <span>{{ getteraddress }}</span>
        <span style="float: right">{{ getterupdate }}</span>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "weather",
  layout: "index",
  data() {
    return {
      loading: true
    };
  },
  head() {
    return {
      title: "考场天气",
      meta: [
        {
          hid: "issue",
          name: "issue",
          content: "issue page"
        }
      ]
    };
  },
  fetch: function() {
    axios
      .get(
        "https://restapi.amap.com/v3/weather/weatherInfo?key=ec1550659a2a1bce425810c81d4ed2e0&city=420100&extensions=all"
      )
      .then(res => {
        if (res.data.status === "1") {
          this.loading = false;
          this.$store.commit("weather/WEATHER_GETWEATHER", res.data.forecasts);
        }
      });
  },
  computed: {
    ...mapGetters("weather", [
      "getterweatherList",
      "getteraddress",
      "getterupdate"
    ])
  }
};
</script>

<style scoped>
.info-row {
  width: 100%;
  height: 48px;
  background-color: rgb(255, 255, 255);
  color: rgb(96, 98, 102);
  font-size: 14px;
  font-weight: 700;
  vertical-align: middle;
  padding: 12px 10px;
  border: 1px solid rgb(235, 238, 245);
  border-top: none;
}
</style>
