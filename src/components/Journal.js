import React from "react";
import data from "../data";
import Card from "./Card";

export default function Journal() {
	const dataObject = data.map((item) => {
		return <Card key={item.id} {...item} />;
	});

	return <div className="journal">{dataObject}</div>;
}
