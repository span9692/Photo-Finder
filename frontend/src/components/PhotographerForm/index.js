import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addPhotographer } from '../../store/photographer'

const PhotographerForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [biography, setBiography] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [price, setPrice] = useState(0);

    const reset = () => {
        setFirstName("");
        setLastName("");
        setProfilePic('');
        setBiography('');
        setCity('');
        setState('');
        setPrice(0)
    }


    const onSubmit = async (e) => {
        e.preventDefault();

        const newPhotographer = {
            firstName,
            lastName,
            profilePic,
            biography,
            city,
            state,
            price
        };

        await dispatch(addPhotographer(newPhotographer));
        history.push('/home')

        reset();
    };

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <form onSubmit={onSubmit}>
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
        </div>
    )
}

export default PhotographerForm
