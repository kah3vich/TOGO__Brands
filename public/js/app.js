"use strict";

var swiper = new Swiper(".indexNews", {
  pagination: {
    el: ".ind-news__s .swiper-pagination",
    type: "progressbar"
  },
  breakpoints: {
    499: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});
;