import React from "react";
import "./card.style.css";

export const Card = (props) => (
	<div className="card-container">
		<img
			src={`https://robohash.org/${props.monster.id}?set=set2`}
			alt="monster_image"
		></img>
		<h3>{props.monster.name}</h3>
		<h3>{props.monster.email}</h3>
	</div>
);
