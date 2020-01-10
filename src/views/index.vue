<template>
    <div class="home">
        <Header />

        <Wave />

        <div class="main">

            <ul class="article-list" v-for="(item,i) in arr">
                <li class="article">
                    <div :class="i%2 === 0?'article-left':'article-right'">
                        <img class="cover-img" :src="item.coverImgUrl">
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
    import Wave from '../components/Wave'
    import Header from '../components/Header'

    export default {
        name: 'index',
        components: {
            Header,Wave
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
                ]
            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    .home{
        text-align: center;
        .main{
            margin: 200px auto 0 auto;
            min-width: 800px;
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
