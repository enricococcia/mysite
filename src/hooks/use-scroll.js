import { useState, useEffect } from "react";

const useScroll = () => {
	const [scroll, setScroll] = useState(0);
    const [scrollToTop, setScrollToTop] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
            setScrollToTop(window.scrollY > 550);
		});
	}, []);

	return {scroll,scrollToTop};
};

export default useScroll;
