<script>
export default {

}
</script>

<template>
<header>
  <div class="banner text-center p-3 d-flex justify-content-center align-items-center">
    <p>Starts <span class="text-uppercase">Tomorrow</span>! Our biggest event of the year...</p>
    <p><i class="fa-regular fa-clock"></i> <span class="fw-bold spacing">00:00:00:00</span></p>
    <button type="button" class="btn text-white ms-4 fw-bold">Get ticket</button>
    
  </div>
  <!-- <nav>
    <a href="#">
      <img src="../assets/img/dark-logo.png" alt="Logo" class="img-fluid">
    </a>
  </nav> -->
</header>
</template>

<style lang="scss" scoped>
@use "../style/partials/vars" as *;

header {
  .banner {
    background-color: $grey;
    width: 100%;
    font-size: 15px;
    p {
      margin: 0 10px;
      .spacing {
        letter-spacing: 3px;
      }
    }
    button {
      background-color: $orange_main;
      padding: 5px 40px;
    }
  }
}
</style>