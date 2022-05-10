import axios from 'axios';
import { ADD_BOOKING, SET_SELECTED_FROM_DATE, SET_SELECTED_TO_DATE } from './types';

// Add booking
export const addBooking = (booking) => dispatch =>{
    
    axios
    .post('/api/bookings/', booking)
    .then(res => {
        dispatch({
            type: ADD_BOOKING,
            payload: res.data
        });
    }).catch(err => console.log(err));

};

export const setSelectedFromDate = (date) => dispatch => {
    dispatch({
        type: SET_SELECTED_FROM_DATE,
        payload: date
    })  
  };

  export const setSelectedToDate = (date) => dispatch => {
    dispatch({
        type: SET_SELECTED_TO_DATE,
        payload: date
    })  
  };




