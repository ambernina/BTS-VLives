import React from "react";
import Checkbox from "./Checkbox";
// import {
// 	CheckboxFilter,
// 	TermQuery,
// 	BoolMust,
// 	RangeQuery
// } from "searchkit";

const Sidebar = () => {
	

	// const filter = () => {
		// if (cardText.includes('RM')) {
		// 	document.querySelectorAll('card-text').parentNode.style("display", "show");
		// }
	// }

	return (
		<form>
			<div className="mb-3" style={{ padding: "10px"}}>
        <h4>Filters | Search</h4>
        <br/>
        <h6>Search by Title</h6>
        <input className="form-control" type="text" placeholder="Default input" aria-label="default input example"/>
        <br/>
				{/* <CheckboxFilter id="RM" title="Members" label="RM" filter={TermQuery("card-text", 'RM')} /> */}
        <h6>Members</h6>
				<Checkbox label="RM" />
				<Checkbox label="Jin" />
				<Checkbox label="Suga" />
				<Checkbox label="JHope" />
				<Checkbox label="Jimin" />
				<Checkbox label="V" />
				<Checkbox label="Jungkook" />
        <br/>
        <h6>Year</h6>
				<Checkbox label="2015" />
				<Checkbox label="2016" />
				<Checkbox label="2017" />
				<Checkbox label="2018" />
				<Checkbox label="2019" />
				<Checkbox label="2020" />
			</div>
		</form>
	);
};

export default Sidebar;
