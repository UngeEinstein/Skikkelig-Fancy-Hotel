import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Header from "./layout/Header";
import Rooms from "./rooms/Rooms";
import RoomPage from "./rooms/RoomPage";
import Index from "./Index";
import LoginForm from "./userPages/LoginForm";
import Register from "./userPages/Register";
import PrivateRoute from "./common/PrivateRoute";
import RegisterForm from "./userPages/RegisterForm";
import UserPage from "./userPages/UserPage";
import { loadUser } from "../actions/auth";
import Alerts from "./layout/Alerts";

import { Provider } from "react-redux";
import store from "../store";
import rooms from "../reducers/rooms";
import BookRooms from "./bookRooms/BookRooms";

import Form from "./rooms/Form";
import css from "./base/CSS/App.css";
import css2 from "./base/CSS/Buttons.css";
import css3 from "./base/CSS/Login.css";
import { NavBar } from "./base/baseObjects/NavBar";

const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  constructor(props) {
    super(props);

    this.state = {
      roomSelection: null,
      startDate: null,
      endDate: null
    };
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Alerts />
              <div className="container">
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <Switch>
                  <Route exact path="/" component={Index} />
                  <PrivateRoute exact path="/UserPage" component={UserPage} />
                  <Route exact path="/BookRooms" component={BookRooms} />
                  <Route exact path="/LoginForm" component={LoginForm} />
                  <Route exact path="/Register" component={Register} />
                  <Route
                    exact
                    path="/RoomPage"
                    render={props => (
                      <RoomPage
                        {...props}
                        roomSelection={this.state.roomSelection}
                      />
                    )}
                  />
                  <Header />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
