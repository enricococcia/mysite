import { useContext } from "react";
import SettingsContext from "../../store/settings-context";
import classes from "./ContactForm.module.css";
import Button from "../UI/Button";
import useInput from "../../hooks/use-input";
import { validateEmail } from "../../helper/helper";

const ContactForm = (props) => {
	const settingsContext = useContext(SettingsContext);

	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetName,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput((value) => validateEmail(value));

	const {
		value: enteredMessage,
		isValid: enteredMessageIsValid,
		hasError: messageInputHasError,
		valueChangeHandler: messageChangeHandler,
		inputBlurHandler: messageBlurHandler,
		reset: resetMessage,
	} = useInput((value) => value.trim() !== "");

	const submitHandler = (event) => {
		event.preventDefault();
		if (!enteredNameIsValid || !enteredEmailIsValid || !enteredMessage) {
			return;
		}

		const dataToSave = {
			name: enteredName,
			email: enteredEmail,
			message: enteredMessage,
		};

		resetName();
		resetEmail();
		resetMessage();

		props.onSend(dataToSave);
	};

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
		formIsValid = true;
	}

	const validClass = classes.control;
	const invalidClass = `${classes.control} ${classes.invalid}`;

	const checkValidClass = (hasError) => {
		if (hasError) {
			return invalidClass;
		}
		return validClass;
	};

	let privacyButton = (
		<label className={classes.privacyPolicy} htmlFor="privacy">
			I've read and I accept the{" "}
			<span
				role="button"
				tabIndex="0"
				onClick={() => props.openModal(true)}
			>
				privacy policy
			</span>
		</label>
	);
	if (settingsContext.lang === "it") {
		privacyButton = (
			<label className={classes.privacyPolicy} htmlFor="privacy">
				Ho letto e accetto la{" "}
				<span
					role="button"
					tabIndex="0"
					onClick={() => props.openModal(true)}
				>
					privacy policy
				</span>
			</label>
		);
	}

	return (
		<>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={checkValidClass(nameInputHasError)}>
					<label htmlFor="name">
						{settingsContext.lang === "en" ? "Your Name" : "Nome"}*
					</label>
					<input
						type="text"
						id="name"
						value={enteredName}
						onChange={nameChangeHandler}
						onBlur={nameBlurHandler}
					/>
					{nameInputHasError && (
						<p>
							{settingsContext.lang === "en"
								? "Name must be not empty."
								: "Il campo nome è obbligatori.*"}
						</p>
					)}
				</div>
				<div className={checkValidClass(emailInputHasError)}>
					<label htmlFor="email">Email*</label>
					<input
						type="email"
						id="email"
						value={enteredEmail}
						onChange={emailChangeHandler}
						onBlur={emailBlurHandler}
					/>
					{emailInputHasError && (
						<p>
							{settingsContext.lang === "en"
								? "Please insert a valid email."
								: "Per favore inserisci una mail valida."}
						</p>
					)}
				</div>
				<div className={checkValidClass(messageInputHasError)}>
					<label htmlFor="message">
						{settingsContext.lang === "en" ? "Message" : "Messaggio"}*
					</label>
					<textarea
						id="message"
						value={enteredMessage}
						onChange={messageChangeHandler}
						onBlur={messageBlurHandler}
					/>
					{messageInputHasError && (
						<p>
							{settingsContext.lang === "en"
								? "Message field must be not empty."
								: "Il campo messaggio è obbligatorio."}
						</p>
					)}
				</div>
				<input type="checkbox" id="privacy" name="privacy" required />
				{privacyButton}
				{props.error && (
					<div className={classes.error}>{props.error.message}</div>
				)}
				{props.loading && <div className={classes.loader}></div>}
				{!props.loading && (
					<div className={classes.actions}>
						<Button
							disabled={!formIsValid}
							className={classes.submit}
							type="submit"
						>
							{settingsContext.lang === "en" ? "Send" : "Invia"}
						</Button>
					</div>
				)}
			</form>
		</>
	);
};

export default ContactForm;
