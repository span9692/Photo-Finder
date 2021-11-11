import { useDispatch } from 'react-redux'
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
        <div class='modal-form'>
            <div class='areyousure'>Are you sure?</div>

            <div>
                <button class='areyou profile-buttons' onClick={deleteButton}>Yes</button>
            </div>
        </div>
    )
}

export default DeletePhotographer;
