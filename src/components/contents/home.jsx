import React, { Component } from "react";
import Navbar from "../partials/navbar.jsx";
import Card from "../contents/card.jsx";
import LongCard from "../contents/longCard.jsx";

import "./home.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  render() {
    const style = {
      minWidth: "23%",
    };

    return (
      <div dir="rtl">
        <div>
          <Navbar />
        </div>
        <div className="row">
          <div className="col">
            {" "}
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
          <div className="col col-2" style={style}>
            <LongCard title="article" description="alie" head="header" />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
