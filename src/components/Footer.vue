<script>
import Socials from './partials/Socials.vue';
import ListsFooter from './partials/ListsFooter.vue';

import { instagramPhotos } from '../data/arrays';
import { socials, listsFooter } from '../data/arrays';
import FooterImages from './partials/FooterImages.vue';

export default {
    components: {
        Socials,
        ListsFooter,
        FooterImages
    },
    data() {
        return {
            socials,
            listsFooter,
            instagramPhotos
        }
    },
}
</script>

<template>
    <footer>
        <!-- TOP: NEWSLETTER -->
        <div class="footer-top text-white">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex align-items-center gap-5">
                            <h3 class="fs-40 text-end">Newsletter to get in touch</h3>
                            <form class="fs-24 position-relative d-flex align-items-center" method="post">
                                <input type="email" placeholder="Your e-mail" required>
                                <a class="text-white text-decoration-none position-absolute" href="#">&rarr;</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- BOTTOM -->
        <div class="footer-bottom mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-lg-4">
                        <h6 class="fw-bold fs-18">Address</h6>
                        <ul class="list-unstyled fs-14">
                            <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
                            <li>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
                            <li>support@maxcoach.com</li>
                        </ul>
                        <!-- Dynamic social list -->
                        <div class="d-none d-lg-flex" role="search">
                            <Socials v-for="(soc, i) in socials" :key="`s-${i}`" :socialIcon="soc" />
                        </div>
                    </div>
                    <!-- Dynamic lists-->
                    <ListsFooter v-for="(l, i) in listsFooter" :key="`lf-${i}`" :lists="l" />
                    <!-- Images -->
                    <div class="col-6 col-lg-4">
                        <h6 class="fw-bold fs-18">Instagram <span class="fs-14">@maxcoach</span></h6>
                        <div class="d-flex mw-100px mt-4">
                            <FooterImages v-for="(photo, i) in instagramPhotos" :key="`ph-(i)`" :photo="photo" />
                        </div>
                    </div>
                </div>
                <!-- Copyright section -->
                <div class="row">
                    <div class="col-12">
                        <p class="text-center fs-10 copyright-style">&copy; 2020 Maxcoach. All Right Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/vars" as *;
@use "../style/partials/utilities" as *;

.footer-top {
    background-color: $footer_blue;
    background-image: url("../assets/img/artist-shape-color-paint-bottom-right.png"), url("../assets/img/artist-shape-color-paint-top-left.png");
    background-repeat: no-repeat;
    background-position: bottom right, top left;
    padding: 70px;

    h3 {
        font-family: $serif_font;
    }

    form {
        width: 500px;
        margin-left: 50px;
        border-bottom: 3px solid rgba(155, 155, 155, 0.25);
        input {
        background-color: transparent;
        border: none;
        padding: 10px 0;
    }
    ::placeholder {
        color: white;
    }
    a {
        right: 0;
    }
}
}

.footer-bottom {
    background-color: $white;
}

ul {
    li {
        margin-top: 10px;
    }
}

h6 {
    span {
        color: $orange_main;
        font-weight: 500;
    }
}

.mw-100px {
    max-width: 100px;
}

.copyright-style {
    color: #808080;
    padding: 50px 0;
}

i {
    color: #c4c2c2;
    margin: 5px 10px;
}
</style>