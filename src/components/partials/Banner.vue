<script>
export default {
    
}
</script>
<template>
    <div class="banner text-center p-3 d-flex justify-content-center align-items-center">
        <p>Starts <span class="text-uppercase">Tomorrow</span>! Our biggest event of the year...</p>
        <p><i class="fa-regular fa-clock"></i> <span class="fw-bold countdown ms-1">00:00:00:00</span></p>
        <button type="button" class="btn text-white ms-4 fw-bold">Get ticket</button>
      </div>
</template>
<style lang="scss">
@use "../../style/partials/vars" as *;
.banner {
    background-color: $grey;
    font-size: 14px;

    p {
      margin: 0 10px;

      .countdown {
        letter-spacing: 3px;
        font-size: 16px;
      }
    }
    button {
      background-color: $orange_main;
      padding: 5px 40px;
      font-size: 14px;
      &:hover {
        background-color: $sky;
      }
    }
    
}
</style>