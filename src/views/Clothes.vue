<template>
  <div class="clothes">
    <banner />
    <div class="container">
      <products
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="loading">
      <button>Load More</button>
    </div>
  </div>
  <main-footer />
</template>

<script>
import products from "../db/products";
import banner from "../components/clothes/banner.vue";
import Products from "../components/clothes/products.vue";
import MainFooter from "../components/global/mainFooter.vue";

export default {
  data() {
    return {
      products,
    };
  },
  components: {
    banner,
    Products,
    MainFooter,
  },
};
</script>
<style lang="scss" scoped>
.clothes {
  min-height: 100vh;
  padding-bottom: 30px;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;

    button {
      padding: 5px 8px;
      height: 40px;
      width: 110px;
      background: none;
      transition: 0.3s;
      font-weight: 600;
      border: 1px solid #010101;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: #010101;
        color: #fff;
      }
    }
  }
}
</style>
