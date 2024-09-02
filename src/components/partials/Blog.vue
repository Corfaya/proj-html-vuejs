<script>
export default {

}
</script>
<template>
    <div id="blog" class="py-5 bg-images position-relative">
        <div class="line position-absolute">
            <img src="../../assets/img/maxcoach-shape-14.png" alt="Background line">
        </div>
        <div class="rounded-circle position-absolute"></div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center fs-34">
                    <h2 class="m-0 font-art pb-2">Articles and Tips</h2>
                    <h2 class="secondary-font mb-5">Latest From The Blog</h2>
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
    background-image: url("../../assets/img/maxcoach-shape-12.png");
    background-repeat: no-repeat;
    background-position: 30% 200px;

    .line {
        top: 50%;
        transform: translate(0, -50%);

        img {
            filter: brightness(0) saturate(100%) invert(87%) sepia(14%) saturate(940%) hue-rotate(324deg) brightness(97%) contrast(91%);
        }
    }

    .rounded-circle {
        border: 15px solid $circle;
        width: 100px;
        aspect-ratio: 1 / 1;
        position: absolute;
        z-index: 1000;
        left: 50px;
        top: 100px;
    }

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

                .img-box {
                    cursor:pointer;
                    overflow: hidden;

                    img {
                        width: 100%;
                        transition: all 2s;

                        &:hover {
                            transform: scale(1.3);
                        }
                    }
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
                    cursor:pointer;
                    width: 100%;
                    height: 230px;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: bottom;
                        transition: all 2s;

                        &:hover {
                            transform: scale(1.3);
                        }
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
                    margin-left: 5px;
                    position: relative;

                    &:after {
                        content: '';
                        width: 30%;
                        color: grey;
                        position: absolute;
                        left: 0;
                        bottom: -3px;
                        border-width: 0 0 1px 0;
                        border-style: solid;
                        transition: all 0.3s ease-in;
                    }

                    &:hover:after {
                        color: $orange_main;
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>