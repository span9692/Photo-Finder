import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getBooking } from '../../store/booking'
import { getPhotographer } from '../../store/photographer'
import DeleteBook from '../DeleteBooking'
import './bookings.css'

function Bookings () {
    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const checkUser = useSelector(state=>state.session)
    let user;
    // const user = useSelector(state=>state.session.user.id)
    const bookings = useSelector(state=>Object.values(state.booking))
    const photographer = useSelector(state=> state.photographer)

    if(checkUser.user) {
        if(checkUser.user.id) {
            user = checkUser.user.id;
        }
    } else {
        history.push('/photographers')
    }

    let bookedBy = [];
    let booked = [];

    bookings.forEach(book => {
        if (book.userId === user) {
            bookedBy.push([book, book.id])
        } else if (book.photographerId === user) {
           booked.push([book, book.id])
        }
    })

    useEffect(() => {
        dispatch(getBooking())
        dispatch(getPhotographer()).then(() => setLoad(true));
    }, [dispatch])

    return load && (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div className='booking-title'>Bookings</div>
            <div className='whole yolo'>
                <div className='side'></div>
                <div className='half'>
                    <table>
                        <tr>
                            <th>You Booked</th>
                            <th>Date</th>
                            <th>Hours</th>
                            <th></th>
                        </tr>
                        {bookedBy.map(book => (
                        <tr key={book[1]}>
                            <td>{photographer[book[0].photographerId].firstName} {photographer[book[0].photographerId].lastName}</td>
                            <td>{book[0].date}</td>
                            <td className='text'>{book[0].hours}</td>
                            <td><DeleteBook id={book[1]}/></td>
                        </tr>
                        ))}
                    </table>
                </div>
                <div className='half'>
                <table>
                        <tr>
                            <th>Booked By</th>
                            <th>Date</th>
                            <th>Hours</th>
                            <th></th>
                        </tr>
                        {booked.map(book => (
                        <tr key={book[1]}>
                            <td>{photographer[book[0].userId].firstName} {photographer[book[0].userId].lastName}</td>
                            <td>{book[0].date}</td>
                            <td className='text'>{book[0].hours}</td>
                            <td><DeleteBook id={book[1]}/></td>
                        </tr>
                        ))}
                    </table>
                </div>
                <div className='side'></div>
            </div>
            <div class='sean-icon'>
                <a className='linkedinposition' href="https://github.com/span9692" target="_blank">
                    <img className='github' src="https://res.cloudinary.com/photofinder/image/upload/v1636674658/GitHub-Mark-120px-plus_txoi2x.png" />
                </a>
                <a className='linkedinposition' href="https://www.linkedin.com/in/sean-pan-395a4593/" target="_blank">
                    <img className='linkedin' src="https://res.cloudinary.com/photofinder/image/upload/v1636675007/linkedin-logo-png-2025_p0gjab.png" />
                </a>
            </div>
        </div>
    )
}

export default Bookings
