<script>
export default {

}
</script>
<template>
    <!-- BACKGROUND HERO -->
    <div class="bg-hero position-relative">
        <!-- IMAGES -->
        <div class="obj-fit first"><img src="../../assets/img/artist-course-05-480x480.jpg" alt=""></div>
        <div class="obj-fit second"><img src="../../assets/img/artist-course-08-480x480.jpg" alt=""></div>
        <div class="obj-fit third"><img src="../../assets/img/artist-hero-image-04.jpg" alt=""></div>
        <div class="container d-flex justify-content-center">
            <!-- TEXT -->
            <div class="d-flex flex-column align-items-center hero-text-box">
                <h1 class="m-0 fs-22">Hello, Im Matin</h1>
                <h2 class="text-center fs-22">Artist Coaching And Mentoring Might Be for You</h2>
                <button type="button" class="btn text-white fw-bold fs-14">
                    Get started Today
                </button>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;

.bg-hero {
    background-color: $hero;
    padding: 200px 0;
    background-image: url("../../assets/img/artist-shape-01.png"), url("../../assets/img/artist-shape-02-300x162.png"), url("../../assets/img/artist-hero-image-03.png"), url("../../assets/img/artist-shape-04.png"), url("../../assets/img/artist-shape-03.png"), url("../../assets/img/artist-shape-05.png");
    background-repeat: no-repeat;
    background-position: right, left top, left 500px bottom 10%, right 5% top 20%, left, right 80px bottom;
    background-size: contain, 900px 400px, 10%, 100px, 300px, 250px;
    
    .obj-fit {
        position: absolute;
        box-shadow: 0px 2px 20px 3px rgb(151, 150, 150);
        &.first {
            max-width: 150px;
            height: 180px;
            z-index: 2;
            left: 80px;
            bottom: 60px;
            filter: contrast(110%)
        }

        &.second, &.third {
            max-width: 200px;
            height: 270px;
            z-index: 1;
        }

        &.second {
            top: 80px;
            left: 200px;
        }

        &.third {
            bottom: 60px;
            right: 150px;
        }
    }

    img {
        width: 100%;
        height: 100%;
    }

    .hero-text-box {
        gap: 10px;
        max-width: 350px;

        h1 {
            font-family: $artistic_font;
            color: $sky;
        }

        h2 {
            font-weight: 700;
            line-height: 30px;
        }

        button {
            width: 200px;
            background-color: $orange_main;
            padding: 10px;
            &:hover {
                background-color: $sky;
            }
        }
    }
}
</style>