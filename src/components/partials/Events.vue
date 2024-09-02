<script>
import EventsList1 from './EventsList1.vue';
import EventsList2 from './EventsList2.vue';
import { events1 } from '../../data/arrays';
import { events2 } from '../../data/arrays';

export default {
    components: {
        EventsList1,
        EventsList2
    },
    data() {
        return {
            events1,
            events2
        }
    },
}
</script>
<template>
    <div class="py-5 position-relative">
        <div class="background-decoration position-absolute">
            <img src="../../assets/img/artist-shape-02.png" alt="Decoration shape">
        </div>
        <div class="rotated-text position-absolute">Events</div>
        <div class="container">
            
            <div class="row">
                <div class="col-12 text-center fs-34">
                    <h2 class="m-0 font-art pb-2">Upcoming Events</h2>
                    <h2 class="secondary-font mb-5">Let's Work Together</h2>
                </div>
            </div>
            <div class="row">
                <EventsList1 v-for="(e, i) in events1" :key="`ev-1.-${i}`" :event="e" />
            </div>
            <div class="row">
                <EventsList2 v-for="(e, i) in events2" :key="`ev-2.-${i}`" :event="e" />
            </div>
            <div class="row">
                
                <div class="col-6"></div>
                <div class="col-6"></div>
                <div class="col-6"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;
.background-decoration {
    left: -190px;
    bottom: 0;
    img {
        width: 600px;
        transform: rotate(-90deg)
    }
}

.rotated-text {
    left: 180px;
    top: 50%;
    z-index: -1;
    font-size: 150px;
    transform: translate(-70%, -50%) rotate(90deg);
    font-weight: bold;
    color: transparent;
    -webkit-text-stroke: 1px #f2ebe6;
}
.container {
    .font-art {
        font-family: $artistic_font;
        color: $sky;
    }
    .event-text {
        color: grey;
        .date-style, .title {
            font-weight: 600;
        }
        .title {
            color: $black;
            font-size: 20px;
        }
    }
}
</style>