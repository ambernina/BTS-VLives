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
	console.log("before result", result);

	const inputSearch = e => {
		setFiltered(
			result.filter(value => {
				return value.Title.toLowerCase().includes(search.toLowerCase());
			})
		);
		console.log("filtered", filtered);

		// let keyword = e.target.value;
		// console.log(e.target.value);
		// setSearch(keyword);
	};

	const handleChange = () => {
		// console.log(e.target.value);
		// setSearch(e.target.value, () => {
		inputSearch();
		setIsFiltered(true);
		// });
	};

	return (
		<div
			className="container"
			style={{
				padding: "25px",
				// background: "rgb(85,247,255)",
				background:
					"linear-gradient(180deg, rgba(85,247,255,1) 0%, rgba(255,255,255,1) 3%)",
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
								"linear-gradient(180deg, rgba(85,247,255,1) 0%, rgba(255,255,255,1) 80%)"
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
										handleChange();
									}}
								/>
								<br />
								{/* <CheckboxFilter id="RM" title="Members" label="RM" filter={TermQuery("card-text", 'RM')} /> */}
								<h6>Members</h6>
								<Checkbox label="RM" />
								<Checkbox label="Jin" />
								<Checkbox label="Suga" />
								<Checkbox label="JHope" />
								<Checkbox label="Jimin" />
								<Checkbox label="V" />
								<Checkbox label="Jungkook" />
								<br />
								<h6>Year</h6>
								<Checkbox label="2015" />
								<Checkbox label="2016" />
								<Checkbox label="2017" />
								<Checkbox label="2018" />
								<Checkbox label="2019" />
								<Checkbox label="2020" />
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
