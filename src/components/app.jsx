import React, { Component } from "react";
import Navbar from "./partials/navbar.jsx";
import Card from "./contents/card.jsx";
class App extends Component {
	render() {
		return (
			<div>
				<div>
					<Navbar />
				</div>
				<div dir="rtl">
					<Card />
				</div>
			</div>
		);
	}
}
export default App;
