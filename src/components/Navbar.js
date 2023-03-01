import React from "react";
import logo from "../img/globe.png";

export default function Navbar() {
	return (
		<div className="header">
			<img className="header--logo" src={logo} alt="logo" />
			<h4 className="header--text">my travel journal</h4>
		</div>
	);
}
