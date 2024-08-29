<script>
import Banner from './partials/Banner.vue';
export default {
  components: {
    Banner
  }
}
</script>

<template>
  <header>
    <!-- BANNER -->
    <Banner />
    <!-- NAVBAR -->
    <div class="container">
      <nav class="navbar navbar-expand-lg py-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="../assets/img/dark-logo.png" alt="logo" class="img-fluid">
          </a>
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Item
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Item</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Item
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Item</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Item
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Item</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Item
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Item</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Item
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Item</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Item
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Item</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>

          </div>
          <div class="d-none d-lg-flex" role="search">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </nav>
    </div>



  </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/vars" as *;

header {
  nav {
    .navbar-brand {
      img {
        width: 150px;
      }
    }

    .navbar-toggler:focus {
      box-shadow: none;
    }

    li {
      margin: 0 10px;

      a {
        color: $black;
      }
    }

    i {
      color: #636060;
      margin: 0 10px;
    }
  }
}
</style>