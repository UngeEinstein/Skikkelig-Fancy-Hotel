import axios from 'axios';
import { returnErrors} from "./messages"; 

import { GET_ROOMS, SET_CURRENT_ROOM} from './types';

// GET ROOMS
export const getRooms = () => dispatch =>{
    
    axios
    .get('/api/rooms/')
    .then(res => {
        dispatch({
            type: GET_ROOMS,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

};

// SET CURRENT ROOM

export const setCurrentRoom = (roomId) => dispatch => {
    dispatch({
        type: SET_CURRENT_ROOM,
        payload: roomId
    })  
  };

// ADD BOOKING










