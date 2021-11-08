import { csrfFetch } from './csrf';

const GET_PHOTOGRAPHERS = 'photographers/GET_PHOTOGRAPHERS'
const NEW_PHOTOGRAPHER = 'photographer/NEW_PHOTOGRAPHER'

const showPhotographer = (data) => {
    return {
        type: GET_PHOTOGRAPHERS,
        data
    }
}

const newPhotographer = (data) => {
    return {
        type: NEW_PHOTOGRAPHER,
        data
    }
}

export const getPhotographer = () => async dispatch => {
    const photographers = await csrfFetch('/api/photographers')
    const data = await photographers.json()
    dispatch(showPhotographer(data))
}

export const addPhotographer = (info) => async dispatch => {
    const response = await csrfFetch('/api/photographers', {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(info)
    })
    const photographer = await response.json();
    dispatch(newPhotographer(photographer))
}

const photographerReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case GET_PHOTOGRAPHERS:
            newState = {...state};
            action.data.forEach(photographer => newState[photographer.id] = photographer)
            return newState;
        case NEW_PHOTOGRAPHER:
            newState = {...state}
        default:
            return state;
    }
}

export default photographerReducer;
