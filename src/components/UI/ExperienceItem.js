import BubbleItem from "./BubbleItem";
import classes from "./ExperienceItem.module.css";
import ScrollAnimation from "react-animate-on-scroll";

const ExperienceItem = (props) => {
	const { data } = props;

	return (
		<ScrollAnimation
			animateIn="pulse"
			duration={0.5}
			delay={0}
            animateOnce={true}
		>
			<div className={classes.experience}>
				<div className={classes.date}>
					<p>
						{data.dateStart} - {data.dateFinish}
					</p>
				</div>
				<div className={classes.experienceInfo}>
					<h3>{data.title}</h3>
					{data.logo && data.logo}
					<p className={classes.company}>{data.company} - {data.place}</p>
					<div className={classes.description}>{data.description}</div>
                    {data.url && <a className={classes.url} href={data.url} target="_blank" rel="noreferrer">Course link</a>}
					{data.skills.length > 0 && <BubbleItem data={data.skills} /> }
				</div>
			</div>
		</ScrollAnimation>
	);
};

export default ExperienceItem;
