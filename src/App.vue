<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppMain from './components/AppMain.vue';

export default {
    components: {
        AppHeader,
        AppJumbo,
        AppMain,
    }
}
</script>

<template>
<AppHeader />
<AppJumbo />
<AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";

</style>