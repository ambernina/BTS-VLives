import React from "react";
// import ReactDOM from "react-dom";
// import $ from "jquery";

// const node = ReactDOM.findDOMNode(this);

// if (node instanceof HTMLElement) {
// 	const child = node.querySelectorAll('.namjoon');
// 	console.log("child", child)
// }

const Checkbox = props => {
	// const [checked, setChecked] = useState(false);
	// const [RMCheckbox, setRMCheckbox] = useState(false);
	// const [RMCard, setRMCard] = useState();
	// const [SugaCheckbox, setSugaCheckbox] = useState(false);
	// const [SugaCard, setSugaCard] = useState();

	// useEffect(() => {
	// 	setRMCheckbox(
	// 		document.getElementsByClassName("RM")[0].childNodes[0].checked
	// 	);
	// 	// setRMCheckbox(document.getElementsByClassName("RM"));
	// 	setRMCard(document.getElementsByClassName("namjoon"));
	// 	setSugaCheckbox(document.getElementsByClassName("Suga"));
	// 	setSugaCard(document.getElementsByClassName("yoongi"));
	// }, []);

	// console.log("RMCheckbox out of handlechange", RMCheckbox);
	// console.log("RMCard", RMCard);
	// // const filterCards = () => {
	// // };

	// const handleChange = e => {
	// 	// const checked = e.target.checked;
	// 	setChecked(e.target.checked);
	// 	setRMCheckbox(
	// 		(document.getElementsByClassName("RM")[0].childNodes[0].checked =
	// 			e.target.checked)
	// 	);
	// 	setRMCard(
	// 		document.getElementsByClassName("namjoon")[0].parentNode.hidden = (e.target.checked)
	// 	);
	// 	// filterCards();
	// 	if (!RMCheckbox) {
	// 		RMCard.body.style("display", "none");
	// 		console.log("rm style changed");
	// 	} else {
	// 		// RMCard.body.style("display", "block");
	// 		console.log("rm style changed");
	// 	}
	// 	// console.log("RMCheckbox inside handlechange",RMCheckbox)
	// 	console.log("e.target.checked", e.target.checked);
	// 	// console.log("checked",checked);
	// };

	return (
		<div className="form-check">
			<input
				className="form-check-input"
				type="checkbox"
				id="flexCheckDefault"
				onChange={props.onChange}
				value={props.value}
				// checked={checked}
			></input>{" "}
			<label className="form-check-label" htmlFor="flexCheckDefault">
				{props.value}
			</label>
		</div>
	);
};

export default Checkbox;
