<script>
import Hero from './partials/Hero.vue';
import ArtistCoaching from './partials/ArtistCoaching.vue';
import Biography from './partials/Biography.vue';
import Carousel from './partials/Carousel.vue';
import OnlineCourses from './partials/OnlineCoursesSection.vue';
import Blog from './partials/Blog.vue';
import Events from './partials/Events.vue';

export default {
    components: {
        Hero,
        ArtistCoaching,
        Biography,
        Carousel,
        OnlineCourses,
        Blog,
        Events
    },
    data() {
        return {
            buttonVisible: false,
            scrollBaseline: 0
        }
    },
    methods: {
        scrollButton() {
            // scrollY current value
            const currentScrollPosition = window.scrollY
            // Boolean handling for button visibility
            this.buttonVisible = currentScrollPosition < this.scrollBaseline ? true : false
            // Position update
            this.scrollBaseline = currentScrollPosition
        },
        // smooth effect for return on top of the webpage
        smoothScrollY() {
            window.scrollTo(
                {
                    top: 0,
                    behavior: 'smooth'
                }
            );
        }
    },
    created() {
        window.addEventListener("scroll", this.scrollButton);
    }
}
</script>

<template>
    <main>
        <!-- HERO -->
        <Hero />
        <!-- First section -->
        <ArtistCoaching />
        <!-- Video Section -->
        <Biography />
        <!-- Carousel -->
        <Carousel />
        <!-- Images Grid -->
        <OnlineCourses />
        <!-- Imgs positions section -->
        <Blog />
        <!-- Images Grid 2 -->
        <Events />
        <!-- SCROLL BUTTON -->
        <button class="rounded-circle position-fixed" :class="{'visible-btn' : buttonVisible}" v-show="buttonVisible" @click="smoothScrollY">
            <span class="position-absolute fs-30">&uarr;</span>
        </button>
    </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/vars" as *;
@use "../style/partials/utilities" as *;

button {
    bottom: 100px;
    right: 20px;
    z-index: 10000;
    box-shadow: 0 1px 5px 1px grey;
    background-color: $orange_main;
    color: $white;
    padding: 30px;
    border: none;
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.5s ease;
    span {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &:hover {
        background-color: $sky;
        transform: scale(1.1);
      }
}

.visible-btn {
    opacity: 1;
}
</style>