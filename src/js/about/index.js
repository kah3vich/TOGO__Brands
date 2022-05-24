const boxes = document.querySelectorAll(".about__banner-i");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
	const triggerBottom = (window.innerHeight / 8) * 4;

	boxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
}

const obj__about = {
	elem__1: 7,
	elem__2: 20,
	elem__3: 35,
	elem__4: 50,
	elem__5: 63,
	elem__6: 78,
	elem__7: 100,
};

for (let key in obj__about) {
	if (obj__about.hasOwnProperty(key)) {
		gsap.timeline({
			scrollTrigger: {
				trigger: `#${key}`,
				start: "top center",
				end: "bottom bottom",
				markers: false,
				scrub: true,
				ease: Expo.easeOut,
			},
		}).to("#lines__p", { height: `${obj__about[key]}%` }, 0);
	}
}
