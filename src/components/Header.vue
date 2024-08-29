<script>
import Banner from './partials/Banner.vue';
import List from './partials/ListHeader.vue';
import Socials from './partials/Socials.vue';
import { listItems, socials } from '../data/arrays';

export default {
  components: {
    Banner,
    List,
    Socials
  },
  data() {
    return {
      listItems,
      socials
    }
  },
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
              <!-- dynamic menu list items -->
              <List v-for="(l, i) in listItems" :key="`l-${i}`" :list="l"/>
            </ul>
          </div>
          <!-- Dynamic social list -->
          <div class="d-none d-lg-flex" role="search">
            <Socials v-for="(soc, i) in socials" :key="`s-${i}`" :socialIcon="soc"/>
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