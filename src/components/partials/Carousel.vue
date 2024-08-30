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
    <div class="bg-color">
        <div class="container">
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
              </Splide>
        </div>
    </div>
</template>
<style lang="scss">
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;
.bg-color {
    height: 500px;
    background-color: #FEF7F3;
    margin-top: 50px;
    .splide:not(.is-overflow) .splide__pagination {
        display: flex;
    }

    .splide__pagination {
        bottom: -50px
    }
}
</style>