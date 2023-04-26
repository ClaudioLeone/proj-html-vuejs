<script>
import mainTop from './partials/mainTop.vue';
import mainMiddleVue from './partials/mainMiddle.vue';

export default {
    name: "AppMain",
    components: {
        mainTop,
        mainMiddleVue,
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
    <mainMiddleVue />
    
</main>
</template>

<style scoped lang="scss">

main {
    background-color: white;
}
// .main-top {
//     height: 600px;
// }

// .main-middle {
//     height: 600px;
//     background-color: #B75253;
// }

// .main-middle-container {

// }

// .main-bottom {
//     height: 600px;
// }
</style>