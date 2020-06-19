import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
require("../_variables.scss");

const AllLayout = () => {
	return (
		<>
    <Header />
			<div className="container-fluid px-4">
				<div className="row align-items-start">
					<div className="col-sm-3 col-md-4 col-lg-2 border">
            <Sidebar />
					</div>
					<div className="col-sm-9 col-md-8 col-lg-10">
						<MainContent />
					</div>
				</div>
			</div>
		</>
	);
};

export default AllLayout;
