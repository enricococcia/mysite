import React, { useReducer } from "react";
import SettingsContext from "./settings-context";

const defaultSettingsState = {
	lang: localStorage.getItem("lang") || "en",
	mode: (localStorage.getItem("mode") !== null ? localStorage.getItem("mode") : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")),
};

const settingsReducer = (state, action) => {
	if (action.type === "SELECT_LANG") {
		localStorage.setItem("lang", action.lang);
		return {
			lang: action.lang,
			mode: state.mode,
		};
	}
	if (action.type === "SELECT_MODE") {
		localStorage.setItem("mode", action.mode);
		return {
			lang: state.lang,
			mode: action.mode,
		};
	}

	return defaultSettingsState;
};

const SettingsProvider = (props) => {
	const [settingsState, dispatchSettingsAction] = useReducer(
		settingsReducer,
		defaultSettingsState
	);

	const selectLangHandler = (lang) => {
		dispatchSettingsAction({
			type: "SELECT_LANG",
			lang: lang,
		});
	};

	const selectModeHandler = (mode) => {
		dispatchSettingsAction({
			type: "SELECT_MODE",
			mode: mode,
		});
	};

	const settingsContext = {
		lang: settingsState.lang,
		mode: settingsState.mode,
		selectLang: selectLangHandler,
		selectMode: selectModeHandler,
	};

	return (
		<SettingsContext.Provider value={settingsContext}>
			{props.children}
		</SettingsContext.Provider>
	);
};

export default SettingsProvider;
