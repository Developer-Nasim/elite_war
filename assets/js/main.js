(function($) {
  "use strict";

  // preloader 
  $(window).on("load", function (){
    $('#prealoder').fadeOut(500);
  });
 

  // animation
  AOS.init();


  // mainSlider
  function mainSlider() {
    var BasicSlider = $(".portfolio-features");
    BasicSlider.on("init", function(e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on("beforeChange", function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  // owlCarousel
  $(".works-slider").owlCarousel({
    loop: true,
    margin: 80,
    items: 2, 
    autoplay:true,
    smartSpeed:1000, 
    nav: false, 
    responsive: {
      0: {
        margin: 0,
        items: 1, 
      },
      767: {
        items: 1, 
        margin: 0,
      },
      992: {
        items: 2
      }
    }
  });
  $(".team-slider").owlCarousel({
    loop: true,
    autoplay:true,
    smartSpeed:1000,
    margin: 50,
    items: 3,
    autoplayHoverPause: true,
    navText: [
      '<img src="assets/img/arrow-left.svg" alt="">',
      '<img src="assets/img/arrow-right.svg" alt="">'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 0,
        nav: false,
      },
      767: {
        items: 1,
        margin: 0,
        nav: false,
      },
      992: {
        items: 3
      }
    }
  });
 
  // counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  

 // sticky nav
 $(window).scroll(function(){
  if($(this).scrollTop()>300){
      $('.message').addClass("support-active")    
  }
  else{
      $('.message').removeClass("support-active")
  }
});









})(jQuery);
