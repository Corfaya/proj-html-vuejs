<script>
export default {
    props: {
        online_class: Object
    }
}
</script>
<template>
    <div class="col-3">
        <div class="box-course d-flex flex-column mb-4 position-relative">
            <div class="img-container">
                <img :src="`./src/assets/img/${online_class.src}`" :alt="online_class.alt">
            </div>
            <!--  -->
            <div class="text-container p-3">
                <p class="text-orange fw-bold my-1 fs-18"> {{ online_class.price }} </p>
                <p class="fw-bold title fs-20"> {{ online_class.title }} </p>
                <span>
                    <i class="fa-regular fa-file-lines me-1 fs-14"></i>
                    {{ online_class.duration }} Lessons
                </span>
                <span class="ms-3">
                    <i class="fa-regular fa-user me-1 fs-14"></i>
                    {{ online_class.students }} Students</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;

.box-course {
    margin: 0 auto;
    height: 530px;
    overflow: hidden;

    .img-container {
        width: 100%;
        height: 100%;
        overflow: hidden;

        img {
            cursor: pointer;
            width: 100%;
            transition: transform 1s ease-in;

            &:hover {
                transform: scale(1.2)
            }
        }
    }

    .text-container {
        height: calc(100% - 320px);
        max-width: calc(100% - 50px);
        position:absolute;
        bottom: 0;
        left: 0;

        transition: all 0.8s;
        border: 2px solid transparent;
        transform: translateY(0);
        background-color: transparent;

        .text-orange {
            color: $orange_main;
        }

        .title:hover {
            color: $orange_main;
            cursor: pointer;
        }
        
        span {
            color: grey;
            font-size: 10px;
        }
    }

    &:hover .text-container {
        border: 2px solid $orange_main;
        transform: translateY(-50px);
        background-color: $white;
    }
}

</style>