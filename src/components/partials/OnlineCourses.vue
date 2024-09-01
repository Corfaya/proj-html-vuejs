<script>
export default {
    
}
</script>
<template>
    <div class="bg-white py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="m-0 fs-22 font-art pb-2">Artist coaching</h2>
                    <h2 class="fs-22 secondary-font mb-5">Latest Online Courses</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="obj-fit">
                        <img src="../../assets/img/artist-course-08-480x480.jpg" alt="">
                    </div>
                </div>
                <div class="col-3">
                    <div class="obj-fit">
                        <img src="../../assets/img/artist-course-08-480x480.jpg" alt="">
                    </div>
                </div>
                <div class="col-3">
                    <div class="obj-fit">
                        <img src="../../assets/img/artist-course-08-480x480.jpg" alt="">
                    </div>
                </div>
                <div class="col-3">
                    <div class="obj-fit">
                        <img src="../../assets/img/artist-course-08-480x480.jpg" alt="">
                    </div>
                </div>

                <div class="col-3">
                    <div class="obj-fit">
                        <img src="../../assets/img/artist-course-08-480x480.jpg" alt="">
                    </div>
                </div>
                <div class="col-3">
                    <div class="obj-fit">
                        <img src="../../assets/img/artist-course-08-480x480.jpg" alt="">
                    </div>
                </div>
                <div class="col-3">
                    <div class="obj-fit">
                        <img src="../../assets/img/artist-course-08-480x480.jpg" alt="">
                    </div>
                </div>
                <div class="col-3">
                    <div class="obj-fit">
                        <img src="../../assets/img/artist-course-08-480x480.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"  scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;

.bg-white {
    background-color: $white;
    background-image: url("../../assets/img/artist-shape-01.png") no-repeat;
    .font-art {
    font-family: $artistic_font;
    color: $sky;
    }
    .secondary-font {
        font-weight: 700;
        line-height: 30px;
    }

    .obj-fit {
        width: 200px;
        img {
            width: 100%;
        }
    }
}

</style>