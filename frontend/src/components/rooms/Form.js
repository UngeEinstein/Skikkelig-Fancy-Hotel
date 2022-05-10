import React, { Component } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { connect } from "react-redux";
import { setSelectedFromDate, setSelectedToDate } from "../../actions/bookings";

//Date form on the front page

export class Form extends Component {
  state = {
    fromDate: new Date(),
    toDate: new Date(),
    fromDatePlusOne: new Date()
  };

  //Handeling check in date input
  handleFromDateChange = date => {
    this.setState({ fromDate: date });
    this.props.setSelectedFromDate(date);
    let toDateSetter = new Date(date);
    if (date >= this.state.toDate) {
      toDateSetter.setDate(toDateSetter.getDate() + 1);
      this.setState({ toDate: toDateSetter });

      this.props.setSelectedToDate(toDateSetter);
    }
  };

  //Finding current date +1
  fromDatePlusOneSetter(date) {
    let fromDatePlusOneSetter = new Date();
    fromDatePlusOneSetter.setDate(fromDatePlusOneSetter.getDate() + 1);
    this.setState({ fromDatePlusOne: fromDatePlusOneSetter });
    this.props.setSelectedToDate(fromDatePlusOneSetter);
  }

  //Handeling check out date input
  handleToDateChange = date => {
    this.setState({ toDate: date });
    this.props.setSelectedToDate(date);
    let fromDateSetter = new Date(date);
    if (date <= this.state.fromDate) {
      fromDateSetter.setDate(fromDateSetter.getDate() - 1);
      this.setState({ fromDate: fromDateSetter });
      this.props.setSelectedToDate(fromDateSetter);
    }
  };

  //initializes the component and setting todays date as check in date.
  componentDidMount() {
    let toDateProps = new Date();
    let fromDateProps = new Date();
    if (this.props.selectedToDate !== "") {
      toDateProps.setDate(toDateProps.getDate() + 1);
      fromDateProps.setMinutes(fromDateProps.getMinutes() + 10);
      this.fromDatePlusOneSetter(fromDateProps);
      console.log(toDateProps);
      this.setState({ toDate: toDateProps });
      this.setState({ fromDate: fromDateProps });
    }
  }

  render() {
    return (
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              label="Sjekk Inn"
              clearable
              value={this.state.fromDate}
              placeholder="10/10/2018"
              onChange={date => this.handleFromDateChange(date)}
              minDate={new Date()}
              format="dd/MM/yyyy"
            />
            <KeyboardDatePicker
              label="Sjekk Ut"
              clearable
              value={this.state.toDate}
              placeholder="10/10/2018"
              onChange={date => this.handleToDateChange(date)}
              minDate={this.state.fromDatePlusOne}
              format="dd/MM/yyyy"
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  selectedFromDate: state.bookings.selectedFromDate,
  selectedToDate: state.bookings.selectedToDate
});

export default connect(mapStateToProps, {
  setSelectedFromDate,
  setSelectedToDate
})(Form);
