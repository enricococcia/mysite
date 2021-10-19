import { useContext } from "react";
import SettingsContext from "../../store/settings-context";
import Card from "../UI/Card";
import ExperienceItem from "../UI/ExperienceItem";
import { educationData, educationDataIt } from "../../data/education-data";
import { localeData, localeDataIt } from "../../data/locale-data";

const Education = () => {
	const settingsContext = useContext(SettingsContext);

	let educationItems = <p>No data found</p>;

	const educationDataItems =
		settingsContext.lang === "en" ? educationData : educationDataIt;

	if (educationDataItems.length > 0) {
		educationItems = educationDataItems.map((item) => {
			return <ExperienceItem data={item} key={item.id} />;
		});
	}

	return (
		<Card id="m4">
			<h3 className="section-title">EDUCATION</h3>
			<p className="section-description">
				{settingsContext.lang === "en"
					? localeData.educationPresentation
					: localeDataIt.educationPresentation}
			</p>
			{educationItems}
		</Card>
	);
};

export default Education;
