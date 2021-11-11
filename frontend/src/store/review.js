import { csrfFetch } from './csrf';

//action creator
const SHOW_REVIEW = 'review/SHOW_REVIEW'
const POST_REVIEW = 'review/POST_REVIEW'

const displayReview = (data) => {
    return {
        type: SHOW_REVIEW,
        data
    }
}

const postReview = (data) => {
    return  {
        type: POST_REVIEW,
        data
    }
}

//thunk functions
export const showReviews = () => async dispatch => {
    const response = await csrfFetch('/api/reviews')
    const review = await response.json();
    dispatch(displayReview(review))
}

export const addReview = (data) => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    })
    if (response.ok) {
        dispatch(postReview(data))
        return data
    }
}

//reducer
const reviewReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case SHOW_REVIEW:
            newState = {...state}
            action.data.forEach(review => newState[review.id] = review)
            return newState;
        case POST_REVIEW:
            newState = {...state}
            newState[action.data.id] = action.data;
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;
