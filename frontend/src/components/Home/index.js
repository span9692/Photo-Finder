import { useState, useEffect } from 'react'
import { showPicture } from '../../store/photos'
import { useSelector, useDispatch } from 'react-redux'
import * as photoActions from '../../store/photos'


function Home({cats}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showPicture())
    }, [])
    let photoUrl
    const photos = useSelector(state => state.photo)
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
