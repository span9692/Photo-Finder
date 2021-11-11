import { csrfFetch } from "./csrf";

// action creator
const NEW_BOOKING = 'booking/NEW_BOOKING'
const GET_BOOKING = 'booking/GET_BOOKING'
const DELETE_BOOKING = 'booking/DELETE_BOOKING'

const newBooking = (data) => {
    return {
        type: NEW_BOOKING,
        data
    }
}

const showBooking = (data) => {
    return {
        type: GET_BOOKING,
        data
    }
}

const removeBooking = (data) => {
    return {
        type: DELETE_BOOKING,
        data
    }
}

// thunk function
export const getBooking = () => async dispatch => {
    const response = await csrfFetch('/api/booking')
    const appointments = await response.json();
    dispatch(showBooking(appointments))
    return appointments;
}

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

export const deleteBooking = (data) => async dispatch => {
    const response = await csrfFetch(`/api/booking/${data}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        const deleted = await response.json();
        dispatch(removeBooking(data))
    }
}

// reducer
const bookingReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case GET_BOOKING:
            newState = {...state}
            action.data.forEach(appointment => newState[appointment.id] = appointment)
            return newState;
        case NEW_BOOKING:
            newState = {...state}
            newState[action.data.id] = action.data
            return newState;
        case DELETE_BOOKING:
            newState = {...state}
            delete newState[action.data]
            return newState
        default:
            return state;
    }
}

export default bookingReducer;
