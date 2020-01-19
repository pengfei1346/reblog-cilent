<template>
    <div>
        <div>一个公</div>
        <div>Toretto·5 天前·61 次阅读</div>
    </div>
</template>

<script>
    export default {
        name: "articleDetail",
        data() {
            return {
                id: '',
                detail: {}
            }
        },
        created() {
            this.id = this.$route.query.id
            this.articleDetail()
        },
        methods: {
            async articleDetail() {
                const data = await this.$xhr.get(`/articles/${this.id}`)
                console.log(data);
                this.detail = data.data
            },
        }
    }
</script>

<style scoped>

</style>
