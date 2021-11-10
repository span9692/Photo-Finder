import { csrfFetch } from './csrf';

const GET_PHOTOGRAPHERS = 'photographers/GET_PHOTOGRAPHERS'
const NEW_PHOTOGRAPHER = 'photographer/NEW_PHOTOGRAPHER'
const EDIT_PHOTOGRAPHER = 'photograph/EDIT_PHOTOGRAPHER'
const REMOVE_PHOTOGRAPHER = 'photograph/REMOVE_PHOTOGRAPHER'

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

const modifyPhotographer = (data) => {
    return {
        type: EDIT_PHOTOGRAPHER,
        data
    }
}

const removePhotographer = (data) => {
    return {
        type: REMOVE_PHOTOGRAPHER,
        data
    }
}

export const deletePhotographer = (data) => async dispatch => {
    const response = await csrfFetch(`/api/photographers/${data}`, {
        method:"DELETE"
    })
    if (response.ok) {
        const updated = await response.json();
        dispatch(removePhotographer(data))
    }
}

export const updatePhotographer = (data) => async dispatch => {

    const response = await csrfFetch(`/api/photographers/${data.id}`, {
        method:"PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    if (response.ok) {
        const updated = await response.json();
        dispatch(modifyPhotographer(updated))
        return updated;
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
            newState[action.data.id] = action.data
            return newState;
        case EDIT_PHOTOGRAPHER:
            newState = {...state}
            newState[action.data.id] = action.data
            return newState;
        case REMOVE_PHOTOGRAPHER:
            newState = {...state}
            delete newState[action.data];
            return newState;
        default:
            return state;
    }
}

export default photographerReducer;
