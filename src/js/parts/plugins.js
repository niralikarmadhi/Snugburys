import "slick-carousel";

export class Plugins {
  init() {
    this.flavourSlider();
  }
  flavourSlider() {
    $(".flavour-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots:false,
    });
  }
}
