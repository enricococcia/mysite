import { useContext } from "react";
import LangContext from "../../store/lang-context";
import useScroll from "../../hooks/use-scroll";
import Button from "../UI/Button";
import classes from "./UserWidget.module.css";
import profileImg from "../../assets/images/profile.webp";
import { FaLinkedinIn, FaGithubAlt, FaDownload } from "react-icons/fa";

const UserWidget = () => {
	const isScrolledObg = useScroll();
	const isScrolled = isScrolledObg.scroll;
	let widgetClass = classes.widget;
	if (isScrolled) {
		widgetClass = `${classes.widget} ${classes.sticky}`;
	}

	const langContext = useContext(LangContext);
	const changeLanguageHandler = (event) => {
		langContext.selectLang(event.target.value);
	};

	return (
		<div className={classes.widgetContainer}>
			<div className={widgetClass}>
				<div className={classes.widgetInfo}>
					<img
						src={profileImg}
						className={classes.avatar}
						alt="Enrico Coccia"
						width="242"
						height="242"
					/>
					<h4 className={classes.name}>Enrico Coccia</h4>
					<h2 className={classes.businessName}>
						Front End Developer
					</h2>
				</div>
				<div className={classes.widgetActions}>
					<a
						href="https://github.com/enricococcia"
						rel="noreferrer"
						target="_blank"
						title="GitHub Profile"
					>
						<FaGithubAlt />
					</a>
					<a
						href="https://www.linkedin.com/in/enrico-coccia-a09615172/"
						rel="noreferrer"
						target="_blank"
						title="LinkedIn Profile"
					>
						<FaLinkedinIn />
					</a>
                    <a
						href="https://github.com/enricococcia/mysite"
						rel="noreferrer"
						target="_blank"
						title="Download Site Code"
					>
						<FaDownload />
					</a>
					<div>
						<Button
							onClick={() =>
								window.open(
									"https://www.enricococcia.com/resume.zip",
									"_blank"
								)
							}
						>
							{langContext.lang === "en"
								? "Download Resume"
								: "Download Curriculum"}
						</Button>
					</div>
					{
						<select
							id="select-language"
							aria-label="Select language"
							onChange={changeLanguageHandler}
							defaultValue={langContext.lang}
						>
							<option value="en">English</option>
							<option value="it">Italiano</option>
						</select>
					}
				</div>
			</div>
		</div>
	);
};

export default UserWidget;
