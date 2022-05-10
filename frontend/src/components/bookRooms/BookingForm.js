import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addBooking } from "../../actions/bookings";
import { createMessage } from "../../actions/messages";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const styles = theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
});

export class BookingForm extends Component {
  state = {
    name: "",
    address: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
    showMe: true
  };

  //initializes component and converts selected dates to strings
  componentDidMount() {
    let fromDateString = "";
    let toDateString = "";
    let fromDateMonth = this.props.fromDate.getMonth() + 1;
    let toDateMonth = this.props.toDate.getMonth() + 1;

    fromDateString +=
      this.props.fromDate.getFullYear() +
      "-" +
      fromDateMonth +
      "-" +
      this.props.fromDate.getDate();

    toDateString +=
      this.props.toDate.getFullYear() +
      "-" +
      toDateMonth +
      "-" +
      this.props.toDate.getDate();

    this.setState({ fromDate: fromDateString });
    this.setState({ toDate: toDateString });
    this.setState({ roomnr: this.props.roomNumber });
  }

  static propTypes = {
    addBooking: PropTypes.func.isRequired
  };

  // setting the state when an input field is edited
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    try {
      e.preventDefault();
      const {
        name,
        address,
        zipCode,
        email,
        phoneNumber,
        fromDate,
        toDate,
        roomnr
      } = this.state;
      const booking = {
        name,
        address,
        zipCode,
        email,
        phoneNumber,
        fromDate,
        toDate,
        roomnr
      };

      //Veryfing user input
      let nameCriteria = /^[a-zA-Z\s]*$/;
      let emailCriteria = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (name == "" || !nameCriteria.test(name)) {
        this.props.createMessage({
          invalidName: "Skriv inn et gyldig navn"
        });
      } else if (address == "") {
        this.props.createMessage({
          invalidAddress: "Vennligst fyll inn din adresse"
        });
      } else if (zipCode == "" || zipCode.toString().length != 4) {
        this.props.createMessage({
          invalidZipCode: "Skriv inn et gyldig postnummer"
        });
      } else if (email == "" || !emailCriteria.test(email)) {
        this.props.createMessage({
          invalidEmail: "Skriv inn en gyldig e-post adresse"
        });
      } else if (phoneNumber.toString().length < 8) {
        this.props.createMessage({
          invalidPhoneNumber: "Skriv inn et gyldig telefonnummer"
        });
      } else {
        this.props.addBooking(booking);
        this.setState({ showMe: false });
      }
    } catch (err) {
      document.getElementById("demo").innerHTML = err.message;
    }
  };

  render() {
    const { classes } = this.props;
    const {
      name,
      address,
      zipCode,
      email,
      phoneNumber,
      fromDate,
      toDate,
      roomnr
    } = this.state;

    if (this.state.showMe) {
      return (
        <div>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={this.onSubmit}
          >
            <TextField
              required
              className="nameInput"
              id="standard-required"
              type="text"
              name="name"
              onChange={this.onChange}
              label="Navn"
              placeholder="Ola Normann"
            />
            <TextField
              required
              id="standard-required"
              name="address"
              onChange={this.onChange}
              label="Adresse"
              placeholder="Adresse"
            />
            <TextField
              required
              id="standard-required"
              name="zipCode"
              onChange={this.onChange}
              label="Postnummer"
              type="number"
              placeholder="1111"
            />
            <TextField
              required
              id="standard-required"
              name="email"
              type="email"
              onChange={this.onChange}
              label="E-post"
              placeholder="navn@gmail.com"
            />
            <TextField
              id="standard-number"
              label="Telefonnummer"
              type="number"
              name="phoneNumber"
              placeholder="99887766"
              onChange={this.onChange}
              InputLabelProps={{
                shrink: true
              }}
            />
            <button className="button" type="submit">
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Bestillingsbekreftelse:</h2>
          <table>
            <tr>
              <th>Navn:</th>
              <td>{this.state.name}</td>
            </tr>

            <tr>
              <th>Adresse:</th>
              <td>{this.state.address}</td>
            </tr>
            <th>Postnr:</th>
            <td>{this.state.zipCode}</td>

            <tr>
              <th>E-post:</th>
              <td>{this.state.email}</td>
            </tr>

            <tr>
              <th>Telefonnummer:</th>
              <td>{this.state.phoneNumber}</td>
            </tr>

            <tr>
              <th>Insjekk:</th>
              <td>{this.state.fromDate}</td>
            </tr>

            <tr>
              <th>Utsjekk:</th>
              <td>{this.state.toDate}</td>
            </tr>
          </table>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  fromDate: state.bookings.selectedFromDate,
  toDate: state.bookings.selectedToDate,
  roomNumber: state.rooms.currentRoom
});

export default connect(mapStateToProps, { addBooking, createMessage })(
  withStyles(styles)(BookingForm)
);
