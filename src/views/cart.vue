<template>
  <div class="cart mt-5">
    <cart-component v-for="item in items" :key="item.id" :item="item" />
    <total-price />
    <main-footer />
  </div>
</template>

<script>
import cartComponent from "../components/Cart/cartComponent.vue";
import totalPrice from "../components/Cart/totalPrice.vue";
import mainFooter from "../components/global/mainFooter.vue";

export default {
  components: {
    cartComponent,
    totalPrice,
    mainFooter,
  },
  computed: {
    items() {
      return this.$store.getters.cartProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  min-height: 100vh;
}
</style>
