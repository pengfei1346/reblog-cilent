<template>
    <div class="home">
        <Header class="header"/>

        <div class="bg-box"></div>

        <div ref="main" class="main">
            <div class="operate">
                <div class="hello"></div>
                <div class="header-top" @click="headerTopDown">
                    <i class="iconfont icon-iconfonticonfonti2" aria-hidden="true"></i>
                </div>
            </div>

            <div class="wave">
                <div id="banner_wave_1"></div>
                <div id="banner_wave_2"></div>
            </div>

            <ul class="article-list">
                <li class="article" v-for="(item,i) in list" :key="i" @click="handleToDetail(item._id)">
                    <div class="article-left border-shadow" :class="i%2 !== 0?'left':'right'">
                        <div class="detail-content">
                            <div class="detail-publish"><i class="iconfont icon-shijian2"></i>{{item.createdAt | parseTime}}</div>
                            <div class="detail-title">{{item.title}}</div>
                            <div class="detail-meta">
                                <div class="meta-box"><i class="iconfont icon-yanjing"></i>{{item.browseNum}}</div>
                                <div class="meta-box"><i class="iconfont icon-huifu"></i>{{item.replyNum}}</div>
                                <div class="meta-box"><i class="iconfont icon-zuozhe"></i>{{item.author}}</div>
                            </div>
                            <div class="detail-abstract">
                                <p>摘要：</p>
                                <p style="text-indent: 2em">{{item.abstract}}</p>
                            </div>
                            <div class="detail-edit">
                                <div><i class="iconfont icon-shenglvehao"></i></div>
                                <!--<div>编辑</div>-->
                            </div>
                        </div>
                    </div>
                    <div class="article-right" :class="i%2 === 0?'left':'right'">
                        <img class="cover-img" data-src="a" :src="item.coverImgUrl" v-show="item.coverImgUrl">
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'

    export default {
        name: 'index',
        components:{
            Header
        },
        data () {
            return{
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
                window.scroll(0,this.$refs.main.offsetTop)
                // let endScroll = document.getElementById('main').offset().top;
            },
            async getArticleList() {
                const data = await this.$xhr.get('/article')
                this.list = data.data
                this.total = data.total
            },
            handleToDetail(id) {
                if(!id) return
                this.$router.push({
                    path: `/articles/${id}`
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  @import "./style/index";
</style>
