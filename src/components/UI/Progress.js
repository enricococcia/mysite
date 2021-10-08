import classes from "./Progress.module.css";

const Progress = (props) => {
	const { data, maxValue } = props;

	let dataProgress;

	if (data.length > 0) {
		dataProgress = data.map((item, index) => {
			let bulletProgress = [];

			for (let i = 1; ; i++) {
				let bulletClasses = classes.bullet;
				if (i <= item.value) {
					bulletClasses = `${classes.bullet} ${classes.fill}`;
				}
				bulletProgress.push({ classes: bulletClasses, key: i });
				if (i >= maxValue) break;
			}

			const bulletContent = bulletProgress.map((item) => {
				return (
					<span className={item.classes} key={item.key}>
						&nbsp;
					</span>
				);
			});

			return (
				<div
					className={classes.progress}
					role="progressbar"
					key={item.id}
                    aria-valuemin="0"
                    aria-valuenow={item.value}
                    aria-valuemax={maxValue}
                    aria-label={`Language ${item.title}`}
				>
					<p className={classes.title}>{item.title}</p>
					<div className={classes.progressBar}>{bulletContent}</div>
					<p className={classes.description}>{item.description}</p>
				</div>
			);
		});
	} else {
		dataProgress = <p>No data found.</p>;
	}

	return <div>{dataProgress}</div>;
};

export default Progress;
