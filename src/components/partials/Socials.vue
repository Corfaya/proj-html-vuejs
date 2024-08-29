<script>
export default {
    props: {
        socialIcon: Object
    }
}

</script>
<template>
    <i :class="['ms-0', socialIcon.class]">
        <a :href="socialIcon.url"></a>
    </i>
</template>
<style lang="scss">
</style>