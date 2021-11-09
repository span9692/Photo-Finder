import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updatePhotographer } from '../../store/photographer'

function EditProfileForm() {
    const { photographerId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const photographer = useSelector(state => state.photographer[photographerId])
    // const photographer = photographerList[photographerId]

    const [firstName, setFirstName] = useState(photographer.firstName);
    const [lastName, setLastName] = useState(photographer.lastName);
    const [profilePic, setProfilePic] = useState(photographer.profilePic);
    const [biography, setBiography] = useState(photographer.biography);
    const [city, setCity] = useState(photographer.city);
    const [state, setState] = useState(photographer.state);
    const [price, setPrice] = useState(photographer.price);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const update = {
            ...photographer,
            firstName,
            lastName,
            profilePic,
            biography,
            city,
            state,
            userId: sessionUser.id,
            price
        }
        console.log('YOOOO WE UPDATINGG', update)
        await dispatch(updatePhotographer(update));
    }

    return (
        <>
            <form class='modal-form' onSubmit={handleSubmit}>
                {/* <ul class='no-bullet'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul> */}
                <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input
                        id='firstName'
                        type='text'
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input
                        id='lastName'
                        type='text'
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>
                <div>
                    <label htmlFor='profilePic'>Profile Picture URL:</label>
                    <input
                        id='profilePic'
                        type='text'
                        onChange={(e) => setProfilePic(e.target.value)}
                        value={profilePic}
                    />
                </div>
                <div>
                    <label htmlFor='biography'>Biography:</label>
                    <input
                        id='biography'
                        type='text'
                        onChange={(e) => setBiography(e.target.value)}
                        value={biography}
                    />
                </div>
                {/* <div>
                        <label htmlFor='biography'>Biography</label>
                        <textarea id='biography'></textarea>
                    </div> */}
                <div>
                    <label htmlFor='city'>City:</label>
                    <input
                        id='city'
                        type='text'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                </div>
                <div>
                    <label htmlFor='state'>State:</label>
                    <input
                        id='state'
                        type='text'
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                    />
                </div>
                <div>
                    <label htmlFor='price'>Price:</label>
                    <input
                        id='price'
                        type='integer'
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default EditProfileForm
