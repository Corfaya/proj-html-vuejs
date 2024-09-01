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
            <li><a class="fs-16 dropdown-item" href="#"> {{ list.dropdown1 }} </a></li>
            <li><a class="fs-16 dropdown-item" href="#"> {{ list.dropdown2 }} </a></li>
            <li><a class="fs-16 dropdown-item" href="#"> {{ list.dropdown3 }} </a></li>
        </ul>
    </li>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;
li {
    margin: 0 10px;

    a {
      color: $black;
    }
  }
</style>