import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import EditProfileModal from '../EditProfileModal';
import './profile.css'

function PhotographerProfile() {
    const { photographerId } = useParams()
    const user = useSelector(state => state.session.user)
    const photographerList = useSelector(state => state.photographer)
    const currentPhotographer = photographerList[photographerId]

    let options;
    if (user.id === currentPhotographer.userId) {
        options = (
            <div>
                <EditProfileModal />
                <button>Delete</button>
            </div>
        )
    } else {
        options = (
            <div>
                <button>Book</button><button>Leave a Review</button>
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
                    <img class='profile-pic' src={currentPhotographer.profilePic}></img>
                </div>
                <div class='profile-info'>
                    <div>
                        Name: <br></br>{currentPhotographer.firstName} {currentPhotographer.lastName}
                    </div>
                    <br></br>
                    <div>
                        Location: <br></br>{currentPhotographer.city}, {currentPhotographer.state}
                    </div>
                    <br></br>
                    <div>
                        Rate: <br></br>{'$'}{currentPhotographer.price}/hr
                    </div>
                    <br></br>
                    <div>
                        Biography: <br></br>{currentPhotographer.biography}
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
