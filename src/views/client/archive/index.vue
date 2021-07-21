<template>
  <div class="archive left">
    <el-timeline>
      <el-timeline-item v-for="(l, i) in articlesList"
                        :key="l.year"
                        placement="top"
                        hide-timestamp>
        <h3 class="year">{{l.year}}</h3>

        <el-timeline-item v-for="(item, index) in l.list"
                          :key="item._id"
                          :color="item.state === 1 ? 'green' : item.state === 3 ? 'red' : ''"
                          placement="top"
                          hide-timestamp>
          <router-link :to="`/articles/${item._id}`">
            <h3 class="title">{{item.title}}</h3>
          </router-link>
          <p>{{item.createdAt | parseTime}}</p>
        </el-timeline-item>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
  import {timestampToTime} from "@/utils/utils";

  export default {
    data() {
      return {
        isLoading: false,
        articlesList: [],
        params: {
          keyword: "",
          likes: "", // 是否是热门文章
          state: 1, // 文章发布状态 => 0 草稿，1 已发布,'' 代表所有文章
          article: 1,
          tag_id: "",
          category_id: "",
          pageNum: 1,
          pageSize: 10
        },
      }
    },
    mounted() {
      this.handleSearch();
    },
    methods: {
      async handleSearch() {
        this.isLoading = true;
        const data = await this.$xhr.get('/article/year', {
          params: this.params
        });
        this.isLoading = false;
        this.articlesList = data.archiveList;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .archive {
    width: 80%;
    margin: 0 auto;
    padding: 40px 0;

    .year {
      font-size: 30px;
      font-weight: bold;
      color: #000;
      margin-top: 0;
      margin-bottom: 40px;
    }

    a {
      text-decoration: none;
    }

    .title {
      color: #333;

      &:hover {
        color: #1890ff;
      }
    }

    p{
      margin-top: 8px;
      color: #909399;
      line-height: 1;
      font-size: 13px;
    }
  }
</style>

