<template>
  <div id="nav">
    <navBar />
    <onload />
    <div class="cart-icon">
      <router-link to="/cart">
        <i class="bi bi-cart2"></i>
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
import navBar from "./components/global/mainNav.vue";
import Onload from "./components/global/onLoad.vue";
export default {
  mounted() {
    return setInterval(this.$store.commit("updateCartStorage"));
  },
  components: {
    navBar,
    Onload,
  },
};
</script>
<style lang="scss">
#app {
  position: relative;
}
.cart-icon {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  background-color: #010101;
  box-shadow: 3px 3px 5px #999;
  z-index: 9999;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    i {
      color: #fff;
      font-size: 1.3rem;
      font-weight: 900;
    }
  }
}
</style>
