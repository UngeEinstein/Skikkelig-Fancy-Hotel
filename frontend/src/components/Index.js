import React, { Component } from "react";
import { Link } from "react-router-dom";
import Alerts from "./layout/Alerts";

import Form from "./rooms/Form";

import NavBar from "./base/baseObjects/NavBar";

export class Index extends Component {
  render() {
    return (
      <div className="base">
        <div>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <div className="navBar">
            <NavBar />
          </div>
          <div>
            <div id="headers">
              <h1 id="header">Skikkelig Fancy Hotell</h1>
            </div>
            <br></br>
            <Form />
            <button className="button" id="bookBtn" type="submit">
              {" "}
              <Link className="links" to="/RoomPage">
                {" "}
                Book Rom{" "}
              </Link>{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
