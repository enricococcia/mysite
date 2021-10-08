import classes from "./Card.module.css";
import ScrollAnimation from "react-animate-on-scroll";

const Card = (props) => {
	return (
		<section id={props.id || null}>
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
					{props.children}
				</div>
			</ScrollAnimation>
		</section>
	);
};

export default Card;
