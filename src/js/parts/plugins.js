import "slick-carousel";

export class Plugins {
  init() {
    this.flavourSlider();
    this.marqueSlider();
    this.LatestSlider();
    this.CenterImgSlider();
    this.RightImgSlider();
    this.CreationSlider();
    this.RelatedProductSlider();
  }
  LatestSlider() {
    $('.latest-news-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            arrows: false,
            slidesToShow: 2
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

  RelatedProductSlider() {
    $('.related-product-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 2
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
    $('.right-slider-section').each(function () {
      const $section = $(this);
      const $slider = $section.find('.right-slider');
      const $prevArrow = $section.find('.prev-arrow');
      const $nextArrow = $section.find('.next-arrow');

      $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: true,
        prevArrow: $prevArrow,
        nextArrow: $nextArrow,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              slidesToShow: 1
            }
          }
        ]
      });
    });
  }

  CreationSlider() {
    $('.creations-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: '.creation-section .prev-arrow',
      nextArrow: '.creation-section .next-arrow',
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            arrows: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: 1
          }
        }
      ]
    });
  }

  flavourSlider() {
    $(".flavour-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: ".find-slider-section .prev-arrow",
      nextArrow: ".find-slider-section .next-arrow",
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  marqueSlider() {
    $(".marque-slider").slick({
      speed: 9000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      arrows: false,
      dots: false,
    });
  }
}
