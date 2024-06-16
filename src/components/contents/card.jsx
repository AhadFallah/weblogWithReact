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
				<img
					src="https://files.virgool.io/upload/users/3182518/posts/mdtyspslbcan/0stogdlhqipb.webp"
					alt="تصویر"
					className="card-img-top"
				/>
				<div className="card-body" style={rtlStyle}>
					<h1 className="card-title">مقاله</h1>
					<p className="card-text">توضیحات مقاله</p>
					<a href="" className="btn btn-primary">
						ادامه مطلب
					</a>
				</div>
			</div>
		);
	}
}
export default Card;
