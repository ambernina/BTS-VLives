import React from "react";

const Checkbox = (props) => {
	return (
		<div className="form-check">
			<input
				className="form-check-input"
				type="checkbox"
				id="flexCheckDefault"
			></input>
			<label className="form-check-label" for="flexCheckDefault">
				{props.label}
			</label>
		</div>
	);
};

export default Checkbox;
