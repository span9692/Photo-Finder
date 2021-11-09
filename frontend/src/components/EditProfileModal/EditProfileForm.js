import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function EditProfileForm() {
    const { photographerId } = useParams();
    const photographerList = useSelector(state => state.photographer)
    const photographer = photographerList[photographerId]

    const [firstName, setFirstName] = useState(photographer.firstName);
    const [lastName, setLastName] = useState(photographer.lastName);
    const [profilePic, setProfilePic] = useState(photographer.profilePic);
    const [biography, setBiography] = useState(photographer.biography);
    const [city, setCity] = useState(photographer.city);
    const [state, setState] = useState(photographer.state);
    const [price, setPrice] = useState(photographer.price);

    const handleSubmit = (e) => {
        e.preventDefault();
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
