"use strict";

window.addEventListener("scroll", function () {
  if (pageYOffset >= 100) {
    $(".footer").removeClass("opacity");
  } else if (pageYOffset <= 100) {
    $(".footer").addClass("opacity");
  }
});
var indexNews = new Swiper(".indexNews", {
  pagination: {
    el: ".ind-news__s .swiper-pagination",
    type: "progressbar"
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});
var indexPortfolio = new Swiper(".indexPortfolio", {
  pagination: {
    el: ".ind-portfolio__slider .swiper-pagination",
    type: "progressbar"
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});
var indexTeam = new Swiper(".indexTeam", {
  pagination: {
    el: ".ind-team__slider .swiper-pagination",
    type: "progressbar"
  },
  breakpoints: {
    700: {
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
$(".header__m").on("click", function () {
  $(".menu").removeClass("display-n");
  gsap.to($(".menu"), 0.1, {
    delay: 0.5,
    opacity: "1",
    ease: "Expo.easeInOut"
  });
  $("body").css("overflow", "hidden");
});
$(".menu__nav-c").on("click", function () {
  gsap.to($(".menu"), {
    delay: 0.3,
    opacity: "0",
    ease: "Expo.easeInOut"
  });
  setTimeout(function () {
    $(".menu").addClass("display-n");
    $("body").css("overflow", "visible");
  }, 1000);
});
;
var portfolioSlider = new Swiper(".portfolioSlider", {
  pagination: {
    el: ".portfolio-list__slider .swiper-pagination",
    type: "progressbar"
  },
  breakpoints: {
    700: {
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
var investorPortfolioSlider = new Swiper(".investorPortfolioSlider", {
  pagination: {
    el: ".investor-portfolio__slider .swiper-pagination",
    type: "progressbar"
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});
var investorTeamSlider = new Swiper(".investorTeamSlider", {
  pagination: {
    el: ".investor-team__slider .swiper-pagination",
    type: "progressbar"
  },
  breakpoints: {
    700: {
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
var partnerPortfolioSlider = new Swiper(".partnerPortfolioSlider", {
  pagination: {
    el: ".partner-portfolio__slider .swiper-pagination",
    type: "progressbar"
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});
var partnerTeamSlider = new Swiper(".partnerTeamSlider", {
  pagination: {
    el: ".partner-team__slider .swiper-pagination",
    type: "progressbar"
  },
  breakpoints: {
    700: {
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