<template>
  <nav>
    <div class="left">
      <div
        class="burger"
        @click="isActive = !isActive"
        :class="{ active: isActive }"
      >
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
      </div>
      <div class="logo">
        <h1>
          <router-link to="/" exact> Brands </router-link>
        </h1>
      </div>
    </div>
    <div class="right d-none d-sm-block">
      <form @submit.prevent class="nav-form">
        <input type="text" class="search" placeholder="search" />
        <i class="bi bi-search"></i>
      </form>
    </div>
    <div class="list" :class="{ active: isActive }">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 offset-md-1">
            <div class="links">
              <router-link to="/" exact>Home</router-link>
              <router-link to="/store" exact>
                Store <img src="../../assets/Home/buy.svg" width="35" />
              </router-link>
              <a href="#">Fashion</a>
              <a href="#">Models</a>
              <a href="#">News</a>
            </div>
          </div>
          <div class="col-lg-5 offset-md-2">
            <form @submit.prevent class="list-form">
              <input type="text" class="search" placeholder="Search" />
              <button class="search-btn">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  z-index: 9;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .left,
  .right {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
  }

  .left {
    .burger {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 15px;
      background-color: #010101;
      width: 70px;
      height: 10vh;
      z-index: 999;
      cursor: pointer;

      &.active {
        .line-1 {
          transform: rotate(45deg) translate(10px, 10px);
        }
        .line-2 {
          opacity: 0;
        }
        .line-3 {
          transform: rotate(-45deg);
        }
      }

      div {
        width: 40px;
        height: 1px;
        margin: 3px;
        background-color: #fff;
        transition: all 0.3s ease-in-out;
      }
    }

    .logo {
      position: absolute;
      left: 80px;
      top: 0vh;

      h1 {
        a {
          letter-spacing: -5px;
          font-size: 7rem;
          color: #010101ce;
          font-family: "Playfair Display", serif;
          text-decoration: none;
        }
      }
    }
  }

  .right {
    .nav-form {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      position: relative;

      .search {
        width: 100%;
        margin-right: 10px;
        font-size: 0.75rem;
        border: none;
        border-bottom: 1px solid #111;
        position: relative;
        transition: trnsform 0.3s ease-in-out;

        &::placeholder {
          position: absolute;
          bottom: 0;
          left: 0;
          text-transform: capitalize;
        }
      }

      i {
        position: absolute;
        bottom: 1px;
        right: 10px;
        cursor: pointer;
        background-color: #fff;
        padding: 0 5px;
      }
    }
  }

  .list {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.95);
    width: 100%;
    height: 100vh;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;

    &.active {
      opacity: 1;
      pointer-events: all;
    }

    .links {
      height: 100vh;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-direction: column;

      a {
        width: 100%;
        text-decoration: none;
        padding: 15px;
        color: #010101;
        transition: all 0.3s ease-in-out;

        img {
          transition: all 0.3s ease-in-out;
        }

        &:hover {
          background-color: #010101;
          color: #fff;

          img {
            filter: invert(1);
          }
        }
      }
      .router-link-active {
        background-color: #010101;
        color: #fff;
      }
    }

    .list-form {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      input {
        background: none;
        width: 90%;
        border: none;
        border-bottom: 1px solid #0101015b;
        text-align: center;
        font-size: 2rem;
        transition: all 0.3s ease-in-out;

        &::placeholder {
          font-size: 0.75rem;
        }

        &:focus {
          border-bottom: 1px solid #010101;
        }
      }
      .search-btn {
        padding: 8 10px;
        border: 1px solid #010101;
        background: none;
        transition: all 0.3s ease-in-out;
        min-width: 130px;
        height: 45px;

        &:hover {
          background: #010101;
          color: #fff;
        }
      }
    }
  }
}
/**** MEdia QUery ****/
@media (max-width: 768px) {
  nav {
    .left {
      margin-right: auto;
      .logo {
        h1 {
          a {
            font-size: 5rem;
            top: 5vh;
            letter-spacing: 3;
          }
        }
      }
    }
    .container-fluid {
      padding: 0;
    }
    .list {
      min-height: 50vh;
      margin-top: 10vh;

      .links {
        height: 30vh;

        a {
          padding: 10px;
        }
      }
      .list-form {
        height: 30vh;
      }
    }
  }
}
</style>
