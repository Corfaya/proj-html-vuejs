<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
    components: {
        Splide,
        SplideSlide
    }
}
</script>
<template>
    <div class="bg-color py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="m-0 fs-22 font-art pb-2">Testimonials</h2>
                    <h2 class="fs-22 secondary-font mb-5">Why do people love me?</h2>
                </div>
            </div>
            <Splide :options="{ rewind: true, type: 'loop', perPage: 3,  focus: 'center', pagination: true}">
                
                <SplideSlide>
                    <div class="slide-box-style">
                        <p class="fw-bolder">Prova del titolo</p>
                        <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolores aperiam aliquam eos, corporis asperiores ullam, minus laboriosam dolorem, dolore possimus perferendis voluptatem autem. Fugit ipsam nisi quibusdam assumenda sed.</p>
                        <div class="d-flex align-items-center gap-4">
                            <div class="obj-fit">
                                <img src="../../assets/img/artist-testimonial-avatar-04.jpg" alt="">
                            </div>
                            <div class="testimonial">
                                <p class="fw-bolder">Mina Hollace</p>
                                <p class="text-secondary">/ Freelancer</p>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                  <img src="https://placehold.co/400x400?text=2" alt="Sample 2">
                </SplideSlide>
                <SplideSlide>
                    <img src="https://placehold.co/400x400?text=3" alt="Sample 2">
                  </SplideSlide>
                  <SplideSlide>
                    <img src="https://placehold.co/400x400?text=4" alt="Sample 2">
                  </SplideSlide>
              </Splide>
        </div>
    </div>
</template>
<style lang="scss">
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;
.bg-color {
    background-color: #FEF7F3;
    margin-top: 50px;
    .font-art {
        font-family: $artistic_font;
        color: $sky;
    }
    .slide-box-style {
        background-color: $white;
        border-radius: 5px;
        padding: 30px;

        .obj-fit {
            width: 100px;
            img {
                width: 100%;
                object-fit: contain;
                border-radius: 50%;
            }
        }
    }
    .splide__slide {
        display: flex;
        justify-content: center;
    }

    .splide:not(.is-overflow) .splide__pagination {
        display: flex;
    }

    .splide__pagination {
        bottom: -30px;
        .splide__pagination__page {
            margin: 5px 10px;
            &.is-active {
                background-color: $black;
            }
        }
    }
}
</style>