import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import DeleteModal from '../DeletePhotographer';
import EditProfileModal from '../EditProfileModal';
import './profile.css'
import { getPhotographer } from '../../store/photographer'
import BookingModal from '../BookingModal';
import { getBooking } from '../../store/booking'
import ReviewField from '../ReviewField';
import { showReviews } from '../../store/review';

function PhotographerProfile() {
    const { photographerId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const photographerList = useSelector(state => state.photographer)
    const bookings = useSelector(state => Object.values(state.booking))
    const reviews = useSelector(state=>Object.values(state.review))
    const currentPhotographer = photographerList[photographerId]



    let flag = false;
    if (user) {
        bookings.forEach(booking => {
            if (user.id === booking.userId && +photographerId === booking.photographerId) {
                flag = true;
            }
        })
    }

    let rev = [];
    reviews.forEach(review => {
        if (review.photographerId === +photographerId) {
            rev.push(review)
        }
    })

    console.log(rev)

    useEffect(() => {
        dispatch(getPhotographer())
        dispatch(showReviews())
        dispatch(getBooking())
    }, [dispatch])

    let array = {...photographerList}
    if (+photographerId > array.length) {
        history.push('/photographers')
    }

    let options;
    let reviewSection;
    if (!user) {
        options = (
            <div></div>
        )
        reviewSection = (
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
        reviewSection = (
            <div></div>
        )
    } else if (!flag) {
        options = (
            <div>
                <BookingModal />
            </div>
        )
        reviewSection = (
            <ReviewField photographerId={photographerId} userId={user.id}/>
        )
    } else if (flag) {
        options = (
            <div>
                <button class='profile-buttons-disabled' disabled={true}>Booked !!</button>
            </div>
        )
        reviewSection = (
            <ReviewField photographerId={photographerId} userId={user.id}/>
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
            {reviewSection}
            <div></div>
            <div className='review'>
                {rev.map(review => (
                    <div key={review.id} className='rev1 review-box'>
                        <div className='review-context'>
                            - {review.review}
                        </div>
                        <div className='r2'>
                            <div className='review-detail'>
                                posted by: {review.User.username}
                            </div>
                            <div>
                                <button>edit</button>
                                <button>delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotographerProfile;
