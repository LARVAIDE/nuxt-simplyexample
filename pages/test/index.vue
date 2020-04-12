<template>
  <div>
    <ShowQ :Qlist="Qlist" />
    <el-card class="testCard">
      <h2 class="Acardtitle">答题卡</h2>
      <el-form ref="form" :model="form" label-width="80px">
        <el-col :span="8">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-col>
      </el-form>
      <el-col :offset="11">
        <el-button type="primary" @click="handleClick()">提交答案</el-button>
        <el-button @click="closeClick()">退出答题</el-button>
      </el-col>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import ShowQ from "~/components/showQuestion";
export default {
  components: {
    ShowQ
  },
  middleware: "auth",
  data() {
    return {
      Qlist: [],
      form: {
        name: ""
      }
    };
  },
  created: function() {
    axios.post("/api/getQuestion", { num: 12, grade: "1" }).then(res => {
      this.loading = false;
      this.Qlist = res.data.data;
      this.more = true;
    });
  },
  methods: {
    handleClick() {
      this.$notify({
        message: "提交成功！",
        offset: 30,
        type: "success"
      });
    },
    closeClick() {
      sessionStorage.removeItem("token");
      this.$router.push("/");
    }
  }
};
</script>

<style >
.testCard {
  padding-bottom: 20px;
}
.Acardtitle {
  color: #409eff;
  text-align: center;
  padding: 0;
  margin: 0 0 20px;
}
</style>