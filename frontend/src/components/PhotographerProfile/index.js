import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import DeleteModal from '../DeletePhotographer';
import EditProfileModal from '../EditProfileModal';
import './profile.css'
import './photos.css'
import { getPhotographer } from '../../store/photographer'
import BookingModal from '../BookingModal';
import { getBooking } from '../../store/booking'
import ReviewField from '../ReviewField';
import { showReviews } from '../../store/review';
import DeleteReviewModal from '../DeleteReviewModal';
import { showPicture } from '../../store/photos';



function PhotographerProfile() {
    const { photographerId } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const photographerList = useSelector(state => state.photographer)
    const bookings = useSelector(state => Object.values(state.booking))
    const reviews = useSelector(state => Object.values(state.review))
    const currentPhotographer = photographerList[photographerId]
    const photos = useSelector(state => Object.values(state.photo))

    let photosArr = [];
    photos.forEach(photo => {
        if (photo.portfolioId === +photographerId) {//we will need ? here
            photosArr.push(photo)
        }
    })

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

    useEffect(() => {
        dispatch(getPhotographer())
        dispatch(showReviews())
        dispatch(getBooking())
        dispatch(showPicture())
    }, [dispatch])

    // let array = {...photographerList}
    // if (+photographerId > array.length) {
    //     history.push('/photographers')
    // }

    let options;
    let reviewSection;

    let spacing = (<div></div>);

    if (!user || user?.id === currentPhotographer?.userId) {
        if (photosArr.length === 0) {
            if (rev.length === 0) {
                spacing = (
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div> )
            } else {
                spacing = (
                    <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                )
            }
        }
    } else if (rev.length === 0) {
        spacing = (
            <div>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }

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
            <div class='edit-delete-button'>
                <BookingModal />
            </div>
        )
        reviewSection = (
            <ReviewField photographerId={photographerId} userId={user.id} />
        )
    } else if (flag) {
        options = (
            <div class='edit-delete-button'>
                <button class='profile-buttons-disabled' disabled={true}>Booked !!</button>
            </div>
        )
        reviewSection = (
            <ReviewField photographerId={photographerId} userId={user.id} />
        )
    }
    return (

        <div className='yolo'>
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
                    <div class='options edit-delete-button'>
                        {options}
                    </div>
                </div>
            </div>

            <div className='scrollbar'>
                <div className='side-container'></div>
                <div className='image-container6'>
                    {photosArr.map(photo => (
                        <img className='image6' key={photo.id} src={photo.url} />
                    ))}
                </div>
                <div className='side-container'></div>
            </div>

            <div></div>
            {reviewSection}
            <div></div>
            <div className='review'>
            <div className='rev-title'>Reviews</div>
                {rev.map(review => (
                    <div key={review.id} className='rev1 review-box'>
                        <div className='review-context'>
                            <span className='indentation'>-</span> <div>{review.review}</div>
                        </div>
                        <div className='r2'>
                            <div className='review-detail'>
                                posted by: {review.User.username}
                            </div>

                            {user?.id === review.userId ?
                                <div><DeleteReviewModal reviewId={review.id} /></div>
                                : <div></div>}
                        </div>
                    </div>
                ))}
            </div>
            {spacing}
            <div class='sean-icon'>
                <a className='linkedinposition' href="https://github.com/span9692" target="_blank">
                    <img className='github' src="https://res.cloudinary.com/photofinder/image/upload/v1636674658/GitHub-Mark-120px-plus_txoi2x.png" />
                </a>
                <a className='linkedinposition' href="https://www.linkedin.com/in/sean-pan-395a4593/" target="_blank">
                    <img className='linkedin' src="https://res.cloudinary.com/photofinder/image/upload/v1636675007/linkedin-logo-png-2025_p0gjab.png" />
                </a>
            </div>
        </div>
    );
}

export default PhotographerProfile;
