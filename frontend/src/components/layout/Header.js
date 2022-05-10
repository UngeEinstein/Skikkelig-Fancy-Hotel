import React, { Component } from "react";
import "date-fns";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "date-fns";

const styles = theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
});

export class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <li>
          <Link to="/RoomPage">book </Link>
        </li>
      </div>
    );
  }
}

export default Header;
