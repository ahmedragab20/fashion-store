<template>
  <div class="product" v-if="item.quantity > 0">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="image">
            <img :src="item.img" :alt="item.name" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="content">
            <div class="center">
              <h6>Quantity: {{ item.quantity }}</h6>
              <div class="buttons">
                <button @click="addToCart()" class="plus">
                  <i class="bi bi-plus"></i>
                </button>
                <button @click="removeFromCart">-</button>
              </div>
            </div>
            <div class="total">
              <h5>total price</h5>
              <p>{{ productPrice }} $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    productPrice() {
      return this.item.price * this.item.quantity;
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.item);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.item);
    },
  },
};
</script>

<style scoped lang="scss">
.product {
  .image {
    height: 300px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .center {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h6 {
        font-size: 1.2rem;
        letter-spacing: 1px;
      }
      .buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;

        button {
          margin: 10px;
          padding: 5px 8px;
          height: 40px;
          min-width: 80px;
          background: none;
          transition: 0.3s;
          border: 1px solid #010101;
          //border-radius: 5px;
          cursor: pointer;

          &:hover {
            background-color: #010101;

            &,
            i {
              color: #fff;
            }
          }

          &,
          i {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
}

@media (max-width: 555px) {
  .content {
    flex-direction: column !important;
    text-align: center !important;
  }
}
</style>
