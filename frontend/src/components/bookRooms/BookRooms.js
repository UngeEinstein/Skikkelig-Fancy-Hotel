import React, { Component } from "react";
import BookingForm from "./BookingForm";
import NavBar from "../base/baseObjects/NavBar";

export class BookRooms extends Component {
  render() {
    return (
      <div className="font">
        <div className="navBar">
          <NavBar />
        </div>
        <br />
        <br> </br>
        <h1>Book Rom </h1>
        <BookingForm />
      </div>
    );
  }
}

export default BookRooms;
