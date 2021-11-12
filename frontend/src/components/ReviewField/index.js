import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { addReview, showReviews } from '../../store/review'

function ReviewField({photographerId, userId}) {
    const [review, setReview] = useState('')
    const [characters, setCharacters] = useState(0)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showReviews())
    }, [dispatch, review])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            userId,
            photographerId,
            review
        }

        await dispatch(addReview(newReview))
        setReview('')
        setCharacters(0)
    }

    return (
        <div className='review1'>
            <form onSubmit={handleSubmit} className='review-form'>
                <label htmlFor='review'>Write a Review:</label>
                <div className='review-container'>
                    <textarea
                        className='enter-review'
                        maxLength="1000"
                        id='review'
                        placeholder='How was your experience...'
                        type='text'
                        onChange={(e) => { setReview(e.target.value); setCharacters(e.target.value.length) }}
                        value={review}
                    />
                    <div className='review4'>
                        <span className='character-count'>Characters: {characters}/1000</span>
                        {review ?
                            <button
                                className='review-submit-button'
                                type='submit'
                                disabled={review ? false : true}
                                >Submit
                            </button>
                            : <div></div>
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ReviewField;
