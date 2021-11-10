import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteBooking } from '../../store/booking';


function DeleteBooking({deleteId}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteButton = async () => {

        await dispatch(deleteBooking(deleteId))

        history.push('/bookings')
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
