<script>
import Hero from './partials/Hero.vue';
import ArtistCoaching from './partials/ArtistCoaching.vue';
import Biography from './partials/Biography.vue';
export default {
    components: {
        Hero,
        ArtistCoaching,
        Biography
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
        <Biography />
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