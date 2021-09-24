<template>
  <div class="store">
    <store-header />
    <seperator />
    <clothes />
    <kitchen />
    <furnitrue />
    <main-footer />
  </div>
</template>
<script>
import storeHeader from "../components/Store/storeHeader.vue";
import seperator from "../components/Store/seperator.vue";
import clothes from "../components/Store/clothes.vue";
import kitchen from "../components/Store/kitchen.vue";
import furnitrue from "../components/Store/furnitrue.vue";
import MainFooter from "../components/global/mainFooter.vue";
export default {
  components: {
    storeHeader,
    seperator,
    clothes,
    kitchen,
    furnitrue,
    MainFooter,
  },
};
</script>
<style lang="scss" scoped></style>
