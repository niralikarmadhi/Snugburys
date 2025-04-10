export class Parts {

    init() {
        this.LatestSlider();
        this.CenterImgSlider();
        this.RightImgSlider();
        this.CreationSlider();
    }

    LatestSlider() {
        $('.latest-news-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    CenterImgSlider() {
        $('.center-img-content-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            prevArrow: '.center-img-content-section .prev-arrow',
            nextArrow: '.center-img-content-section .next-arrow',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    RightImgSlider() {
        $('.right-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            dots: true,
            prevArrow: '.right-slider-section .prev-arrow',
            nextArrow: '.right-slider-section .next-arrow',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    CreationSlider() {
        $('.creations-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            dots: true,
            prevArrow: '.creation-section .prev-arrow',
            nextArrow: '.creation-section .next-arrow',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

}
