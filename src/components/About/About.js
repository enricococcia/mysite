import { useContext } from "react";
import LangContext from "../../store/lang-context";
import Card from "../UI/Card";
import InfoBox from "../UI/InfoBox";
import Progress from "../UI/Progress";
import SimpleTable from "../UI/SimpleTable";
import { personalData, personalDataIt } from "../../data/personal-data";
import { languagesData, languagesDataIt } from "../../data/languages-data";
import { localeData, localeDataIt } from "../../data/locale-data";

const About = () => {
	const langContext = useContext(LangContext);

	const dataInfo = [
		{
			id: "i1",
			title:
				langContext.lang === "en"
					? "personal information"
					: "informazioni personali",
			content: (
				<SimpleTable
					data={
						langContext.lang === "en"
							? personalData
							: personalDataIt
					}
				/>
			),
		},
		{
			id: "i2",
			title: langContext.lang === "en" ? "languages" : "lingue",
			content: (
				<Progress
					data={
						langContext.lang === "en"
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
				{langContext.lang === "en"
					? localeData.aboutPresentation
					: localeDataIt.aboutPresentation}
			</p>
			<hr className="divider" />
			<InfoBox data={dataInfo} />
		</Card>
	);
};

export default About;
