import { useContext, useEffect } from "react";
import SettingsContext from "../../store/settings-context";
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

	const settingsContext = useContext(SettingsContext);
	const changeLanguageHandler = (event) => {
		settingsContext.selectLang(event.target.value);
	};

	const changeModeHandler = (event) => {
		settingsContext.selectMode(event.target.value);
	};

	useEffect(() => {
		document.body.className = "";
		document.body.classList.add("pippo");
		document.body.classList.add(settingsContext.mode);
	}, [settingsContext.mode]);

	return (
		<div className={classes.widgetContainer}>
			<div className={widgetClass}>
				<div className={classes.widgetInfo}>

					<img
						src={profileImg}
						className={classes.avatar}
						alt="Enrico Coccia"
						width="390"
						height="390"
					/>
					<h4 className={classes.name}>Enrico Coccia</h4>
					<h2 className={classes.businessName}>
						Front End Developer
					</h2>
				</div>
				<div className={classes.widgetActions}>
                    <div className={classes.widgetSelect}>
                        {
                            <select
                                id="select-mode"
                                className={classes.modeSelect}
                                aria-label="Select mode"
                                onChange={changeModeHandler}
                                defaultValue={settingsContext.mode}
                            >
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        }
                        {
                            <select
                                id="select-language"
                                className={classes.langSelect}
                                aria-label="Select language"
                                onChange={changeLanguageHandler}
                                defaultValue={settingsContext.lang}
                            >
                                <option value="en">English</option>
                                <option value="it">Italiano</option>
                            </select>
                        }
                    </div>
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
							{settingsContext.lang === "en"
								? "Download Resume"
								: "Download Curriculum"}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserWidget;
