import React from "react";
import { Card } from "../card/card.component";
import "./CardList.style.css";

export const Cardlist = (props) => (
	<div className="card-list">
		{props.monsters.map((monster) => (
			<Card key={monster.id} monster={monster} />
		))}
	</div>
);
