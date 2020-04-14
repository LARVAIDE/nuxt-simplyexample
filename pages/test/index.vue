<template>
  <div>
    <ShowQ :Qlist="Qlist" />
    <el-card class="testCard">
      <h2 class="Acardtitle">答题区域</h2>
      <el-form ref="form" label-width="80px">
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="a[0]"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="a[1]"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="a[2]"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="a[3]"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="a[4]"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="a[5]"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="a[6]"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="a[7]"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="a[8]"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="a[9]"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="a[10]"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-input v-model="a[11]"></el-input>
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
      a: ["", "", "", "", "", "", "", "", "", "", "", ""],
      wrong: [],
      mark: ""
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
      this.calculate();
      this.$alert(`错误试题:${this.wrong}`, `测试结果:${this.mark}分`, {
        confirmButtonText: "确认并退出",
        callback: () => {
          this.closeClick();
          this.$message({
            type: "success",
            message: `退出测试成功！`
          });
        }
      });
    },
    closeClick() {
      sessionStorage.removeItem("token");
      this.$router.push("/");
    },
    calculate() {
      let answer = [];
      let wrong = [];
      this.Qlist.map((item, index) => {
        answer.push(this.calculateRule(item.I, item.O, item.type));
      });
      answer.map((item, index) => {
        if (item != this.a[index]) {
          wrong.push(index + 1);
        }
      });
      this.mark = (
        ((answer.length - wrong.length) / answer.length) *
        100
      ).toFixed();
      this.wrong = wrong;
    },
    calculateRule(I, O, type) {
      switch (type) {
        case "+":
          return I + O;
        case "-":
          return I - O;
      }
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