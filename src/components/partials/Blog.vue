<script>
export default {

}
</script>
<template>
    <div id="blog" class="py-5 bg-images">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="m-0 fs-22 font-art pb-2">Articles and Tips</h2>
                    <h2 class="fs-22 secondary-font mb-5">Latest From The Blog</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="card rounded-0 border-0 first_article" style="width: 18rem;">
                        <div class="img-box">
                            <img src="../../assets/img/artist-blog-03-480x356.jpeg" class="card-img-top rounded-0"
                                alt="Blog article">
                        </div>
                        <div class="card-body pb-5">
                            <h5 class="blog-title">Artist</h5>
                            <h4 class="blog-text">Brush Strokes Energize Trees in Paintings</h4>
                            <span>
                                <i class="fa-regular fa-calendar"></i>
                                May 15, 2020</span>
                            <span class="ms-3">
                                <i class="fa-regular fa-eye"></i>
                                688 views</span>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card rounded-0 border-0 position-relative" style="width: 18rem;">
                        <div class="img-box">
                            <img src="../../assets/img/artist-blog-02-500x680.jpg" class="card-img-top rounded-0"
                                alt="Blog article">
                        </div>
                        <div class="text-blog position-absolute pb-3">
                            <h5 class="blog-title">Artist</h5>
                            <h4 class="blog-text">Connection Between Self-Portraits and Identity</h4>
                            <span>
                                <i class="fa-regular fa-calendar"></i>
                                May 15, 2020</span>
                            <span class="ms-3">
                                <i class="fa-regular fa-eye"></i>
                                397 views</span>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card rounded-0 border-0 third_article" style="width: 18rem;">
                        <div class="img-box">
                            <img src="../../assets/img/artist-blog-01-480x356.jpg" class="card-img-top rounded-0"
                                alt="Blog article">
                        </div>
                        <div class="card-body pb-5">
                            <h5 class="blog-title">Artist</h5>
                            <h4 class="blog-text">Pocket-Sized Notebooks Hold Miniature Paintings</h4>
                            <span>
                                <i class="fa-regular fa-calendar"></i>
                                May 15, 2020</span>
                            <span class="ms-3">
                                <i class="fa-regular fa-eye"></i>
                                603 views</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p class="mt-5 text-center">
                        Get into details now?
                        <a href="#blog" class="text-decoration-none">
                            View all posts &rarr;
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../style/partials/vars" as *;
@use "../../style/partials/utilities" as *;

.bg-images {
    background-color: $grey;
    background-image: url("../../assets/img/maxcoach-shape-14.png"),  url("../../assets/img/maxcoach-shape-12.png");
    background-repeat: no-repeat;
    background-position: center, 30% 200px;
    .container {
        .font-art {
            font-family: $artistic_font;
            color: $sky;
        }

        .card {
            box-shadow: 0px 5px 30px 5px rgb(174, 174, 174);

            .blog-title {
                font-weight: 600;
                letter-spacing: 2px;
                text-transform: uppercase;
                margin: 10px 0;
            }

            .blog-text {
                line-height: 30px;
                margin-bottom: 10px;
            }
        }

        .col-6 {
            .card {
                min-width: 400px;
                margin: 0 auto;

                img {
                    width: 100%;
                }

                .text-blog {
                    bottom: 0;
                    margin: 20px;

                    .blog-title {
                        color: $white;
                        font-size: 12px;
                    }

                    .blog-text {
                        color: $white;
                        font-weight: 600;

                        font-size: 20px;
                    }

                    span {
                        color: $white;
                        font-size: 10px;
                    }
                }
            }
        }

        .col-3 {
            .card {
                &.first_article {
                    margin-top: 150px;
                }

                &.third_article {
                    margin-top: 50px;
                }

                .img-box {
                    width: 100%;
                    height: 230px;

                    img {
                        height: 100%;
                        object-fit: cover;
                        object-position: bottom;
                    }
                }

                .blog-title {
                    color: grey;
                    font-size: 15px;
                }

                .blog-text {
                    color: $blog_text;
                    font-weight: 900;
                    font-size: 20px;
                }

                span {
                    color: grey;
                    font-size: 15px;
                }
            }
        }

        .col-12 {
            p {
                color: grey;
                font-size: 12px;
                a {
                    color: $orange_main;
                    font-weight: 700;
                }
            }
        }
    }
}
</style>