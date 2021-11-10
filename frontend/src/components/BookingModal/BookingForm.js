import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBooking } from '../../store/booking'
import { useParams } from 'react-router-dom'

function BookingForm() {
    const [date, setDate] = useState('');
    const [total, setTotal] = useState(0)
    const [hours, setHours] = useState(1);
    const userId = useSelector(state=>state.session.user.id)
    const dispatch = useDispatch();
    const {photographerId} = useParams();
    const photographer = useSelector(state=>state.photographer)
    const rate = photographer[photographerId].price

    useEffect(() => {
        setTotal(hours*rate)
    }, [hours])

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
        <div className='box1'>
            <div className='box2'>
                <br></br>
                <div>
                    <span className='formfield1'>Select a Date</span>
                </div>
                <div>
                    <form className='modal-form' onSubmit={onSubmit}>
                        <div className='formfield1'>
                            <input
                                id="date"
                                type="date"
                                placeholder=" "
                                onChange={(e) => setDate(e.target.value)}
                                required="required">
                            </input>
                        </div>
                        <br></br>
                        <div className='formfield1'>
                            <label htmlFor='hours'>Number of hours: </label>
                            <input
                                className='textbox-width'
                                id='hours'
                                type='integer'
                                onChange={(e)=> setHours(e.target.value)}
                                value={hours}
                            />
                        </div>
                        <div className='formfield1'>
                            Total: {'$'}{total}
                        </div>
                        <div>
                            <button className='profile-buttons1'>Confirm</button>
                        </div>
                        <br></br>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingForm;
