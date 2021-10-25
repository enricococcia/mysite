import useScroll from "../../../hooks/use-scroll";
import { executeScroll } from "../../../util/util";
import classes from "./Footer.module.css";
import { BackgroundShapes } from "../../../assets/svg/BackgroundShapes";
import { RiArrowUpSLine } from "react-icons/ri";

const Footer = () => {

	const isScrolledObg = useScroll();
    const isScrolled = isScrolledObg.scrollToTop;
	let scrollToTopClass = classes.scrollToTop;
	if (isScrolled) {
		scrollToTopClass = `${classes.scrollToTop} ${classes.visible}`;
	}

	return (
		<>
			<footer className={classes.footer}>
				<p>Enrico Coccia Resume @ All Rights Reserved 2021</p>
			</footer>
			<div
				onClick={() => executeScroll("m1")}
                onKeyPress={() => executeScroll("m1")}
				role="link"
				tabIndex="0"
                aria-label="Scroll to top"
                className={scrollToTopClass}
			>
				<RiArrowUpSLine />
			</div>
			<BackgroundShapes />
		</>
	);
};

export default Footer;
