<script>
import Hero from './partials/Hero.vue';
import ArtistCoaching from './partials/ArtistCoaching.vue';
export default {
    components: {
        Hero,
        ArtistCoaching
    }
}
</script>

<template>
    <main class="my-3">
        <!-- HERO -->
        <Hero />
        <!-- First section -->
        <ArtistCoaching />
        <!-- Second Section -->

        <!-- Video Section -->

        <!-- Carousel -->

        <!-- Images Grid -->

        <!-- Imgs positions section -->

        <!-- Images Grid 2 -->
    </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/vars" as *;
@use "../style/partials/utilities" as *;
</style>