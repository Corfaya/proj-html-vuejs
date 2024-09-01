<script>
export default {
    props: {
        lists: Object
    }
}
</script>
<template>
    <div :class="lists.col">
        <h6 :class="['fs-18', lists.titleClass]">{{ lists.title }}</h6>
        <ul class="list-unstyled">
            <li v-for="(item, i) in lists.list" :key="i">
                <a class="fs-14" :href="item.href"> {{ item.paragraph }} </a>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;
a {
    text-decoration: none;
    color: $black;
}
</style>