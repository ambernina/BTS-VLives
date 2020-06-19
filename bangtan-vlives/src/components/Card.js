import React from "react";

const Card = () => {
	return (
		<div className="card" style={{ width: "15rem", paddingTop: "10px", marginLeft: "15px", marginBottom: "15px" }}>
			<img
				src={require("../assets/images/fake-love-sm.jpg")}
				className="card-img-top"
				alt="..."
			></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
				<a href="https://www.twitter.com/BTS_twt" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-outline-info">
            Go somewhere</button>
				</a>
			</div>
		</div>
	);
};

export default Card;