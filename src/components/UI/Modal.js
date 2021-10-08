import React from "react";
import Backdrop from "./Backdrop";
import classes from "./Modal.module.css";

const Modal = (props) => {
	return (
		<div>
			<Backdrop onClose={props.onClose} />
			<div>
				<div className={classes.modal}>
					<div className={classes.content}>
						<div
							className={classes.closeButton}
							onClick={props.onClose}
							role="button"
							tabIndex="0"
						>
							X
						</div>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
