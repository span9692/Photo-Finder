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
    const { photographerId } = useParams()
    // const x = parseInt(photographerId, 10)
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const photographerList = useSelector(state => state.photographer)
    const bookings = useSelector(state => Object.values(state.booking))
    const currentPhotographer = photographerList[photographerId]

    let flag = false;

    bookings.forEach(booking => {
        if (user.id === booking.userId && photographerId == booking.photographerId) {
            flag = true;
        }
    })

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
                <button class='profile-buttons-disabled' disabled='true'>Booked !!</button>
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
                <div class='left-border'></div>
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
            <div>

            </div>
        </div>
    );
}

export default PhotographerProfile;
