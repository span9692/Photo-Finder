import { csrfFetch } from "./csrf";

// action creator
const NEW_BOOKING = 'booking/NEW_BOOKING'

const newBooking = (data) => {
    return {
        type: NEW_BOOKING,
        data
    }
}

// thunk function
export const addBooking = (date) => async dispatch => {
    const response = await csrfFetch('/api/booking', {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(date)
    })
    const appointment = await response.json();
    dispatch(newBooking(appointment))
    return appointment
}

// reducer
const bookingReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case NEW_BOOKING:
            newState = {...state}
            newState[action.data.id] = action.data
            return newState;
        default:
            return state;
    }
}

export default bookingReducer;
