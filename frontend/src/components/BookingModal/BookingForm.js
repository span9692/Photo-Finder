import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBooking } from '../../store/booking'
import { useParams } from 'react-router-dom'

function BookingForm() {
    const [date, setDate] = useState('');
    const [hours, setHours] = useState('');
    const userId = useSelector(state=>state.session.user.id)
    const dispatch = useDispatch();
    const {photographerId} = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();

        const newBooking = {
            userId,
            photographerId,
            date,
            hours
        }

        await dispatch(addBooking(newBooking));
    }

    return (
        <div>
            <div>
                <div>
                    <span>Effective Date</span>
                </div>
                <div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <input
                                id="date"
                                type="date"
                                placeholder=" "
                                onChange={(e) => setDate(e.target.value)}
                                required="required">
                            </input>
                        </div>
                        <div>
                            <label htmlFor='hours'>Number of hours:</label>
                            <input
                                id='hours'
                                type='integer'
                                onChange={(e)=> setHours(e.target.value)}
                                value={hours}
                            />
                        </div>
                        <div>
                            <button>Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingForm;
