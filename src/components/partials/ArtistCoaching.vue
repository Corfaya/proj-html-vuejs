<script>
import Offers from './Offers.vue';
import { offers } from '../../data/arrays';
export default {
    components: {
        Offers
    },
    data() {
        return {
            offers
        }
    },
}
</script>
<template>
    <div class="decorations position-relative">
        <img class="position-absolute decor" src="../../assets/img/artist-shape-01.png" alt="Background decoration">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <div class="text-box text-center mb-4 fs-34">
                            <h2 class="m-0 font-art">Artist coaching</h2>
                            <h2 class="secondary-font">I understand what it takes to create. I can help you with</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <Offers v-for="offer, i in offers" :key="`off-${i}`" :offerBox="offer"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;

.decorations {
    background-image: url("../../assets/img/maxcoach-shape-14.png"), url("../../assets/img/maxcoach-shape-13.png");
    background-repeat: no-repeat;
    background-position: center, right;
    padding: 100px 0;

    .decor {
        transform: rotate(180deg);
        transform: scaleY(-1);
        left: -250px;
        z-index: -1;
    }

    .text-box {
        max-width: 500px;
        .secondary-font {
            line-height: 50px;
        }
        .font-art {
            font-family: $artistic_font;
            color: $sky;
        }

    }

    .col-3 {
        p {
            color: grey;
        }
    }


}
</style>