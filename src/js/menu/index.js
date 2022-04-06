$(".header__m").on("click", () => {
	$(".menu").removeClass("display-n");
	gsap.to($(".menu"), 0.1, {
		delay: 0.5,
		opacity: "1",
		ease: "Expo.easeInOut",
	});
	$("body").css("overflow", "hidden");
});

$(".menu__nav-c").on("click", () => {
	gsap.to($(".menu"), {
		delay: 0.3,
		opacity: "0",
		ease: "Expo.easeInOut",
	});
	setTimeout(() => {
		$(".menu").addClass("display-n");
		$("body").css("overflow", "visible");
	}, 1000);
});
