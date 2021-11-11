import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import DeleteModal from '../DeletePhotographer';
import EditProfileModal from '../EditProfileModal';
import './profile.css'
import { getPhotographer } from '../../store/photographer'
import BookingModal from '../BookingModal';
import { getBooking } from '../../store/booking'

function PhotographerProfile() {
    const [review, setReview] = useState('')
    const [characters, setCharacters] = useState(0)
    const { photographerId } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const photographerList = useSelector(state => state.photographer)
    const bookings = useSelector(state => Object.values(state.booking))
    const currentPhotographer = photographerList[photographerId]

    let flag = false;
    if (user) {
        bookings.forEach(booking => {
            if (user.id === booking.userId && photographerId == booking.photographerId) {
                flag = true;
            }
        })
    }
    useEffect(() => {
        dispatch(getPhotographer())
        dispatch(getBooking())
    }, [dispatch])

    let options;
    if (!user) {
        options = (
            <div></div>
        )
    } else if (user.id === currentPhotographer?.userId) {
        options = (
            <div class='edit-delete-button'>
                <div class='edit-delete-button'>
                    <EditProfileModal />
                </div>
                <div class='edit-delete-button'>
                    <DeleteModal />
                </div>
            </div>
        )
    } else if (!flag) {
        options = (
            <div>
                <BookingModal />
            </div>
        )
    } else if (flag) {
        options = (
            <div>
                <button class='profile-buttons-disabled' disabled={true}>Booked !!</button>
            </div>
        )
    }
    return (

        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class='container'>
                <div>
                    <img class='profile-pic' src={currentPhotographer?.profilePic}></img>
                </div>
                <div class='profile-info'>
                    <div>
                        Name: <br></br>{currentPhotographer?.firstName} {currentPhotographer?.lastName}
                    </div>
                    <br></br>
                    <div>
                        Location: <br></br>{currentPhotographer?.city}, {currentPhotographer?.state}
                    </div>
                    <br></br>
                    <div>
                        Rate: <br></br>{'$'}{currentPhotographer?.price}/hr
                    </div>
                    <br></br>
                    <div>
                        Biography: <br></br>{currentPhotographer?.biography}
                    </div>
                    <div class='options'>
                        {options}
                    </div>
                </div>
            </div>
            <div className='review1'>
                <form className='review-form'>
                    <label htmlFor='review'>Write a Review:</label>
                    <div className='review-container'>
                        <textarea
                            className='enter-review'
                            maxLength="1000"
                            id='review'
                            type='text'
                            onChange={(e) => {setReview(e.target.value); setCharacters(e.target.value.length)}}
                            value={review}
                        />
                        <div>
                            <span>Characters: {characters}/1000</span>
                            <button className='review-submit-button'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PhotographerProfile;
