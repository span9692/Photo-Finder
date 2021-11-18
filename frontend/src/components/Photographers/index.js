import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getPhotographer } from '../../store/photographer'


function Photographers() {
    const dispatch = useDispatch();

    const photographer = useSelector(state => state.photographer)
    let profiles = Object.entries(photographer)

    useEffect(() => {
        dispatch(getPhotographer())
    }, [dispatch])


    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div className='booking-title'>Photographers</div>
            <div class='portraits'>
                {profiles.map(profile => (
                    <div class='individual-pix' key={profile[1]?.id}>
                        <Link class='profile-detail' to={`/photographers/${profile[1]?.id}`}>
                            <img class='photographer-portraits' src={profile[1]?.profilePic}></img>
                            <div class='info'>
                                <div className='info-width'>{profile[1]?.firstName} {profile[1]?.lastName}</div>
                                <div className='info-width'>{profile[1]?.city}, {profile[1]?.state}</div>
                                <div className='info-width'>{'$'}{profile[1]?.price}/hr</div>
                            </div>
                        </Link>
                    </div>
                ))}
                <div class='sean-icon'>
                    <a className='linkedinposition' href="https://github.com/span9692" target="_blank">
                        <img className='github' src="https://res.cloudinary.com/photofinder/image/upload/v1636674658/GitHub-Mark-120px-plus_txoi2x.png" alt="error"/>
                    </a>
                    <a className='linkedinposition' href="https://www.linkedin.com/in/sean-pan-395a4593/" target="_blank">
                        <img className='linkedin' src="https://res.cloudinary.com/photofinder/image/upload/v1636675007/linkedin-logo-png-2025_p0gjab.png" alt="error"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Photographers;
