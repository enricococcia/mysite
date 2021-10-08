import React, { useReducer } from "react";
import LangContext from "./lang-context";

const defaultLangState = {
	lang: localStorage.getItem("lang") || "en" ,
};

const langReducer = (state, action) => {
	if (action.type === "SELECT") {
        localStorage.setItem("lang", action.lang);
		return {
			lang: action.lang,
		};
	}

	return defaultLangState;
};

const LangProvider = (props) => {
	const [langState, dispatchLangAction] = useReducer(
		langReducer,
		defaultLangState
	);

	const selectLangHandler = (lang) => {
		dispatchLangAction({
			type: "SELECT",
			lang: lang,
		});
	};

	const langContext = {
		lang: langState.lang,
		selectLang: selectLangHandler,
	};

	return (
		<LangContext.Provider value={langContext}>
			{props.children}
		</LangContext.Provider>
	);
};

export default LangProvider;
