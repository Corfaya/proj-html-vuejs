<script>
export default {
    props: {
        online_class: Object
    }
}
</script>
<template>
    <div class="col-3">
        <div class="box-course d-flex flex-column mb-4">
            <img :src="`./src/assets/img/${online_class.src}`" :alt="online_class.alt">
            <div class="mx-3 my-3">
                <p class="text-orange fw-bold my-1"> {{ online_class.price }} </p>
                <p class="fw-bold"> {{ online_class.title }} </p>
                <span>
                    <i class="fa-regular fa-file-lines me-1"></i>
                    {{ online_class.duration }} Lessons
                </span>
                <span class="ms-3">
                    <i class="fa-regular fa-user me-1"></i>
                    {{ online_class.students }} Students</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;

.box-course {
    width: 250px;
    margin: 0 auto;
    img {
        width: 100%;
        cursor: pointer;
    }
    .text-orange {
        color: $orange_main;
    }
    span {
        color: grey;
        font-size: 10px;
    }
}
</style>