<template>
  <div>
    <div class="article-top">
      <div class="top-container">
        <div class="top-title">{{articleInfo.title}}</div>
        <div class="top-info">{{articleInfo.author}} · {{articleInfo.createdAt | parseTime()}} ·
          {{articleInfo.browseNum}} 次阅读
        </div>
      </div>
    </div>

    <div class="article-body">
      <mavon-editor
              class="md"
              :value="articleInfo.content"
              :subfield="prop.subfield"
              :defaultOpen="prop.defaultOpen"
              :toolbarsFlag="prop.toolbarsFlag"
              :editable="prop.editable"
              :scrollStyle="prop.scrollStyle"
      />
    </div>

    <vue-particles
            class="background-box"
            color="#dedede"
            :particleOpacity="0.8"
            :particlesNumber="100"
            shapeType="edge"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: "articleDetail",
    components: {
      mavonEditor
    },
    data() {
      return {
        articleInfo: {},
        content: '',
        // color: String类型。默认'#dedede'。粒子颜色。
        // particleOpacity: Number类型。默认0.7。粒子透明度。
        // particlesNumber: Number类型。默认80。粒子数量。
        // shapeType: String类型。默认'circle'。可用的粒子外观类型有："circle","edge","triangle", "polygon","star"。
        // particleSize: Number类型。默认80。单个粒子大小。
        // linesColor: String类型。默认'#dedede'。线条颜色。
        // linesWidth: Number类型。默认1。线条宽度。
        // lineLinked: 布尔类型。默认true。连接线是否可用。
        // lineOpacity: Number类型。默认0.4。线条透明度。
        // linesDistance: Number类型。默认150。线条距离。
        // moveSpeed: Number类型。默认3。粒子运动速度。
        // hoverEffect: 布尔类型。默认true。是否有hover特效。
        // hoverMode: String类型。默认true。可用的hover模式有: "grab", "repulse", "bubble"。
        // clickEffect: 布尔类型。默认true。是否有click特效。
        // clickMode: String类型。默认true。可用的click模式有: "push", "remove", "repulse", "bubble"。
      }
    },
    computed: {
      id() {
        return this.$route.params.id
      },
      // 解析器配置
      prop() {
        let data = {
          subfield: false,// 单双栏模式
          defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
          editable: false,	// 是否允许编辑
          toolbarsFlag: false,
          scrollStyle: true
        }
        return data
      }
    },
    created() {
      this.articleDetail()
    },
    methods: {
      async articleDetail() {
        const data = await this.$xhr.get(`/article/${this.id}`)
        this.articleInfo = data.data
      },
    }
  }
</script>

<style scoped lang="scss">
  .background-box {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -9999;
  }

  .article-top {
    z-index: 100;
    width: 100%;
    padding-top: 40px;

    .top-container {
      width: 70%;
      margin: 30px auto;

      & > :first-child {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 14px;
      }
    }
  }

  .article-body {
    z-index: 100;
    width: 70%;
    margin: 0 auto;
  }
</style>
