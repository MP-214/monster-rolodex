import React, { Component } from "react";
import { Cardlist } from "./Component/cardlist/CardList.component";
import { Search } from "./Component/SearchBox/search.component";

import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			Monster_list: [],
			monsterSearch: "",
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ Monster_list: users }));
	}
	onHandle = (e) => {
		this.setState({ monsterSearch: e.target.value });
	};
	render() {
		const { monsterSearch, Monster_list } = this.state;
		const searchField = Monster_list.filter((monster) =>
			monster.name.toLowerCase().includes(monsterSearch.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monster Rolodex</h1>
				<Search onHandlechange={this.onHandle} />
				<Cardlist monsters={searchField} />
			</div>
		);
	}
}

export default App;
