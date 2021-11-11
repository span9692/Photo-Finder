import {useState} from 'react'

function ReviewField() {
    const [review, setReview] = useState('')
    const [characters, setCharacters] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            // userId:
            // photographerId:
            review
        }

        // dispatchEvent(())
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
                        type='text'
                        onChange={(e) => { setReview(e.target.value); setCharacters(e.target.value.length) }}
                        value={review}
                    />
                    <div>
                        <span>Characters: {characters}/1000</span>
                        <button className='review-submit-button' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ReviewField;
