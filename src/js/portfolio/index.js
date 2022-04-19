let portfolioSlider = new Swiper(".portfolioSlider", {
	pagination: {
		el: ".portfolio-list__slider .swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".portfolio-list__slider .swiper-button-next",
		prevEl: ".portfolio-list__slider .swiper-button-prev",
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
