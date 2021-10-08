import classes from "./InfoBox.module.css";

const InfoBox = (props) => {
	const { data } = props;

	let infoContent = <p>No data found</p>;

	if (data.length > 0) {
      
		infoContent = data.map((item) => {
			return (
				<div className={classes.infoBox} key={`ib-${item.id}`}>
					<p className={classes.title}>{item.title}</p>
					{item.content}
				</div>
			);
		});
	}

	return <div className={classes.infoBoxContainer}>{infoContent}</div>;
};

export default InfoBox;
