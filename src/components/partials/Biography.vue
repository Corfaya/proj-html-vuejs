<script>
export default {

}
</script>
<template>
    <div class="bg-transparent mt-4">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <div class="d-flex flex-column align-items-center">
                        <div class="quot-box">
                            <img src="../../assets/img/artist-quote-icon.png" alt="Quotation">
                        </div>
                        <h2 class="text-center fw-bold">I coach and mentor visual artists, like you, to Create Like You
                            Mean It</h2>
                        <h2 class="m-0 fs-22 font-art pt-4">Martin Garrix</h2>
                    </div>
                </div>
                <div class="col-7">
                    <div class="ms-5">
                        <p>As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help you get you back on track to being the productive, creative, meaningful and authentic artist you truly want to be. I support artists in crafting and living a creative life as well as feeling good about themselves and their art.</p>
                        <p>As an artist and an educator for nearly 30 years, I understand what it takes to create.</p>
                        <button type="button" class="btn fw-bold fs-14 mt-3">Get started today</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;


.quot-box {
    padding-bottom: 20px;
}

.font-art {
    font-family: $artistic_font;
    color: $sky;
}

.col-7 {
    p {
        color: grey;
    }

    button {
        color: $orange_main;
        background-color: $orange_transp;
        padding: 10px 40px;
        &:hover {
          background-color: $sky_transp;
          color: $black;
        }
      }
      
}
</style>