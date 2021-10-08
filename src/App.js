import React from "react";
import LangProvider from "./store/lang-provider";
import Wrapper from "./components/Layout/Wrapper/Wrapper";
import Header from "./components/Layout/Header/Header";
import UserWidget from "./components/User/UserWidget";
import About from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layout/Footer/Footer";

const App = () => {
	return (
		<LangProvider>
			<div className="container" id="m1">
				<Header />
				<Wrapper>
					<UserWidget />
					<About />
					<Experiences />
					<Education />
					<Skills />
					<Clients />
					<Contact />
				</Wrapper>
				<Footer />
			</div>
		</LangProvider>
	);
};

export default App;
