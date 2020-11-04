$(document).ready(function () {
    $('.advertisers__slider').slick({
        autoplay: false,
        infinite: true,
        slidesToShow: 4,
        arrows: true,
        centerMode: false,
        variableWidth: false,
        nextArrow: '<button type="button" class="slick-next"><i class="slider-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    rows: 2,
                    slidesToShow: 2,
                    arrows: true,
                }
            },
        ]
    });

    $('.news__latest').slick({
        mobileFirst: true,
        arrows: false,
        slidesToShow: 2,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick",
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
        ]
    });
})