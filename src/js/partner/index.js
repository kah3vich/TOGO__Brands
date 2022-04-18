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

const boxes__p = document.querySelectorAll(".partner-grafic__g-i");

window.addEventListener("scroll", checkBoxes__p);

checkBoxes__p();

function checkBoxes__p() {
	const triggerBottom = (window.innerHeight / 8) * 4;

	boxes__p.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
}

const obj__partner = {
	p__1: 3,
	p__2: 10,
	p__3: 16,
	p__4: 23,
	p__5: 29,
	p__6: 36,
	p__7: 42,
	p__8: 49,
	p__9: 56,
	p__10: 63,
	p__11: 69,
	p__12: 76,
	p__13: 83,
	p__14: 89,
	p__15: 100,
};

for (let key in obj__partner) {
	if (obj__partner.hasOwnProperty(key)) {
		gsap.timeline({
			scrollTrigger: {
				trigger: `#${key}`,
				start: "top center",
				end: "bottom bottom",
				markers: false,
				scrub: true,
				ease: Expo.easeOut,
			},
		}).to("#p__l", { height: `${obj__partner[key]}%` }, 0);
	}
}
