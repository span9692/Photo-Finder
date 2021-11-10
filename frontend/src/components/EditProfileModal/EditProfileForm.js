import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { updatePhotographer } from '../../store/photographer'

function EditProfileForm() {
    const { photographerId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const photographer = useSelector(state => state.photographer[photographerId])


    const [firstName, setFirstName] = useState(photographer.firstName);
    const [lastName, setLastName] = useState(photographer.lastName);
    const [profilePic, setProfilePic] = useState(photographer.profilePic);
    const [biography, setBiography] = useState(photographer.biography);
    const [city, setCity] = useState(photographer.city);
    const [state, setState] = useState(photographer.state);
    const [price, setPrice] = useState(photographer.price);
    const [errors, setErrors] = useState([]);

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

        await dispatch(updatePhotographer(update))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        )
        history.push(`/photographers/${photographer.id}`)
    }

    return (
            <>
                <form class='modal-form' onSubmit={handleSubmit}>
                    <ul class='form-error'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                    <div class='formfield'>
                        <label htmlFor='firstName'>First Name:</label>
                        <input
                            id='firstName'
                            type='text'
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                        />
                    </div>
                    <div class='formfield'>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input
                            id='lastName'
                            type='text'
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                        />
                    </div>
                    <div class='formfield'>
                        <label htmlFor='profilePic'>Profile Picture URL:</label>
                        <input
                            id='profilePic'
                            type='text'
                            onChange={(e) => setProfilePic(e.target.value)}
                            value={profilePic}
                        />
                    </div>
                    <div class='formfield'>
                        <label htmlFor='biography'>Biography</label>
                        <textarea
                            id='biography'
                            type='text'
                            onChange={(e) => setBiography(e.target.value)}
                            value={biography}></textarea>
                    </div>
                    <div class='formfield'>
                        <label htmlFor='city'>City:</label>
                        <input
                            id='city'
                            type='text'
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                        />
                    </div>
                    <div class='formfield'>
                        <label htmlFor='state'>State:</label>
                        <input
                            id='state'
                            type='text'
                            onChange={(e) => setState(e.target.value)}
                            value={state}
                        />
                    </div>
                    <div class='formfield'>
                        <label htmlFor='price'>Price:</label>
                        <input
                            id='price'
                            type='integer'
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                    </div>
                    <div class='formfield formfield-button'>
                        <button class='areyou profile-buttons'type='submit'>Submit</button>
                    </div>
                </form>
            </>
        )
    }

    export default EditProfileForm
