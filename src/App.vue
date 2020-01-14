<template>
    <div id="app">
        <!--https://zouwang.vip/wp-content/themes/Sakura/cover/index.php-->
        <el-container>
            <el-header v-if="this.$route.path != '/index'">
                <Header/>
            </el-header>

            <el-main style="padding: 0 !important;">
                <!--<div class="wave">-->
                    <!--<div id="banner_wave_1"></div>-->
                    <!--<div id="banner_wave_2"></div>-->
                <!--</div>-->
                <router-view/>
            </el-main>

            <el-footer style="background: #fff"></el-footer>
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
</style>
