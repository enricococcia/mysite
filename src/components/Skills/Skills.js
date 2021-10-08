import { useContext } from "react";
import LangContext from "../../store/lang-context";
import Card from "../UI/Card";
import InfoBox from "../UI/InfoBox";
import BubbleItem from "../UI/BubbleItem";
import { skillsData } from "../../data/skills-data";
import { technologiesData } from "../../data/technologies-data";
import { localeData, localeDataIt } from "../../data/locale-data";

const Skills = () => {
	const langContext = useContext(LangContext);

	const contentSkills = skillsData.map((item) => {
		return <li key={item.id}>{item.title}</li>;
	});

	const dataInfo = [
		{
			id: "i3",
			title: "skills",
			content: <ul className="standard-list">{contentSkills}</ul>,
		},
		{
			id: "i4",
			title: langContext.lang === "en" ? "technologies" : "tecnologie",
			content: <BubbleItem data={technologiesData} />,
		},
	];

	return (
		<Card id="m5">
			<h3 className="section-title">SKILLS</h3>
			<p className="section-description">
				{langContext.lang === "en"
					? localeData.skillsPresentation
					: localeDataIt.skillsPresentation}
			</p>
			<hr className="divider" />
			<InfoBox data={dataInfo} />
		</Card>
	);
};

export default Skills;
