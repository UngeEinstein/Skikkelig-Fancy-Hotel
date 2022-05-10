import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NavBar from "../base/baseObjects/NavBar";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const styles = theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
});

export class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;

    return (
      <div className="page">
        <div className="base">
          <div className="navBar">
            <NavBar />
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="loginForm">
              <TextField
                required
                id="loginEmail"
                name="username"
                onChange={this.onChange}
                value={username}
                label="E-post"
                placeholder="navn@gmail.com"
              />
              <TextField
                required
                id="loginPassword"
                label="Passord"
                name="password"
                type="password"
                value={password}
                onChange={this.onChange}
                placeholder="Passord"
              />

              <button id="loginBtn" className="button" type="submit">
                {" "}
                Logg inn{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(
  withStyles(styles)(LoginForm)
); //withStyles(styles)
