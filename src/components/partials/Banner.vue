<script>
export default {
    
}
</script>
<template>
    <div class="banner fs-14 text-center p-3 d-flex justify-content-center align-items-center">
        <p>Starts <span class="text-uppercase">Tomorrow</span>! Our biggest event of the year...</p>
        <p><i class="fa-regular fa-clock"></i> <span class="fw-bold countdown fs-16 ms-1">00:00:00:00</span></p>
        <button type="button" class="btn text-white ms-4 fw-bold fs-14">Get ticket</button>
      </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;
.banner {
    background-color: $grey;

    p {
      margin: 0 10px;

      .countdown {
        letter-spacing: 3px;
      }
    }
    button {
      background-color: $orange_main;
      padding: 5px 40px;
      &:hover {
        background-color: $sky;
      }
    }
    
}
</style>