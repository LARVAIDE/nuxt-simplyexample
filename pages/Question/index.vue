<template>
  <div id="ad">
    <el-card>
      <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="一年级" name="1"></el-tab-pane>
        <el-tab-pane label="二年级" name="2"></el-tab-pane>
        <el-tab-pane label="三年级" name="3"></el-tab-pane>
        <el-tab-pane label="四年级" name="4"></el-tab-pane>
        <el-tab-pane label="五年级" name="5"></el-tab-pane>
        <el-tab-pane label="六年级" name="6"></el-tab-pane>
      </el-tabs>
      <el-table :data="getteritem" v-loading="loading" border>
        <el-table-column prop="name" label="试题章节" width="332px"></el-table-column>
        <el-table-column prop="rate" label="章节难度">
          <template slot-scope="scope">
            <el-rate v-model="scope.row.rate" disabled show-score text-color="#ff9900"></el-rate>
          </template>
        </el-table-column>
        <el-table-column prop="number" label="试题数量"></el-table-column>
        <!-- <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="text" size="small">加入试卷</el-button>
          </template>
        </el-table-column>-->
      </el-table>
      <el-row>
        <el-col style="margin-top: 10px">
          <el-button type="primary" @click="CreateClick" style="float:right">生成试卷</el-button>
        </el-col>
      </el-row>
    </el-card>
    <ShowQ :Qlist="Qlist" v-if="more" />
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import ShowQ from "~/components/showQuestion";

export default {
  name: "Question",
  layout: "index",
  middleware: "auth",
  components: {
    ShowQ
  },
  data() {
    return {
      activeName: "1",
      loading: false,
      more: false,
      input: 6,
      Qlist: []
    };
  },
  head() {
    return {
      title: "试题管理",
      meta: [
        {
          hid: "item",
          name: "item",
          content: "item page"
        }
      ]
    };
  },
  fetch() {
    this.loading = true;
    axios.get("/api/getFirst").then(res => {
      this.loading = false;
      this.$store.commit("item/ITEM_GETITEM", res.data);
    });
  },
  methods: {
    handleClick(tab) {
      this.activeName = tab.name;
      switch (tab.name) {
        case "1":
          this.loading = true;
          this.getData("getFirst");
          break;
        case "2":
          this.loading = true;
          this.getData("getSecond");
          break;
        case "3":
          this.loading = true;
          this.getData("getThird");
          break;
        case "4":
          this.loading = true;
          this.getData("getFour");
          break;
        case "5":
          this.loading = true;
          this.getData("getFive");
          break;
        case "6":
          this.loading = true;
          this.getData("getSix");
          break;
      }
    },
    getData(grade) {
      axios.get(`/api/${grade}`).then(res => {
        this.loading = false;
        this.$store.commit("item/ITEM_GETITEM", res.data);
      });
    },
    handleChange(value) {
      console.log(value);
    },
    CreateClick() {
      axios
        .post("/api/getQuestion", { num: 12, grade: this.activeName })
        .then(res => {
          this.loading = false;
          this.Qlist = res.data.data;
          this.more = true;
        });
    }
  },
  computed: {
    ...mapGetters("item", ["getteritem"])
  }
};
</script>

<style>
.el-tabs__header,
.el-tabs--card > .el-tabs__header {
  border: none;
  margin: 0;
}
</style>

