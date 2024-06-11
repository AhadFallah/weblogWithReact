import React, { Component } from "react";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
class Navbar extends Component {
	render() {
		const rtlStyle = {
			direction: "rtl",
		};
		return (
			<div>
				<nav
					class="navbar navbar-expand-lg navbar-light bg-light"
					style={rtlStyle}
				>
					<a class="navbar-brand" href="#">
						Logo
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav">
							<li class="nav-item active">
								<a class="nav-link" href="#">
									خانه <span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									منتخب
								</a>
							</li>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									دسته بندی
								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									<a class="dropdown-item" href="#">
										Action
									</a>
									<a class="dropdown-item" href="#">
										Another action
									</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item" href="#">
										Something else here
									</a>
								</div>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled" href="#">
									ورود و ثبت نام
								</a>
							</li>
						</ul>
						<form class="form-inline my-2 my-lg-0 mr-auto">
							<input
								class="form-control mr-sm-2"
								type=""
								placeholder="جست و جو"
								aria-label=""
							/>
							<button
								class="btn btn-outline-success my-2 my-sm-0 mr-2"
								type="submit"
							>
								جست و جو
							</button>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}
export default Navbar;
