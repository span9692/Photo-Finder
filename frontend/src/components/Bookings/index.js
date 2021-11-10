import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getBooking } from '../../store/booking'

function Bookings () {
    const dispatch = useDispatch();
    const user = useSelector(state=>state.session.user.id) // currently 1
    const booking = useSelector(state=>Object.values(state.booking))
    console.log(booking) //array of objects (of bookings)

    useEffect(() => {
        dispatch(getBooking())
    }, [dispatch])

    return (
        <div>

        </div>
    )
}

export default Bookings
