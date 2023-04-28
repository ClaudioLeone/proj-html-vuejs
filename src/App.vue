<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppJumbo,
        AppMain,
        AppFooter
    }
}
</script>

<template>
<AppHeader />
<AppJumbo />
<AppMain />
<AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss";

</style>