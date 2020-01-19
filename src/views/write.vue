<template>
  <div>
    <div class="form">
      <div>
        <h2>标题</h2>
        <input type="text" v-model="notes.title">
      </div>

      <div>
        <h2>作者</h2>
        <input type="text" v-model="notes.author">
      </div>

      <div>
        <h2>目录</h2>
        <input type="text" v-model="notes.abstract">
      </div>

      <div>
        <h2>图片</h2>
        <input type="text" v-model="notes.coverImgUrl">
      </div>

      <div>
        <h2>内容</h2>
        <QuillEditor v-model="notes.note" :placeholder="'填写岗位需求'"/>
      </div>

      <div id="label">
        标签
        <el-checkbox-group v-model="notes.tags" class="fll" size="small">
          <el-checkbox-button v-for="label in lables"
                              :label="label" :key="label.index">
            {{label.title}}
          </el-checkbox-button>
        </el-checkbox-group>
      </div>

      <button @click="handlePut">发布</button>
    </div>
  </div>
</template>

<script>
  // import editor from '../components/editor'
  import QuillEditor from '../components/QuillEditor'

  import axios from 'axios'

  export default {
    name: "write",
    components: {
      QuillEditor
    },
    data() {
      return {
        notes: {
          title: "",
          note: "",
          tags: [],
          abstract: '',
          coverImgUrl: '/uploads/2019/10/1000123-1024x576.jpg'
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
          {title: "require.js"},
          {title: "ui"},
          {title: "anlmate"}]
      }
    },
    methods: {
      async handlePut() {
        const data = await this.$xhr.post('/articles', this.notes)
        if(data.code === 200) {
          alert(data.msg)
        }else if (data.code === 400) {
          alert("发布失败")
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .form {
    width: 800px;
    margin: 80px auto;
    textarea {
      font-size: 18px;
      padding: 30px 30px;
      width: 700px;
      height: 500px;
      resize: none;
      outline: none;
    }
    button {
      width: 120px;
      height: 30px;
      border: none;
      background: red;
      color: #fff;
      outline: none;
      font-size: 18px;
    }
    h2 {
      margin: 20px 0;
    }
    input {
      padding: 0 30px;
      font-size: 22px;
      height: 50px;
      width: 730px;
      outline: none;
    }
    #label {
      margin: 20px 0;
    }
  }
</style>
