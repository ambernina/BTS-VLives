import React from "react";
// import Card from "./Card";
// import API from "../utils/API";

const MainContent = () => {
	// const [videos, setVideos] = useState([]);

	// useEffect(() => {
	// 	function loadVideos() {
	// 		API.getVideos()
	// 			.then(res => {
	// 				console.log("getVideos res", res);
	// 				setVideos(res.data);
	// 			})
	// 			.catch(err => console.log(err));
	// 	}
	// 	loadVideos();
	// });

	// console.log("videos", videos);

	return (
		<div className="row text-center">
				<h1
					style={{
						fontFamily: "'Montserrat', sans-serif",
						fontSize: "3em",
						fontWeight: "600"
					}}
				>
					EVERY
				</h1>
				<h1
					style={{
						fontFamily: "'Montserrat', sans-serif",
						fontSize: "3em",
						fontWeight: "400",
						fontStyle: "italic"
					}}
				>
					improptu
				</h1>
				<h1
					style={{
						fontFamily: "'Montserrat', sans-serif",
						fontSize: "4em",
						fontWeight: "700"
					}}
				>
					BTS{" "}
					<img
						src={require("../assets/images/VLive_LOGO.png")}
						style={{ height: "1.5em", marginBottom: "45px" }}
						alt="vlive_logo"
					/>{" "}
					ever
				</h1>
			</div>
		
	);
};

export default MainContent;
