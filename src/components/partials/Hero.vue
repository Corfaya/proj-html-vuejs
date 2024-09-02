<script>
import { jumboIconsClass } from '../../data/arrays';
export default {
    data() {
        return {
            jumboIconsClass
        }
    },
}
</script>
<template>
    <!-- BACKGROUND HERO -->
    <div class="bg-hero position-relative">
        <!-- IMAGES -->
        <div class="obj-fit first"><img src="../../assets/img/artist-hero-image-01.jpg" alt="Hero images"></div>
        <div class="obj-fit second"><img src="../../assets/img/artist-hero-image-02.jpg" alt="Hero images"></div>
        <div class="obj-fit third"><img src="../../assets/img/artist-hero-image-04.jpg" alt="Hero images"></div>
        <!-- ICONS -->
        <div class="d-flex flex-column align-items-center icons-box position-fixed">
            <i v-for="jumbo, i in jumboIconsClass" :key="i" :class="['fs-24', jumbo]"></i>
        </div>
        <div class="container d-flex justify-content-center">
            <!-- TEXT -->
            <div class="d-flex flex-column align-items-center hero-text-box fs-40">
                <h1 class="m-0">Hello, Im Matin</h1>
                <h2 class="text-center">Artist Coaching And Mentoring Might Be for You.</h2>
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
    background-position: right, left top, left 400px bottom, right 5% top 20%, left, right 80px bottom;
    background-size: contain, 900px 400px, 200px, 100px, 300px, 250px;

    .obj-fit {
        position: absolute;
        box-shadow: 0px 2px 20px 3px rgb(174, 174, 174);

        &.first {
            max-width: 150px;
            height: 180px;
            z-index: 2;
            left: 80px;
            bottom: 60px;
        }

        &.second,
        &.third {
            max-width: 280px;
            height: 350px;
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

    .icons-box {
        background-color: $white;
        color: $white;
        -webkit-text-stroke: 1px black;
        padding: 5px;
        border-radius: 8px;
        right: 0;
        top: 300px;
        z-index: 9999;
        box-shadow: 0px 2px 20px 3px rgb(174, 174, 174);
        i {
            margin: 12px 8px;
        }
    }

    img {
        width: 100%;
        height: 100%;
    }

    .hero-text-box {
        gap: 10px;
        max-width: 500px;

        h1 {
            font-family: $artistic_font;
            color: $sky;
        }

        h2 {
            font-weight: 700;
            line-height: 50px;
        }

        button {
            width: 200px;
            background-color: $orange_main;
            padding: 10px;
            transition: all 0.5s;

            &:hover {
                background-color: $sky;
            }
        }
    }
}
</style>