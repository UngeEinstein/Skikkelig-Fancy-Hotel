import { ADD_BOOKING, SET_SELECTED_TO_DATE, SET_SELECTED_FROM_DATE } from "../actions/types.js";

const initialState = {
    bookings: [],
    selectedToDate: new Date(),
    selectedFromDate: new Date()

}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_BOOKING:
            return { 
                ...state,
                bookings: [...state.bookings, action.payload]            
        };
        case SET_SELECTED_FROM_DATE:
        return {
            ...state,
            selectedFromDate: action.payload
        };
        case SET_SELECTED_TO_DATE:
            return {
                ...state,
                selectedToDate: action.payload
            };
            
        default:
            return state;
    }
}


