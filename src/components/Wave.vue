<template>
    <div class="wave">
        <div id="banner_wave_1"></div>
        <div id="banner_wave_2"></div>
    </div>
</template>

<script>
    export default {
        name: "Wave"
    }
</script>

<style scoped lang="scss">
    /*波浪特效*/
    .wave {
        position: fixed;
        height: 110px;
        width: 100%;
        overflow: hidden;
        bottom: 0;
        z-index: 4;
        transition: .4s ease all;
        #banner_wave_1, .wave #banner_wave_2 {
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
</style>
