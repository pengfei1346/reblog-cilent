<template>
    <ul class="nav">
        <router-link to="/index"><li :class="this.$route.path==='/index'?'active':''">首页</li></router-link>
        <router-link to="/articles"><li :class="this.$route.path==='/articles'?'active':''">文章</li></router-link>
        <router-link to=""><li :class="this.$route.path===3?'active':''">分类</li></router-link>
        <router-link to=""><li :class="this.$route.path===4?'active':''">收藏</li></router-link>
        <router-link to=""><li :class="this.$route.path===5?'active':''">时间轴</li></router-link>
        <router-link to=""><li :class="this.$route.path===6?'active':''">留言</li></router-link>
        <router-link to=""><li :class="this.$route.path===7?'active':''">关于</li></router-link>
        <router-link to="/write"><li :class="this.$route.path==='/write'?'active':''">写文章</li></router-link>
    </ul>
</template>

<script>
    import HeaderGroup from './components/HeaderGroup'

    export default {
        name: "index",
        components: {
            HeaderGroup
        }
    }
</script>

<style scoped lang="scss">
    .nav{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: #fff;
        width: 100%;
        line-height: 60px;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 40px -8px rgba(0, 0, 0, .5);
        li {
            color: #666 !important;
            cursor: pointer;
            margin: 0 14px;
            &:hover{
                color: rgb(230, 217, 113) !important;
            }
        }
        .active{
            color: rgb(230, 217, 113) !important;
        }
    }
</style>
