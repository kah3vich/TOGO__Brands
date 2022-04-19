let investorPortfolioSlider = new Swiper(".investorPortfolioSlider", {
	pagination: {
		el: ".investor-portfolio__slider .swiper-pagination",
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

let investorTeamSlider = new Swiper(".investorTeamSlider", {
	pagination: {
		el: ".investor-team__slider .swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".investor-team__slider .swiper-button-next",
		prevEl: ".investor-team__slider .swiper-button-prev",
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
