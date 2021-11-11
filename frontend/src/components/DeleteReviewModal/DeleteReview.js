import { useDispatch } from 'react-redux'
import { deleteReview } from '../../store/review';


function DeleteReview({ reviewId }) {
    const dispatch = useDispatch();

    const deleteButton = async(e) => {
        e.preventDefault();

        dispatch(deleteReview(reviewId))
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

export default DeleteReview;

// import { useDispatch } from 'react-redux'
// import { deleteBooking } from '../../store/booking';


// function DeleteBooking({deleteId, setShowModal}) {
//     const dispatch = useDispatch();
//     const deleteButton = async () => {

//         dispatch(deleteBooking(deleteId))
//         setShowModal(false)
//     }

//     return (
        // <div class='modal-form'>
        //     <div class='areyousure'>Are you sure?</div>
        //     <div>
        //         <button class='areyou profile-buttons' onClick={deleteButton}>Yes</button>
        //     </div>
        // </div>
//     )
// }

// export default DeleteBooking;
