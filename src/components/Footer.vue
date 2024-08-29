<script>
export default {

}
</script>

<template>
<footer class="mt-5">
    <div class="container">
        <div class="row">
            <div class="col-4">
                <h6 class="fw-bold">Address</h6>
                <ul class="list-unstyled">
                    <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
                    <li>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
                    <li>support@maxcoach.com</li>
                </ul>
            </div>
            <div class="col-2">
                <h6 class="fw-bold">Explore</h6>
                <ul class="list-unstyled">
                    <li><a href="">Start here</a></li>
                    <li><a href="">Success story</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Courses</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            </div>
            <div class="col-2">
                <h6 class="fw-bold">Information</h6>
                <ul class="list-unstyled">
                    <li><a href="">Membership</a></li>
                    <li><a href="">Purchase guide</a></li>
                    <li><a href="">Privacy policy</a></li>
                    <li><a href="">Terms of services</a></li>
                </ul>
            </div>
            <div class="col-4">
                <h6 class="fw-bold">Instagram <span>@maxcoach</span></h6>
                <div class="d-flex w mt-4">
                    <img class="img-fluid" src="../assets/img/120084500_197897808368764_8114555493043279565_n.jpg" alt="">
                    <img class="img-fluid mx-3" src="../assets/img/120012142_177596140500760_8623485824101406058_n.jpg" alt="">
                    <img class="img-fluid" src="../assets/img/120099363_364334431619755_7198812647386067017_n.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p class="text-center copyright-style">&copy; 2020 Maxcoach. All Right Reserved</p>
            </div>
        </div>
    </div>
</footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/vars" as *;

h6 {
    span {
        color: $orange_main;
        font-weight: 500;
        font-size: 14px;
    }
}

ul {
    font-size: 10px;
}

.w {
    max-width: 100px;
}

.copyright-style {
    font-size: 10px;
    color: #808080;
    padding: 80px 0;
}
</style>