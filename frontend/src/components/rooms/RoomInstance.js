import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getRooms, setCurrentRoom } from "../../actions/rooms";
import { connect } from "react-redux";

//This component is used by Rooms.js to display every room available

export class RoomInstance extends Component {
  handleBookRoom = () => {
    const { room } = this.props;
    this.props.setCurrentRoom(room.roomnr);
  };
  render() {
    const { room } = this.props;

    return (
      <tr>
        <td>{room.name}</td>
        <td>{room.description}</td>
        <td>{room.beds}</td>
        <td>{room.price},- pr natt</td>
        <td>
          <button class="button" onClick={this.handleBookRoom}>
            <Link to="/BookRooms">Book Nå!</Link>
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  currentRoom: state.rooms.currentRoom
});

export default connect(mapStateToProps, { setCurrentRoom })(RoomInstance);
