import { useDispatch } from 'react-redux'
import { removePhoto } from '../../store/photos';


function DeleteForm({photoId}) {
    const dispatch = useDispatch();
    const deleteButton = async () => {

        dispatch(removePhoto(photoId))
    }

    return (
        <div class='modal-form'>
            <div class='areyousure'>Are you sure?</div>
            <div>
                <button class='areyou profile-buttons' onClick={deleteButton}>Yes</button>
                {/* <button class='areyou profile-buttons'>Yes</button> */}
            </div>
        </div>
    )
}

export default DeleteForm;
