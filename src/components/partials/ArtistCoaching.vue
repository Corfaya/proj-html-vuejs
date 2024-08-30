<script>
export default {

}
</script>
<template>
    <div class="decorations position-relative">
        <img class="position-absolute decor" src="../../assets/img/artist-shape-01.png" alt="">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <div class="text-box text-center mb-4">
                            <h2 class="m-0 fs-22 font-art">Artist coaching</h2>
                            <h2 class="fs-22 secondary-font">I understand what it takes to create. <br> I can help you with</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="d-flex justify-content-center my-5">
                        <img src="../../assets/img/artist-box-image-01.png" alt="">
                    </div>
                    <h5>Online Courses</h5>
                    <p>Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
                </div>
                <div class="col-3">
                    <div class="ms-2">
                        <div class="d-flex justify-content-center my-5 pt-5">
                            <img src="../../assets/img/artist-box-image-02.png" alt="">
                        </div>
                        <h5>One to One</h5>
                        <p>Getting the necessary clarity about the current statee to help you improve your ability.</p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="mx-2">
                        <div class="d-flex justify-content-center my-5">
                            <img src="../../assets/img/artist-box-image-03.png" alt="">
                        </div>
                        <h5>Anywhere</h5>
                        <p>Access to valuable and portable program which allow you to setup and live anywhere you want.</p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="d-flex justify-content-center my-5 pt-5">
                        <img src="../../assets/img/artist-box-image-04.png" alt="">
                    </div>
                        <h5>On Time</h5>
                        <p>Punctuality is our top priority because it's an essential criteria to assess a program quality.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;

.decorations {
    background-image: url("../../assets/img/maxcoach-shape-14.png");
    background-repeat: no-repeat;
    background-position: center;
    padding: 100px 0;

    .decor {
        transform: rotate(180deg);
        transform: scaleY(-1);
        left: -250px;
    }

    .text-box {
        max-width: 400px;

        .font-art {
            font-family: $artistic_font;
            color: $sky;
        }

        .secondary-font {
            font-weight: 700;
            line-height: 30px;
        }

    }

    .col-3 {
        p {
            color: grey;
        }
    }


}
</style>