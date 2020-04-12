<template>
  <div class="girdBox">
    <h4 class="Mtitle">&copy;{{new Date().getFullYear()}} &nbsp;&nbsp;小学生在线口算检测系统</h4>
    <el-card class="girdItem">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <el-form-item class="inputitem" prop="username">
          <el-input placeholder="请输入账号" prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item class="inputitem" prop="password">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()" class="btn">登录</el-button>
        </el-form-item>
      </el-form>
      <span class="tips">
        管理员账号:admin 用户账号：usr
        <br />密码：any
      </span>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  middleware: "auth",
  head() {
    return {
      title: "用户登录",
      meta: [
        {
          hid: "login",
          name: "login",
          content: "login page"
        }
      ]
    };
  },
  data() {
    let validateUsername = (rule, value, callback) => {
      if (value.trim() === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    let validatePassword = (rule, value, callback) => {
      if (value.trim() === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    },
    login: function() {
      axios
        .post("/api/userlogin", {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(res => {
          if (res.data.res) {
            if (res.data.type === "admin") {
              sessionStorage.setItem("token", "admin");
              this.$router.push("/Question");
            }
            if (res.data.type === "usr") {
              sessionStorage.setItem("token", "usr");
              this.$router.push("/test");
            }
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(error => {
          window.console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.girdBox {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
}

.girdItem {
  width: 380px;
  min-width: 260px;
  transform: translateY(-15vh);
  padding: 30px 20px;
  margin: 0px 10px;
}

.inputitem {
  margin-bottom: 20px;
}

.tips {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 10px;
  font-weight: 400;
  color: #606266;
}

.btn {
  width: 100%;
}

.Mtitle {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #409eff;
  position: fixed;
  bottom: 0;
}
</style>
