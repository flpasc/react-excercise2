import React from "react";
import marker from "../img/marker.png";

export default function Card(props) {
	return (
		<div className="journal--card">
			<img className="card--image" src={`../img/${props.imageUrl}`} alt={props.title} />
			<div className="card--info">
				<div className="card--location">
					<img src={marker} alt="marker" className="card--location-marker" />
					<div className="card--location-country">{props.location}</div>
					<a className="card--location-link" href={props.mapsLink}>
						View on Google Maps
					</a>
				</div>
				<div className="card--title">{props.title}</div>
				<div className="card--date">{`${props.startDate} - ${props.endDate}`}</div>
				<div className="card--description">{props.description}</div>
			</div>
		</div>
	);
}
