<template>
    <div>
        <div>
            <el-input
                    type="textarea"
                    :rows="22"
                    placeholder="请输入内容"
                    resize="none"
                    >
            </el-input>
        </div>
        <!--<vue-markdown></vue-markdown>-->
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown' // production

    export default {
        name: 'app',
        data () {
            return {
                anchorAttrs: {
                    target: '_blank',
                    rel: 'noopener noreferrer nofollow'
                }
            }
        },
        components: {
            VueMarkdown
        }
    }
</script>
