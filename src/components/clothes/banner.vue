<template>
  <div class="banner">
    <img src="../../assets/store/clothes/banner.jpg" />
    <h3>Looking For Better Look?!</h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  min-height: 50vh;
  padding: 0 70px 70px 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    position: absolute;
    bottom: 30%;
    left: 15%;
    color: #fff;
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .banner {
    h3 {
      display: none;
    }
  }
}
</style>
