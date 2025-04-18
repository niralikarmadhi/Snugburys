import "slick-carousel";

export class Plugins {
  init() {
    this.flavourSlider();
    this.marqueSlider();
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
