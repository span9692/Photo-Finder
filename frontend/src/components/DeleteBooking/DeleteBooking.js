import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteBooking } from '../../store/booking';


function DeleteBooking({deleteId}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteButton = async () => {

        dispatch(deleteBooking(deleteId))
        await history.push('/bookings')
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

export default DeleteBooking;
