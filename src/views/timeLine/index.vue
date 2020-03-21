<template>
    <div class="timeline left">
        <el-timeline>
            <el-timeline-item v-for="(l, i) in list"
                              :key="l._id"
                              :color="l.state === 1 ? 'green' : l.state === 3 ? 'red' : ''"
                              placement="top"
                              hide-timestamp>
                <el-card>
                    <h3>{{l.title}}</h3>
                    <p>{{l.content}}</p>
                    <p>
            <span>
              {{l.start_time}}--
            </span>
                        <span>
              {{l.end_time}}
            </span>
                    </p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    import LoadEnd from "@/components/loadEnd.vue";
    import LoadingCustom from "@/components/loading.vue";
    import {
        throttle,
        getScrollTop,
        getDocumentHeight,
        getWindowHeight,
        getQueryStringByName,
        timestampToTime
    } from "@/utils/utils";
    // import {Params, TimelineList, TimelinesData} from "@/types/index";

    export default {
        components: {
            LoadEnd,
            LoadingCustom
        },
        data() {
            return {
                isLoadEnd: false,
                isLoading: false,
                list: [],
                total: 0,
                Params: {
                    keyword: "",
                    pageNum: 1,
                    pageSize: 10
                }
            }
        },
        mounted() {
            // this.handleSearch();
            window.onscroll = () => {
                if (getScrollTop() + getWindowHeight() > getDocumentHeight() - 100) {
                    // 如果不是已经没有数据了，都可以继续滚动加载
                    if (this.isLoadEnd === false && this.isLoading === false) {
                        this.handleSearch();
                    }
                }
            };
        },
        methods: {
            async handleSearch() {
                this.isLoading = true;

                const TimelinesData = await this.$xhr.get(
                    'getTimeAxisList',
                    {
                        params: this.params
                    }
                );
                this.isLoading = false;

                this.list = [...this.list, ...data.list];
                this.total = data.count;
                this.params.pageNum++;
                if (this.total === this.list.length) {
                    this.isLoadEnd = true;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .timeline {
        width: 70%;
        margin: 0 auto;
        padding: 40px 0;

        .year {
            font-size: 34px;
            font-weight: bold;
            color: #000;
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
    }
</style>
