import React, { Component } from "react";
import Navbar from "../partials/navbar.jsx";
import Card from "../contents/card.jsx";

import "./home.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  render() {
    return (
      <div dir="rtl">
        <div>
          <Navbar />
        </div>
        <div className="card-columns m-5">
          <Card
            title="article"
            description="alie"
            img="https://files.virgool.io/upload/users/3182518/posts/mdtyspslbcan/0stogdlhqipb.webp"
          />{" "}
          <Card
            title="article"
            description="alie"
            img="https://files.virgool.io/upload/users/3182518/posts/mdtyspslbcan/0stogdlhqipb.webp"
          />{" "}
          <Card
            title="article"
            description="alie"
            img="https://files.virgool.io/upload/users/3182518/posts/mdtyspslbcan/0stogdlhqipb.webp"
          />{" "}
          <Card
            title="article"
            description="alie"
            img="https://files.virgool.io/upload/users/3182518/posts/mdtyspslbcan/0stogdlhqipb.webp"
          />{" "}
          <Card
            title="article"
            description="alie"
            img="https://files.virgool.io/upload/users/3182518/posts/mdtyspslbcan/0stogdlhqipb.webp"
          />
        </div>
      </div>
    );
  }
}
export default Home;
