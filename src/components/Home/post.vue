<template>
  <article>
    <div class="container">
      <div class="row">
        <div class="col-md-6 order-md-last">
          <div class="video">
            <video
              @click="isActive = !isActive"
              :class="{ active: isActive }"
              autoplay
              loop
              muted
              src="../../assets/Home/post.mp4"
              class="d-block w-100"
              alt="New Collection"
            >
              Your Brosser Dosen't Support the videos
            </video>
          </div>
        </div>
        <div class="col-md-6 order-md-first">
          <div class="content">
            <h2>Welcome Queen, Winter</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              laudantium vero tenetur modi eos rem officia nam non voluptate
              reprehenderit quidem, sunt iusto architecto nisi at quae,
              exercitationem placeat maxime.
            </p>
            <button type="button">Take A Look</button>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
article {
  padding: 20px;
  position: relative;

  .video {
    padding: 90px 90px 0 0;
    position: relative;
    transition: all 0.3s ease-in-out;

    video {
      width: 100%;
      height: 50vh;
      object-fit: cover;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &.active {
        transform: translateX(-50%) translateY(-10vh) scale(1.5);
        height: 60vh;
        width: 500px;
        box-shadow: 30px 30px 50px #0101019a, -30px -30px 50px #0101019a;
        z-index: 9;
      }
    }
  }
  .content {
    padding: 90px 0 0 90px;
    h2 {
      font-size: 5rem;
      letter-spacing: -6px;
    }
    p {
      font-size: 0.75rem;
    }
    button {
      background: none;
      min-width: 140px;
      height: 50px;
      border: 1px solid #010101;
      color: #010101;
      border-radius: 0;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #010101;
        color: #fff;
      }
    }
  }
}

@media (max-width: 768px) {
  article {
    .video,
    .content {
      padding: 10px;

      h2 {
        font-size: 2.5rem;
        letter-spacing: 0;
      }

      video {
        &.active {
          transform: translateX(0%) translateY(10vh) scale(1.1);
          height: 60vh;
          width: 500px;
          box-shadow: 30px 30px 50px #0101019a, -30px -30px 50px #0101019a;
          z-index: 9;
        }
      }
    }
  }
}
</style>
