import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRooms, setCurrentRoom } from "../../actions/rooms";
import rooms from "../../reducers/rooms";
import RoomInstance from "./RoomInstance";
import Form from "./Form";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";

export class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shownRoomArray: this.props.rooms,
      oceanView: false,
      jacuzzi: false,
      minibar: false,
      balcony: false,
      siteLoaded: false
    };
  }

  static propTypes = {
    rooms: PropTypes.array.isRequired,
    getRooms: PropTypes.func.isRequired
  };

  // Initializes state
  componentDidMount() {
    this.props.getRooms();
    this.setState({ shownRoomArray: this.props.rooms });
  }
  //handeling the change of state when a checkbox is checked
  handleViewChange = event => {
    if (this.state.siteLoaded == false) {
      this.setState({ siteLoaded: true });
    }

    this.setState(
      { [event.target.name]: event.target.checked },
      this.filterRooms
    );
  };
  //Room filtering by criteria
  filterRooms() {
    const filteredRooms = this.props.rooms.filter(room => {
      return (
        (room.minibar == this.state.minibar || room.minibar == true) &&
        (room.oceanView == this.state.oceanView || room.oceanView == true) &&
        (room.jacuzzi == this.state.jacuzzi || room.jacuzzi == true) &&
        (room.balcony == this.state.balcony || room.balcony == true)
      );
    });
    this.setState({ shownRoomArray: filteredRooms });
  }

  render() {
    return (
      <div>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                name="oceanView"
                value={this.state.view}
                onChange={this.handleViewChange}
                color="default"
              />
            }
            label="Havutsikt"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="jacuzzi"
                value={this.state.jacuzzi}
                onChange={this.handleViewChange}
                color="default"
              />
            }
            label="Jacuzzi"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="minibar"
                value={this.state.minibar}
                onChange={this.handleViewChange}
                color="default"
              />
            }
            label="Minibar"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="balcony"
                value={this.state.balcony}
                onChange={this.handleViewChange}
                color="default"
              />
            }
            label="Balkong"
          />
        </FormGroup>
        <Fragment>
          <table class="roomTable">
            <thead>
              <tr>
                <th>Navn</th>
                <th>Beskrivelse</th>
                <th>Antall senger</th>
                <th>Pris</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.siteLoaded
                ? this.state.shownRoomArray.map(room => (
                    <RoomInstance key={room.id} room={room} />
                  ))
                : this.props.rooms.map(room => (
                    <RoomInstance key={room.id} room={room} />
                  ))}
            </tbody>
          </table>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms.rooms,
  currentRoom: state.rooms.currentRoom
});

export default connect(mapStateToProps, { getRooms, setCurrentRoom })(Rooms);
