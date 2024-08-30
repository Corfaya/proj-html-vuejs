<script>
export default {
    props: {
        photo: Object
    }
}
</script>
<template>
    <img :class="photo.class" :src="`./src/assets/img/${photo.path}`" :alt="photo.alt">
</template>
<style lang="scss" scoped>
    
</style>