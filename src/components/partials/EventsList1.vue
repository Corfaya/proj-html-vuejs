<script>
export default {
    props: {
        event: Object
    }
}
</script>
<template>
    <div class="col-6">
        <div class="d-flex mx-2">
            <div class="img-fit">
                <img :src="`./src/assets/img/${event.src}`" :alt="event.alt">
            </div>
            <div class="event-text d-flex flex-column justify-content-center ms-5">
                <p class="date-style"> {{event.date}} </p>
                <p class="title"> {{ event.title }} </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    {{ event.location }}
                </p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;

.img-fit {
    max-width: 250px;
    overflow: hidden;
    cursor: pointer;
    img {
        width: 100%;
        transition: all 1s;
        &:hover {
            transform: scale(1.2);
        }
    }
}

    .event-text {
        color: grey;

        .date-style,
        .title {
            font-weight: 600;
        }

        .title {
            color: $black;
            font-size: 20px;
        }
    }
</style>