import { csrfFetch } from './csrf';

//action creator
const SHOW_REVIEW = 'review/SHOW_REVIEW'

const displayReview = (data) => {
    return {
        type: SHOW_REVIEW,
        data
    }
}

//thunk functions
export const showReviews = () => async dispatch => {
    const response = await csrfFetch('/api/reviews')
    const review = await response.json();
    dispatch(displayReview(review))
}

//reducer
const reviewReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case SHOW_REVIEW:
            newState = {...state}
            action.data.forEach(review => newState[review.id] = review)
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;
