export const executeScroll = (el, callback) => {
	const element = document.getElementById(el);
	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
		if (callback) {
			callback();
		}
	}
};
