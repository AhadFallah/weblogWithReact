import React, { Component } from "react";

import "bootstrap/dist/js/bootstrap.bundle.min";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/css/bootstrap.css";

class longCard extends Component {
  render() {
    const style = {
      height: "90%",
    };
    const rtlStyle = {
      "text-align": "right",
    };
    return (
      <div className="card bg-light m-4" dir="rtl" style={style}>
        <div className="card-header" style={rtlStyle}>
          {this.props.head}
        </div>
        <div className="card-body" style={rtlStyle}>
          <h1 className="card-title">{this.props.title}</h1>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
export default longCard;
