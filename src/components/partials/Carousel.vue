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
                  <img src="https://placehold.co/400x400?text=1" alt="Sample 1">
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
    .secondary-font {
        font-weight: 700;
        line-height: 30px;
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