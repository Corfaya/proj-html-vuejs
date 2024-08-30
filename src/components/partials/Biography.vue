<script>
export default {

}
</script>
<template>
    <div class="bg-transparent mt-4">
        <!-- <img class="img-separator" src="../../assets/img/artist-shape-02.png" alt=""> -->
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
                        <p>As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action.
                            I help you get you back on track to being the productive, creative, meaningful and authentic
                            artist you truly want to be. I support artists in crafting and living a creative life as
                            well as feeling good about themselves and their art.</p>
                        <p>As an artist and an educator for nearly 30 years, I understand what it takes to create.</p>
                        <button type="button" class="btn fw-bold fs-14 mt-3">Get started today</button>
                    </div>
                </div>
            </div>
            <div class="decoration position-relative">
                <img class="decos first-img"src="../../assets/img/maxcoach-shape-05.png" alt="">
                <img class="decos second-img"src="../../assets/img/artist-shape-01.png" alt="">
                <img class="decos third-img"src="../../assets/img/maxcoach-shape-12.png" alt="">
                <div class="rounded-circle"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex justify-content-center">
                                <div class="obj-fit position-relative">
                                    <img class="img-fluid" src="../../assets/img/artist-video-poster.jpg"
                                        alt="Video Poster">
                                    <img class="position-absolute" src="../../assets/img/icon-youtube-play.png" alt="Icon Youtube">
                                </div>
                            </div>
                        </div>
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

.decoration {
    
    .decos {
        width: 100px;
        position: absolute;
        z-index: -999;
        
        &.first-img {
            top: 80px;
            left: 280px;
        }

        &.second-img {
            top: 80px;
            left: 230px;
            filter: brightness(0) saturate(100%) invert(39%) sepia(73%) saturate(4867%) hue-rotate(179deg) brightness(93%) contrast(102%);
            transform: rotate(90deg)
        }

        &.third-img {
            bottom: 80px;
            right: 250px;
        }
    }

    .rounded-circle {
        border: 7px solid $circle;
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: 1000;
        right: 250px;
        top: 150px;
    }
    .col-12 {
        .d-flex {
            margin: 100px 0;
    
            .obj-fit {
                width: 500px;
                box-shadow: 0px 5px 15px 1px rgb(174, 174, 174);

                .position-absolute {
                    width: 50px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
}
</style>