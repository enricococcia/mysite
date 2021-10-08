import classes from "./BubbleItem.module.css";

const BubbleItem = (props) => {
	const { data } = props;

	let items = <p>No data found</p>;

	if (data.length > 0) {
		items = data.map((item, index) => {
			return <span className={item.level === "basic" ? classes.basic : ""} key={`${data.id}-b${index}`}>{item.title}{item.level === "basic" && "*"}</span>;
		});
	}

	return (
		<>
			<div className={classes.bubblesContainer}>{items}</div>
		</>
	);
};

export default BubbleItem;
