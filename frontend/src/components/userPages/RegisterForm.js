import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NavBar from "../base/baseObjects/NavBar";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

const styles = theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
});

export class RegisterForm extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    first_name: ""
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  //when an input field is changed
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //verifying the input data and sending a post request to the api
  onSubmit = e => {
    let nameCriteria = /^[a-zA-Z\s]*$/;
    let emailCriteria = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    e.preventDefault();

    const { username, password, confirmPassword, first_name } = this.state;
    if (first_name == "" || !nameCriteria.test(first_name)) {
      this.props.createMessage({
        invalidName: "Skriv inn et gyldig navn"
      });
    } else if (username == "" || !emailCriteria.test(username)) {
      this.props.createMessage({
        invalidEmail: "Skriv inn en gyldig e-post adresse"
      });
    } else if (password !== confirmPassword) {
      this.props.createMessage({
        passwordNotMatch: "Passordene er ikke like"
      });
    } else {
      const newUser = {
        username,
        password,
        first_name
      };
      this.props.register(newUser);
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { classes } = this.props;
    const { username, password, confirmPassword, first_name } = this.state;

    return (
      <div className="font">
        <div className="navBar">
          <NavBar />
        </div>
        <div className="loginForm">
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={this.onSubmit}
          >
            <TextField
              required
              id="registerName"
              name="first_name"
              onChange={this.onChange}
              value={first_name}
              label="Navn"
              placeholder="Navn Pettersen"
            />
            <TextField
              required
              id="username"
              name="username"
              onChange={this.onChange}
              value={username}
              label="E-post"
              placeholder="navn@gmail.com"
            />
            <br></br>
            <br></br>
            <TextField
              id="registerPassword"
              label="Passord"
              name="password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              onChange={this.onChange}
              value={password}
            />

            <TextField
              id="registerConfirmPassword"
              label="Bekreft Passord"
              name="confirmPassword"
              type="password"
              autoComplete="current-password"
              variant="filled"
              onChange={this.onChange}
              value={confirmPassword}
            />
            <br></br>
            <br></br>
            <button className="button" id="regButton" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, createMessage })(
  withStyles(styles)(RegisterForm)
);
