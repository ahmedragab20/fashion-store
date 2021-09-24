<template>
  <section class="text-center mt-5">
    <h2>subscribe?</h2>
    <p>
      Why Not!.. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Distinctio, earum.
    </p>
    <div
      class="
        container
        min-vh-40
        d-flex
        justify-content-center
        align-items-center
      "
    >
      <form
        @submit.prevent
        class="
          d-flex
          justify-content-center
          align-items-center
          flex-column
          gap-3
        "
      >
        <input type="email" placeholder="Input Your Pretty Email Address" />
        <button class="button" type="button">Be One Of Us</button>
        <p @click="isActive = !isActive">
          or join via your social media account?..
        </p>
      </form>
      <div class="sign-via" :class="{ active: isActive }">
        <i class="bi bi-x" @click="isActive = !isActive"></i>

        <div class="fb">
          <i class="bi bi-facebook"></i> <span>Sign Via facebook</span>
        </div>
        <div class="google">
          <i class="bi bi-google"></i> <span>Sign Via Google</span>
        </div>
        <div class="ig">
          <i class="bi bi-instagram"></i> <span>Sign Via instagram</span>
        </div>
        <!--
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="button">LogIn</button>
        -->
        <h6>Lorem ipsum dolor <a href="#">login...</a></h6>
      </div>
    </div>
  </section>
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
section {
  position: relative;
  h2 {
    font-size: 4rem;
  }
  p {
    font-size: 00.75rem;
  }
  form {
    width: 100%;
    padding: 30px 0;
    input {
      text-align: center;
      width: 75%;
      border: none;
      border-bottom: 1px solid #010101a9;
      transition: all 0.3s ease-in-out;

      &:focus {
        border-bottom: 1px solid #010101;
      }

      &::placeholder {
        font-size: 0.75rem;
      }
    }
    .button {
      background: none;
      min-width: 200px;
      height: 50px;
      border: 1px solid #010101;
      color: #010101;
      text-transform: uppercase;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #010101;
        color: #fff;
      }
    }
    p {
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }
    }
  }
  .sign-via {
    padding: 10px 0;
    position: absolute;
    transform: translate(0%, -30%);
    opacity: 0;
    pointer-events: none;
    width: 30%;
    min-height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background-color: rgba(156, 156, 156, 0.582);
    box-shadow: 10px 10px 20px rgba(156, 156, 156, 0.507),
      -10px -10px 20px rgba(156, 156, 156, 0.555);
    transition: opacity 0.3s ease-in-out;

    &.active {
      opacity: 1;
      pointer-events: all;
    }

    .bi-x {
      position: absolute;
      right: 10px;
      top: 10px;
      width: 25px;
      height: 25px;
      color: #010101;
      border: 1px solid #010101b6;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #010101;
        color: #fff;
      }
    }

    div {
      width: 60%;
      padding: 8px 5px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      span,
      i {
        color: rgba(255, 255, 255, 0.87);
        margin-right: 15px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }
    }
    .fb {
      background: linear-gradient(120deg, #1093f3 60%, #73c9f9);
    }
    .google {
      background: linear-gradient(120deg, #ea4335 60%, #c5221e);
    }
    .ig {
      background: linear-gradient(120deg, #f2709c, #ff9472);
    }
    /*
    input {
      border: none;
      border-bottom: 1px solid #01010183;
      width: 80%;
      background: none;
      font-size: 0.9rem;
      text-align: center;
      transition: all 0.3s ease-in-out;

      &:focus {
        border-bottom-color: #010101;
      }

      &::placeholder {
        font-size: 0.75rem;
      }
    }
    button {
      background: none;
      min-width: 120px;
      height: 40px;
      border: none;
      border-bottom: 1px solid #010101;
      color: #010101;
      border-radius: 0;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #010101;
        color: #fff;
      }
    }
  */
  }

  h6 {
    font-size: 0.75rem;
    color: #010101;
    padding: 8px 10px;
    border: 1px solid #010101;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #fff;
      background-color: #010101;
    }

    a {
      color: #fff;
      font-size: 1rem;
    }
  }
}

@media (max-width: 768px) {
  section {
    .sign-via {
      width: 70%;
    }
  }
}

@media (max-width: 555px) {
  section {
    h2 {
      font-size: 2rem;
    }
    p {
      width: 80%;
      margin: auto;
    }
    form {
      .button {
        background: none;
        min-width: 120px;
        height: 40px;
        font-size: 0.9rem;
      }
    }
    .sign-via {
      width: 90%;
      font-size: 80% !important;
    }
  }
}
</style>
