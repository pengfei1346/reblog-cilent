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
                            <div class="detail-publish"><i class="iconfont icon-shijian2"></i>{{item.publishTime | parseTime}}</div>
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
                                <div>编辑</div>
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
    .home{
        z-index: 0;
        //  菜单栏
        .header{
            opacity: 0;
            transition: all .5s linear;
            &:hover{
                opacity: 1;
            }
        }

        //背景盒子
        .bg-box{
            z-index: 0;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-image: url("https://zouwang.vip/wp-content/themes/Sakura/cover/index.php");
            /*background-image: url("../assets/bg.jpg");*/
            background-position: top center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
            display: flex;
            align-items: flex-end;
            justify-content: center;
        }

        .main{
            position: absolute;
            top: 100vh;
            left: 0;
            right: 0;
            background: #fff;
            z-index: 120;
            /*margin: 100vh auto 0 auto;*/
            min-width: 800px;
            min-height: 100vh;
            /**/
            .operate{
                z-index: 120;
                position: absolute;
                top: -50vh;
                left: 50%;
                transform: translateX(-50%);
                height: calc(50vh - 70px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                /*animation: topmove 2s infinite;*/
                .header-top{
                    cursor: pointer;
                    z-index: 5;
                    animation: topmove 1.5s infinite alternate;
                    i{
                        font-size: 28px;
                        color: #fff;
                    }
                }
                @keyframes topmove {
                    from {
                        transform: translateY(0px);
                    }
                    to {
                        transform: translateY(10px);
                    }
                    /*from {height: calc(50vh - 70px);}*/
                    /*to {height: calc(50vh - 56px);}*/
                }
            }

            /*波浪特效*/
            .wave {
                z-index: 20;
                position: absolute;
                top: -110px;
                height: 110px;
                width: 100%;
                overflow: hidden;
                transition: .4s ease all;
                #banner_wave_1,
                #banner_wave_2 {
                    position: absolute;
                    width: 200%;
                    height: 100%;
                    background-size: 50% 100%;
                }
                #banner_wave_1 {
                    top: 30px;
                    left: -100%;
                    opacity: 1;
                    animation: water-right 20s infinite linear;
                    background: url(https://zouwang.vip/wp-content/uploads/2019/09/wave1.png) repeat-x;
                }
                #banner_wave_2 {
                    top: 30px;
                    left: 0;
                    opacity: 1;
                    animation: water-left 30s infinite linear;
                    background: url(https://zouwang.vip/wp-content/uploads/2019/09/wave2.png) repeat-x;
                }
                @keyframes water-right {
                    0% {
                        transform: translateX(0) translateZ(0) scaleY(1)
                    }
                    50% {
                        transform: translateX(25%) translateZ(0) scaleY(0.85)
                    }
                    100% {
                        transform: translateX(50%) translateZ(0) scaleY(1)
                    }
                }
                @keyframes water-left {
                    from {
                        transform: translate(0%, 0px);
                    }
                    to {
                        transform: translate(-50%, 0px);
                    }
                }
            }

            //文章列表
            .article-list{
                .article{
                    cursor: pointer;
                    width: 800px;
                    height: 300px;
                    margin: 20px auto;
                    display: flex;
                    flex-flow:row;
                    /*overflow: hidden;*/
                    .border-shadow{
                        box-shadow: 0 1px 20px -8px rgba(0, 0, 0, .5);
                    }
                    .left{
                        order: 1;
                        border-radius: 10px 0 0 10px;
                    }
                    .right{
                        order: 2;
                        border-radius: 0 10px 10px 0;
                    }
                    .article-left{
                        flex: 1;
                        overflow: hidden;
                        position: relative;
                        .detail-content{
                            text-align: left;
                            width: 300px;
                            position: absolute;
                            top: 20px;
                            left: 50%;
                            transform: translateX(-50%);
                            .detail-publish{
                                color: #888;
                                font-size: 13px;
                                display: flex;
                                align-items: center;
                                i{
                                    margin-right: 6px;
                                }
                            }
                            .detail-title{
                                text-overflow: ellipsis;
                                overflow: hidden;
                                word-wrap: break-word;
                                font-size: 18px;
                                margin: 15px 0;
                                font-weight: 600;
                            }
                            .detail-meta{
                                color: #888;
                                font-size: 14px;
                                display: flex;
                                justify-content: space-around;
                                .meta-box{
                                    display: flex;
                                    align-items: center;
                                    i{
                                        margin-right: 6px;
                                    }
                                }
                            }
                            .detail-abstract{
                                font-size: 16px;
                                width: 100%;
                                color: rgba(0, 0, 0, .66);
                                height: 104px;
                                overflow: hidden;
                                margin: 16px 0 30px;
                                p{
                                    line-height: 25px;
                                }
                            }
                            .detail-edit{
                                padding: 0 20px;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                color: #333;
                                i{
                                    color: #666;
                                    font-size: 24px;
                                }
                                i:hover{
                                    color: #ccc;
                                }
                            }
                        }
                    }
                    .article-right{
                        overflow: hidden;
                        width: 429px;
                        .cover-img:hover {
                            transform: scale(1.1)
                        }
                        .cover-img{
                            /*429 300*/
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: all .6s
                        }
                    }
                }
            }
        }
    }

</style>
