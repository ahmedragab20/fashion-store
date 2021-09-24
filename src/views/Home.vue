<template>
  <div class="home">
    <headerSilder />
    <post />
    <subscribe />
    <barnds />
    <main-footer />
  </div>
</template>

<script>
import headerSilder from "../components/Home/homeHeader.vue";
import Post from "../components/Home/post.vue";
import subscribe from "../components/Home/subscribe.vue";
import Barnds from "../components/Home/barnds.vue";
import mainFooter from "../components/global/mainFooter.vue";

export default {
  name: "Home",
  components: {
    headerSilder,
    Post,
    subscribe,
    Barnds,
    mainFooter,
  },
};
</script>
