<template>
    <div id="app">
        <!--https://zouwang.vip/wp-content/themes/Sakura/cover/index.php-->
        <el-container>
            <el-header v-if="this.$route.path != '/index'">
                <Header/>
            </el-header>

            <main class="main-body">
                <router-view/>
            </main>

            <!--<el-footer style="background: #fff"></el-footer>-->
        </el-container>
    </div>
</template>

<script>
    import Header from '@/components/Header'

    export default {
        components: {
            Header
        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    ul, li {
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .main-body {
        min-height: calc(100vh - 60px);
        width: 100%;
        padding: 0 !important;
    }
</style>
