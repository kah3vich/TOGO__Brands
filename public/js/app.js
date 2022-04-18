"use strict";

window.addEventListener("scroll", function () {
  if (pageYOffset >= 100) {
    $(".footer").removeClass("opacity");
  } else if (pageYOffset <= 100) {
    $(".footer").addClass("opacity");
  }
});
$(".ind-main__video, .ind-main__video-play").on("click", function () {
  $(".video").removeClass("display-n");
  $("body").css("overflow", "hidden");
});
$(".video__close").on("click", function () {
  $(".video").addClass("display-n");
  $("body").css("overflow", "visible");
  var video = document.getElementById("vide");
  video.pause();
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
var boxes__p = document.querySelectorAll(".partner-grafic__g-i");
window.addEventListener("scroll", checkBoxes__p);
checkBoxes__p();

function checkBoxes__p() {
  var triggerBottom = window.innerHeight / 8 * 4;
  boxes__p.forEach(function (box) {
    var boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

var obj__partner__one = {
  p__1: 30,
  p__2: 100
};

for (var key in obj__partner__one) {
  if (obj__partner__one.hasOwnProperty(key)) {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#".concat(key),
        start: "top center",
        end: "bottom bottom",
        markers: false,
        scrub: true,
        ease: Expo.easeOut
      }
    }).to("#p__l__one", {
      height: "".concat(obj__partner__one[key], "%")
    }, 0);
  }
}

var obj__partner__two = {
  p__3: 4,
  p__4: 13,
  p__5: 20,
  p__6: 26,
  p__7: 35,
  p__8: 44,
  p__9: 50,
  p__10: 58,
  p__11: 68,
  p__12: 73,
  p__13: 81,
  p__14: 89,
  p__15: 100
};

for (var _key in obj__partner__two) {
  if (obj__partner__two.hasOwnProperty(_key)) {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#".concat(_key),
        start: "top center",
        end: "bottom bottom",
        markers: false,
        scrub: true,
        ease: Expo.easeOut
      }
    }).to("#p__l__two", {
      height: "".concat(obj__partner__two[_key], "%")
    }, 0);
  }
}

;
var boxes = document.querySelectorAll(".about__banner-i ");
window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  var triggerBottom = window.innerHeight / 8 * 4;
  boxes.forEach(function (box) {
    var boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

var obj__about = {
  elem__1: 7,
  elem__2: 20,
  elem__3: 35,
  elem__4: 50,
  elem__5: 63,
  elem__6: 78,
  elem__7: 100
};

for (var _key2 in obj__about) {
  if (obj__about.hasOwnProperty(_key2)) {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#".concat(_key2),
        start: "top center",
        end: "bottom bottom",
        markers: false,
        scrub: true,
        ease: Expo.easeOut
      }
    }).to("#lines__p", {
      height: "".concat(obj__about[_key2], "%")
    }, 0);
  }
}

;
$('.header__logo').hover(function () {
  $('.header__description').removeClass('opacity-d');
}, function () {
  $('.header__description').addClass('opacity-d');
});