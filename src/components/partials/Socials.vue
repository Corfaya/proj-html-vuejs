<script>
export default {
    props: {
        socialIcon: Object
    }
}

</script>
<template>
    <i :class="['fs-20', socialIcon.class]">
        <a :href="socialIcon.url"></a>
    </i>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;

i:first-of-type {
    margin-left: 0;
}

i:hover {
    color: $orange_main
}
</style>