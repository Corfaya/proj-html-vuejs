<script>
export default {
    
}
</script>
<template>
    <!-- BACKGROUND HERO -->
    <div class="bg-hero">
        <div class="container d-flex justify-content-center">
            <!-- TEXT -->
            <div class="d-flex flex-column align-items-center hero-text-box">
                <h1 class="m-0">Hello, Im Matin</h1>
                <h2  class="text-center">Artist Coaching And Mentoring Might Be for You</h2>
                <button type="button" class="btn text-white fw-bold">
                    Get started Today
                </button>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
.bg-hero {
    background-color: $hero;
    padding: 150px 0;
    background-image: url("../../assets/img/artist-shape-01.png"), url("../../assets/img/artist-shape-02-300x162.png");
    background-repeat: no-repeat;
    background-position: right, left top;
    background-size: contain, 700px 300px;
    .hero-text-box {
        gap: 10px;
        max-width: 350px;
        h1 {
            font-family: $artistic_font;
            color: $sky;
            font-size: 22px;
        }
    
        h2 {
            font-size: 22px;
            font-weight: 700;
            line-height: 30px;
        }
    
        button {
            width: 200px;
            background-color: $orange_main;
            padding: 10px;
            font-size: 14px;
            &:hover {
              background-color: $sky;
            }
          }
    }
}    
</style>