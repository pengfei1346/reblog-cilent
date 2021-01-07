<template>
  <div class="home">
    <Header class="header"/>

    <div class="main">
      <ul class="article-list">
        <li v-for="(item,i) in list" :key="i" @click="handleToDetail(item._id)">
          <div class="article-top">
            <div class="feature-body">
              <img :src="item.coverImgUrl" class="feature-img">
            </div>

            <div class="article-body">
              <div class="top-title">
                <div>{{item.title}}</div>
                <div>发布于 {{item.createdAt | parseTime('{y}-{m}-{d}')}}</div>
              </div>
              <p>
                {{item.abstract}}
                <span>...</span>
              </p>

              <div class="item-bottom">
                <div class="detail-meta">
                  <div class="meta-box"><i class="iconfont icon-yanjing"></i>{{item.browseNum}}</div>
                  <div class="meta-box"><i class="iconfont icon-huifu"></i>{{item.replyNum}}</div>
                  <div class="meta-box"><i class="iconfont icon-zuozhe"></i>{{item.author}}</div>
                </div>
                <div class="item-foot">...</div>
              </div>
            </div>
          </div>
          <hr>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: 'index',
    components: {
      Header
    },
    data() {
      return {
        // publishTime: '2018-12-3 4:21:11',
        // title: '啊啊',
        // heatNum: 33,
        // commentNum: 56,
        // author: '方法',
        // abstract: '反反复复反反复复反反复复反反复复反反复复发发发',
        // coverImgUrl: require('../assets/item-1.png')
        list: [],
        total: 0
      }
    },
    created() {
      this.getArticleList()
    },
    methods: {
      headerTopDown() {
        console.log(this.$refs.main.offsetTop);
        window.scroll(0, this.$refs.main.offsetTop)
        // let endScroll = document.getElementById('main').offset().top;
      },
      async getArticleList() {
        const data = await this.$xhr.get('/article')
        this.list = data.data
        this.total = data.total
      },
      handleToDetail(id) {
        if (!id) return
        this.$router.push({
          path: `/articles/${id}`
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "style/articleList";
</style>
