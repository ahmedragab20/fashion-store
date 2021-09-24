<template>
  <div class="furniture">
    <div class="row">
      <div class="col-lg-6">
        <div class="image">
          <img src="../../assets/store/livingroom.jpg" class="img-fluid" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="content">
          <h2 class="mt-1">The Colthes Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus in atque, voluptatum maiores itaque laborum, nulla
            labore, enim velit maxime doloribus deserunt sit. Repudiandae iste
            rem voluptatem, earum fugiat enim.
          </p>
          <a href="#">Click To Go <i class="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.furniture {
  .image {
    overflow: hidden;

    img {
      transition: 1s;

      &:hover {
        transform: scale(1.3);
      }
    }
  }

  .content {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0 5%;

    h2 {
      font-size: 3.5rem;
      letter-spacing: -3px;
      margin-bottom: 20px;
    }

    p {
      font-size: 0.9rem;
      margin: 10px 0 40px 0;
    }

    a {
      font-size: 1.1rem;
      padding: 30px 80px;
      color: #fff;
      background-color: #010101;
      text-decoration: none;
      font-family: "Playfair Display", serif;
      transition: 0.3s;

      &:hover {
        letter-spacing: 5px;
      }

      i {
        color: #fff;
      }
    }
  }
}

/* Media Query */
@media (max-width: 555px) {
  .furniture {
    .content {
      h2 {
        font-size: 2rem;
        letter-spacing: -1px;
      }

      p {
        font-size: 0.75rem;
      }

      a {
        font-size: 0.9rem;
        padding: 20px 30px;
      }
    }
  }
}
</style>
