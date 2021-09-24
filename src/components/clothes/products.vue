<template>
  <div class="products">
    <div class="product-card">
      <img :src="product.img" />
      <div class="content">
        <h4>{{ product.price }}<span>$</span></h4>
        <button @click.once="addToCart()">Add To Cart</button>
        <button>Open The Product</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  margin: 10px;
  .product-card {
    width: 300px;
    height: 440px;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    box-shadow: 10px 10px 20px rgba(153, 153, 153, 0.5),
      -10px -10px 20px rgba(153, 153, 153, 0.5);
    cursor: pointer;

    &:hover {
      .content {
        opacity: 1;
        pointer-events: all;
      }
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 15px;
      background-color: #010101a9;
      opacity: 0;
      pointer-events: none;
      transition: 0.3s;

      h4 {
        color: #fff;
        * {
          color: #fff;
        }
      }

      button {
        padding: 5px 8px;
        height: 40px;
        min-width: 110px;
        background: none;
        transition: 0.3s;
        border: 1px solid #fff;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background-color: #fff;
          color: #010101;
        }
      }
    }
  }
}
</style>
