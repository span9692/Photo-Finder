import { useEffect } from 'react'
import { showPicture } from '../../store/photos'
import { useSelector, useDispatch } from 'react-redux'
import { getPhotographer } from '../../store/photographer'


function Home() {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photo)
    const photographer = useSelector(state => state.photographer)

    useEffect(() => {
        dispatch(showPicture())
        dispatch(getPhotographer())
    }, [dispatch])
    let photoUrl
    if (photos[1]) {
        photoUrl = <img src={photos[1].url}></img>;

    } else {
        photoUrl = null;

    }

return (
    <div>
        {photoUrl}
    </div>
)
}

export default Home;
