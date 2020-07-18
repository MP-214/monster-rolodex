import React from "react";
import "./search.style.css";

export const Search = ({ onHandlechange }) => (
	<div className="searchField">
		<input
            type="search"
            
			placeholder="monster search"
			onChange={onHandlechange}
		></input>
	</div>
);
