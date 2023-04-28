<script>
import mainTop from './partials/mainTop.vue';
import mainMiddle from './partials/mainMiddle.vue';
import mainBottom from './partials/mainBottom.vue';

export default {
    name: "AppMain",
    components: {
        mainTop,
        mainMiddle,
        mainBottom
    },
    data() {
        return {

        }
    }
}
</script>

<template>
<main>
    <mainTop />
    <mainMiddle />
    <mainBottom />
</main>
</template>

<style scoped lang="scss">

main {
    background-color: white;
}
</style>