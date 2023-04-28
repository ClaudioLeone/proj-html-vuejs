<script>
    import footerTop from './partials/footerTop.vue'
    import footerBottom from './partials/footerBottom.vue'

    export default {
        name: "AppFooter",
        components: {
            footerTop,
            footerBottom
        },
        data() {
            return {

            }
        }
    }
</script>

<template>
<footerTop />
<footerBottom />
</template>

<style scoped lang="scss">

</style>