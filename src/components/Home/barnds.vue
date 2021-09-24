<template>
  <div class="barnds">
    <div
      class="container d-flex gap-1 justify-content-center align-items-center"
    >
      <div class="row">
        <div class="col">
          <img src="../../assets/brands/Gucci.png" class="img-fluid" />
        </div>
        <div class="col">
          <img src="../../assets/brands/Nike.jpg" class="img-fluid" />
        </div>
        <div class="col">
          <img src="../../assets/brands/adidas.png" class="img-fluid" />
        </div>
        <div class="col">
          <img src="../../assets/brands/zara.png" class="img-fluid" />
        </div>
        <div class="col">
          <img src="../../assets/brands/Puma.png" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.barnds {
  padding: 60px 0;

  .col {
    img {
      width: 70%;
      opacity: 0.5;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }
  }
}
/*
@media (max-width: 411px) {
  .barnds {
    display: none;
  }
}*/
</style>
