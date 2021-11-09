import { useDispatch, useSelector } from 'react-redux'
import { deletePhotographer } from '../../store/photographer'
import {useParams, useHistory} from 'react-router-dom'


function DeletePhotographer() {
    const {photographerId}= useParams()
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteButton = async() => {
        dispatch(deletePhotographer(photographerId))
        await history.push('/photographers')
    }

    return (
        <div>
            Are you sure?
            <button onClick={deleteButton}>Yes</button>
        </div>
    )
}

export default DeletePhotographer;
