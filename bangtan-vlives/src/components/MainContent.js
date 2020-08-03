import React, { useState, useEffect } from "react";
import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Checkbox from "./Checkbox";
// import Dropdown from "./Dropdown";
// import Card from "./Card";
import data from "../assets/Bangtan-Impromptu-VLives.js";

// notes for next time
// so I think what's happening is that the filtering is always one character behind whatever is typed, which could be what is causing some of the searches to require typing a space after to get proper results (this is because setting state is an async function)
// instead of having setSearch trigger as soon as the user types maybe I should add a filter results button?
// setSearch for checkboxes is filling in the input since that is set to show search, maybe set the e.target.value to a different state thing?
// for RM and V the filter doesn't trigger till a space is added to the search box, even for the checkboxes, but then it doesn't show some results that may not have a space after
// date filters not working propery at all, may need to make a different search function for those (format date different?)
// will need to figure out how to search when multiple checkboxes are checked
// for some reason when searching for jin it comes up with a couple videos that are jimin related, until a space is added after "jin". Maybe a filter results button will fix that?

// so I tried a submit button but it broke the filtering true or false so it doesn't clear the filtered array when you delete all characters
// it also required changing every onChange to an onSubmit but then when submit was triggered it refreshed the page instead of searching
// so getting the checkboxes to filter dynamically is going to be a challenge... maybe make another useState with an empty array and push the value of the checkbox into that array, so if there is more than one checkbox checked it will include all of them, but it should include everything in the array instead of just anything in it

// TRY CHANGING SEARCH TO CONTEXT? OR HOW YOU SET UP THE SEARCH WITH ITSABRIBE

const MainContent = () => {
	const [inSearch, setinSearch] = useState("");
	// const [checkSearch, setCheckSearch] = useState("");
	const [filtered, setFiltered] = useState([]);
	const [result, setResult] = useState([]);
	const [isFiltered, setIsFiltered] = useState(false);
	// const [checks, setChecks] = useState([]);

	useEffect(() => {
		setResult(data);
	}, []);
	// console.log("search", inSearch);
	// console.log("before result", result);

	const inputSearch = () => {
		setFiltered(
			result.filter(value => {
				return value.Title.toLowerCase().includes(inSearch.toLowerCase());
			})
		);
		console.log("filtered", filtered);
	};

	// const checkboxSearch = (e) => {
	// 	setIsFiltered(true);

	// 	if (!checks.includes(e)) {
	// 		setChecks([...checks, e])
	// 	} 
	// 	console.log("checks", checks)
	// 	setFiltered(
	// 		result.filter(value => {
	// 			return (
	// 				value.Members.includes(checks) ||
	// 				value.Date.includes(checks)
	// 			);
	// 		})
	// 	);
	// 	console.log("filtered", filtered);
	// };

	// change checkboxes to a switch case like in the sorting fuction of its a bribe

	// const handleChange = () => {
	// 	// if (e.target.type === "checkbox") {
	// 	// 	checkboxSearch();
	// 	// } else {
	// 		inputSearch();
	// 	// }
	// };

	return (
		<div
			className="container"
			style={{
				padding: "25px",
				// background: "rgb(85,247,255)",
				background:
					"linear-gradient(180deg, rgba(85,247,255,1) 0%, rgba(255,255,255,1) 10%)",
				height: "22130px"
			}}
		>
			<Header />
			<div className="container-fluid px-4">
				{/* <div className="row align-items-start"> */}
				<div className="row">
					{/* Sidebar */}
					{/* <div
						className="col-sm-6 col-md-4 col-lg-3 border border-info"
						style={{
							// background: "rgb(85,247,255)",
							background:
								"linear-gradient(0deg, rgba(85,247,255,1) 0%, rgba(255,255,255,1) 80%)"
						}}
					> */}
						<form>
							<div className="mb-3" style={{ padding: "10px" }}>
								{/* <h4>Filters | Search</h4>
								<br /> */}
								{/* <h6>Sort by...</h6> */}
								{/* <Dropdown /> */}
								{/* <br /> */}
								<h6>Search by Title</h6>
								<input
									className="form-control"
									type="text"
									placeholder="Search by title..."
									value={inSearch || ""}
									aria-label="default input example"
									// ref={searchRef}
									// onChange={handleChange}
									onChange={e => {
										inputSearch();
										if (e.target.value === "") {
											setIsFiltered(false);
										} else {
											setIsFiltered(true);
										}
										setinSearch(e.target.value);
									}}
								/>
								<br />
								{/* <h6>Members</h6>
								<Checkbox
									value="RM"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/>
								<Checkbox
									value="Jin"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/>
								<Checkbox
									value="Suga"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/>
								<Checkbox
									value="JHope"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/>
								<Checkbox
									value="Jimin"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/>
								<Checkbox
									value="V"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/>
								<Checkbox
									value="Jungkook"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/>
								<br />
								<h6>Year</h6>
								<Checkbox
									value="2015"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/>
								<Checkbox
									value="2016"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/>
								<Checkbox
									value="2017"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/>
								<Checkbox
									value="2018"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/>
								<Checkbox
									value="2019"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/>
								<Checkbox
									value="2020"
									onChange={e => {
										setCheckSearch(e.target.value);
										checkboxSearch(e.target.value);
									}}
								/> */}
							</div>
						</form>
					{/* </div> */}
					{/* <div className="col-sm-6 col-md-8 col-lg-9"> */}
						<div className="row justify-content-center">
							{!isFiltered
								? result.map((video, i) => {
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
													src={video.Thumb}
													className="card-img-top"
													alt="..."
													width="240px"
												></img>
												<div className="card-body">
													<h6 className="card-title">{video.Date}</h6>
													<h5 className="card-title">{video.Title}</h5>
													<p className="card-text">{video.Members}</p>
													<a
														href={video.Link}
														target="_blank"
														rel="noopener noreferrer"
													>
														<button className="btn btn-outline-info">
															Watch on VLive
														</button>
													</a>
												</div>
											</div>
										);
								  })
								: filtered.map((video, i) => {
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
													src={video.Thumb}
													className="card-img-top"
													alt="..."
													width="240px"
												></img>
												<div className="card-body">
													<h6 className="card-title">{video.Date}</h6>
													<h5 className="card-title">{video.Title}</h5>
													<p className="card-text">{video.Members}</p>
													<a
														href={video.Link}
														target="_blank"
														rel="noopener noreferrer"
													>
														<button className="btn btn-outline-info">
															Watch on VLive
														</button>
													</a>
												</div>
											</div>
										);
								  })}
						</div>
					{/* </div> */}
				</div>
			</div>
		</div>
	);
};

export default MainContent;
