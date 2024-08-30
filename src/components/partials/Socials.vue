<script>
export default {
    props: {
        socialIcon: Object
    }
}

</script>
<template>
    <i :class="socialIcon.class">
        <a :href="socialIcon.url"></a>
    </i>
</template>
<style lang="scss" scoped>
i:first-of-type {
    margin-left: 0;
}
</style>