<template>
  <div class="header">
    <div class="container">
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
              src="../../assets/store/man.mp4"
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
              src="../../assets/store/women.mp4"
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
              src="../../assets/store/model.mp4"
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
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  video {
    pointer-events: none;
  }
}
</style>
