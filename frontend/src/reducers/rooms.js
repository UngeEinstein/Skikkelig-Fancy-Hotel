import { GET_ROOMS, SET_CURRENT_ROOM } from "../actions/types.js";

const initialState = {
  rooms: [],
  currentRoom: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: action.payload
      };
    case SET_CURRENT_ROOM:
      return {
        ...state,
        currentRoom: action.payload
      };

    default:
      return state;
  }
}
