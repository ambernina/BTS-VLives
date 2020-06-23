import React from "react";

const Header = () => {
	return (
		<div className="container" style={{ padding: "25px", backgroundColor: "#55f7ff", marginBottom: "45px" }}>
			<div className="row text-center">
				<h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "3em", fontWeight: "600" }}>
					EVERY
				</h1>
				<h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "3em", fontWeight: "400", fontStyle: "italic" }}>
					improptu
				</h1>
				<h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "4em", fontWeight: "700" }}>
					BTS <img src={require("../assets/images/VLive_LOGO.png")} style={{height: "1.5em"}} alt="vlive_logo" /> ever
				</h1>
			</div>
		</div>
	);
};

export default Header;
