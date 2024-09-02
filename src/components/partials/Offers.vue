<script>
export default {
    props: {
        offerBox: Object
    }
}
</script>
<template>
    <div class="col-3">
        <div :class="offerBox.imgBoxClasses">
            <img :src="`./src/assets/img/${offerBox.src}`" :alt="offerBox.alt">
        </div>
        <h5> {{ offerBox.h5 }} </h5>
        <p> {{ offerBox.paragraph }} </p>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;

</style>