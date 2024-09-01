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
    <div class="bg-white position-relative py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="m-0 fs-22 font-art pb-2">Artist coaching</h2>
                    <h2 class="fs-22 secondary-font mb-5">Latest Online Courses</h2>
                </div>
            </div>
            <div class="row">
                <OnlineCoursesList v-for="(course, i) in courses" :key="`c-${i}`" :online_class="course"/>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss"  scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;

.bg-white {
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("../../assets/img/artist-shape-01.png");
        background-repeat: no-repeat;
        background-size: 400px;
        background-position: -200px 500px;
        filter: brightness(0) saturate(100%) invert(34%) sepia(11%) saturate(2637%) hue-rotate(153deg) brightness(101%) contrast(90%);
    }
    .font-art {
    font-family: $artistic_font;
    color: $sky;
    }
}

</style>