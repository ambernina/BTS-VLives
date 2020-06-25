import React from "react";

const Dropdown = () => {
	return (
		<div className="dropdown">
			<button
				className="btn btn-info dropdown-toggle"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-expanded="false"
				// style={{backgroundColor: "#ffffff", color: "black"}}
			>
				Sort by...
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<li>
					<a className="dropdown-item" href="/">
						Action
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="/">
						Another action
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="/">
						Something else here
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Dropdown;
