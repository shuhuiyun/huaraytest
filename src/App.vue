<template class="content-fluid">
  <router-view />
  <MainFooter />
</template>

<style lang="scss">
@import './assets/all';
</style>
<script>
import MainFooter from './components/MainFooter.vue';

export default {
  data() {},
  components: {
    MainFooter,
  },
};
</script>
