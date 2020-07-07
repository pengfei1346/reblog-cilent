<template>
    <div>
        <div class="article-top">
            <div class="top-container">
                <div class="top-title">{{articleInfo.title}}</div>
                <div class="top-info">{{articleInfo.author}} · {{articleInfo.createdAt | parseTime()}} · {{articleInfo.browseNum}} 次阅读</div>
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
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        name: "articleDetail",
        components:{
            mavonEditor
        },
        data() {
            return {
                articleInfo: {},
                content: ''
            }
        },
        computed: {
            id() {
                return this.$route.params.id
            },
            // 解析器配置
            prop () {
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
