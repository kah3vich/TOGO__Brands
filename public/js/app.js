"use strict";

window.addEventListener("scroll", function () {
  if (pageYOffset >= 100) {
    $(".footer").removeClass("opacity");
  } else if (pageYOffset <= 100) {
    $(".footer").addClass("opacity");
  }
});
$(".ind-main__video").on("click", function () {
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
;
var boxes = document.querySelectorAll('.about__banner-i ');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
  var triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach(function (box) {
    var boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
} // const obj__animation = {
//     elem__1: 7,
//     elem__2: 20,
//     elem__3: 30,
//     elem__4: 40,
//     elem__5: 50,
//     elem__6: 60,
//     elem__7: 70,
// }
// obj__animation.forEach((name_, height_) => {
//     gsap.timeline({
//         scrollTrigger: {
//             trigger: `#${name_}`,
//             start: "top center",
//             end: "bottom bottom",
//             markers: false,
//             scrub: true,
//             ease: Expo.easeOut
//         }
//     })
//     .to("#lines__p",  { height: `${height_}%` }, 0)
// })
// for (var key in obj__animation) {
//     console.log( "Ключ: " + key + " значение: " + obj__animation[key] );
// }


var obj = {
  elem__1: 7,
  elem__2: 20,
  elem__3: 35,
  elem__4: 50,
  elem__5: 63,
  elem__6: 78,
  elem__7: 100
};

for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log("".concat(key, " : ").concat(obj[key]));
    gsap.timeline({
      scrollTrigger: {
        trigger: "#".concat(key),
        start: "top center",
        end: "bottom bottom",
        markers: false,
        scrub: true,
        ease: Expo.easeOut
      }
    }).to("#lines__p", {
      height: "".concat(obj[key], "%")
    }, 0);
  }
} // gsap.timeline({
//     scrollTrigger: {
//         trigger: "#elem__2",
//         start: "top center",
//         end: "bottom bottom",
//         markers: true,
//         scrub: true,
//         ease: Expo.easeOut
//     }
// })
// .to("#lines__p",  { height: '20%' }, 0)
// let last_known_scroll_position = 0;
// let ticking = false;
// function doSomething(scroll_pos) {
//   console.log(1);
// }
// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;
//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });
//     ticking = true;
//   }
// });
// const lines = document.getElementById('lines')
// const lines_ = document.getElementById('lines__p')
// window.addEventListener('scroll', checkLines)
// checkLines()
// function checkLines() {
//     const triggerBottom = window.innerHeight / 5 * 4
//     // lines.forEach(line => {
//     const lineTop = lines.getBoundingClientRect().top
//     // console.log((lines.getBoundingClientRect().top));
//     var height = 0;
//     if (lineTop > triggerBottom) {
//         height += 10;
//         lines_.style.height = height + "%";
//         console.log(1);
//     } else {
//         lines_.style.height -= '10px';
//         console.log(2);
//     }
//     // })
// }
// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }
// window.onscroll = function() {myFunction()};
// function myFunction() {
//     var winScroll = document.body.scrollTop || $('.about-banner').html().scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = ((winScroll / height) * 100) * 1.1;
//     document.getElementById("myBar").style.height = `${scrolled}%`
// };


$('.header__logo').hover(function () {
  $('.header__description').removeClass('opacity-d');
}, function () {
  $('.header__description').addClass('opacity-d');
});