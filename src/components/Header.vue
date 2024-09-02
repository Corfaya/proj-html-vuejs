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
  created() {
    window.addEventListener("scroll", this.scrollEffect)
  },
    methods: {
      scrollEffect() {
            const header = document.querySelector("header")
            header.classList.toggle("scrolling", window.scrollY > 100)
        }
    }
}
</script>

<template>
  
    <!-- BANNER -->
    <Banner />
    <!-- NAVBAR -->
    <header>
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
          <div class="d-none d-md-flex" role="search">
            <Socials v-for="(soc, i) in socials" :key="`s-${i}`" :socialIcon="soc"/>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/vars" as *;
@use "../style/partials/utilities" as *;

header {
  position:relative;
  transition: all 2s ease;
  &.scrolling {
    position: fixed;
    top: 0;
    z-index: 10001;
    width: 100%;
    background-color: $white;
    box-shadow: 0 3px 8px rgb(177, 177, 177);
    behavior: smooth;
}
  nav {
    .navbar-brand {
      img {
        width: 150px;
      }
    }

    .navbar-toggler:focus {
      box-shadow: none;
    }

    i {
      color: #636060;
      margin: 0 10px;
    }
  }
}
</style>