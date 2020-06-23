import React from "react";
import Card from "./Card";
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
		<div className="row">
			<Card />
		</div>
	);
};

export default MainContent;
