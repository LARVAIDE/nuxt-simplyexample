<template>
  <el-card>
    <el-button
      @click="drawer = true"
      type="primary"
      size="small"
      style="float:right; margin-bottom: 10px"
    >添加角色</el-button>
    <el-drawer :visible.sync="drawer" :destroy-on-close="true">
      <el-form
        ref="editdrawData"
        :model="form"
        :rules="rules"
        label-width="80px"
        style="margin: 10px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="type">
          <el-select v-model="form.type" placeholder="请选择角色">
            <el-option label="学生" value="学生"></el-option>
            <el-option label="老师" value="老师"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="权限" prop="root">
          <el-select v-model="form.root" placeholder="请选择权限">
            <el-option label="测试" value="测试"></el-option>
            <el-option label="最高" value="最高"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button type="primary" size="small" @click="submitForm('editdrawData')">提交</el-button>
          <el-button @click="cancelForm('editdrawData')" size="small">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <el-table :data="getteruser" v-loading="loading" border>
      <el-table-column prop="name" label="姓名" width="332px"></el-table-column>
      <el-table-column prop="userType" label="角色"></el-table-column>
      <el-table-column prop="root" label="权限"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">删除角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="margin: 10px 0px; float: right;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="gettercount"
      ></el-pagination>
    </div>
  </el-card>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "user",
  layout: "index",
  middleware: "auth",
  head() {
    return {
      title: "角色管理",
      meta: [
        {
          hid: "user",
          name: "user",
          content: "user page"
        }
      ]
    };
  },
  data() {
    return {
      loading: false,
      pagination: {
        currentPage: 1, //当前页索引
        pageSize: 5 //分页组件每页显示数
      },
      gettercount: 23,
      drawer: false,
      form: {
        name: "",
        type: "",
        root: ""
      },
      rules: {
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
        type: [{ required: true, message: "角色不能为空", trigger: "blur" }],
        root: [{ required: true, message: "权限不能为空", trigger: "blur" }]
      }
    };
  },
  fetch() {
    this.loading = true;
    axios.get("/api/getUser").then(res => {
      this.loading = false;
      this.$store.commit(
        "user/USER_GETUSER",
        res.data.data.slice(0, this.pagination.pageSize)
      );
    });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.commit("user/USER_ADD", {
            name: this.form.name,
            userType: this.form.type,
            root: this.form.type
          });
          this.gettercount = this.gettercount + 1;
          this.$message({
            message: "添加成功！",
            offset: 90,
            type: "success"
          });
          this.drawer = false;
          this.$refs[formName].resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cancelForm(formName) {
      this.drawer = false;
      this.$refs[formName].resetFields();
    },
    handleClick(row) {
      this.$message({
        message: "删除成功！",
        offset: 90,
        type: "success"
      });
      axios.get("/api/getUser").then(res => {
        this.loading = false;
        this.$store.commit(
          "user/USER_GETUSER",
          res.data.data.slice(0, this.pagination.pageSize)
        );
      });
    },
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      axios.get("/api/getUser").then(res => {
        this.loading = false;
        this.$store.commit("user/USER_GETUSER", res.data.data.slice(0, val));
      });
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
      axios.get("/api/getUser").then(res => {
        this.loading = false;
        this.$store.commit(
          "user/USER_GETUSER",
          res.data.data.slice(0, this.pagination.pageSize)
        );
      });
    }
  },
  computed: {
    ...mapGetters("user", ["getteruser"])
  }
};
</script>