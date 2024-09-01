<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { testimonials } from '../../data/arrays';
export default {
    components: {
        Splide,
        SplideSlide
    },
    data() {
        return {
            testimonials
        }
    },
}
</script>
<template>
    <div class="bg-color py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center fs-34">
                    <h2 class="m-0 font-art pb-2">Testimonials</h2>
                    <h2 class="secondary-font mb-5">Why do people love me?</h2>
                </div>
            </div>
            <div class="row">

                <Splide
                    :options="{ rewind: true, drag: 'free', type: 'loop', perPage: 3, focus: 'center', pagination: true, gap: '2rem', breakpoints: { 768: { perPage: 1 }, 1024: { perPage: 2 } }, autoplay: true, interval: 3000 }">

                    <SplideSlide v-for="(testimonial, index) in testimonials" :key="index">
                        <div class="slide-box-style">
                            <p class="fw-bolder"> {{ testimonial.title }} </p>
                            <p class="text-secondary"> {{ testimonial.review }} </p>
                            <div class="d-flex align-items-center gap-4">
                                <div class="obj-fit">
                                    <img :src="`./src/assets/img/${testimonial.src}`" alt="Testimonial">
                                </div>
                                <div class="testimonial">
                                    <p class="fw-bolder"> {{ testimonial.nameTestimonial }} </p>
                                    <p class="text-secondary"> {{ testimonial.role }} </p>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
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

    .splide__arrows {
        display: none;
    }

    .splide__slide {
        display: flex;
        justify-content: center;
        opacity: 0.5;
        width: 450px !important;
        transition: all 0.3s ease;

        &.is-active {
            opacity: 1;
            transform: scale(1.1);
        }

        .slide-box-style {
            background-color: $white;
            border-radius: 5px;
            padding: 30px;
            width: 100%;
            height: 300px;

            .obj-fit {
                width: 60px;

                img {
                    width: 100%;
                    object-fit: contain;
                    border-radius: 50%;
                }
            }
        }
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