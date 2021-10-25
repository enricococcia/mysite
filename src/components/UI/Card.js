import classes from "./Card.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "./Button";
import { executeScroll } from "../../util/util";
import { RiArrowUpSLine } from "react-icons/ri";

const Card = (props) => {
	return (
		<section id={props.id || null} tabIndex="-1">
			<ScrollAnimation
				animateIn="fadeInUp"
				duration={0.5}
				delay={0}
				animateOnce={true}
			>
				<div
					className={`${classes.card} ${
						props.className ? props.className : ""
					}`}
				>
					{props.id !== "m2" ? (
                        <ScrollAnimation
                            animateIn='bounceInRight'
                            initiallyVisible={true}
                            animateOnce={true}
                        >
                            <Button
                                onClick={() => executeScroll("m1")}
                                onKeyPress={() => executeScroll("m1")}
                                aria-label="Back to menu"
                                className={classes.scrollToTopCard}
                            >
                                <RiArrowUpSLine />
                            </Button>
                        </ScrollAnimation>
					) : null}

					{props.children}
				</div>
			</ScrollAnimation>
		</section>
	);
};

export default Card;
