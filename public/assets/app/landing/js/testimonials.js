'use strict';

$(document).on('ready', function () {
  $('.testimonials').slick({
    // normal options...
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    dotsClass: 'testimonials__dots',
    slidesToShow: 3,
    responsive:[
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
});