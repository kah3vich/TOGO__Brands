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

const obj__partner__one = {
	p__1: 30,
	p__2: 100,
};

for (let key in obj__partner__one) {
	if (obj__partner__one.hasOwnProperty(key)) {
		gsap.timeline({
			scrollTrigger: {
				trigger: `#${key}`,
				start: "top center",
				end: "bottom bottom",
				markers: false,
				scrub: true,
				ease: Expo.easeOut,
			},
		}).to("#p__l__one", { height: `${obj__partner__one[key]}%` }, 0);
	}
}

const obj__partner__two = {
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
	p__15: 100,
};

for (let key in obj__partner__two) {
	if (obj__partner__two.hasOwnProperty(key)) {
		gsap.timeline({
			scrollTrigger: {
				trigger: `#${key}`,
				start: "top center",
				end: "bottom bottom",
				markers: false,
				scrub: true,
				ease: Expo.easeOut,
			},
		}).to("#p__l__two", { height: `${obj__partner__two[key]}%` }, 0);
	}
}
