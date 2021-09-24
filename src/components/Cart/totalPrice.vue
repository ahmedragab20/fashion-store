<template>
  <div class="total" v-if="totalPrice !== 0">
    <div class="container">
      <div class="price">
        <h2>total price:</h2>
        <h3>{{ totalPrice }}$</h3>
      </div>
      <button>Paymen Methods <i class="bi bi-arrow-right"></i></button>
    </div>
  </div>
  <div class="waiting" v-if="totalPrice === 0">
    <img src="../../assets/waiting.gif" width="240" />
    <h4>Nothing Yet..</h4>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.cartProducts;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
.total {
  margin: 10px auto;

  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;

    h2 {
      font-size: 3rem;
    }

    h3 {
      padding: 8px 15px;
      //border-radius: 5px;
      background: #010101;
      color: #fff;
      font-size: 2.5rem;
      letter-spacing: 1px;
      font-weight: 600;
      position: relative;
    }
  }
  button {
    background: #010101;
    color: #fff;
    border: none;
    //border-radius: 5px;
    padding: 8px 10px;
    min-width: 220px;
    height: 80px;
    transition: 0.3s;

    &:hover {
      letter-spacing: 3px;
    }

    i {
      color: #fff;
    }
  }
}

.waiting {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 500px;
  }
}

@media (max-width: 768px) {
  .total {
    .price {
      h2 {
        font-size: 1.5rem;
      }

      h3 {
        font-size: 1.5rem;
      }
    }
    button {
      padding: 4px 8px;
      min-width: 160px;
      height: 50px;
    }
  }
  .waiting {
    img {
      width: 200px;
    }
  }
}
</style>
