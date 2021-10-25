export const executeScroll = (el, callback) => {
	const element = document.getElementById(el);
	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
        console.log(element);
        element.focus({preventScroll: true});
		if (callback) {
			callback();
		}
	}
};
