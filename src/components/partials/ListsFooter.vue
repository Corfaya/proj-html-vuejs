<script>
export default {
    props: {
        lists: Object
    },
    created() {
        console.log(this.lists)
    }
}
</script>
<template>
    <div :class="lists.col">
        <h6 :class="lists.titleClass">{{ lists.title }}</h6>
        <ul class="list-unstyled">
            <li v-for="(item, i) in lists.list" :key="i">
                <a :href="item.href"> {{ item.paragraph }} </a>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
</style>