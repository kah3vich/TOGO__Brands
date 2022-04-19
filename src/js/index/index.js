window.addEventListener("scroll", function () {
	if (pageYOffset >= 100) {
		$(".footer").removeClass("opacity");
	} else if (pageYOffset <= 100) {
		$(".footer").addClass("opacity");
	}
});

$(".ind-main__video, .ind-main__video-play").on("click", () => {
	$(".video").removeClass("display-n");
	$("body").css("overflow", "hidden");
});

$(".video__close").on("click", () => {
	$(".video").addClass("display-n");
	$("body").css("overflow", "visible");
	var video = document.getElementById("vide");
	video.pause();
});

let indexNews = new Swiper(".indexNews", {
	pagination: {
		el: ".ind-news__s .swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".ind-news__s .swiper-button-next",
		prevEl: ".ind-news__s .swiper-button-prev",
	},
	breakpoints: {
		700: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
	},
});

let indexPortfolio = new Swiper(".indexPortfolio", {
	pagination: {
		el: ".ind-portfolio__slider .swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".ind-portfolio__slider .swiper-button-next",
		prevEl: ".ind-portfolio__slider .swiper-button-prev",
	},
	breakpoints: {
		700: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
	},
});

let indexTeam = new Swiper(".indexTeam", {
	pagination: {
		el: ".ind-team__slider .swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".ind-team__slider .swiper-button-next",
		prevEl: ".ind-team__slider .swiper-button-prev",
	},
	breakpoints: {
		700: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
	},
});
