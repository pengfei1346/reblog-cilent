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

            <ul class="article-list" v-for="(item,i) in list">
                <li class="article">
                    <div :class="i%2 === 0?'article-left':'article-right'">
                        <img class="cover-img" data-src="a" :src="item.coverImgUrl" v-show="item.coverImgUrl">
                    </div>
                    <div class="border-shadow" :class="i%2 !== 0?'article-left':'article-right'">
                        <div class="detail-content">
                            <div class="detail-publish">{{item.publishTime}}</div>
                            <div class="detail-title">{{item.title}}</div>
                            <div class="detail-meta">
                                <div>{{item.heatNum}}</div>
                                <div>{{item.commentNum}}</div>
                                <div>{{item.author}}</div>
                            </div>
                            <div class="detail-abstract">
                                <p>摘要：{{item.abstract}}</p>
                            </div>
                            <div class="detail-edit">
                                <div>...</div>
                                <div>编辑</div>
                            </div>
                        </div>
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
                arr:[
                    {
                        publishTime: '2018-12-3 4:21:11',
                        title: '啊啊',
                        heatNum: 33,
                        commentNum: 56,
                        author: '方法',
                        abstract: '反反复复反反复复反反复复反反复复反反复复发发发',
                        coverImgUrl: require('../assets/item-1.png')
                    },
                    {
                        publishTime: '2018-12-3 4:21:11',
                        title: 'ga',
                        heatNum: 13,
                        commentNum: 546,
                        author: 'ga',
                        abstract: 'gafsadadsa',
                        coverImgUrl: require('../assets/item-2.jpg')
                    },
                    {
                        publishTime: '2018-12-3 4:21:11',
                        title: 'ga',
                        heatNum: 13,
                        commentNum: 546,
                        author: 'ga',
                        abstract: 'gafsadadsa',
                        coverImgUrl: require('../assets/item-2.jpg')
                    },
                ],
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
                const data = await this.$xhr.get('/articles')
                this.list = data.data
                this.total = data.data
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
                    width: 780px;
                    height: 300px;
                    margin: 20px auto;
                    border-radius: 10px;
                    display: flex;
                    .border-shadow{
                        box-shadow: 0 1px 20px -8px rgba(0, 0, 0, .5);
                    }
                    .article-left{
                        order: 1;
                        border-radius: 10px 0 0 10px;
                    }
                    .article-right{
                        order: 2;
                        border-radius: 0 10px 10px 0;
                    }
                    .article-left,.article-right{
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
                                font-size: 12px;
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
                                font-size: 12px;
                                display: flex;
                                justify-content: space-around;
                            }
                            .detail-abstract{
                                font-size: 12px;
                                width: 100%;
                                color: rgba(0, 0, 0, .66);
                                height: 67.5px;
                                overflow: hidden;
                                margin: 20px 0 40px;
                                p{
                                    line-height: 25px;
                                }
                            }
                            .detail-edit{
                                padding: 0 20px;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                            }
                        }
                        .cover-img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }

</style>
