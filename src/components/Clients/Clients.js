import { useContext } from "react";
import LangContext from "../../store/lang-context";
import Card from "../UI/Card";
import classes from "./Clients.module.css";
import { clientsData } from "../../data/clients-data";
import { localeData, localeDataIt } from "../../data/locale-data";

const Clients = () => {
	const langContext = useContext(LangContext);

	let contentClients = <p>No data found</p>;

	if (clientsData.length > 0) {
		contentClients = clientsData.map((item) => {
			return (
				<span key={item.id}>
					<img
						src={item.image}
						alt={item.title}
						width="211"
						height="84"
					/>
				</span>
			);
		});
	}

	return (
		<Card id="m6">
			<h3 className="section-title">CLIENTS</h3>
			<p className="section-description">
				{langContext.lang === "en"
					? localeData.clientsPresentation
					: localeDataIt.clientsPresentation}
			</p>
			<div className={classes.clientsContainer}>{contentClients}</div>
		</Card>
	);
};

export default Clients;
