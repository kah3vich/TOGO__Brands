let portfolioSlider = new Swiper(".portfolioSlider", {
	pagination: {
		el: ".portfolio-list__slider .swiper-pagination",
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
