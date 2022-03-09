import nextId from "react-id-generator";
import ares118Image from "../assets/images/clients/ares118.webp";
import bulgariImage from "../assets/images/clients/bulgari.webp";
import cadburyImage from "../assets/images/clients/cadbury.webp";
import chiccoImage from "../assets/images/clients/chicco.webp";
import cocaColaImage from "../assets/images/clients/coca-cola.webp";
import exxonImage from "../assets/images/clients/exxon.webp";
import colgateImage from "../assets/images/clients/colgate.webp";
import linesImage from "../assets/images/clients/lines.webp";
import mercedesImage from "../assets/images/clients/mercedes.webp";
import paypalImage from "../assets/images/clients/paypal.webp";
import pompeaImage from "../assets/images/clients/pompea.webp";
import rovagnatiImage from "../assets/images/clients/rovagnati.webp";
import mellinImage from "../assets/images/clients/mellin.webp";
import nutrishoppingImage from "../assets/images/clients/nutrishopping.webp";

export const clientsData = [
	{ id: nextId("c"), title: "Bulgari Hotels", image: bulgariImage },
	{ id: nextId("c"), title: "Chicco", image: chiccoImage },
    { id: nextId("c"), title: "Coca Cola", image: cocaColaImage },
    { id: nextId("c"), title: "Pay Pal", image: paypalImage },
    { id: nextId("c"), title: "Mercedes", image: mercedesImage },
    { id: nextId("c"), title: "Colgate", image: colgateImage },
    { id: nextId("c"), title: "Cadbury", image: cadburyImage },
    { id: nextId("c"), title: "Pompea", image: pompeaImage },
    { id: nextId("c"), title: "Rovagnati", image: rovagnatiImage },
    { id: nextId("c"), title: "Lines", image: linesImage },
    { id: nextId("c"), title: "Exxon Mobil", image: exxonImage },
    { id: nextId("c"), title: "Ares 118", image: ares118Image },
    { id: nextId("c"), title: "Mellin", image: mellinImage },
    { id: nextId("c"), title: "Nutrishopping", image: nutrishoppingImage },
];
