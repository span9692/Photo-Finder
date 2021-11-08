import { csrfFetch } from './csrf';

const GET_PHOTO = 'photo/GET_PHOTO';

const displayPix = (data) => {
    return {
        type: GET_PHOTO,
        data,
    }
}

export const showPicture = () => async dispatch => {
    const response = await csrfFetch("/api/photos")
    const data = await response.json();
    console.log(data)
    dispatch(displayPix(data))

}

const photoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PHOTO:
            const newState = {...state}
            action.data.forEach(photo => newState[photo.id] = photo)
            return newState;
        default:
            return state;
    }
}

export default photoReducer;
