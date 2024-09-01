<script>
export default {

}
</script>
<template>
    <div class="bg-white py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="m-0 fs-22 font-art pb-2">Upcoming Events</h2>
                    <h2 class="fs-22 secondary-font mb-5">Let's Work Together</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="d-flex">
                        <div class="img-fit">
                            <img src="../../assets/img/artist-event-04-250x300.jpg" alt="">
                        </div>
                        <div class="event-text d-flex flex-column justify-content-center ms-5">
                            <p class="date-style">NOV 22, 2020</p>
                            <p class="title">Storytelling for</p>
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                dove
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-6"></div>
                <div class="col-6"></div>
                <div class="col-6"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;
.container {
    .font-art {
        font-family: $artistic_font;
        color: $sky;
    }
    .event-text {
        color: grey;
        .date-style, .title {
            font-weight: 600;
        }
        .title {
            color: $black;
            font-size: 20px;
        }
    }
}
</style>