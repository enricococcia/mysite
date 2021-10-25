import { useState } from "react";
import classes from "./Menu.module.css";
import { executeScroll } from "../../../util/util";
import { menuData } from "../../../data/menu-data";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Backdrop from "../../UI/Backdrop";

const Menu = () => {
	const [isMenuMobileOpened, setMenuMobileOpened] = useState(false);

	const toggleMenuHandler = () => {
		if (window.innerWidth < 992) {
			setMenuMobileOpened(!isMenuMobileOpened);
		} else {
			setMenuMobileOpened(false);
		}
	};

	let menuClasses = classes.menu;
	let toggleMenuClasses = classes.toggleMenu;
	if (isMenuMobileOpened) {
		menuClasses = `${classes.menu} ${classes.open}`;
		toggleMenuClasses = `${classes.toggleMenu} ${classes.open}`;
	}

	return (
		<>
			<div className={toggleMenuClasses} onClick={toggleMenuHandler}>
				<GiHamburgerMenu className={classes.iconOpenMenu} />
			</div>

			{isMenuMobileOpened && (
				<Backdrop
					onClose={toggleMenuHandler}
					className={classes.backdropMobile}
				></Backdrop>
			)}
			<nav>
				<ul className={menuClasses}>
					<li className={classes.closeMobile}>
						<span
							role="button"
							tabIndex="0"
                            aria-label="Close Menu mobile"
							onClick={toggleMenuHandler}
						>
							<GrClose className={classes.iconCloseMenu} />
						</span>
					</li>
					{menuData.map((item) => {
						return (
							<li key={item.id}>
								<span
									onClick={() =>
										executeScroll(
											item.id,
											toggleMenuHandler
										)
									}
									onKeyPress={() =>
										executeScroll(
											item.id,
											toggleMenuHandler
										)
									}
									role="link"
									tabIndex="0"
								>
									{item.title}
								</span>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};

export default Menu;
