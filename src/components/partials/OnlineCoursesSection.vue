<script>
import OnlineCoursesList from './OnlineCoursesList.vue';
import { courses } from '../../data/arrays';
export default {
    components: {
        OnlineCoursesList
    },
    data() {
        return {
            courses
        }
    }
}
</script>
<template>
    <div class="position-relative py-5">
        <div class="background-decoration position-absolute">
            <img src="../../assets/img/artist-shape-01.png" alt="Decoration shape">
        </div>
        <div class="rotated-text position-absolute">Courses</div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center fs-34">
                    <h2 class="m-0 font-art pb-2">Artist coaching</h2>
                    <h2 class=" secondary-font mb-5">Latest Online Courses</h2>
                </div>
            </div>
            <div class="row">
                <OnlineCoursesList v-for="(course, i) in courses" :key="`c-${i}`" :online_class="course" />
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn fw-bold fs-14">
                            <span>View all courses</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;


    .background-decoration {
        left: -100px;
        bottom: 50px;
        img {
            width: 400px;
            filter: brightness(0) saturate(100%) invert(39%) sepia(73%) saturate(4867%) hue-rotate(179deg) brightness(93%) contrast(102%);
        }
    }
    .rotated-text {
        right: 0;
        top: 50%;
        z-index: -1;
        transform: translate(30%, -50%) rotate(-90deg);
        font-size: 150px;
        font-weight: bold;
        color: transparent;
        -webkit-text-stroke: 1px #f2ebe6;
    }

    .font-art {
        font-family: $artistic_font;
        color: $sky;
    }


button {
    color: $orange_main;
    background-color: $orange_transp;
    padding: 10px 40px;
    transition: all 0.5s;
    &:hover {
        background-color: $sky_transp;
        color: $black;

        & span {
            padding-right: 30px;
        }

        & span:after {
            opacity: 1;
            right: 0;
        }
    }

    span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;

        &:after {
            content: "\2192";
            position: absolute;
            opacity: 0;
            top: 0;
            right: -20px;
            color: $orange_main;
            font-weight: 800;
            transition: 0.5s;
        }
    }
}
</style>