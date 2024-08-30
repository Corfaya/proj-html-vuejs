<script>
import Socials from './partials/Socials.vue';
import ListsFooter from './partials/ListsFooter.vue';

import { socials, listsFooter } from '../data/arrays';

export default {
    components: {
        Socials,
        ListsFooter
    },
    data() {
        return {
            socials,
            listsFooter
        }
    },
}
</script>

<template>
    <footer class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-6 col-lg-4">
                    <h6 class="fw-bold">Address</h6>
                    <ul class="list-unstyled">
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
                    <h6 class="fw-bold">Instagram <span>@maxcoach</span></h6>
                    <div class="d-flex mw-100px mt-4">
                        <img class="img-fluid" src="../assets/img/120084500_197897808368764_8114555493043279565_n.jpg" alt="">
                        <img class="img-fluid mx-3" src="../assets/img/120012142_177596140500760_8623485824101406058_n.jpg" alt="">
                        <img class="img-fluid d-none d-md-block" src="../assets/img/120099363_364334431619755_7198812647386067017_n.jpg" alt="">
                    </div>
                </div>
            </div>

            <!-- Copyright section -->
            <div class="row">
                <div class="col-12">
                    <p class="text-center copyright-style">&copy; 2020 Maxcoach. All Right Reserved</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/vars" as *;
ul {
    font-size: 12px;

    li {
        margin-top: 10px;
    }
}

h6 {
    span {
        color: $orange_main;
        font-weight: 500;
        font-size: 14px;
    }
}

.mw-100px {
    max-width: 100px;
}

.copyright-style {
    font-size: 10px;
    color: #808080;
    padding: 80px 0;
}

i {
    color: #c4c2c2;
    margin: 5px 10px;
  }
</style>