import { useContext } from "react";
import SettingsContext from "../../store/settings-context";
import Card from "../UI/Card";
import ExperienceItem from "../UI/ExperienceItem";
import { experiencesData, experiencesDataIt } from "../../data/experiences-data";
import { localeData, localeDataIt } from "../../data/locale-data";

const Experiences = () => {
	const settingsContext = useContext(SettingsContext);

	let experienceItems = <p>No data found</p>;

	const experienceDataItems =
		settingsContext.lang === "en" ? experiencesData : experiencesDataIt;

	if (experienceDataItems.length > 0) {
		experienceItems = experienceDataItems.map((item) => {
			return <ExperienceItem data={item} key={item.id} />;
		});
	}

	return (
		<Card id="m3">
			<h3 className="section-title">WORK EXPERIENCE</h3>
			<p className="section-description">
				{settingsContext.lang === "en"
					? localeData.experiencePresentation
					: localeDataIt.experiencePresentation}
			</p>
			{experienceItems}
		</Card>
	);
};

export default Experiences;
