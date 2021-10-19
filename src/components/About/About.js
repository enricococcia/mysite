import { useContext } from "react";
import SettingsContext from "../../store/settings-context";
import Card from "../UI/Card";
import InfoBox from "../UI/InfoBox";
import Progress from "../UI/Progress";
import SimpleTable from "../UI/SimpleTable";
import { personalData, personalDataIt } from "../../data/personal-data";
import { languagesData, languagesDataIt } from "../../data/languages-data";
import { localeData, localeDataIt } from "../../data/locale-data";

const About = () => {
	const settingsContext = useContext(SettingsContext);

	const dataInfo = [
		{
			id: "i1",
			title:
				settingsContext.lang === "en"
					? "personal information"
					: "informazioni personali",
			content: (
				<SimpleTable
					data={
						settingsContext.lang === "en"
							? personalData
							: personalDataIt
					}
				/>
			),
		},
		{
			id: "i2",
			title: settingsContext.lang === "en" ? "languages" : "lingue",
			content: (
				<Progress
					data={
						settingsContext.lang === "en"
							? languagesData
							: languagesDataIt
					}
					maxValue={10}
				/>
			),
		},
	];

	return (
		<Card id="m2">
			<h3 className="section-title">ABOUT ME</h3>
			<p className="section-description">
				{settingsContext.lang === "en"
					? localeData.aboutPresentation
					: localeDataIt.aboutPresentation}
			</p>
			<hr className="divider" />
			<InfoBox data={dataInfo} />
		</Card>
	);
};

export default About;
