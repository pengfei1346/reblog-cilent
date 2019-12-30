<template>
    <ul class="nav">
        <router-link to="/index"><li :class="active===1?'active':''">首页</li></router-link>
        <router-link to="/articles"><li :class="active===2?'active':''">文章</li></router-link>
        <router-link to=""><li :class="active===3?'active':''">分类</li></router-link>
        <router-link to=""><li :class="active===4?'active':''">收藏</li></router-link>
        <router-link to=""><li :class="active===5?'active':''">时间轴</li></router-link>
        <router-link to=""><li :class="active===6?'active':''">留言</li></router-link>
        <router-link to=""><li :class="active===7?'active':''">关于</li></router-link>
    </ul>
</template>

<script>
    export default {
        name: "Header",
        props: {
           active: {
               default: 1
           }
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
        line-height: 70px;
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
