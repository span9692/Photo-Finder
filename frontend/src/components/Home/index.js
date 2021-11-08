import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getPhotographer } from '../../store/photographer'


function Home() {
    const dispatch = useDispatch();

    const photographer = useSelector(state => state.photographer)
    let profiles = Object.entries(photographer)

    useEffect(() => {
         dispatch(getPhotographer())
    }, [dispatch])


return (
    <div class='portraits'>
        {profiles.map(profile => (
        <div>
            <img class='photographer-portraits' src={profile[1].profilePic}></img>
            <div class='info'>
                <div>
                    <div>{profile[1].firstName} {profile[1].lastName}</div>
                    <div>{profile[1].city}, {profile[1].state}</div>
                </div>
                <div>
                    {'$'}{profile[1].price}/hr
                </div>
            </div>
        </div>
        ))}
    </div>
)
}

export default Home;
