import { csrfFetch } from './csrf';

const GET_PHOTOGRAPHERS = 'photographers/GET_PHOTOGRAPHERS'

const showPhotographer = (data) => {
    return {
        type: GET_PHOTOGRAPHERS,
        data
    }
}

export const getPhotographer = () => async dispatch => {
    const photographers = await csrfFetch('/api/photographers')
    const data = await photographers.json()
    console.log(data)
    dispatch(showPhotographer(data))
}

const photographerReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PHOTOGRAPHERS:
            const newState = {...state};
            action.data.forEach(photographer => newState[photographer.id] = photographer)
            return newState;
        default:
            return state;
    }
}

export default photographerReducer;
