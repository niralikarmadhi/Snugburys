export class Header {
  init() {
    this.headerFixed();
    this.MenuIconOpen();
    this.BlackHeader();
  }

  headerFixed() {
    $(document).ready(function () {
      var prevScrollPos = $(window).scrollTop();

      $(window).scroll(function () {
        var sticky = $(".header-main"),
          scroll = $(window).scrollTop();

        if (scroll >= 50) {
          sticky.addClass("header-fixed");
          sticky.removeClass("header-fixed-os");
        } else {
          sticky.removeClass("header-fixed");
          sticky.addClass("header-fixed-os");
        }

        if (prevScrollPos > scroll || scroll === 0) {
          $(".header-main").removeClass("hidden");
        } else {
          $(".header-main").addClass("hidden");
        }

        prevScrollPos = scroll;
      });
    });
  }

  MenuIconOpen() {
    $(document).ready(function () {
      setInterval(function () {
        if (!$(".header-offcanvas").hasClass("show")) {
          $(".menu-icon").removeClass("open");
        } else {
          $(".menu-icon").addClass("open");
        }
      }, 0.5);

      $(".menu-icon").on("click", function () {
        const $this = $(this);

        if (!$this.hasClass("open")) {
          $this.addClass("open");
        } else {
          $this.removeClass("open");
        }

        if (
          $(".header-main").hasClass("header-fixed") &&
          $(this).hasClass("open")
        ) {
          $(".header").addClass("bg-transparent");
        } else {
          $(".header").removeClass("bg-transparent");
        }
      });
    });
  }

  BlackHeader() {
    $(document).ready(function () {
      $(".menu-icon").on("click", function () {
        if (
          $(".header-main").hasClass("black-header-main") &&
          $(this).hasClass("open")
        ) {
          $(".header").addClass("black-header");
        } else {
          $(".header").removeClass("black-header");
        }
      });
    });
  }
}
