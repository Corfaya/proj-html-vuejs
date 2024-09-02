<script>
export default {
    props: {
        list: Object
    }
}
</script>
<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ list.item }}
        </a>
        <ul class="dropdown-menu">
            <li v-for="(dropdown, i) in list.dropdownItems" :key="`dr-d-${i}`">
                <a class="fs-16 dropdown-item" href="#"> {{ dropdown }} </a>
            </li>
            <!-- <li><a class="fs-16 dropdown-item" href="#"> {{ list.dropdown2 }} </a></li>
            <li><a class="fs-16 dropdown-item" href="#"> {{ list.dropdown3 }} </a></li> -->
        </ul>
    </li>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;

li.nav-item {
    a {
        text-decoration: none;
        transition: all 0.3s;
    &:hover {
        text-decoration: underline;
        color: $orange-main;
    }
}
}

.dropdown-menu {
    border-bottom: 5px solid $orange-main;
    li {
        padding: 8px 0;
    }
}

li {
    margin: 0 10px;

    a {
      color: $black;
    }
  }
</style>