import nextId from "react-id-generator";
//English
export const personalData = [
	{ id: nextId("p"), label: "Full Name", value: "Enrico Coccia", url: null },
	{
		id: nextId("p"),
		label: "Date of Birthday",
		value: "10 Aug 1990",
		url: null,
	},
	{ id: nextId("p"), label: "Address", value: "00155, Italy, Rome", url: null },
	{
		id: nextId("p"),
		label: "Email",
		value: "enrico.c90@gmail.com",
		url: "enrico.c90@gmail.com",
	},
	{ id: nextId("p"), label: "Phone", value: "+39 3470709850", url: null },
];

//Italian
export const personalDataIt = [
	{ id: nextId("p"), label: "Bome", value: "Enrico Coccia", url: null },
	{
		id: nextId("p"),
		label: "Data di nascita",
		value: "10 Ago 1990",
		url: null,
	},
	{ id: nextId("p"), label: "Indirizzo", value: "Roma, 00155, Italia", url: null },
	{
		id: nextId("p"),
		label: "Email",
		value: "enrico.c90@gmail.com",
		url: "enrico.c90@gmail.com",
	},
	{ id: nextId("p"), label: "Telefono", value: "+39 3470709850", url: null },
];
