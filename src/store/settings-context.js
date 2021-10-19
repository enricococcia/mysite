import React from "react";

const SettingsContext = React.createContext({
	lang: "en",
    mode: "light",
	selectLang: () => {},
	selectMode: () => {},
});


export default SettingsContext;
