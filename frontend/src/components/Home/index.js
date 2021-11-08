import { useEffect } from 'react'
// import { showPicture } from '../../store/photos'
import { useSelector, useDispatch } from 'react-redux'
import { getPhotographer } from '../../store/photographer'


function Home() {
    const dispatch = useDispatch();
    // const photos = useSelector(state => state.photo)
    const photographer = useSelector(state => state.photographer)

    // console.log('photographers:', photographer)

    let profiles = Object.entries(photographer)
    console.log(profiles)

    useEffect(() => {
        // dispatch(showPicture())
        dispatch(getPhotographer())
    }, [dispatch])
    // let photoUrl
    // if (photos[1]) {
    //     photoUrl = <img src={photos[1].url}></img>;

    // } else {
    //     photoUrl = null;

    // }

return (
    <div class='portraits'>
        {profiles.map(profile => (
        <div>
            <img class='photographer-portraits' src={profile[1].profilePic}></img>
        </div>
        ))}
    </div>
)
}

export default Home;
