let partnerPortfolioSlider = new Swiper(".partnerPortfolioSlider", {
	pagination: {
		el: ".partner-portfolio__slider .swiper-pagination",
		type: "progressbar",
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

let partnerTeamSlider = new Swiper(".partnerTeamSlider", {
	pagination: {
		el: ".partner-team__slider .swiper-pagination",
		type: "progressbar",
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
