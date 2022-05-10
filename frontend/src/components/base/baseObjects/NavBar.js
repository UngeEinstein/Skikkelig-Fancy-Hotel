import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";

import React, { Component } from "react";

export class NavBar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div>
        <span className="navbar-text mr-3">
          <strong>{user ? `Velkommen ${user.first_name}` : ""}</strong>
        </span>
        <button className="button" id="lgBtn" type="submit">
          {" "}
          <Link className="links" to="/LoginForm">
            {" "}
            Min Side{" "}
          </Link>{" "}
        </button>
        <button
          className="button"
          id="regBtn"
          onClick={this.props.logout}
          type="submit"
        >
          {" "}
          <Link className="links" to="/LoginForm">
            {" "}
            Logg ut{" "}
          </Link>{" "}
        </button>
      </div>
    );

    const guestLinks = (
      <div>
        <button className="button" id="regBtn" type="submit">
          {" "}
          <Link className="links" to="/Register">
            {" "}
            Registrer Bruker{" "}
          </Link>{" "}
        </button>
        <button className="button" id="lgBtn" type="submit">
          {" "}
          <Link className="links" to="/LoginForm">
            {" "}
            Logg Inn{" "}
          </Link>{" "}
        </button>
      </div>
    );

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              <Link id="headerLink" className="links" to="/#">
                SF Hotell{" "}
              </Link>
              {isAuthenticated ? authLinks : guestLinks}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(NavBar);
