<template>
  <div class="editor">

    <div id="editorElem" style="text-align:left"></div>
  </div>
</template>

<script>
  import E from 'wangeditor'

  export default {
    name: 'test1',
    props: {
      inputContent: String,
      required: true
    },
    data() {
      return {
        editorContent: ''
      }
    },
    methods: {
      getContent: function () {
        this.$emit('content', this.editorContent)
      }
    },
    mounted() {
      var editor = new E('#editorElem')
      editor.customConfig.menus = [
        "head", "fontSize", "fontName", "underline"
        , "image", "undo", "redo"
      ];

      editor.create()
    },
    watch: {
      editorContent() {
        this.getContent();
      }
    }
  }
</script>

<style scoped lang="scss">
  .editor {
    overflow: hidden;
    margin: 0 auto;
    height: 400px;
    width: 800px;
    background: #fff;
  }
</style>
