<template>
    <div>
        <div class="article-top">
            <div class="top-container">
                <div class="top-title">{{articleInfo.title}}</div>
                <div class="top-info">{{articleInfo.author}} · {{articleInfo.createdAt | parseTime()}} · {{articleInfo.browseNum}} 次阅读</div>
            </div>
        </div>

        <div class="article-body">
            <div v-html="content"></div>
        </div>
    </div>
</template>

<script>
    import markdown from "@/utils/markdown";

    export default {
        name: "articleDetail",
        data() {
            return {
                articleInfo: {},
                content: ''
            }
        },
        computed: {
            id() {
                return this.$route.params.id
            }
        },
        created() {
            this.articleDetail()
        },
        methods: {
            async articleDetail() {
                const data = await this.$xhr.get(`/article/${this.id}`)
                this.articleInfo = data.data
                const article = markdown.marked(data.data.content);
                article.then((res) => {
                    this.content = res.content;
                    // this.articleDetail.toc = res.toc;
                });
            },
        }
    }
</script>

<style scoped lang="scss">
    .article-top {
        width: 100%;
        padding-top: 40px;
        .top-container {
            width: 70%;
            margin: 30px auto;

            &>:first-child {
                font-weight: bold;
                font-size: 18px;
                margin-bottom: 14px;
            }
        }
    }

    .article-body {
        width: 70%;
        margin: 0 auto;
    }
</style>
