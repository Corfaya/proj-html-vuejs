<script>
export default {
  data() {
    return {
      countdown: "00:00:00:00",
      timer: null
    }
  },
  created() {
    this.countdownCalc()
  },
  methods: {
    countdownCalc() {
      // 3 giorni da ora
      const today = new Date()
      const leftDay = new Date()
      leftDay.setDate(today.getDate() + 3) // data finale a 3 giorni da giorno corrente

      this.timer = setInterval(() => {
        const now = new Date().getTime() //ora corrente in millisecondi
        const toEnd = leftDay.getTime() - now //distanza tra le due ore in millisecondi

        if (toEnd < 0) {
          clearInterval(this.timer)
          this.countdown = "00:00:00:00"
          return
        }
        // w3schools documentation: days, hours, minutes and seconds calculation
        const days = Math.floor(toEnd / (1000 * 60 * 60 * 24));
        const hours = Math.floor((toEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((toEnd % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((toEnd % (1000 * 60)) / 1000);
        //console.log(days, hours, minutes, seconds)

        this.countdown = `${this.timeFormat(days)}:${this.timeFormat(hours)}:${this.timeFormat(minutes)}:${this.timeFormat(seconds)}`
        return
      }, 1000)
    },
    timeFormat(num) {
      return num < 10 ? `0${num}` : num
    }
  }
}
</script>
<template>
  <div class="banner fs-14 text-center p-3 d-flex justify-content-center align-items-center">
    <p>Starts <span class="text-uppercase">Tomorrow</span>! Our biggest event of the year...</p>
    <p><i class="fa-regular fa-clock"></i> <span class="fw-bold countdown fs-16 ms-1"> {{ countdown }} </span></p>
    <a href="#" class="btn text-white ms-4 fw-bold fs-14">Get ticket</a>
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

  a {
    background-color: $orange_main;
    padding: 5px 40px;
    transition: all 0.5s;

    &:hover {
      background-color: $sky;
    }
  }

}
</style>