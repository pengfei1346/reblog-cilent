<template>
  <div class="form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="摘要" prop="region">
        <el-input type="textarea" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="图片" required>
        <uploadImg @fileLoad="fileLoad"/>
      </el-form-item>
      <el-form-item label="内容" required>
        <markdown />
        <!--<QuillEditor v-model="notes.content" :placeholder="'填写岗位需求'"/>-->
      </el-form-item>
      <el-form-item label="标签">
        <el-checkbox-group v-model="notes.tags" class="fll" size="small">
          <el-checkbox-button v-for="label in lables"
                              :label="label" :key="label.index">
            {{label.title}}
          </el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="内容" required>
        <el-button type="primary" @click="handlePut('ruleForm')">立即创建</el-button>
      </el-form-item>
    </el-form>

    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </div>
</template>

<script>
  import uploadImg from '../../components/putImg'
  import markdown from '../../components/markdown'
  // import QuillEditor from '../../components/QuillEditor'

  import axios from 'axios'

  export default {
    name: "write",
    components: {
      QuillEditor,uploadImg,
      markdown
    },
    data() {
      return {
        notes: {
          title: "",
          content: "",
          tags: [],
          abstract: '',
          coverImgUrl: '',
          coverImgFile: null
        },
        lables: [
          {title: "html"},
          {title: "css"},
          {title: "h5"},
          {title: "js"},
          {title: "es6"},
          {title: "ajax"},
          {title: "vue.js"},
          {title: "jquery.js"},
          {title: "react.js"},
          {title: "ui"},
        ],
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      async handlePut() {
        let form = new FormData()
        Object.keys(this.notes).forEach(key => {
          form.append(key, this.notes[key])
        })
        const data = await this.$xhr.post('/article', form, {
          headers:{"Content-Type":"multipart/form-data"}
        })
        if(data.code === 200) {
          alert(data.msg)
        }else if (data.code === 400) {
          alert("发布失败")
        }
      },
      fileLoad(file) {
        this.notes.coverImgFile = file
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss">
  .form {
    font-size: 14px;
    width: 800px;
    margin: 20px auto;
  }
</style>
