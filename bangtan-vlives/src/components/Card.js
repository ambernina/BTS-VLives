import React, { useState, useEffect } from "react";
import { csv } from "d3";

const Card = () => {
	const [data, setData] = useState();

	useEffect(() => {
		csv(require("../assets/Bangtan-Impromptu-VLives.csv")).then(data => {
			console.log("csv data", data);
			setData(data);
		});
	}, []);

	// csvJSON();

	return (
		<>
			{!data ? (
				<div className="d-flex justify-content-center">
					<div className="spinner-border text-info" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			) : (
				data.map((video, i) => {
					return (
						<div
							className="card"
							style={{
								width: "15rem",
								paddingTop: "10px",
								marginLeft: "15px",
								marginBottom: "15px",
								display: "block"
							}}
							key={i + "-video"}
						>
							<img
								src={require("../assets/images/fake-love-sm.jpg")}
								className="card-img-top"
								alt="..."
								width="240px"
							></img>
							<div className="card-body">
								<h6 className="card-title">{video.Date}</h6>
								<h5 className="card-title">{video.Title}</h5>
								<p className="card-text">{video.Members}</p>
								<a href={video.Link} target="_blank" rel="noopener noreferrer">
									<button className="btn btn-outline-info">
										Watch on VLive
									</button>
								</a>
							</div>
						</div>
					);
				})
			)}
			{/* <div
				className="card"
				style={{
					width: "15rem",
					paddingTop: "10px",
					marginLeft: "15px",
					marginBottom: "15px",
					display: "block"
				}}
			>
				<img
					src="https://v-phinf.pstatic.net/20150802_15/143844152256871nNi_JPEG/531C04F3E30EF39C6CE3B33B13506AB3040_muploader_g_360P_640_1228_128_logo.jpg?type=ff340_189"
					className="card-img-top"
					alt="..."
					width="240px"
				></img>
				<div className="card-body jin">
					<h6 className="card-title">2015.08.01</h6>
					<h5 className="card-title">BTS Live in Brazil</h5>
					<p className="card-text">Jin</p>
					<a
						href="https://www.vlive.tv/video/1084"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="btn btn-outline-info">Watch on VLive</button>
					</a>
				</div>
			</div>
			<div
				className="card"
				style={{
					width: "15rem",
					paddingTop: "10px",
					marginLeft: "15px",
					marginBottom: "15px",
					display: "block"
				}}
			>
				<img
					src="https://v-phinf.pstatic.net/20150802_140/1438441762210xgE1C_JPEG/531C04F3E30EF39C6CE3F33513B06DB3843_muploader_e_360P_640_1228_128_logo.jpg?type=ff340_189"
					className="card-img-top"
					alt="..."
					width="240px"
				></img>
				<div className="card-body jimin jungkook jin">
					<h6 className="card-title">2015.08.01</h6>
					<h5 className="card-title">BTS Live in Brazil</h5>
					<p className="card-text">Jimin, Jungkook, Jin</p>
					<a
						href="https://www.vlive.tv/video/1089"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="btn btn-outline-info">Watch on VLive</button>
					</a>
				</div>
			</div>
			<div
				className="card"
				style={{
					width: "15rem",
					paddingTop: "10px",
					marginLeft: "15px",
					marginBottom: "15px",
					display: "block"
				}}
			>
				<img
					src="https://v-phinf.pstatic.net/20150803_209/1438578018793EnuIU_JPEG/upload_111111.jpg?type=ff340_189"
					className="card-img-top"
					alt="..."
					width="240px"
				></img>
				<div className="card-body jin yoongi hoseok namjoon jimin taehyung jungkook">
					<h6 className="card-title">2015.08.02</h6>
					<h5 className="card-title">BTS Live in Chile</h5>
					<p className="card-text">Jin, Suga, JHope, RM, Jimin, V, Jungkook</p>
					<a
						href="https://www.vlive.tv/video/1123"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="btn btn-outline-info">Watch on VLive</button>
					</a>
				</div>
			</div> */}
		</>
	);
};

export default Card;
