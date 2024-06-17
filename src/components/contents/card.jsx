import React, { Component } from "react";

import "bootstrap/dist/js/bootstrap.bundle.min";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/css/bootstrap.css";

class Card extends Component {
	render() {
		const cardStyle = {
			width: "18rem",
		};
		const rtlStyle = {
			"text-align": "right",
		};
		return (
			<div className="card m-4" style={cardStyle} dir="rtl">
				<img src={this.props.img} alt="تصویر" className="card-img-top" />
				<div className="card-body" style={rtlStyle}>
					<h1 className="card-title">{this.props.title}</h1>
					<p className="card-text">{this.props.description}</p>
					<a href="" className="btn btn-primary">
						ادامه مطلب
					</a>
				</div>
			</div>
		);
	}
}
export default Card;
