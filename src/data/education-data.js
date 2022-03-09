import logoUdemy from "../assets/images/logo-udemy.webp";
import logoUdacity from "../assets/images/logo-udacity.webp";
import logoCefi from "../assets/images/logo-cefi.webp";
import logoLabForWeb from "../assets/images/logo-labforweb.webp";

//English
export const educationData = [
    {
		id: "e0",
		title: "Javascript ES6",
		dateStart: (
			<span>
				Oct <strong>2021</strong>
			</span>
		),
		dateFinish: (
			<span>
				Nov <strong>2021</strong>
			</span>
		),
		company: "Udemy",
		place: "Online",
		url: "https://www.udemy.com/course/es6-bootcamp-next-generation-javascript",
		logo: <img src={logoUdemy} alt="Udemy" width="300" height="112" />,
		description: (
			<span>
				Accelereted ES6 Javascript Training.
				<ul className="standard-list small">
					<li>Syntax changes and Additions</li>
					<li>Modules and Classes</li>
					<li>Symbols</li>
					<li>Iterators and Generators</li>
					<li>Promises</li>
					<li>Maps and Sets</li>
					<li>and more...</li>
				</ul>
			</span>
		),
		skills: [],
	},
	{
		id: "e1",
		title: "React Native",
		dateStart: (
			<span>
				Mar <strong>2021</strong>
			</span>
		),
		dateFinish: (
			<span>
				Jun <strong>2021</strong>
			</span>
		),
		company: "Udemy",
		place: "Online",
		url: "https://www.udemy.com/course/the-complete-react-native-and-redux-course",
		logo: <img src={logoUdemy} alt="Udemy" width="300" height="112" />,
		description: (
			<span>
				Understand React Native with Hooks, Context, and React
				Navigation.
				<ul className="standard-list small">
					<li>React Native v0.62.2</li>
					<li>Hooks</li>
					<li>Context</li>
					<li>React Navigation</li>
					<li>Authentication</li>
					<li>Debug and Testing</li>
					<li>Expo</li>
					<li>and more...</li>
				</ul>
			</span>
		),
		skills: [],
	},
	{
		id: "e2",
		title: "React",
		dateStart: (
			<span>
				Feb <strong>2019</strong>
			</span>
		),
		dateFinish: (
			<span>
				Ago <strong>2019</strong>
			</span>
		),
		company: "Udemy",
		place: "Online",
		url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
		logo: <img src={logoUdemy} alt="Udemy" width="300" height="112" />,
		description: (
			<span>
				Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
				Redux, React Routing, Animations, Next.js
				<br />
				<ul className="standard-list small">
					<li>All the core basics</li>
					<li>Components, props &amp; dynamic data binding</li>
					<li>React Hooks</li>
					<li>
						Working with built-in Hooks and building custom Hooks
					</li>
					<li>
						Styling React apps with "Styled Components" and "CSS
						Modules"
					</li>
					<li>Working with "Fragments" &amp; "Portals"</li>
					<li>Dealing with side effects</li>
					<li>Class-based components and functional components</li>
					<li>
						Sending Http requests &amp; handling transitional states
						+ responses
					</li>
					<li>Redux &amp; Redux Toolkit</li>
					<li>Routing with React Router</li>
					<li>and more...</li>
				</ul>
			</span>
		),
		skills: [],
	},
	{
		id: "e3",
		title: "Web Accessibility by Google",
		dateStart: (
			<span>
				Jan <strong>2019</strong>
			</span>
		),
		dateFinish: (
			<span>
				Feb <strong>2019</strong>
			</span>
		),
		company: "Udacity",
		place: "Online",
		url: "https://www.udacity.com/course/web-accessibility--ud891",
		logo: <img src={logoUdacity} alt="Udacity" width="190" height="37" />,
		description: (
			<span>
				Learn how to build high quality websites and dynamic
				applications to create stunning user experiences for the web.
				<ul className="standard-list small">
					<li>
						Get a first look at the web accessibility guidelines
						(WAI – Web Accessibility Initiative).
					</li>
					<li>An exploration of focusable elements.</li>
					<li>Semantics</li>
					<li>ARIA</li>
					<li>Style</li>
					<li>and more...</li>
				</ul>
			</span>
		),
		skills: [],
	},
	{
		id: "e4",
		title: "Javascript & Jquery",
		dateStart: (
			<span>
				Mar <strong>2014</strong>
			</span>
		),
		dateFinish: (
			<span>
				Jun <strong>2014</strong>
			</span>
		),
		company: "LabForWeb srl",
		place: "Rome",
		url: "",
		logo: (
			<img
				src={logoLabForWeb}
				alt="LabForWeb srl"
				width="265"
				height="51"
			/>
		),
		description: (
			<span>
				Attendance to the Javascript / Jquery course at the
				LABFORtraining Training School of the company LABFORWEB srl.
				<br />
				<ul className="standard-list small">
					<li>Javascript/DOM</li>
					<li>Jquery</li>
					<li>Jquery UI</li>
					<li>Interactions e Widgets</li>
				</ul>
			</span>
		),
		skills: [],
	},
	{
		id: "e5",
		title: "PHP & Mysql",
		dateStart: (
			<span>
				Dec <strong>2013</strong>
			</span>
		),
		dateFinish: (
			<span>
				Mar <strong>2014</strong>
			</span>
		),
		company: "LabForWeb srl",
		place: "Rome",
		url: "",
		logo: (
			<img
				src={logoLabForWeb}
				alt="LabForWeb srl"
				width="265"
				height="51"
			/>
		),
		description: (
			<span>
				Attendance to the PHP/Mysql course at the LABFORtraining
				Training School of the company LABFORWEB srl.
				<br />
				<ul className="standard-list small">
					<li>
						Generalities on php language, syntax: variables,
						structures if, for, while, switch
					</li>
					<li>
						Functionality to maintain the status of the variables:
						$_GET, $_POST, $_SESSION, $_COOKIES
					</li>
					<li>Send email/newsletter via php</li>
					<li>
						User functions and native functions for string
						manipulation
					</li>
					<li>Access and manipulation of external files via PHP</li>
					<li>Access to external MYSQL DBs and data query via SQL</li>
					<li>
						Selecting and returning data to the client application
					</li>
					<li>
						Access to a user table through Login and password and
						encryption functions
					</li>
				</ul>
			</span>
		),
		skills: [],
	},
	{
		id: "e6",
		title: "Web Design & Web Master Base",
		dateStart: (
			<span>
				Feb <strong>2013</strong>
			</span>
		),
		dateFinish: (
			<span>
				Jul <strong>2013</strong>
			</span>
		),
		company: "Cefi Informatica srl",
		place: "Rome",
		url: "",
		logo: (
			<img
				src={logoCefi}
				alt="Cefi Informatica srl"
				width="180"
				height="40"
			/>
		),
		description: (
			<span>
				Attendance to the Web Design &amp; Web Master Base course at
				CEFI Informatica srl
				<br />
				<ul className="standard-list small">
					<li>HTML/HTML5</li>
					<li>
						Use of all the features of the editor for code creating
						Adobe Dreamweawer HTML
					</li>
					<li>CSS(Cascading Style Sheets)</li>
					<li>
						Use of all the features and accessories of the program
						for web graphics and advertising Adobe Photoshop
					</li>
					<li>Static page layout creation using Photoshop</li>
				</ul>
			</span>
		),
		skills: [],
	},
];

//Italian
export const educationDataIt = [
    {
		id: "e0",
		title: "Javascript ES6",
		dateStart: (
			<span>
				Ott <strong>2021</strong>
			</span>
		),
		dateFinish: (
			<span>
				Nov <strong>2021</strong>
			</span>
		),
		company: "Udemy",
		place: "Online",
		url: "https://www.udemy.com/course/es6-bootcamp-next-generation-javascript",
		logo: <img src={logoUdemy} alt="Udemy" width="300" height="112" />,
		description: (
			<span>
				Accelereted ES6 Javascript Training.
				<ul className="standard-list small">
					<li>Syntax changes and Additions</li>
					<li>Modules and Classes</li>
					<li>Symbols</li>
					<li>Iterators and Generators</li>
					<li>Promises</li>
					<li>Maps and Sets</li>
					<li>e tanto altro...</li>
				</ul>
			</span>
		),
		skills: [],
	},
	{
		id: "e1",
		title: "React Native",
		dateStart: (
			<span>
				Mar <strong>2021</strong>
			</span>
		),
		dateFinish: (
			<span>
				Giu <strong>2021</strong>
			</span>
		),
		company: "Udemy",
		place: "Online",
		url: "https://www.udemy.com/course/the-complete-react-native-and-redux-course",
		logo: <img src={logoUdemy} alt="Udemy" width="300" height="112" />,
		description: (
			<span>
				Corso completo su React Native con Hooks, Context e React
				Navigation.
				<ul className="standard-list small">
					<li>React Native v0.62.2</li>
					<li>Hooks</li>
					<li>Context</li>
					<li>React Navigation</li>
					<li>Authentication</li>
					<li>Debug and Testing</li>
					<li>Expo</li>
					<li>e tanto altro...</li>
				</ul>
			</span>
		),
		skills: [],
	},
	{
		id: "e2",
		title: "React",
		dateStart: (
			<span>
				Feb <strong>2019</strong>
			</span>
		),
		dateFinish: (
			<span>
				Ago <strong>2019</strong>
			</span>
		),
		company: "Udemy",
		place: "Online",
		url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
		logo: <img src={logoUdemy} alt="Udemy" width="300" height="112" />,
		description: (
			<span>
				Imparare React.js da zero! Il corso è comprensivo di Hooks,
				Redux, React Routing, Animations, Next.js
				<br />
				<ul className="standard-list small">
					<li>Tutti i concentti di base</li>
					<li>Components, props &amp; dynamic data binding</li>
					<li>React Hooks</li>
					<li>
						Lavorare con gli Hooks di default e costruire i propri
						custom Hooks
					</li>
					<li>
						Gestire lo stile dell'app React con "Styled Components"
						e "CSS Modules"
					</li>
					<li>Lavorare con i "Fragments" &amp; "Portals"</li>
					<li>Gestione dei side effects</li>
					<li>Componenti Class-based e functional components</li>
					<li>
						Inviare richieste Http &amp; gestione transitional
						states + responses
					</li>
					<li>Redux &amp; Redux Toolkit</li>
					<li>Routing con React Router</li>
					<li>e tanto altro...</li>
				</ul>
			</span>
		),
		skills: [],
	},
	{
		id: "e3",
		title: "Web Accessibility by Google",
		dateStart: (
			<span>
				Gen <strong>2019</strong>
			</span>
		),
		dateFinish: (
			<span>
				Feb <strong>2019</strong>
			</span>
		),
		company: "Udacity",
		place: "Online",
		url: "https://www.udacity.com/course/web-accessibility--ud891",
		logo: <img src={logoUdacity} alt="Udacity" width="190" height="37" />,
		description: (
			<span>
				Impara a costruire siti web di alta qualità e applicazioni
				dinamiche per creare esperience utente performanti per l'utente.
				<ul className="standard-list small">
					<li>
						Un primo sguardo alle linee guida per l'accessibilità
						(WAI – Web Accessibility Initiative).
					</li>
					<li>Uno studio su gli elementi con focus.</li>
					<li>Semantics</li>
					<li>ARIA</li>
					<li>Style</li>
					<li>e tanto altro...</li>
				</ul>
			</span>
		),
		skills: [],
	},
	{
		id: "e4",
		title: "Javascript & Jquery",
		dateStart: (
			<span>
				Mar <strong>2014</strong>
			</span>
		),
		dateFinish: (
			<span>
				Giu <strong>2014</strong>
			</span>
		),
		company: "LabForWeb srl",
		place: "Rome",
		url: "",
		logo: (
			<img
				src={logoLabForWeb}
				alt="LabForWeb srl"
				width="265"
				height="51"
			/>
		),
		description: (
			<span>
				Frequentazione con profitto del corso Javascript/Jquery presso
				la Scuola di Formazione LABFORtraining della società LABFORWEB
				srl.
				<br />
				<ul className="standard-list small">
					<li>Javascript/DOM</li>
					<li>Jquery</li>
					<li>Jquery UI</li>
					<li>Interazioni e Widgets</li>
				</ul>
			</span>
		),
		skills: [],
	},
	{
		id: "e5",
		title: "PHP & Mysql",
		dateStart: (
			<span>
				Dic <strong>2013</strong>
			</span>
		),
		dateFinish: (
			<span>
				Mar <strong>2014</strong>
			</span>
		),
		company: "LabForWeb srl",
		place: "Roma",
		url: "",
		logo: (
			<img
				src={logoLabForWeb}
				alt="LabForWeb srl"
				width="265"
				height="51"
			/>
		),
		description: (
			<span>
				Frequentazione con profitto del corso PHP/Mysql presso la Scuola
				di Formazione LABFORtraining della società LABFORWEB srl.
				<br />
				<ul className="standard-list small">
					<li>
						Generalità sul linguaggio php, sintassi: variabili,
						strutture if, for, while, switch
					</li>
					<li>
						Funzionalità per mantenere lo stato delle variabili:
						$_GET, $_POST, $_SESSION, $_COOKIES - Inviare
						email/newsletter tramite php
					</li>
					<li>
						Le funzioni utente e le funzioni native e per la
						manipolazione delle stringhe
					</li>
					<li>
						Accesso e manipolazione di file esterni, effettuare FTP
						tramite PHP
					</li>
					<li>
						L'accesso a DB esterni MYSQL e Interrogazione di dati
						tramite SQL
					</li>
					<li>
						Query di selezione e restituzione di dati
						all'applicazione client
					</li>
					<li>
						Accesso ad una tabella utenti tramite Login e password e
						funzioni di criptazione
					</li>
				</ul>
			</span>
		),
		skills: [],
	},
	{
		id: "e6",
		title: "Web Design & Web Master Base",
		dateStart: (
			<span>
				Feb <strong>2013</strong>
			</span>
		),
		dateFinish: (
			<span>
				Lug <strong>2013</strong>
			</span>
		),
		company: "Cefi Informatica srl",
		place: "Roma",
		url: "",
		logo: (
			<img
				src={logoCefi}
				alt="Cefi Informatica srl"
				width="180"
				height="40"
			/>
		),
		description: (
			<span>
				Frequentazione con profitto del corso Web Design &amp; Web
				Master Base course presso CEFI Informatica srl.
				<br />
				<ul className="standard-list small">
					<li>HTML/HTML5</li>
					<li>
						Utilizzo di tutte le funzionalità del editor per la
						creazione codice HTML Adobe Dreamweawer
					</li>
					<li>CSS(Fogli di stile)</li>
					<li>
						Utilizzo di tutte le funzionalità e degli accessori del
						programma per grafica web e pubblicitaria Adobe
						Photoshop
					</li>
					<li>Creare layouts di pagina statici con Photoshop</li>
				</ul>
			</span>
		),
		skills: [],
	},
];
