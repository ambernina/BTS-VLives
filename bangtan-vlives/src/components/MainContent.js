import React, { useState, useEffect } from "react";
import Header from "./Header";
// import Sidebar from "./Sidebar";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
// import Card from "./Card";
import data from "../assets/Bangtan-Impromptu-VLives.js";

const MainContent = () => {
	const [search, setSearch] = useState("");
	const [filtered, setFiltered] = useState([]);
	const [result, setResult] = useState([]);
	const [isFiltered, setIsFiltered] = useState(false);

	useEffect(() => {
		setResult(data);
	}, []);
	console.log("search", search);
	// console.log("before result", result);

	const inputSearch = () => {
		setFiltered(
			result.filter(value => {
				return value.Title.toLowerCase().includes(search.toLowerCase());
			})
		);
		console.log("filtered", filtered);
	};

	const checkboxSearch = () => {
		setFiltered(
			result.filter(value => {
				return (
					value.Members.toLowerCase().includes(search.toLowerCase()) ||
					value.Date.toLowerCase().includes(search.toLowerCase())
				);
			})
		);
		console.log("filtered", filtered);
	};

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
				<div className="row align-items-start">
					{/* Sidebar */}
					<div
						className="col-sm-3 col-md-4 col-lg-2 border border-info"
						style={{
							// background: "rgb(85,247,255)",
							background:
								"linear-gradient(0deg, rgba(85,247,255,1) 0%, rgba(255,255,255,1) 80%)"
						}}
					>
						<form>
							<div className="mb-3" style={{ padding: "10px" }}>
								<h4>Filters | Search</h4>
								<br />
								{/* <h6>Sort by...</h6> */}
								<Dropdown />
								<br />
								<h6>Search by Title</h6>
								<input
									className="form-control"
									type="text"
									placeholder="Search by title..."
									value={search || ""}
									aria-label="default input example"
									// ref={searchRef}
									// onChange={handleChange}
									onChange={e => {
										setSearch(e.target.value);
										inputSearch();
										if (e.target.value === "") {
											setIsFiltered(false);
										} else {
											setIsFiltered(true);
										}
									}}
								/>
								<br />
								{/* <CheckboxFilter id="RM" title="Members" label="RM" filter={TermQuery("card-text", 'RM')} /> */}
								<h6>Members</h6>
								<Checkbox
									value="RM"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
								<Checkbox
									value="Jin"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
								<Checkbox
									value="Suga"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
								<Checkbox
									value="JHope"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
								<Checkbox
									value="Jimin"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
								<Checkbox
									value="V"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
								<Checkbox
									value="Jungkook"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
								<br />
								<h6>Year</h6>
								<Checkbox
									value="2015"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
								<Checkbox
									value="2016"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
								<Checkbox
									value="2017"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
								<Checkbox
									value="2018"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
								<Checkbox
									value="2019"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
								<Checkbox
									value="2020"
									onChange={e => {
										setIsFiltered(true);
										setSearch(e.target.value);
										checkboxSearch();
									}}
								/>
							</div>
						</form>
					</div>
					<div className="col-sm-9 col-md-8 col-lg-10">
						<div className="row">
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
