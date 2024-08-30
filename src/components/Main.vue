<script>
import Hero from './partials/Hero.vue';
import ArtistCoaching from './partials/ArtistCoaching.vue';
import Biography from './partials/Biography.vue';
import Carousel from './partials/Carousel.vue';

export default {
    components: {
        Hero,
        ArtistCoaching,
        Biography,
        Carousel
    }
}
</script>

<template>
    <main class="my-3">
        <!-- HERO -->
        <Hero />
        <!-- First section -->
        <ArtistCoaching />
        <!-- Video Section -->
        <Biography />
        <!-- Carousel -->
        <Carousel />
        <!-- Images Grid -->

        <!-- Imgs positions section -->

        <!-- Images Grid 2 -->
    </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/vars" as *;
@use "../style/partials/utilities" as *;
</style>