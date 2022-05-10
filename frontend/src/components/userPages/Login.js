import LoginForm from "./LoginForm";
import React, { Component } from "react";
import Alerts from "../layout/Alerts";

export class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
