import React from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

const portalElement = document.getElementById("overlay-root");

const Backdrop = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<div className={`${classes.backdrop} ${props.className}`} onClick={props.onClose}>{props.children}</div>,
				portalElement
			)}
		
		</>
	);
};

export default Backdrop;
