<template>
  <header>
    <div class="container">
      <h2>The New Collection's Out Now!!</h2>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <video
              autoplay
              loop
              muted
              src="../../assets/Home/video.mp4"
              class="d-block w-100"
              alt="New Collection"
            >
              Your Brosser Dosen't Support the videos
            </video>
          </div>
          <div class="carousel-item">
            <video
              autoplay
              loop
              muted
              src="../../assets/Home/video-1.mp4"
              class="d-block w-100"
              alt="New Collection"
            >
              Your Brosser Dosen't Support the videos
            </video>
          </div>
          <div class="carousel-item">
            <video
              autoplay
              loop
              muted
              src="../../assets/Home/video-2.mp4"
              class="d-block w-100"
              alt="New Collection"
            >
              Your Brosser Dosen't Support the videos
            </video>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerSilder",
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  h2 {
    position: absolute;
    bottom: 25%;
    right: 25%;
    left: 25%;
    width: 100%;
    color: #fff;
    z-index: 8;
  }
}

@media (max-width: 768px) {
  .container {
    h2 {
      font-size: 1rem;
    }
  }
}
</style>
