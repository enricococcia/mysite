import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

if (
	window.location.hostname !== "localhost" &&
	window.location.hostname !== "127.0.0.1"
) {
	if (navigator.serviceWorker) {
		navigator.serviceWorker
			.register("/sw.js")
			.then(function (registration) {
				console.log(
					"ServiceWorker registration successful with scope:",
					registration.scope
				);
			})
			.catch(function (error) {
				console.log("ServiceWorker registration failed:", error);
			});
	}
}
