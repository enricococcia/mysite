import React from "react";

const LangContext = React.createContext({
	lang: "en",
	selectLang: () => {},
});


export default LangContext;
