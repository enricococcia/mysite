import { useState, useContext } from "react";
import LangContext from "../../store/lang-context";
import ContactForm from "./ContactForm";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import useHttp from "../../hooks/use-http";
import { privacyData, privacyDataIt } from "../../data/privacy-data";
import { localeData, localeDataIt } from "../../data/locale-data";

const Contact = () => {
	const langContext = useContext(LangContext);

	const { isLoading, error, sendRequest: sendMessageRequest } = useHttp();

	const [isPrivacyModalOpened, setPrivacyModalOpened] = useState(false);

	const sendMessageHandler = async (dataForm) => {
		sendMessageRequest({
			url: "https://www.enricococcia.com/app/api/user/contact.php",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: { text: dataForm },
		});
	};

	const toggleModalHandler = (val) => {
		setPrivacyModalOpened(val);
	};

	return (
		<Card id="m7">
			<h3 className="section-title">CONTACT ME</h3>
			<p className="section-description">
				{langContext.lang === "en"
					? localeData.contactPresentation
					: localeDataIt.contactPresentation}
			</p>

			<ContactForm
				error={error}
				onSend={sendMessageHandler}
				loading={isLoading}
				openModal={toggleModalHandler}
			/>

			{isPrivacyModalOpened && (
				<Modal onClose={() => toggleModalHandler(false)}>
					<h3>Privacy Policy</h3>
					{langContext.lang === "en" ? privacyData : privacyDataIt}
				</Modal>
			)}
		</Card>
	);
};

export default Contact;
