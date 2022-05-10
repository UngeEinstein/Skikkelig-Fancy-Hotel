import React, { Component } from "react";
import Rooms from "./Rooms";
import { Link, NavLink } from "react-router-dom";
import NavBar from "../base/baseObjects/NavBar";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { FormControlLabel } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import { getRooms } from "../../actions/rooms";

export class RoomPage extends Component {
  render() {
    return (
      <div className="font">
        <div className="navBar">
          <NavBar />
        </div>
        <div>
          <h1 id="roomHeader">Velg Rom</h1>

          <Rooms />
        </div>
      </div>
    );
  }
}

export default RoomPage;
