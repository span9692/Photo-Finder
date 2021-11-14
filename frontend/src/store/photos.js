import { csrfFetch } from './csrf';

const GET_PHOTO = 'photo/GET_PHOTO';
const ADD_PHOTO = 'photo/ADD_PHOTO';
const DELETE_PHOTO = 'photo/DELETE_PHOTO'

const displayPix = (data) => {
    return {
        type: GET_PHOTO,
        data,
    }
}

const newPhoto = (data) => {
    return {
        type: ADD_PHOTO,
        data
    }
}

const deletePhoto = (data) => {
    return {
        type: DELETE_PHOTO,
        data
    }
}

export const showPicture = () => async dispatch => {
    const response = await csrfFetch("/api/photos")
    const data = await response.json();
    dispatch(displayPix(data))
}

export const addPhoto = (data) => async dispatch => {
    const response = await csrfFetch('/api/photos', {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    if (response.ok) {
        dispatch(newPhoto(data))
    }
}

export const removePhoto = (data) => async dispatch => {
    const response = await csrfFetch(`/api/photos/${data}`, {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(deletePhoto(data))
        return data
    }
}

const photoReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case GET_PHOTO:
            newState = {...state}
            action.data.forEach(photo => newState[photo.id] = photo)
            return newState;
        case ADD_PHOTO:
            newState = {...state}
            newState[action.data.id] = action.data
            return newState
        case DELETE_PHOTO:
            newState = {...state}
            delete newState[action.data]
            return newState;
        default:
            return state;
    }
}

export default photoReducer;
