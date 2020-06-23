import React from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Header = () => {
	return (
		<div
			className="container"
			style={{ padding: "25px", background: "rgb(85,247,255)",
			background: "linear-gradient(180deg, rgba(85,247,255,1) 0%, rgba(255,255,255,1) 3%)" }}
		>
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
			<div className="container-fluid px-4">
				<div className="row align-items-start">
					<div className="col-sm-3 col-md-4 col-lg-2 border border-info" style={{background: "rgb(85,247,255)",
			background: "linear-gradient(180deg, rgba(85,247,255,1) 0%, rgba(255,255,255,1) 80%)"}}>
						<Sidebar />
					</div>
					<div className="col-sm-9 col-md-8 col-lg-10">
						<MainContent />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
