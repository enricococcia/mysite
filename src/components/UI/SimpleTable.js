import classes from "./SimpleTable.module.css";

const SimpleTable = (props) => {
	const { data } = props;

	let dataTable;

	if (data.length > 0) {
		dataTable = data.map((item) => {
			let value = <p className={classes.value}>{item.value}</p>;
			if (item.url && item.url.includes("@")) {
				value = (
					<p className={classes.value}>
						<a href={`mailto:${item.url}`}>{item.value}</a>
					</p>
				);
			}
			if (item.url && !item.url.includes("@")) {
				value = (
					<p className={classes.value}>
						<a href={item.url}>{item.value}</a>
					</p>
				);
			}
			return (
				<div key={item.id}>
					<p className={classes.label}>{item.label}</p>
					{value}
				</div>
			);
		});
	} else {
		dataTable = <p>No data found.</p>;
	}

	return <div className={classes.gridTable}>{dataTable}</div>;
};

export default SimpleTable;
