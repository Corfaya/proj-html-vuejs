<script>
export default {

}
</script>
<template>
    <div class="decorations position-relative">
        <img class="position-absolute decor" src="../../assets/img/artist-shape-01.png" alt="Background decoration">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <div class="text-box text-center mb-4 fs-34">
                            <h2 class="m-0 font-art">Artist coaching</h2>
                            <h2 class="secondary-font">I understand what it takes to create. I can help you with</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="d-flex  my-5">
                        <img src="../../assets/img/artist-box-image-01.png" alt="Online courses image: leaf">
                    </div>
                    <h5>Online Courses</h5>
                    <p>Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
                </div>
                <div class="col-3">
                    <div class="ms-2">
                        <div class="d-flex my-5 pt-5">
                            <img src="../../assets/img/artist-box-image-02.png" alt="Online courses image: rainbow">
                        </div>
                        <h5>One to One</h5>
                        <p>Getting the necessary clarity about the current statee to help you improve your ability.</p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="mx-2">
                        <div class="d-flex my-5">
                            <img src="../../assets/img/artist-box-image-03.png" alt="Online courses image: rain">
                        </div>
                        <h5>Anywhere</h5>
                        <p>Access to valuable and portable program which allow you to setup and live anywhere you want.</p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="d-flex my-5 pt-5">
                        <img src="../../assets/img/artist-box-image-04.png" alt="Online courses image: eye">
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
    background-image: url("../../assets/img/maxcoach-shape-14.png"), url("../../assets/img/maxcoach-shape-13.png");
    background-repeat: no-repeat;
    background-position: center, right;
    padding: 100px 0;

    .decor {
        transform: rotate(180deg);
        transform: scaleY(-1);
        left: -250px;
        z-index: -1;
    }

    .text-box {
        max-width: 500px;
        .secondary-font {
            line-height: 50px;
        }
        .font-art {
            font-family: $artistic_font;
            color: $sky;
        }

    }

    .col-3 {
        p {
            color: grey;
        }
    }


}
</style>